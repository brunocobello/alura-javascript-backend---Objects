// criando o objeto
const cliente = {
    nome: 'Bruno Cobello',
    idade: 43,
    cpf: '27761994811',
    email: 'brunocobello@gmail.com',
    fones: ['1147121725', '1147845528'],
    dependentes: {
        nome: 'Giovana Cobello',
        idade: 18,
        dataNasc: '23/05/2003'
    }
}

console.log(cliente.dependentes);

// acessando o objeto dependentes demtro do objeto cliente
console.log(cliente.dependentes.nome);
