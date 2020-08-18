import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listadestinos',
  templateUrl: './listadestinos.component.html',
  styleUrls: ['./listadestinos.component.css']
})
export class ListadestinosComponent implements OnInit {
  destinos:String;
  constructor() {
    this.destinos=['Lima','Bogotá', 'Buenos Aires'];
  }

  ngOnInit(): void {
  }

}
