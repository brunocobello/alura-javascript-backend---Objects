function Funcionario (nome, cpf, cargo, salario) {
    this.nome = nome,
    this.cpf = cpf,
    this.cargo = cargo,
    this.salario = salario,
    this.saque = function (valor) {
        this.salario -= valor
    }
}

function FuncionarioTerceiro( nome, cpf, cargo, salario, empresa) {
    Funcionario.call(this, nome, cpf, cargo, salario);
    this.empresa = empresa;
}

// criando os 2 objetos
const fernanda = new Funcionario ('Fernanda Lisboa', '12345678911', 'Consultora TI', 4000);
const ronald = new FuncionarioTerceiro('Ronald Thomaz', '78945612385', 'Desenvolvedor React', 5000, 'NTTBr');

// adicionando uma função a partir do prototype
FuncionarioTerceiro.prototype.transferencia = function (valor) {
    this.salario -= valor;
}

// exibindo as informações na tela
ronald.transferencia(500);
console.log(ronald);

