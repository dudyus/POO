export class Gerenciamento {
    protected _usuario: string 
    protected _senha: string
    protected _nome: string
    protected _status: string
    protected _dataUltima: string

    constructor(usuario: string, senha: string, nome: string, status: string, dataUltima:string) {
        this._usuario = usuario
        this._senha = senha
        this._nome = nome
        this._status = status
        this._dataUltima = dataUltima
    }

}
