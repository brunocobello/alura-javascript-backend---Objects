function Cliente (nome, idade, email, saldo) {
    this.nome = nome,
    this.idade = idade,
    this.email = email,
    this.saldo = saldo,
    this.depositar = function (valor) {
        saldo += valor
    }
}

function ClientePoupanca (nome, idade, email, saldo, saldoPoup) {
    // propriedades definidas através de Cliente
    Cliente.call(this, nome, idade, email, saldo);
    this.saldoPoup = saldoPoup
}

const andre = new Cliente ('Andre', 33, 'andre@email.com',100);
const ju = new ClientePoupanca ('Juliana', 20, 'ju@email.com',100,200);

ClientePoupanca.prototype.depositarPoup = function (valor) {
    this.saldoPoup += valor
}

// console.log(juliana);
// juliana.depositarPoup(50);
// console.log(juliana.saldoPoup);

console.log(andre.hasOwnProperty("saldoPoup"))
console.log(ju.hasOwnProperty("saldoPoup"))
console.log(andre instanceof Cliente)
console.log(typeof andre)
console.log(typeof ju)
console.log(ju instanceof ClientePoupanca)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)