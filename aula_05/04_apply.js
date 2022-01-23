const cliente1 = {
    nome: 'Ana Maria Braga',
    email: 'ana@email.com'
}

const cliente2 = {
    nome: 'Xuxa Meneghel',
    email: 'xuxa@email.com'
}

function imprimeNomeEmail (tipoCliente, agencia) {
    console.log(`${tipoCliente} - ${agencia} - nome: ${this.nome} e email: ${this.email}`)
}

const clienteEspecial = ['Cliente Especial', 'Rio de Janeiro'];
const clienteEstudante = ['Cliente Estudante', 'Fortaleza'];

/*
ao utilizar apply deve-se inserir antes do parâmetro que a função espera (tipoCliente, agendica), as informações
que existem dentro do objeto cliente1 ou cliente2 que serão utilizadas para compor o método.

é utilizada quando o parametro (tipoCliente, agencia = ['Cliente Especial', 'Rio de Janeiro]) chamado é um tipo array

a utilização é igual ao call
*/
imprimeNomeEmail.apply(cliente2, clienteEstudante);
imprimeNomeEmail.apply(cliente1, clienteEspecial);
