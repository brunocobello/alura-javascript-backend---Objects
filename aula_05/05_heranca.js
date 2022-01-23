class Cliente {
    constructor (nome, cpf, email, saldo) {
        this.nome = nome,
        this.cpf = cpf,
        this.email = email,
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor;
    }

    exibeSaldo () {
        console.log(`Seu saldo é: ${this.saldo}`)
    }
}

class ClientePoupanca extends Cliente {
    constructor (nome, cpf, email, saldo, saldoPoupanca) {
        super(nome, cpf, email, saldo)
        this.saldoPoupanca = 200
    }

    depositarPoupanca (valor) {
        this.saldoPoupanca += valor
        console.log(`Você depositou ${valor}`)
    }

    exibirSaldoPoupanca() {
        console.log(`Seu saldo na poupança é: ${this.saldoPoupanca}`)
    }
}

const priscila = new ClientePoupanca ('Priscila', '12345678987', 'priscila@email.com', 100, 200)

priscila.exibirSaldoPoupanca();
priscila.depositarPoupanca(100);
priscila.exibirSaldoPoupanca();