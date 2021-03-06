import { Component, Input, OnInit } from '@angular/core';
import { ServicioDetalleProductoService } from 'src/app/servicios/servicio-detalle-producto.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()  Codigo:any;
  @Input()  urlImage: any;
  @Input()  Precio:any;
  @Input()  Titulo:any;
  @Input()  Producto:any;
  constructor(private DatosProducto:ServicioDetalleProductoService) {

   }

  ngOnInit(): void {
  }
  public VerDetalle(producto:any):void{
    this.DatosProducto.codigo=producto.codigo;
    this.DatosProducto.nombre=producto.nombre;
    this.DatosProducto.precio=producto.precio;
    this.DatosProducto.rutaImg=producto.rutaImg;
    
  }

}
