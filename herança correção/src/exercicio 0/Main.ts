import { Faker, pt_BR } from '@faker-js/faker';
import { Cliente } from "./Cliente";
import { Usuario } from "./Usuario";
import { Funcionario } from './Funcionario';


const faker = new Faker({
    locale: [pt_BR ],
})

const usuario: Usuario = new Usuario(faker.person.firstName(),""+new Date().getTime()) 
const cliente: Cliente = new Cliente(faker.person.firstName(),""+new Date().getTime()) 
const funcionario: Funcionario = new Funcionario(faker.person.firstName(),""+new Date().getTime())


const usuario2: Usuario = new Funcionario(faker.person.firstName(),""+new Date().getTime()) 


console.log(usuario, cliente, funcionario, usuario2)