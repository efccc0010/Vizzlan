import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-especial',
  templateUrl: './pedido-especial.component.html',
  styleUrls: ['./pedido-especial.component.scss']
})
export class PedidoEspecialComponent implements OnInit {
  public Menu:any;
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
    //----------------Productos de Pedido Especial---------//
      this.ListaProductosPedidoEspecial=[
        {
          ImagenProductoPedidoEspecial:'./assets/imagenes/Productos/producto1.jpg',
          Cantidad:1,
          TipoDecoracion:'DECORACION01',
          PrecioDecoracion:10.49,
          MontoTotalDecoracion:null,
        },
        {
          ImagenProductoPedidoEspecial:'./assets/imagenes/Productos/producto2.jpg',
          Cantidad:1,
          TipoDecoracion:'DECORACION02',
          PrecioDecoracion:7.99,
          MontoTotalDecoracion:null,
        },
        {
          ImagenProductoPedidoEspecial:'./assets/imagenes/Productos/producto3.jpg',
          Cantidad:1,
          TipoDecoracion:'DECORACION03',
          PrecioDecoracion:19.99,
          MontoTotalDecoracion:null,
        }
      ]
   }

  ngOnInit(): void {

  }

}
