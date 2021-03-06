import { PagarPedidoEstandarComponent } from './CUS07/PagarPedidoEstandar/PagarPedidoEstandar.component';
import { FormPagoComponent } from './CUS07/formPago/formPago.component';
import { RegistroEnvioComponent } from './CUS06/RegistroEnvio/RegistroEnvio.component';
import { FormEnvioComponent } from './CUS06/FormEnvio/FormEnvio.component';
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
import { CalculoCostoComponent } from './CUS11/calculo-costo/calculo-costo.component';
import { VisualizarDecoracionesComponent } from './CUS15/visualizar-decoraciones/visualizar-decoraciones.component';
import { PedidoProduccionComponent } from './CUS17/pedido-produccion/pedido-produccion.component';
import { FooterComponent } from './elements/footer/footer.component';
import { SubirImagenComponent } from './CUS18/subir-imagen/subir-imagen.component';
import { ModificarPedidoComponent } from './CUS12/modificar-pedido/modificar-pedido.component';
import { VisualizarEstadoComponent } from './CUS13/visualizar-estado/visualizar-estado.component';
import { DisenoPersonalizadoComponent } from './CUS18/diseno-personalizado/diseno-personalizado.component';
import { FormDisenoComponent } from './CUS18/form-diseno/form-diseno.component';
import { PedidoProduccionPlantillaComponent } from './CUS17/pedido-produccion-plantilla/pedido-produccion-plantilla.component';
import { VisualizarEstadoProduccionComponent } from './CUS13/visualizar-estado-produccion/visualizar-estado-produccion.component';
import { VisualizarEstadoEspecialComponent } from './CUS13/visualizar-estado-especial/visualizar-estado-especial.component';
import {  HttpClientModule } from '@angular/common/http';



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
    CalculoCostoComponent,
    FormPagoComponent,
    PagarPedidoEstandarComponent,
    VisualizarDecoracionesComponent,
    PedidoProduccionComponent,
    FooterComponent,
    SubirImagenComponent,
    ModificarPedidoComponent,
    VisualizarEstadoComponent,
    DisenoPersonalizadoComponent,
    FormDisenoComponent,
    PedidoProduccionPlantillaComponent,
    VisualizarEstadoProduccionComponent,
    VisualizarEstadoEspecialComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
