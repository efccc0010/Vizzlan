import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public cards: any;
  public ImgCarr:any;
  public Productos:any;
  constructor() {
    this.ImgCarr=[
      {url:'./assets/imagenes/Tipojeans1.jpeg',
      clase:'carousel-item active'},
    {url:'./assets/imagenes/Tipojeans2.jpg',
     clase:'carousel-item'},
    {url:'./assets/imagenes/Tipojeans3.jpeg',
    clase:'carousel-item'},
    {url:'./assets/imagenes/TipoJeans5.jpg',
    clase:'carousel-item'}];
    this.Productos=[
      {Nombre:'P01',
      Precio:75},
      {Nombre:'P02',
      Precio:80},
      {Nombre:'P03',
      Precio:85},
      {Nombre:'P04',
      Precio:95},
      {Nombre:'P05',
      Precio:100},
      {Nombre:'P06',
      Precio:108},
      {Nombre:'P07',
      Precio:95},
      {Nombre:'P08',
      Precio:75},
    ]

  }

  ngOnInit(): void {
  }

}
