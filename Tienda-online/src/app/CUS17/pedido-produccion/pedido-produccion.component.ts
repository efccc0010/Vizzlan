import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-produccion',
  templateUrl: './pedido-produccion.component.html',
  styleUrls: ['./pedido-produccion.component.scss']
})
export class PedidoProduccionComponent implements OnInit {
  public Menu: any;
  constructor() {
    this.Menu = [
      {nombre: 'Home', clase: 'breadcrumb-item', ruta: ''},
      {nombre: 'Productos', clase: 'breadcrumb-item', ruta: ''},
      {nombre: 'Jean', clase: 'breadcrumb-item', ruta: ''},
      {nombre: 'Producto01', clase: 'breadcrumb-item active', ruta: ''}
    ]

   }

  ngOnInit(): void {

  }

}
