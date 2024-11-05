export class Animal {
    protected _peso: number
    protected _idade: number
    protected _sexo: string

    constructor( peso: number, idade: number, sexo: string){
        this._sexo = sexo
        this._idade = idade
        this._peso = peso
    }

    comer(): void {
        this._peso += this._peso * 0.05
        console.log(`O animal comeu. Peso atual ${this._peso.toFixed(2)}kg`)
    }

    envelhecer(): void {
        this._idade += 1
        console.log(`O animal envelheceu 1 ano de idade. Sua idade atual é ${this._idade} anos`)
    }

} 