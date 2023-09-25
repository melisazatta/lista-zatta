import { Component } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent {

  alumnos = [
    {
      nombre: 'Juan',
      apellido: 'Perez',
      nota: 5
    },
    {
      nombre: 'Maria',
      apellido: 'Gonzalez',
      nota: 8
    },
    {
      nombre: 'Fermin',
      apellido: 'Lopez',
      nota: 7
    },
    {
      nombre: 'Carlos',
      apellido: 'Quintana',
      nota: 4
    },{
      nombre: 'Florencia',
      apellido: 'Paez',
      nota: 7
    }
  ];

  aprobados(alumno: any): string {
  return alumno.nota > 6 ? 'green' : 'red';
  }

}
