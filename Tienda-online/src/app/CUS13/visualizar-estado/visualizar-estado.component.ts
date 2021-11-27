import { Component, OnInit } from '@angular/core';
import { Lista } from '../Modelo/ListaPedidos';
import { Pedido } from '../Modelo/Pedido';
import { ServicioVisualizarService } from '../Services/servicio-visualizar.service';

@Component({
  selector: 'app-visualizar-estado',
  templateUrl: './visualizar-estado.component.html',
  styleUrls: ['./visualizar-estado.component.scss']
})
export class VisualizarEstadoComponent implements OnInit {
  pedidos:Pedido[]=[];
  index=["idpedido","fechainicio","tipo","descripcion","montototal","estimacionentrega","estado","idenvio"]
  
  constructor(public visualService : ServicioVisualizarService) { 

  }

  ngOnInit() {
    this.visualService.getPedidos().subscribe(
      (response)=>{
        this.pedidos=response;
      },
      (error)=>{
        console.log('ups:'+error);
      }
    )
  }

}
