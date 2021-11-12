import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioDetalleProductoService {
  //------------Datos producto--------------//
      public codigo:string='';
      public nombre:string='';
      public precio:number=0;
      public rutaImg:string='';
      public cantidad:number=0;
  //----------------------------------------//
  //---------Lista de productos-------------//
      public Productos:any[]=[

      ]
  //----------------------------------------//
  //-----------Resumen de carrito-----------//
      public total:number=0;
      public c_total:number=0;
  //----------------------------------------//
  //------------Info carrito navbar---------//
      public cantidadProductos:number=0;
      public Monto:number=0;
  //----------------------------------------//
  constructor() { }
}
