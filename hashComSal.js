import { scryptSync, randomBytes } from 'crypto'; 

function criaHashComSal(senha){
    const sal = randomBytes(16).toString('hex');
    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex');
    return `${sal}:${senhaHasheada}`;
}

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(':');
    }

    autentica(nome, senha){
        const senhaHash = scryptSync(senha, this.sal, 64).toString('hex');
        if(nome === this.nome && senhaHash === this.hash){
            console.log("Usuario autenticado");
            return true;
        } else {
            console.log("Acesso Negado, Credenciais Inválidas");
            return false;
        }
    }
}

const u1 = new Usuario ("Gustavo", "senha");
u1.autentica("Gustavo", "senha");
// console.log(u1);
// console.log(criaHashComSal("senha"));