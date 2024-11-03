import { Gerenciamento } from "./Gerenciamento";

export class GerenciarCliente extends Gerenciamento {

    constructor(
        private _cpf: string
    ){
       
        super("","","","","")
    }
}