import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../service/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  items:any;
  editarItem:any ={

  }

// traer los items de la base de datos
  constructor(private conexion:ConexionService) {
   this.conexion.listaItem().subscribe (items=>{
      this.items = items;
      console.log(this.items);
    })
   }

  ngOnInit() {
  }
  eliminar(item){
    this.conexion.eliminarItem(item);
  }
  editar(item){
    this.editarItem =item ;
  }

  agregarItemEditado(){
    this.conexion.EditarItem(this.editarItem);
  }
}
