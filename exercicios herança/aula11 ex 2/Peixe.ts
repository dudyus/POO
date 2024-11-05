import { Animal } from "./Animal";

export class Peixe extends Animal {
    private _escamas: boolean    

    constructor(peso: number, idade: number, sexo: string, escamas: boolean){
        super(peso, idade, sexo)
        this._escamas = escamas
    }

    movimentar(): void {
        console.log(`O peixe está nadando.`)
    }

}