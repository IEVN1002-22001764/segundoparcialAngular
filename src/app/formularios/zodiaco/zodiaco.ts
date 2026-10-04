import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './zodiaco.html'
})
export class Zodiaco {

  // Datos personales
  nombre: string = '';
  apaterno: string = '';
  amaterno: string = '';
  dia: number = 0;
  mes: number = 0;
  anio: number = 0;
  sexo: string = '';

  // mostrar resultados
  nombreCompleto: string = '';
  edad: number = 0;
  signo: string = '';
  imagenSigno: string = '';
  mostrarResultado: boolean = false;

  calcular(): void {
    this.nombreCompleto = this.nombre + ' ' + this.apaterno + ' ' + this.amaterno;

    const anioActual = new Date().getFullYear();
    this.edad = anioActual - this.anio;

    const residuo = this.anio % 12;

    switch (residuo) {
      case 0:
        this.signo = 'Mono';
        this.imagenSigno = '/assets/mono.png';
        break;

      case 1:
        this.signo = 'Gallo';
        this.imagenSigno = '/assets/gallo.png';
        break;

      case 2:
        this.signo = 'Perro';
        this.imagenSigno = '/assets/perro.png';
        break;

      case 3:
        this.signo = 'Cerdo';
        this.imagenSigno = '/assets/cerdo.png';
        break;

      case 4:
        this.signo = 'Rata';
        this.imagenSigno = '/assets/rata.png';
        break;

      case 5:
        this.signo = 'Buey';
        this.imagenSigno = '/assets/buey.png';
        break;

      case 6:
        this.signo = 'Tigre';
        this.imagenSigno = '/assets/tigre.png';
        break;

      case 7:
        this.signo = 'Conejo';
        this.imagenSigno = '/assets/conejo.png';
        break;

      case 8:
        this.signo = 'Dragón';
        this.imagenSigno = '/assets/dragon.png';
        break;

      case 9:
        this.signo = 'Serpiente';
        this.imagenSigno = '/assets/serpiente.png';
        break;

      case 10:
        this.signo = 'Caballo';
        this.imagenSigno = '/assets/caballo.png';
        break;

      case 11:
        this.signo = 'Cabra';
        this.imagenSigno = '/assets/cabra.png';
        break;
    }

    this.mostrarResultado = true;
  }

}