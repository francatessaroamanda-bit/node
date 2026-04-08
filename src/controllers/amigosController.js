const Amigo = require('../models/Amigo');

class AmigosController {

  // Criar
  static async create(req, res) {
    try {
      const { nome, sobrenome, idade } = req.body;

      if (!nome || !idade) {
        return res.status(400).json({ message: "Dados inválidos." });
      }

      const amigoData = {
        nome,
        sobrenome,
        idade
      };

      const novoAmigo = await Amigo.create(amigoData);

      return res.status(201).json({
        message: 'Amigo criado com sucesso',
        data: novoAmigo
      });

    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao criar amigo',
        error: error.message
      });
    }
  }

  // Listar todos
  static async getAll(req, res) {
    try {
      const amigos = await Amigo.find();

      return res.status(200).json({ data: amigos });

    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao listar amigos',
        error: error.message
      });
    }
  }

  // Buscar por ID
  static async getById(req, res) {
    try {
      const { id } = req.params;

      const amigo = await Amigo.findById(id);

      if (!amigo) {
        return res.status(404).json({ message: 'Amigo não encontrado' });
      }

      return res.status(200).json({ data: amigo });

    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao buscar amigo',
        error: error.message
      });
    }
  }

  // Atualizar
  static async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, sobrenome, idade } = req.body;

      const updatedData = {
        nome,
        sobrenome,
        idade
      };

      const amigoAtualizado = await Amigo.findByIdAndUpdate(id, updatedData, { new: true });

      if (!amigoAtualizado) {
        return res.status(404).json({ message: 'Amigo não encontrado' });
      }

      return res.status(200).json({
        message: 'Amigo atualizado com sucesso',
        data: amigoAtualizado
      });

    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao atualizar amigo',
        error: error.message
      });
    }
  }

  // Deletar
  static async delete(req, res) {
    try {
      const { id } = req.params;

      const amigo = await Amigo.findByIdAndDelete(id);

      if (!amigo) {
        return res.status(404).json({ message: 'Amigo não encontrado' });
      }

      return res.status(200).json({
        message: 'Amigo deletado com sucesso'
      });

    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao deletar amigo',
        error: error.message
      });
    }
  }
}

module.exports = AmigosController;