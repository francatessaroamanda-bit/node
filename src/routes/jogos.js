const express = require('express');
const router = express.Router();
const jogos = require('../controllers/jogosController');

router
  .get('/jogos', jogos.getAll)
  .post('/jogos', jogos.create)
  .get('/jogos/:id', jogos.getById)
  .put('/jogos/:id', jogos.update)
  .delete('/jogos/:id', jogos.delete);

module.exports = router;