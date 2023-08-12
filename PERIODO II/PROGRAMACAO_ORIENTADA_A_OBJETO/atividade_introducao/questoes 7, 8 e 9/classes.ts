class Conta {
    id: number = 0;
    nome: String = "";
    saldo: number = 0;

    depositar(valor: number) {
        this.saldo = this.saldo + valor;
    }
}

let c1: Conta = new Conta();
c1.id = 1
c1.depositar(100);
c1.depositar(20);
console.log(c1.saldo)

let c2: Conta = new Conta();
c2.id = 2;
c2.depositar(1000)
console.log(c2)


class Cachorro {
    raca: String = "";
    cor: String = "";
    idade: number = 0;

    latir() {
        console.log('au au')
    }

    latirRosnando() {
        this.latir();
        console.log("rrrrr ");
    }
}

let cachorro1: Cachorro = new Cachorro();
cachorro1.cor = "preto";
cachorro1.raca = "pinscher";
cachorro1.latirRosnando();