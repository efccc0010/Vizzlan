import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../Modelo/Pedido';
import { Lista } from '../Modelo/ListaPedidos';

@Injectable({
  providedIn: 'root'
})
export class ServicioVisualizarService {
    pedidos!:Pedido[]
  constructor(private http:HttpClient) { }
    Url ='http://localhost:8080/obtenerPedidos'
    
  getPedidos(){
    return this.http.get<Pedido[]>(this.Url);
  }
  
}
