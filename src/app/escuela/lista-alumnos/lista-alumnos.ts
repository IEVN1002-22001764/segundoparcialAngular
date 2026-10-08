import { Component, OnInit } from '@angular/core'; 
import { IAlumno } from '../alumnos';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.html',
})
export class ListaAlumnos implements OnInit{

  formulario!:FormGroup //instancia

  alumnos:IAlumno[]=[]
  nuevoAlumno: IAlumno={
    matricula: 'xx',
    nombre: 'xx',
    correo: 'xx',
    materia: 'xx'
  }

  ngOnInit(): void { //ngOnInit() es un constructor
    this.cargarAlumno()
    this.formulario= new FormGroup({
    matricula: new FormControl(''),
    nombre: new FormControl(''),
    correo: new FormControl(''),
    materia: new FormControl(''),
    })
  }

  muestraAlumnos():void{
    this.nuevoAlumno.matricula=this.formulario.value.matricula
    this.nuevoAlumno.matricula=this.formulario.value.matricula
    this.nuevoAlumno.matricula=this.formulario.value.matricula
    this.nuevoAlumno.matricula=this.formulario.value.matricula
  }

  cargarAlumno():void{
    
  }
}
