import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from 'src/app/CUS01/Modelo/Producto';
import { Categoria } from 'src/app/elements/Modelo/Categoria';
import { Caracteristica } from '../Caracteristicas';

@Injectable({
  providedIn: 'root'
})
export class DatosProductoService {

  constructor(private http:HttpClient) { 

  }
  UrlCaract ='http://localhost:8080/obtenerCaracteristicas';
  UrlTipoCaract='http://localhost:8080/obtenerTipoCaracteristicas';
  UrlCategoria='http://localhost:8080/obtenerCategoria';
  UrlFiltroCaract='http://localhost:8080/obtenerProductosCaracteristica';
  getCaracteristicas(){
    return  this.http.get<Caracteristica[]>(this.UrlCaract);
    
  }
  getTipoCaracteristicas(){
    return  this.http.get<Caracteristica[]>(this.UrlTipoCaract);
  }
  getCategoria(){
    return  this.http.get<Categoria[]>(this.UrlCategoria);
  }
  getProductos(idTipoCaracteristicasProducto: any){
    return this.http.post<Producto[]>(this.UrlFiltroCaract,idTipoCaracteristicasProducto)
  }
}
