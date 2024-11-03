import { Gerenciamento } from "./Gerenciamento";

export class GerenciarForne extends Gerenciamento {

    constructor(
        private _cpf: string,
        private _dataAdmissao: string,
        
    ){
       
        super("","","","","")
    }
}