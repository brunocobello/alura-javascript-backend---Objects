// criando o objeto
const cliente = {
    nome: 'Bruno Cobello',
    idade: 43,
    cpf: '27761994811',
    email: 'brunocobello@gmail.com'
}

// notacao simples acessando por colchetes
console.log(`A idade do cliente é ${cliente["idade"]} anos`)

// pegando apenas as chaves do objeto
const chaves = Object.keys(cliente);

// exibindo as chaves
console.log(chaves);

// exibindo o objeto inteiro - normalmente
console.log(cliente);

// exibindo utilizando a notacao de colchetes - fora do objeto
chaves.forEach( campo => {
    if(campo == 'cpf')
        console.log(cliente[campo].substring(0,3))
        else 
            console.log(cliente[campo])
});