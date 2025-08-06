class Grandpa {
  constructor({ id, nome, cpf, tel, nascimento }) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.tel = tel;
    this.nascimento = nascimento;
  }

  toResponse() {
    return {
      id: this.id,
      nome: this.nome,
      cpf: this.cpf,
      tel: this.tel,
      nascimento: this.nascimento
    };
  }
}

module.exports = Grandpa;
