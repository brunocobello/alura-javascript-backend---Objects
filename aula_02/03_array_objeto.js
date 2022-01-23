// criando o objeto
const cliente = {
    nome: 'Bruno Cobello',
    idade: 43,
    cpf: '27761994811',
    email: 'brunocobello@gmail.com',
    fones: ['1147121725', '1147845528'],
    dependentes: [
        {
        nome: 'Giovana Cobello',
        idade: 18,
        dataNasc: '23/05/2003'
        }        
    ]
}

cliente.dependentes.push(
    {
    nome: 'Priscila Rosana Leite de Palma',
    idade: 112,
    dataNasc: '22/03/1983'
    }
)

// exibindo o objeto após adicionar novo dependente
console.log(cliente.dependentes);

// filtrando e retornando a filha mais nova
const filhaMaisNova = cliente.dependentes.filter( depe => depe.dataNasc === '23/05/2003')

// exibe o objeto inteiro filtrado
console.log(filhaMaisNova)

// exibe apenas o nome da filha mais nova
console.log(`A filha mais nova é ${filhaMaisNova[0].nome}`)