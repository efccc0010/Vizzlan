import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../Modelo/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServiceService {

  roducto!:Categoria[];
  constructor(private http:HttpClient) { }
    Url ='http://localhost:8080/categoria';
  getCategorias(){
    return this.http.get<Categoria[]>(this.Url);
  }
}
