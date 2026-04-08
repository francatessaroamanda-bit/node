const express = require('express');
const amigosRoutes = require('../routes/amigos');
const jogosRoutes = require('../src/routes/jogos');

module.exports = function (app) {
  app.use(express.json());
  app.use('/jogos', jogosRoutes);
  app.use('/amigos', amigosRoutes);
};