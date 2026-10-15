import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { listaCliente } from '../cine'; 

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-ver-registros',
  templateUrl: './ver-registros.html',
})
export class VerRegistros implements OnInit {
  registros: listaCliente[] = [];
  editandoIndex: number | null = null;
  clienteEditado: listaCliente = { nombre: '', compradores: 1, tarjeta: 'no', boletos: 1, totalPagar: 0 };

  ngOnInit(): void {
    this.cargarRegistros();
  }

  cargarRegistros(): void {
    const datos = localStorage.getItem('compras_cinepolis');
    if (datos) {
      this.registros = JSON.parse(datos);
    }
  }

  eliminar(index: number): void {
    this.registros.splice(index, 1);
    localStorage.setItem('compras_cinepolis', JSON.stringify(this.registros));
  }

  iniciarEdicion(index: number): void {
    this.editandoIndex = index;
    this.clienteEditado = { ...this.registros[index] };
  }

  guardarEdicion(): void {
    if (this.editandoIndex !== null) {
      this.registros[this.editandoIndex] = this.clienteEditado;
      localStorage.setItem('compras_cinepolis', JSON.stringify(this.registros));
      this.editandoIndex = null;
    }
  }

  cancelar(): void {
    this.editandoIndex = null;
  }
}