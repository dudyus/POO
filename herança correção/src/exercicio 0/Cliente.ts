import { Usuario } from "./Usuario";

export class Cliente extends Usuario{
    protected dataUltimo: Date

    constructor(login:string, senha:string){
        super(login, senha)
        this.dataUltimo = new Date()
    }
}