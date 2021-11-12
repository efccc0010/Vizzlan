import { Component, OnInit } from '@angular/core';
import { ServicioDetalleProductoService } from 'src/app/servicios/servicio-detalle-producto.service';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.scss']
})
export class CarritoCompraComponent implements OnInit {
  public ProductosCarrito:any;
  public Menu:any;
  constructor(public armarCarrito:ServicioDetalleProductoService ) {
    this.ProductosCarrito=this.armarCarrito.Productos;
    //----------------Menu de progreso----------------------//
    this.Menu=[
      {nombre:'Home',
      clase:'breadcrumb-item',
      ruta:''},
      {nombre:'Carrito de compra',
      clase:'breadcrumb-item active',
      ruta:'Carrito-compra'}
    ]
    //-----------------------------------------------------//
   }

  ngOnInit(): void {
  }

}
