import { Component, OnInit } from '@angular/core';
import { ServicioDatoLoginService } from '../Services/servicio-dato-login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Usuario!:String
  constructor(private servicioComunicacion:ServicioDatoLoginService) { }

  ngOnInit(): void {
  }
  FuncionIngresar(){
    this.servicioComunicacion.nombreUsuario=this.Usuario;
    alert('Usuario aceptado')
  }

}
