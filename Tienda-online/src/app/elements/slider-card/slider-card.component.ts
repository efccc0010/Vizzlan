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
      {codigo:'P001',
        nombre:'Jeans 1',
      rutaImg:'./assets/imagenes/P01.jpg',
      precio:50,
      indice:1,
      },
      {codigo:'P002',
        nombre:'Jeans 2',
        rutaImg:'./assets/imagenes/P02.jpg',
        precio:80,
        indice:2,
      },
      {codigo:'P003',
        nombre:'Jeans 3',
        rutaImg:'./assets/imagenes/P03.jpg',
        precio:60,
        indice:3,  
      },
      {codigo:'P004',
        nombre:'Jeans 4',
        rutaImg:'./assets/imagenes/P04.jpg',
        precio:65,
        indice:4,
      },
      {codigo:'P005',
        nombre:'Jeans 5',
        rutaImg:'./assets/imagenes/P05.jpg',
        precio:72,
        indice:5,
      },
      {codigo:'P006',
        nombre:'Jeans 6',
        rutaImg:'./assets/imagenes/P06.jpg',
        precio:80,
        indice:6,
      },
      {codigo:'P007',
        nombre:'Jeans 7',
        rutaImg:'./assets/imagenes/P07.jpg',
        precio:96,
        indice:7,
      },
      {codigo:'P008',
        nombre:'Jeans 8',
        rutaImg:'./assets/imagenes/P08.jpg',
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
