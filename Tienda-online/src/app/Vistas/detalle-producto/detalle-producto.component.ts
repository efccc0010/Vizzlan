import { Component, Input, OnInit } from '@angular/core';
import { ServicioDetalleProductoService } from 'src/app/servicios/servicio-detalle-producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {
    public Menu:any;
    public PrecioAntes:number;
    public RutaImg:any;
    public cantidad:number=1;
    @Input() Producto:any;
    //---------------------resumen carrito --------------------//
    public MontoTotal:number=0;
    public CantidadTotal:number=0;
    //---------------------------------------------------------//
  constructor(public DatosProducto:ServicioDetalleProductoService ) {
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
    this.DatosProducto.cantidad=this.cantidad;
    this.DatosProducto.total=this.DatosProducto.total+this.cantidad*this.DatosProducto.precio;
    this.DatosProducto.c_total=this.DatosProducto.c_total+this.cantidad;
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
        
        for (let index = 0; index < this.DatosProducto.Productos.length; index++) {
          this.MontoTotal = 
          this.MontoTotal+this.DatosProducto.Productos[index].precio*this.DatosProducto.Productos[index].cantidad;
          this.CantidadTotal=this.CantidadTotal+this.DatosProducto.Productos[index].cantidad;
        }
        this.DatosProducto.total=this.MontoTotal;
        this.DatosProducto.c_total=this.CantidadTotal;
    }
    //-----------------------------------------------------------------//
  ngOnInit(): void {
  }

}
