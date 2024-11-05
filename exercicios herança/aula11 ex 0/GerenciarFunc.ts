import { Pessoa } from "./Pessoa"

export class GerenciarFunc extends Pessoa {
    private _cpf: string
    private _dataAcesso: string
    private _dataAdmissao: string

    constructor(){
        super()
        this._cpf = ""
        this._dataAcesso = ""
        this._dataAdmissao = ""
    }
}