const express = require('express');
const router = express.Router();

const workerController = require('../controllers/workerController');
const grandpaController = require('../controllers/grandpaController');
const activityController = require('../controllers/activityController');

// T1 - Login
router.post('/login', workerController.login);

// T2 - Lista de Idosos (Home)
router.get('/grandpas', grandpaController.getAll);

// T3 - Detalhe de um Idoso
router.get('/grandpas/:id', grandpaController.getById);

// T4 - Atualizar Atividade
router.put('/activities/:id', activityController.update);

// T5 - Criar novo Idoso
router.post('/grandpas', grandpaController.create);

module.exports = router;
