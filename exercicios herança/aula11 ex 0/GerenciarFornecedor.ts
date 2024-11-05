import { Pessoa } from "./Pessoa"

export class GerenciarFornecedor extends Pessoa {
    private _cnpj: string

    constructor(){
        super()
        this._cnpj = ""
    }
}