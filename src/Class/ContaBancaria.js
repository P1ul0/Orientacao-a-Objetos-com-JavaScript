class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }

  sacar(valor) {
    if (this._saldo < valor) {
      return "saldo insuficiente";
    }

    this._saldo -= valor;
    return "saque bem sucedido";
  }

  depositar(valor) {
    if (valor <= 0) {
      return "operação negada";
    } 

    this._saldo += valor;
      return this._saldo;
  }

  set saldo(saldo) {
    this._saldo = saldo;
  }

  get saldo() {
    return this._saldo;
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero), 
    this.tipo = "conta corrente";
    this._cartaoCredito = cartaoCredito;
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }
}


class ContaPoupaca extends ContaBancaria {
  constructor(agencia,numero){
      super(agencia,numero)
      this.tipo = "poupança"
  }
}


class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "Conta universitaria";
  }

  saque(valor) {
    if (valor >= 500) {
      return "saque não autorizado";
    }

    this._saldo -= valor;
    return "Seu saldo agora é " + this._saldo;
  }
}
