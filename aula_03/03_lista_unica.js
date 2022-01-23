const clientes = [
    {
    nome: 'Bruno',
    cpf: '27760090012',
    dependentes: [
        {
        nome: 'Sara',
        parentesco: 'filha',
        dataNasc: '20/03/2011'
        },
        {
        nome: 'Samia',
        parentesco: 'filha',
        dataNasc: '04/01/2014'
        }
        ]
    },
    {
        nome: 'Juliana',
        cpf: '27760090058',
        dependentes: [
            {
            nome: 'Sophia',
            parentesco: 'filha',
            dataNasc: '30/08/2020'
            }
            ]
        }
]

// espalhamento - retira os elementos de um objeto e coloca em outro
const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];

console.log(listaDependentes);
console.table(listaDependentes);




// objeto 1
const aluno = {
    nome: 'Bruno',
    idade: 22
}

// objeto 2
const curso = {
    descricao: 'javascript - objects'
}

// utilizando o spread para realocar em um objeto só
const geral = { ...aluno, ...curso }
console.log(geral);


const uniao = Object.assign({}, aluno, curso);
console.log(uniao);

