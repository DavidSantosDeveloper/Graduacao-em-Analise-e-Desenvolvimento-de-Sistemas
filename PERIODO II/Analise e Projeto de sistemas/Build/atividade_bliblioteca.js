"use strict";
/'Classes nucleo'/;
class Bliblioteca {
    constructor() {
        this.lista_de_clientes = [];
        this.lista_de_funcionarios = [];
        this.lista_de_publicacoes = [];
        this.lista_de_emprestimos = [];
        this.lista_de_reservas = [];
    }
    realizarEmprestimo(cliente, funcionario, publicacao) {
        let reserva_que_sera_registrada = new Reserva(cliente, funcionario, publicacao);
        this.lista_de_emprestimos.push(reserva_que_sera_registrada);
    }
}
class Cliente {
}
class Funcionario {
}
/'Classes das Regras de negocio'/;
class Emprestimo {
}
class Reserva {
    constructor(cliente, funcionario, publicacao) {
        this.cliente = cliente;
        this.funcionario = funcionario;
        this.publicacao = publicacao;
    }
}
/' Generalizacoes'/;
class Publicacao {
}
/' Especializacoes'/;
class Livro extends Publicacao {
}
class Revistas extends Publicacao {
}
class Jornal extends Publicacao {
}
