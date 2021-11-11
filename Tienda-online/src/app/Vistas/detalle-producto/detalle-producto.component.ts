import { Component, OnInit } from '@angular/core';
import { ServicioDetalleProductoService } from 'src/app/servicios/servicio-detalle-producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {
    public Menu:any;
    public PrecioAntes:number;
  constructor(public DatosProducto:ServicioDetalleProductoService ) {
    //----------------Precio antes--------------------------//
    this.PrecioAntes=1.2*this.DatosProducto.precio
    //----------------Menu de progreso----------------------//
    this.Menu=[
      {nombre:'Home',
      clase:'breadcrumb-item',
      ruta:''},
      {nombre:'Productos',
      clase:'breadcrumb-item',
      ruta:''},
      {nombre:'Jeans',
      clase:'breadcrumb-item',
      ruta:''},
      {nombre:'P001',
      clase:'breadcrumb-item active',
      ruta:''}
    ]
    //------------------------------------------------------//
   }

  ngOnInit(): void {
  }

}
