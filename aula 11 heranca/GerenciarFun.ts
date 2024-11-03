import { Gerenciamento } from "./Gerenciamento";

export class GerenciarForne extends Gerenciamento {

    constructor(
        private _cnpj: string,
        
    ){
       
        super("","","","","")
    }
}