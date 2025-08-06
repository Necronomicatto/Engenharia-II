class Activity {
  constructor({ id, idosoId, descricao, isDone }) {
    this.id = id;
    this.idosoId = idosoId;
    this.descricao = descricao;
    this.isDone = isDone;
  }

  toResponse() {
    return {
      id: this.id,
      idosoId: this.idosoId,
      descricao: this.descricao,
      isDone: this.isDone
    };
  }
}

module.exports = Activity;

