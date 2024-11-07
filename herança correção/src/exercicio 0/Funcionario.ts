import { Cliente } from "./Cliente";

export class Funcionario extends Cliente{
    private _dataAdmissao: Date

    constructor(login: string, senha: string){
        super(login, senha)
        this._dataAdmissao = new Date()
    }
}