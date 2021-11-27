import { Component, Input, OnInit } from '@angular/core';
import { ServicioDetalleProductoService } from 'src/app/servicios/servicio-detalle-producto.service';
import { Caracteristica } from '../Caracteristicas';
import { DatosProductoService } from '../servicios/datos-producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {
    public Menu:any;
    public PrecioAntes:number;
    public RutaImg:any;
    public cantidad!:number;
    
    @Input() Producto:any;
    //---------------------resumen carrito --------------------//
    public MontoTotal:number=0;
    public CantidadTotal:number=0;
    //---------------------------------------------------------//
  constructor(public DatosProducto:ServicioDetalleProductoService) {
    //----------------Precio antes--------------------------//
    this.PrecioAntes=1.2*this.DatosProducto.precio;
    //-----------------Cantidad de productos--------------------//
    
    
    //------------------------------------------------------//
    //----------------Imagen--------------------------------//
    this.RutaImg=this.DatosProducto.rutaImg;
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
    //-----------------------RESUMEN CARRITO-------------------------------//
    
   }
   //--------------------------Añadir producto a carrito--------------//
    public ArmarCarrito(cod:string,nom :string,num:number,p:number):void{
        this.DatosProducto.Productos.push(
          {codigo:cod,
          nombre:nom,
          precio:p,
          cantidad:num,
          subtotal:num*p}
        )
        
        this.DatosProducto.c_total=this.DatosProducto.c_total+num;
        this.DatosProducto.total=num*p+this.DatosProducto.total;
        
    }
    //-----------------------------------------------------------------//
  ngOnInit(): void {
    this.cantidad=0;
    
    
    }

  
}
