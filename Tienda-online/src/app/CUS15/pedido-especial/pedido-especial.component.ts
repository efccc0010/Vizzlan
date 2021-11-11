import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-especial',
  templateUrl: './pedido-especial.component.html',
  styleUrls: ['./pedido-especial.component.scss']
})
export class PedidoEspecialComponent implements OnInit {
  public Menu!:any;
  public ListaProductosPedidoEspecial: any;
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
      this.ListaProductosPedidoEspecial=[
        {
          ImagenProductoPedidoEspecial:'Imagen01',
          Cantidad:'100',
          DecoracionAñadida:'DECORACION01',
          PrecioDecoracion:'10.00',
          MontoTotalDecoracion:null,
        },
        {
          ImagenProductoPedidoEspecial:'Imagen01',
          Cantidad:'100',
          DecoracionAñadida:'DECORACION01',
          PrecioDecoracion:'10.00',
          MontoTotalDecoracion:null,
        },
        {
          ImagenProductoPedidoEspecial:'Imagen01',
          Cantidad:'100',
          DecoracionAñadida:'DECORACION01',
          PrecioDecoracion:'10.00',
          MontoTotalDecoracion:null,
        }
      ]
   }

  ngOnInit(): void {

  }

}
