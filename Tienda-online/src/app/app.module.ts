import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InicioComponent } from './Vistas/inicio/inicio.component';
import { ProductosComponent } from './Vistas/productos/productos.component';
import { CardComponent } from './elements/card/card.component';
import { SliderCardComponent } from './elements/slider-card/slider-card.component';
import { NavBarComponent } from './elements/nav-bar/nav-bar.component';
import { LoginComponent } from './CUS01/login/login.component';
import { IngresarComponent } from './CUS01/ingresar/ingresar.component';
import { CarritoCompraComponent } from './CUS04/carrito-compra/carrito-compra.component';
import { PedidoEspecialComponent } from './CUS15/pedido-especial/pedido-especial.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    CardComponent,
    SliderCardComponent,
    NavBarComponent,
    LoginComponent,
    IngresarComponent,
    CarritoCompraComponent,
    PedidoEspecialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
