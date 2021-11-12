import { Component, OnInit } from '@angular/core';
import { ServicioDatoLoginService } from 'src/app/CUS01/Services/servicio-dato-login.service';
import { ServicioDetalleProductoService } from 'src/app/servicios/servicio-detalle-producto.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public servicioComunicacion:ServicioDatoLoginService, public datoCarrito :ServicioDetalleProductoService) { }

  ngOnInit(): void {
  }

}
