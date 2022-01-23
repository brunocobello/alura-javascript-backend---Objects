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

// inicializando uma variavel chamada relatoiro
let relatorio = '';



// for in ==> percorre o objeto inteiro - no caso, info são as chaves do objeto
// o acesso a cada elemento do objeto é feito através da notação de colchetes
for ( let info in cliente) {
    if (typeof cliente[info] != "object" && typeof cliente[info] != "function") {
        relatorio += `${info}: ${cliente[info]}\n`
    }
        
}

console.log(relatorio);