import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/CUS01/Modelo/Producto';
import { Categoria } from 'src/app/elements/Modelo/Categoria';
import { Caracteristica } from '../Caracteristicas';
import { ProductoCaracteristica } from '../ProductoCaracteristica';
import { DatosProductoService } from '../servicios/datos-producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  @Input() Productos: any;
  @Input() Titulo:any;
  @Input() Codigo:any;
  public longitud:any;
  public Menu:any;
  caracteristicas:Caracteristica[]=[]
  tipoCaracteristicas:Caracteristica[]=[]
  productos:Producto[]=[]
  
  constructor( public rest:DatosProductoService ) { 
    
    this.Productos=[
      {codigo:'P001',
        nombre:'Jeans 1',
      rutaImg:'./assets/imagenes/P01.jpg',
      precio:50,
      indice:1,
      },
      
      ];
      this.longitud=this.Productos.length;
      //----------------Menu de progreso----------------------//
      this.Menu=[
        {nombre:'Home',
        clase:'breadcrumb-item',
        ruta:''},
        {nombre:'Productos',
        clase:'breadcrumb-item',
        ruta:''},
        {nombre:'Jeans',
        clase:'breadcrumb-item active',
        ruta:''}
      ]
      //------------------------------------------------------//
  }

  ngOnInit(): void {
    this.rest.getCaracteristicas().subscribe(
      (response)=>{
        this.caracteristicas=response;
      },
      (error)=>{
        console.log('ups:'+error);
      }
    )
    this.rest.getTipoCaracteristicas().subscribe(
      (response)=>{
        this.tipoCaracteristicas=response;
      },
      (error)=>{
        console.log('ups:'+error);
      }
    )
    
  }
  Filtrar(productoCaracteristica:ProductoCaracteristica){
    console.log(productoCaracteristica)
    this.rest.getProductos(productoCaracteristica).subscribe(
      (response)=>{
        this.productos=response;
      },
      (error)=>{
        console.log('ups:'+error);
      }
    )
    console.log(this.productos)
  }
 
}
