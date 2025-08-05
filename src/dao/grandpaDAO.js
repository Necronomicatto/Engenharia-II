const Grandpa = require('../models/Grandpa');

let grandpas = [
  new Grandpa({ id: 1, nome: "José", cpf: "111", tel: "9999-9999", nascimento: "1940-01-01" }),
  // mais idosos
];

exports.readAll = async () => {
  return grandpas;
};

exports.read = async (id) => {
  return grandpas.find(g => g.id == id);
};

exports.create = async (data) => {
  const id = grandpas.length + 1;
  const newGrandpa = new Grandpa({ id, ...data });
  grandpas.push(newGrandpa);
  return newGrandpa;
};
