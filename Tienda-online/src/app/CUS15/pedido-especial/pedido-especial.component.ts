import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-especial',
  templateUrl: './pedido-especial.component.html',
  styleUrls: ['./pedido-especial.component.scss']
})
export class PedidoEspecialComponent implements OnInit {
  public Menu!:any;
  constructor() {
    //----------------Menu de progreso----------------------//
      this.Menu=[
        {nombre:'Home',
        clase:'breadcrumb-item',
        ruta:''},
        {nombre:'Pedido Especial',
        clase:'breadcrumb-item active',
        ruta:'Pedido-Especial'}
      ]
      //---------------------------------------------------//
   }

  ngOnInit(): void {

  }

}
