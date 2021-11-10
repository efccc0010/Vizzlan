import { RouterModule } from '@angular/router';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {NgbModule}

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
import { FormsModule } from '@angular/forms';
import { PedidoEspecialComponent } from './CUS15/pedido-especial/pedido-especial.component';
import { CarruselComponent } from './elements/carrusel/carrusel.component';
import { ListaProductosComponent } from './CUS04/lista-productos/lista-productos.component';
import { BreadcrumbComponent } from './elements/breadcrumb/breadcrumb.component';
import { DetalleProductoComponent } from './Vistas/detalle-producto/detalle-producto.component';
import { ListaDecoracionesPrincipalesComponent } from './CUS15/lista-decoraciones-principales/lista-decoraciones-principales.component';
import { CUS07Component } from './CUS07/CUS07.component';
import { CUS06Component } from './CUS06/CUS06.component';
import { ModulosExternosModule } from './modulos.externos';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/compiler';

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
    PedidoEspecialComponent,
    CarruselComponent,
    ListaProductosComponent,
    BreadcrumbComponent,
    DetalleProductoComponent,
    ListaDecoracionesPrincipalesComponent,
    CUS07Component,
    CUS06Component,

   ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    ModulosExternosModule,
    NgModule,
    // <--- Add this line
    // RouterModule.forChild(mainRoutes),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
