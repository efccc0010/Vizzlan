import { PagoPedidoComponent } from './CUS07/PagoPedido/PagoPedido.component';
// import { ProgressStepComponent } from './CUS07/Progress-Step/progress/progress-step/progress-step.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { FormsModule } from '@angular/forms';
import { PedidoEspecialComponent } from './CUS15/pedido-especial/pedido-especial.component';
import { CarruselComponent } from './elements/carrusel/carrusel.component';
import { ListaProductosComponent } from './CUS04/lista-productos/lista-productos.component';
import { BreadcrumbComponent } from './elements/breadcrumb/breadcrumb.component';
import { DetalleProductoComponent } from './Vistas/detalle-producto/detalle-producto.component';
import { ListaDecoracionesPrincipalesComponent } from './CUS15/lista-decoraciones-principales/lista-decoraciones-principales.component';
import { FormEnvioComponent } from './CUS06/FormEnvio/FormEnvio.component';
import { RegistroEnvioComponent } from './CUS06/RegistroEnvio/RegistroEnvio.component';
// import { FormEnvioComponent } from './CUS06/FormEnvio/FormEnvio.component';
// import { ProgressComponent } from './CUS07/Progress-Step/progress/progress.component';
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
    FormEnvioComponent,
    RegistroEnvioComponent,
    PagoPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
