import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Vistas/inicio/inicio.component';
import { ProductosComponent } from './Vistas/productos/productos.component';
import { CardComponent } from './elements/card/card.component';
import { SliderCardComponent } from './elements/slider-card/slider-card.component';
import { NavBarComponent } from './elements/nav-bar/nav-bar.component';
import { AngularMaterialBootStrapModule } from './module.material';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    CardComponent,
    SliderCardComponent,
    NavBarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialBootStrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
