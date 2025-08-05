const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/api', routes); // Todas as rotas começam com /api

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
