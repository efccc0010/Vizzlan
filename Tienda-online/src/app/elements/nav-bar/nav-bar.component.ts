import { Component, OnInit } from '@angular/core';
import { DatosProductoService } from 'src/app/Vistas/servicios/datos-producto.service';

import { Categoria } from '../Modelo/Categoria';
import { CategoriaServiceService } from '../services/categoria-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public cantidad:number;
  
  categorias:Categoria[]=[];
  constructor(private servicio:CategoriaServiceService, private rest :DatosProductoService) {
    this.cantidad=2
    this.loadScripts()
   }

   ngOnInit() {
    this.rest.getCategoria().subscribe(
      (response)=>{
        this.categorias=response;
      },
      (error)=>{
        console.log('ups:'+error);
      }
    )
  }
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
    } }
}
