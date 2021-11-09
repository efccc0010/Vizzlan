import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-decoraciones-principales',
  templateUrl: './lista-decoraciones-principales.component.html',
  styleUrls: ['./lista-decoraciones-principales.component.scss']
})
export class ListaDecoracionesPrincipalesComponent implements OnInit {
  public ListaProductos:any;
  constructor() {
      this.ListaProductos=[
        {
          imagen:'./assets/imagenes/Decoraciones/decoracion1.jpg',
          nombre:'D01',
          precio:10
        },
        {
          imagen:'./assets/imagenes/Decoraciones/decoracion3.jpg',
          nombre:'D02',
          precio:7
        },
        {
          imagen:'./assets/imagenes/Decoraciones/decoracion2.png',
          nombre:'D03',
          precio:8
        },
      ]
   }

  ngOnInit(): void {
  }

}
