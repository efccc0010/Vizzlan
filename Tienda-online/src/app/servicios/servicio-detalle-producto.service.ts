import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioDetalleProductoService {
      codigo:string='';
      nombre:string='';
      precio:number=0;
      rutaImg:string='';
  constructor() { }
}
