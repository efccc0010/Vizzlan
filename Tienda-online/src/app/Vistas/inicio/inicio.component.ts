import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public cards: any;
  constructor() { 
    this.cards=[
      {
        UrlImagen:'https://home.ripley.com.pe/Attachment/WOP_5/2015255773591/2015255773591_2.jpg'
      },
      {
        UrlImagen:'https://home.ripley.com.pe/Attachment/WOP_5/2015265119563/2015265119563-2.jpg'
      },
  ]
  }

  ngOnInit(): void {
  }

}
