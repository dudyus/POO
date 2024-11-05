import { Pessoa } from "./Pessoa";

export class GerenciarCliente extends Pessoa {
    private _cpf: string
    private _dataAcesso: string

    constructor(){
        super()
        this._cpf = ""
        this._dataAcesso = ""
    }
}