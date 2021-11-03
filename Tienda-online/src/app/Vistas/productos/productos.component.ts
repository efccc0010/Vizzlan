import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  @Input() cards: any;
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
