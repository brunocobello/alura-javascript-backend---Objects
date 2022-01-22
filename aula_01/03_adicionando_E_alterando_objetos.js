// criando o objeto
const cliente = {
    nome: 'Bruno Cobello',
    idade: 43,
    cpf: '27761994811',
    email: 'brunocobello@gmail.com'
}

// adicionando chave telefone
cliente.telefone = '1147121725';
console.log(cliente);

// alterando chave telefone
cliente.telefone = '1147845528'
console.log(cliente);

// apagando cahve email
delete cliente.email;
console.log(cliente)