const workerDAO = require('../dao/workerDAO');

exports.login = async (req, res) => {
  const { cpf, pass } = req.body;

  try {
    const worker = await workerDAO.login(cpf, pass);
    if (!worker) return res.status(401).json({ error: 'Credenciais inválidas' });
    
    res.json(worker); // ou gerar token se necessário
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
