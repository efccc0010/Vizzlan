import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {
  @Input() ide!:string;
  public ImgCarr:any;
  @Input () identifier!:string;
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
    this.identifier='#'+this.ide;
  }

}
