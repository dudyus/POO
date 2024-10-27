
export default class Personagem {


    constructor(
        private _nome: string,
        private energia: number,
        private vida: number,
        private ataque: number,
        private defesa: number,
    ){}

    //LER DADOS NA CLASSE = PARAMETRO
    //IMPRIMIR DADOS NA CLASSE = RETORNO

    public get nome() : string {
        return this._nome
    }
    


    public status(): string{
        return (
            "Guerreiro: \n" +
            "\nNome: " + this.nome +
            ("\nEnergia " + this.energia.toFixed(1)) +
            ("\nVida: " + this.vida.toFixed(1))+
            ("\nAtaque: " + this.vida.toFixed(1))
        );
        // console.log("Guerreiro: ");
        // console.log("Nome: ", this.nome);
        // console.log("Energia ", this.energia.toFixed(1));
        // console.log("Vida: ", this.vida.toFixed(1));
        // console.log("Ataque: ", this.vida.toFixed(1));
        // console.log("Defesa: ", this.defesa.toFixed(1));
    }

    public treinarAtacar(): void{
        this.ataque += this.randomizar(7);
        this.energia -=this.randomizar(10);
            if (this.ataque > 100) {
                this.ataque = 100;
            }
    }

    public treinarDefesa(): void{
        this.defesa += this.randomizar(5);
        this.energia -= this.randomizar(10);
            if (this.defesa > 100) {
                this.defesa = 100;
            }
    }

    public descansar(hour: number): void{
        this.energia += hour * (this.randomizar(10));
        if (this.energia < 100) {
            this.energia = 100
        }
    }

    public batalhar(): number{
        let desgaste : number = this.randomizar(100);
        this.energia -= desgaste;
        return desgaste;
    }

    public isDead(): boolean{
        if(this.energia <= 0) {

            return true;
        } else {
            return false;
        }
    }

    private randomizar(fator: number): number {
        return Math.random() * fator;
    }
}


