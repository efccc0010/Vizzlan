import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Modelo/Usuario';
import { ServicioDatoLoginService } from '../Services/servicio-dato-login.service';
import { ServicioProductoService } from '../Services/servicio-producto.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  cuenta:any;
  public ruta:string='';
  constructor(public servicioLogin:ServicioProductoService) {
    
   }

  ngOnInit(): void {
    
  }

  Ingresar(cuenta:String):void{
    localStorage.setItem("cuenta",cuenta.toString());
    
  }
  
  /*
  FuncionIngresar(){
    this.servicioComunicacion.nombreUsuario=this.Usuario;
    alert('Usuario aceptado');
    this.ruta=' ';

  }*/

}
