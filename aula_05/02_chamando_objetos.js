const pessoa1 = {
    nome: 'Ana Maria Braga',
    email: 'anamaria@email.com',
    imprimeInfo: imprimeNomeEmail
}

const pessoa2 = {
    nome: 'Fausto Silva',
    email: 'fautosilva@email.com',
    imprimeInfo: imprimeNomeEmail
}

function imprimeNomeEmail () {
    console.log(`O nome é: ${this.nome} e seu e-mail é: ${this.email}`)
}

pessoa1.imprimeInfo();
pessoa2.imprimeInfo();