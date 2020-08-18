import { Component } from '@angular/core';

@Component({
  selector: 'app-viaje',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'whishlist';
  nombre:String;
  constructor(){
    this.nombre="Nombre por defecto";

  }
}
