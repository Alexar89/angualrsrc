import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViajeComponent } from './viaje/viaje.component';
import { ListadestinosComponent } from './listadestinos/listadestinos.component';

@NgModule({
  declarations: [
    AppComponent,
    ViajeComponent,
    ListadestinosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
