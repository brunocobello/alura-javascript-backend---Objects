function Cliente (nome, idade, email, saldo) {
    this.nome = nome,
    this.idade = idade,
    this.email = email,
    this.saldo = saldo,
    this.depositar = function (valor) {
        saldo += valor
    }
}

const bruno = new Cliente ('Bruno', 26, 'bruno@email.com', 100);
const cobello = new Cliente ('Cobello', 52, 'cobello@email.com', 200);

console.log(bruno);
console.log(cobello);
