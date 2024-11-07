/*Gerenciar cliente - É necessário armazenar usuário, senha, nome, cpf, status, data
do último acesso. 

Gerenciar funcionário - É necessário armazenar usuário, senha, nome, cpf, status,
data de admissão, data do último acesso. O funcionário que for desligado do
sistema deve ficar inativo.

Gerenciar fornecedor - É necessário armazenar usuário, senha, nome, cnpj, status.
O fornecedor pode ser inativo a qualquer momento pelo funcionário da empresa.*/ 

enum statusEnum {
    ATIVO,
    INATIVO
}
export class Usuario{
    protected login: string
    protected senha: string
    protected nome: string
    protected cpfCNPJ: string
    protected status: statusEnum

    constructor(login: string, senha: string){
        this.login = login
        this.senha = senha
        this.nome = ""
        this.cpfCNPJ = ""
        this.status = statusEnum.ATIVO 
    }

}
