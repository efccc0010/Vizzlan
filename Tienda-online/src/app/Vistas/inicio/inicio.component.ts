import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/CUS01/Modelo/Producto';
import { ServicioProductoService } from 'src/app/CUS01/Services/servicio-producto.service';
import { Categoria } from 'src/app/elements/Modelo/Categoria';
import { DatosProductoService } from '../servicios/datos-producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public cards: any;
  public ImgCarr:any;
  public Productos:any;
  productos!:Producto[]
  
  constructor(private servicio:ServicioProductoService, private router:Router) {
    
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
  ngOnInit(){}
  
/*
  loadScripts() { 

    // This array contains all the files/CDNs 
    const dynamicScripts = [ 
        'assets/js/vendor/jquery-3.3.1.min.js',
        'assets/js/vendor/modernizr-3.6.0.min.js',
        'assets/js/vendor/jquery.cookie.js',
        'assets/js/vendor/wow.min.js',
        'assets/js/bootstrap.min.js',
        'assets/js/plugins.js',
        'assets/js/popper.min.js',
        'assets/js/lazysizes.js',
        'assets/js/main.js',
        
       //Load all your script files here'
    ]; 
    for (let i = 0; i < dynamicScripts.length; i++) { 
      const node = document.createElement('script'); 
      node.src = dynamicScripts[i]; 
      node.type = 'text/javascript'; 
      node.async = false; 
      document.getElementsByTagName('head')[0].appendChild(node); 
    } }*/
}
