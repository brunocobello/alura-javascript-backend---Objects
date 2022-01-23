const cliente1 = {
    nome: 'Anderson Silva',
    email: 'anderson@email.com'
}

const cliente2 = {
    nome: 'Xuxa Menghel',
    email: 'xuxa@email.com'
}

function imprimeNomeEmail (tipoCliente) {
    console.log(`${tipoCliente} - nome: ${this.nome} e email: ${this.email}`)
}

/*
ao utilizar call deve-se inserir antes do parâmetro que a função espera (tipoCliente), as informações
que existem dentro do objeto cliente1 ou cliente2 que serão utilizadas para compor o método.

é utilizada quando o parametro (tipoCliente = 'Cliente Especial') chamado é um tipo primitivo de dados (string, numeber ou bool)
*/
imprimeNomeEmail.call(cliente1, 'CLiente Especial');
imprimeNomeEmail.call(cliente2, 'Cliente Estudante');