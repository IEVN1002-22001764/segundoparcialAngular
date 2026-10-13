import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common"; //gnFor, onInit
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: "app-cinepolis",
  templateUrl: "./cinepolis.html",
})

export class Cinepolis implements OnInit {
  formulario!: FormGroup;
  total_a_pagar: number = 0;
  mensajeDeError: string = "";

  ngOnInit(): void {
    this.formulario = new FormGroup({  // Inicializamos el formulario en el controlador
      nombre: new FormControl(""),
      compradores: new FormControl(1),
      tarjeta: new FormControl("no"),
      boletos: new FormControl(1),
    });
  }

  procesar(): void {
    this.mensajeDeError = ""; 
    const compradores = Number(this.formulario.value.compradores); //aqui mandamos a llamar los valores ingresados en el formulario
    const boletos = Number(this.formulario.value.boletos);
    const tieneTarjeta = this.formulario.value.tarjeta;

    const limitePermitido = compradores * 7; // Limite es maximo 7 boletos por comprador
    if (boletos > limitePermitido) {
      this.mensajeDeError = `No se pueden comprar más de 7 boletos por persona (Máximo permitido: ${limitePermitido}).`;
      this.total_a_pagar = 0;
      return;
    }

    // Precio por boleto individual $12,000
    let subtotal = boletos * 12000;
    let descuento = 0;

    // Calculamos el descuento por cantidad de boletos
    if (boletos > 5) {
      descuento = 0.15; 
    } else if (boletos >= 3) {
      descuento = 0.1; 
    } else {
      descuento = 0; // Sin descuento
    }

    let totalConDescuento = subtotal - subtotal * descuento;

    if (tieneTarjeta === "si") {
      totalConDescuento = totalConDescuento - totalConDescuento * 0.1;
    }
    this.total_a_pagar = totalConDescuento;
  }

  salir(): void {

    this.formulario.reset({
      compradores: 1,
      tarjeta: "no",
      boletos: 1,
    });

    this.total_a_pagar = 0;
    this.mensajeDeError = "";
  }

  //Vamos a crear el nuevo objeto

}
