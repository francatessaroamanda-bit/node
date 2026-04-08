const express = require('express');
const app = express();

require('./src/startup/db')();

app.use(express.json());

app.use('/jogos', require('./src/routes/jogos'));

app.listen(3000, () => console.log('Rodando na porta 3000'));