class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome,
        this.email = email,
        this.cpf = cpf,
        this.saldo = saldo
    }

    depositar ( valor ) {
        this.saldo += valor;
        console.log(`Você depositou ${valor}`);
    }

    exibirSaldo () {
        console.log(`Seu saldo em conta corrente é: ${this.saldo} `);
    }    
}

const bruno = new Cliente ('Bruno', 'bruno@email.com', '20030060047', 100);

bruno.exibirSaldo();
bruno.depositar(50);
bruno.exibirSaldo();