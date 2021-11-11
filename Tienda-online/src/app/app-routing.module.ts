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

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'Productos',component:ProductosComponent},
  {path:'Ingresar',component:IngresarComponent},
  {path:'Carrito-compra',component:CarritoCompraComponent},
  {path:'Pedido-especial',component:PedidoEspecialComponent},
  {path:'detalle-producto',component:DetalleProductoComponent},
  {path:'RegistroEnvio',component:RegistroEnvioComponent},
  {path:'Calculo-costo',component:CalculoCostoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
