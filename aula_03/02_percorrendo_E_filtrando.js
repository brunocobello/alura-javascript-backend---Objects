const cliente = {
    nome: 'Bruno Louvo',
    idade: 43,
    email: 'brunolouco@gmail.com',
    fones: ['1147121728','1147845529'],
    dependentes: [
        {
            nome: 'Monica Borges',
            parentesco: 'filha',
            dataNasc: '23/05/2003'
        },
        {
            nome: 'Priscila Louca',
            parentesco: 'afilhada',
            dataNasc: '25/01/1998'
        }
    ],
    saldo: 100,
    depositar: function (valor) {
        saldo += valor
    }
}



function oferecerSeguro (objeto) {
    // extrai apenas as chaves do objeto
    const propClientes = Object.keys(objeto);
    // procura dentro do array a chave dependentes
    if (propClientes.includes('dependentes')) 
        console.log(`Oferta de seguro para ${objeto.nome}`)
    else
        console.log('Não possui dependentes, portanto, não oferencer seguro');
}

oferecerSeguro(cliente);

// Object.values --> exibe apenas os valores de cada chave
console.log(Object.values(cliente));

/* Object.entries --> cria um array com cada chave valor do objeto
 exemplo:
[
  [ 'nome', 'Bruno Louvo' ],
  [ 'idade', 43 ],
  [ 'email', 'brunolouco@gmail.com' ],        
  [ 'fones', [ '1147121728', '1147845529' ] ],
  [ 'dependentes', [ [Object], [Object] ] ],  
  [ 'saldo', 100 ],
  [ 'depositar', [Function: depositar] ]   
]
*/
console.log(Object.entries(cliente));