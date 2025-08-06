class Worker {
  constructor({ id, nome, cpf, senha }) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.senha = senha; // nunca enviar no response
  }

  toResponse() {
    return {
      id: this.id,
      nome: this.nome,
      cpf: this.cpf
    };
  }
}

module.exports = Worker;

