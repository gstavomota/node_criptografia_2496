import { createHash } from 'crypto';

function criaHash(senha){
    return createHash('sha256').update(senha).digest("hex");
}

// console.log(criaHash("uma senha qq"));

class Usuario {

    constructor(nome, senha){
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha){
        const hashSenha = criaHash(senha);
        if(hashSenha == this.hash && nome === this.nome) console.log("Acesso permitido")
        else console.log("Acesso negado");
    }
}

const g = new Usuario("Gustavo", "1234");

console.log(g);

g.autentica("Gustavo", "1234");