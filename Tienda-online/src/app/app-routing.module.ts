import { PagarPedidoEstandarComponent } from './CUS07/PagarPedidoEstandar/PagarPedidoEstandar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarComponent } from './CUS01/ingresar/ingresar.component';
import { CarritoCompraComponent } from './CUS04/carrito-compra/carrito-compra.component';
import { RegistroEnvioComponent } from './CUS06/RegistroEnvio/RegistroEnvio.component';
import { CalculoCostoComponent } from './CUS11/calculo-costo/calculo-costo.component';
import { PedidoEspecialComponent } from './CUS15/pedido-especial/pedido-especial.component';
import { DetalleProductoComponent } from './Vistas/detalle-producto/detalle-producto.component';
import { InicioComponent } from './Vistas/inicio/inicio.component';
import { ProductosComponent } from './Vistas/productos/productos.component';
import { VisualizarDecoracionesComponent } from './CUS15/visualizar-decoraciones/visualizar-decoraciones.component';
import { PedidoProduccionComponent } from './CUS17/pedido-produccion/pedido-produccion.component';
import { SubirImagenComponent } from './CUS18/subir-imagen/subir-imagen.component';
import { ModificarPedidoComponent } from './CUS12/modificar-pedido/modificar-pedido.component';
import { VisualizarEstadoComponent } from './CUS13/visualizar-estado/visualizar-estado.component';
import { DisenoPersonalizadoComponent } from './CUS18/diseno-personalizado/diseno-personalizado.component';
import { PedidoProduccionPlantillaComponent } from './CUS17/pedido-produccion-plantilla/pedido-produccion-plantilla.component';


const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'Productos',component:ProductosComponent},
  {path:'Ingresar',component:IngresarComponent},
  {path:'Carrito-compra',component:CarritoCompraComponent},
  {path:'Pedido-especial',component:PedidoEspecialComponent},
  {path:'detalle-producto',component:DetalleProductoComponent},
  {path:'RegistroEnvio',component:RegistroEnvioComponent},
  {path:'Calculo-costo',component:CalculoCostoComponent},
  {path:'PagarPedidoEstandar',component:PagarPedidoEstandarComponent},
  {path:'Visualizar-decoraciones',component:VisualizarDecoracionesComponent},
  {path:'PedidoProduccion', component: PedidoProduccionComponent},
  {path:'SubirImagen', component: SubirImagenComponent},
  {path:'Modificar-pedido', component: ModificarPedidoComponent},
  {path:'Visualizar-estado', component: VisualizarEstadoComponent},
  {path:'DisenoPersonalizado', component: DisenoPersonalizadoComponent},
  {path:'PedidoProduccionPlantilla', component: PedidoProduccionPlantillaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
