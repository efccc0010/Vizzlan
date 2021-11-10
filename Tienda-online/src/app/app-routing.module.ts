import { CUS06Component } from './CUS06/CUS06.component';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { IngresarComponent } from './CUS01/ingresar/ingresar.component';
import { CarritoCompraComponent } from './CUS04/carrito-compra/carrito-compra.component';
import { CUS07Component } from './CUS07/CUS07.component';
import { PedidoEspecialComponent } from './CUS15/pedido-especial/pedido-especial.component';
import { DetalleProductoComponent } from './Vistas/detalle-producto/detalle-producto.component';
import { InicioComponent } from './Vistas/inicio/inicio.component';
import { ProductosComponent } from './Vistas/productos/productos.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'Productos',component:ProductosComponent},
  {path:'Ingresar',component:IngresarComponent},
  {path:'Carrito-compra',component:CarritoCompraComponent},
  {path:'Pedido-especial',component:PedidoEspecialComponent},
  {path:'detalle-producto',component:DetalleProductoComponent},
  {path:'Pago',component:CUS07Component},
  {path:'RegistrarEnvio',component:CUS06Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
