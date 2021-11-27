export class Caracteristica{
    idTipoCaracteristicasProducto :number
    descripcion :String
    tipoCaracteristica:String

    constructor(idTipoCaracteristicasProducto,descripcion,tipoCaracteristica){
        this.idTipoCaracteristicasProducto=idTipoCaracteristicasProducto,
        this.descripcion=descripcion,
        this.tipoCaracteristica=tipoCaracteristica
    }
}