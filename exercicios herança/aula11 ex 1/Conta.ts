export class Conta {
    protected _nome: string 
    protected _numConta: string 
    protected _saldo: number

    constructor( nome: string, numConta: string, saldo: number) {
        this._nome = nome
        this._numConta = numConta
        this._saldo = saldo
    }

    sacar(valor: number): void {
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor
            console.log(`Saque efetuado no valor de R$${valor}.`)
        } else {
            throw new Error("Valor de saque inválido ou saldo insuficiente")
        }
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this._saldo += valor
            console.log(`Depósito de R$${valor} efetuado.`)
        } else {
            throw new Error("Valor de depósito inválido")
        }
    }

}