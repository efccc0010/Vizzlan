import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.scss']
})
export class SliderCardComponent implements OnInit {
  public Productos:any;
  @Input() ide!:string;
  public identifier!:string;
  constructor() { 
    this.Productos=[
      {nombre:'Jeans 1',
      rutaImg:'https://home.ripley.com.pe/Attachment/WOP_5/2015255773591/2015255773591_2.jpg',
      precio:50,
      indice:1,
      },
      {
        nombre:'Jeans 2',
        rutaImg:'https://home.ripley.com.pe/Attachment/WOP_5/2015265119563/2015265119563-2.jpg',
        precio:80,
        indice:2,
      },
      {
        nombre:'Jeans 3',
        rutaImg:'http://cdn.shopify.com/s/files/1/0054/0046/1346/products/Pantalonjeanrasgado-celeste-frontal-cayla_1_1200x1200.jpg',
        precio:20,
        indice:3,  
      },
      {
        nombre:'Jeans 4',
        rutaImg:'https://home.ripley.com.pe/Attachment/WOP_5/2015278490611/2015278490611_2.jpg',
        precio:15,
        indice:4,
      },
      {
        nombre:'Jeans 5',
        rutaImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWg6cdgGhWaTmD4wy12DDKCVNoT1aUoidVEZDwgm-Cl6O_K5cLQr0X7uOIqHmtmwbLJcw&usqp=CAU',
        precio:12,
        indice:5,
      },
      {
        nombre:'Jeans 6',
        rutaImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM95GLfiJcvmg6lFhBBc9wU1-zuw2hY4DiTjN2UX2RrgviZcwer5EzEYjYNOACtN2pkzA&usqp=CAU',
        precio:40,
        indice:6,
      },
      {
        nombre:'Jeans 7',
        rutaImg:'https://home.ripley.com.pe/Attachment/WOP_5/2015259112303/2015259112303-2.jpg',
        precio:56,
        indice:7,
      },
      {
        nombre:'Jeans 8',
        rutaImg:'https://home.ripley.com.pe/Attachment/WOP_5/2015277033482/2015277033482_2.jpg',
        precio:80,
        indice:8,
      }
      ];
      
      
  }

  ngOnInit(): void {
    this.assertInputsProvided();
    this.identifier='#'+this.ide;
  }
  ngOnChanges() {
    
  }
  private assertInputsProvided(): void {
    if (!this.ide) {
      throw (new Error("The required input [userId] was not provided"));
    }
  }

}