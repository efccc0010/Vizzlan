export class Pedido{
     idPedido:Number ;
     fechaInicio:Date ;
     tipo: String ;
     descripcion:String ;
     montoTotal:Number ;
     estimacionentrega:String ;
     estado:String ;
     idenvio:Number ;

     constructor(idPedido,fechaInicio,tipo,descripcion,montoTotal,estimacionentrega,estado,idenvio){
          this.idPedido=idPedido;
          this.fechaInicio=fechaInicio;
          this.tipo=tipo;
          this.descripcion=descripcion;
          this.montoTotal=montoTotal;
          this.estimacionentrega=estimacionentrega;
          this.estado=estado;
          this.idenvio=idenvio;

     }
}