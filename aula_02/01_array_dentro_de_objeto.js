// criando o objeto
const cliente = {
    nome: 'Bruno Cobello',
    idade: 43,
    cpf: '27761994811',
    email: 'brunocobello@gmail.com',
    fones: ['1147121725', '1147845528']
}

// exibindo a chave fone
console.log(cliente.fones);

// percorrendo o array dentro do objeto
cliente.fones.forEach( telefone => console.log(telefone))

