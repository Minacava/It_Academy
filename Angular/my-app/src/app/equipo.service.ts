import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  equipo:any[] = [
    {
      nombre:'Ignacio',
      especialidad: 'HTML',
      descripcion: 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      nombre:'Marina',
      especialidad: 'CSS',
      descripcion: 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },

  ]
  constructor() { 
    console.log('funcionando servicio')
   }

   obtenerEquipo(){
     return this.equipo;
   }
   obtenerUno(i) {
     return this.equipo[i];
   }
}
