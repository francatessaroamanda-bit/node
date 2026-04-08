const express = require('express');
const router = express.Router();
const amigos = require('../controllers/amigosController');

router
  .get('/amigos', amigos.getAll)
  .post('/amigos', amigos.create)
  .get('/amigos/:id', amigos.getById)
  .put('/amigos/:id', amigos.update)
  .delete('/amigos/:id', amigos.delete);

module.exports = router;