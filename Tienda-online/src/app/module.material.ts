import { OnInit, NgModule } from '@angular/core';
/* Diferentes Modulos del Angular Material - Angular Bootstrap*/
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  /*Exportacion de Modulos Necesarios */
  exports: [NgbModule ]
})
export class AngularMaterialBootStrapModule implements OnInit{
  constructor(){

  }
  ngOnInit(){

  }
}
