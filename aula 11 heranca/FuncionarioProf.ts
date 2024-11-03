import { Pessoa } from "./Pessoa";

export class FuncionarioProf extends Pessoa{
    constructor(
        private _salario: number,
        private _titulacao: string
    ) {
        
        super("","","")

    }
}