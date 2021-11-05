import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {
  @Input() ProductosCarrito!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
