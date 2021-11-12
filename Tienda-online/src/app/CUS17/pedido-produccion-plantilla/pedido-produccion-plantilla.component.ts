import { Component, Input, OnInit } from '@angular/core';
import { ServicioDetalleProductoService } from 'src/app/servicios/servicio-detalle-producto.service';


@Component({
  selector: 'app-pedido-produccion-plantilla',
  templateUrl: './pedido-produccion-plantilla.component.html',
  styleUrls: ['./pedido-produccion-plantilla.component.scss']
})
export class PedidoProduccionPlantillaComponent implements OnInit {

  public Menu:any;
  public PrecioAntes:number;
  public RutaImg:any = "";
  public cantidad:number=1;
  @Input() Producto:any;

  public MontoTotal:number=0;
  public CantidadTotal:number=0;

  constructor(public DatosProducto:ServicioDetalleProductoService ) {

    this.PrecioAntes=1.2*this.DatosProducto.precio;
  
    this.RutaImg=this.DatosProducto.rutaImg;
  
    this.Menu=[
      {nombre:'Home',
      clase:'breadcrumb-item',
      ruta:''},
      {nombre:'Pedido Produccion',
      clase:'breadcrumb-item',
      ruta:''},
      {nombre:'Pedido 001',
      clase:'breadcrumb-item active',
      ruta:''},
    ]
  
    this.DatosProducto.cantidad=this.cantidad;
    this.DatosProducto.total=this.DatosProducto.total+this.cantidad*this.DatosProducto.precio;
    this.DatosProducto.c_total=this.DatosProducto.c_total+this.cantidad;
   }
  
    public ArmarCarrito(cod:string,nom :string,num:number,p:number):void{
        this.DatosProducto.Productos.push(
          {codigo:cod,
          nombre:nom,
          precio:p,
          cantidad:num,
          subtotal:num*p}
        )
        /*
        for (let index = 0; index < this.DatosProducto.Productos.length; index++) {
          this.MontoTotal = 
          this.MontoTotal+this.DatosProducto.Productos[index].precio*this.DatosProducto.Productos[index].cantidad;
          this.CantidadTotal=this.CantidadTotal+this.DatosProducto.Productos[index].cantidad;
        }
        this.DatosProducto.total=this.MontoTotal;
        this.DatosProducto.c_total=this.CantidadTotal;*/
    }
  

  ngOnInit(): void {
  }

}
