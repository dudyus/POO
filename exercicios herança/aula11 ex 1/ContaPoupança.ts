import { Conta } from "./Conta";

export class ContaPoupança extends Conta {
    diaRendimento: number

    constructor(nome: string, numConta: string, saldo: number, diaRendimento: number){
        super(nome, numConta, saldo)
        this.diaRendimento = diaRendimento
    }
    aplicarRendimento(taxa: number): void {
        
    }
}