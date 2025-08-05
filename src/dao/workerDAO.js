const Worker = require('../models/Worker');

// Mock DB
const workers = [
  new Worker({ id: 1, nome: "Arthur", cpf: "123", senha: "abc123" }),
  // outros usuários
];

exports.login = async (cpf, senha) => {
  return workers.find(w => w.cpf === cpf && w.senha === senha);
};
