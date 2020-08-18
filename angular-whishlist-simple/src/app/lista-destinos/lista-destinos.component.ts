import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';
//C:\RepoGit\angualrsrc\angular-whishlist-simple\src\app\models\destino-viaje.model.ts

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinos:DestinoViaje[];
  constructor() {
    this.destinos = [];
   }

   guardar(nombre:string,url:string):boolean{
     this.destinos.push(new DestinoViaje(nombre,url));
     console.log(this.destinos);
     //console.log(new DestinoViaje(nombre,url));
     return false;
   }

  ngOnInit(): void {
  }

}
