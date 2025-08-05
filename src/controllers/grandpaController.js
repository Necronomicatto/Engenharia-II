const grandpaDAO = require('../dao/grandpaDAO');

exports.getAll = async (req, res) => {
  try {
    const grandpas = await grandpaDAO.readAll();
    res.json(grandpas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const grandpa = await grandpaDAO.read(req.params.id);
    if (!grandpa) return res.status(404).json({ error: 'Idoso não encontrado' });
    res.json(grandpa);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newGrandpa = await grandpaDAO.create(req.body);
    res.status(201).json(newGrandpa);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
