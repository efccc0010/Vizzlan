import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diseno-personalizado',
  templateUrl: './diseno-personalizado.component.html',
  styleUrls: ['./diseno-personalizado.component.scss']
})
export class DisenoPersonalizadoComponent implements OnInit {

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
