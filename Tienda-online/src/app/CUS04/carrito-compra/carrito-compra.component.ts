import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.scss']
})
export class CarritoCompraComponent implements OnInit {
  public ProductosCarrito:any;
  constructor() {
    this.ProductosCarrito=[
      {codigo:'P0001',
      nombre:'P01',
      precio:50,
      cantidad:1,
      subtotal:null},
      {codigo:'P0002',
      nombre:'P02',
      precio:70,
      cantidad:1,
      subtotal:null},
      {codigo:'P0003',
      nombre:'P03',
      precio:60,
      cantidad:1,
      subtotal:null},
      {codigo:'P0004',
      nombre:'P04',
      precio:80,
      cantidad:1,
      subtotal:null},
    ]
   }

  ngOnInit(): void {
  }

}
