import { Pessoa } from "./Pessoa";

export class FuncionarioAdm extends Pessoa{
    constructor(
        private _salario: number,
        private _setor: string
    ) {
        
        super("","","")

    }
}
