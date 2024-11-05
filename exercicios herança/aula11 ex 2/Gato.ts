import { Animal } from "./Animal";

export class Gato extends Animal {
    private _nome: string
    private _pedigree: boolean

    constructor(peso: number, idade: number, sexo: string, nome: string, pedigree: boolean){
        super(peso, idade, sexo)
        this._nome = nome
        this._pedigree = pedigree
    }

    movimentar(): void {
        console.log(`O gato está correndo.`)
    }

    miar(): void {
        console.log("MIAU!")
    }
}