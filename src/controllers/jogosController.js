const Jogo = require('../models/Jogo');

class JogosController {

  static async create(req, res) {
    try {
      const { nome, genero, nota, anoLancamento, zerado, amigo } = req.body;

      if (!nome || !genero || !nota || !anoLancamento || !amigo) {
        return res.status(400).json({ message: "Dados inválidos." });
      }

      const jogoData = {
        nome,
        genero,
        nota,
        anoLancamento,
        zerado,
        amigo
      };

      const novoJogo = await Jogo.create(jogoData);

      return res.status(201).json({
        message: 'Jogo criado com sucesso',
        data: novoJogo
      });

    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao criar jogo',
        error: error.message
      });
    }
  }

  static async getAll(req, res) {
    try {
      const { genero, ano } = req.query;

      let filtro = { isActive: true };

      if (genero) filtro.genero = genero;
      if (ano) filtro.anoLancamento = ano;

      const jogos = await Jogo.find(filtro);

      return res.status(200).json({ data: jogos });

    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao listar jogos',
        error: error.message
      });
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;

      const jogo = await Jogo.findById(id);

      if (!jogo) {
        return res.status(404).json({ message: 'Jogo não encontrado' });
      }

      return res.status(200).json({ data: jogo });

    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao buscar jogo',
        error: error.message
      });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, genero, nota, anoLancamento, zerado } = req.body;

      const updatedData = {
        nome,
        genero,
        nota,
        anoLancamento,
        zerado
      };

      const jogoAtualizado = await Jogo.findByIdAndUpdate(id, updatedData, { new: true });

      if (!jogoAtualizado) {
        return res.status(404).json({ message: 'Jogo não encontrado' });
      }

      return res.status(200).json({
        message: 'Jogo atualizado com sucesso',
        data: jogoAtualizado
      });

    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao atualizar jogo',
        error: error.message
      });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;

      const jogo = await Jogo.findByIdAndUpdate(id, { isActive: false });

      if (!jogo) {
        return res.status(404).json({ message: 'Jogo não encontrado' });
      }

      return res.status(200).json({
        message: 'Jogo desativado com sucesso'
      });

    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao deletar jogo',
        error: error.message
      });
    }
  }
}

module.exports = JogosController;