import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Modelo/Producto';
import { Usuario } from '../Modelo/Usuario';
@Injectable({
  providedIn: 'root'
})
export class ServicioProductoService {

  producto!:Producto[];
  usuario!:Usuario;
  constructor(private http:HttpClient) { }
    Url ='http://localhost:8080/productos';
    Url2='http://localhost:8080/usuarios'
  getProductos(){
    return this.http.get<Producto[]>(this.Url);
  }
  getUsuario(usuario:Usuario){
    return this.http.post<Usuario>(this.Url2,usuario);
  }
}
