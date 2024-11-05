import { Animal } from "./Animal";

export class Peixe extends Animal {
    private _nivelAroma: number   

    constructor(peso: number, idade: number, sexo: string, nivelAroma: number){
        super(peso, idade, sexo)
        this._nivelAroma = nivelAroma
    }

    movimentar(): void {
        console.log(`O gambá está andando.`)
    }

    aromatizar(): void {
        if (this._nivelAroma > 5) {
            console.log("O gambá fedeu muito.")
        } else {
            console.log("O gambá fedeu, mas está suportavel.")
        }
    }
}