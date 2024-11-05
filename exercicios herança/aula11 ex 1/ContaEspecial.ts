import { Conta } from "./Conta";

export class ContaEspecial extends Conta {
    private _limite: number

    constructor( nome: string, numConta: string, saldo: number, limite: number) {
        super(nome, numConta, saldo)
        this._limite = limite   
    }

    sacar(valor: number): void {
        if (valor > 0 && valor <= this._saldo + this._limite) {
            this._saldo -= valor
            console.log(`Saque efetuado no valor de R$${valor}.`)
        } else {
            throw new Error("Saque inválido")
        }
    }
}