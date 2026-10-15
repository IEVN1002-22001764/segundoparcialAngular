import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 
import { listaCliente } from './cine';

@Component({
  selector: 'app-cinepolis',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink], // 2. Agrégalo aquí
  templateUrl: './cinepolis.html',
})
export class Cinepolis implements OnInit {
  formulario!: FormGroup;
  total_a_pagar: number = 0;
  mensajeDeError: string = '';
  
  mostrarTabla: boolean = false;
  registros: listaCliente[] = [];

  visualizarDatos: listaCliente = {
    nombre: '',
    compradores: 1,
    tarjeta: 'no',
    boletos: 1,
  };

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      compradores: new FormControl(1),
      tarjeta: new FormControl('no'),
      boletos: new FormControl(1),
    });
    this.cargarLocalStorage();
  }

  cargarLocalStorage(): void {
    const datosGuardados = localStorage.getItem('compras_cinepolis');
    if (datosGuardados) {
      this.registros = JSON.parse(datosGuardados);
    }
  }

  guardarLocalStorage(): void {
    localStorage.setItem('compras_cinepolis', JSON.stringify(this.registros));
  }

  procesar(): void {
    this.mensajeDeError = ''; 
    const nombre = String(this.formulario.value.nombre);
    const compradores = Number(this.formulario.value.compradores);
    const boletos = Number(this.formulario.value.boletos);
    const tieneTarjeta = String(this.formulario.value.tarjeta);

    const limitePermitido = compradores * 7;
    if (boletos > limitePermitido) {
      this.mensajeDeError = `No se pueden comprar más de 7 boletos por persona (Máximo permitido: ${limitePermitido}).`;
      this.total_a_pagar = 0;
      return;
    }

    let subtotal = boletos * 12000;
    let descuento = 0;

    if (boletos > 5) {
      descuento = 0.15; 
    } else if (boletos >= 3) {
      descuento = 0.1; 
    } else {
      descuento = 0;
    }

    let totalConDescuento = subtotal - subtotal * descuento;

    if (tieneTarjeta === "si") {
      totalConDescuento = totalConDescuento - totalConDescuento * 0.1;
    }
    this.total_a_pagar = totalConDescuento;

    this.visualizarDatos = {
      nombre: nombre,
      compradores: compradores,
      tarjeta: tieneTarjeta,
      boletos: boletos,
      totalPagar: this.total_a_pagar
    };

    this.registros.push(this.visualizarDatos);
    this.guardarLocalStorage();
  }

  verRegistros(): void {
    this.mostrarTabla = !this.mostrarTabla;
    this.cargarLocalStorage();
  }

  salir(): void {
    this.formulario.reset({
      nombre: '',
      compradores: 1,
      tarjeta: "no",
      boletos: 1,
    });

    this.total_a_pagar = 0;
    this.mensajeDeError = "";
  }
}