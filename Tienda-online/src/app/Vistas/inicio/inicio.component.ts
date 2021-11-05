import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public cards: any;
  public ImgCarr:any;
  constructor() { 
    this.ImgCarr=[
      {url:'./assets/imagenes/Tipojeans1.jpeg',
      clase:'carousel-item active'},
    {url:'./assets/imagenes/Tipojeans2.jpg',
     clase:'carousel-item'},
    {url:'./assets/imagenes/Tipojeans3.jpeg',
    clase:'carousel-item'},
    {url:'./assets/imagenes/Tipojeans4.jpg',
    clase:'carousel-item'}]
  }

  ngOnInit(): void {
  }

}
