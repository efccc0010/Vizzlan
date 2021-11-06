import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {
    public Menu:any;
  constructor() {
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
