import { Animal } from "./Animal";

export class Cachorro extends Animal {
    private _nome: string
    private _pedigree: boolean

    constructor(peso: number, idade: number, sexo: string, nome: string, pedigree: boolean){
        super(peso, idade, sexo)
        this._nome = nome
        this._pedigree = pedigree
    }

    movimentar(): void {
        console.log(`O cachorro está correndo.`)
    }

    latir(): void {
        console.log("AU, AU!")
    }

    comer(): void {
        this._peso += this._peso * 0.1
        console.log(`O cachorro comeu. Peso atual ${this._peso.toFixed(2)}kg`)
    }

}