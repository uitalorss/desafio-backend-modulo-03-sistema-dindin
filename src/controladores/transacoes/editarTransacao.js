const { verificarCategoria } = require("../../repositorios/categorias/verificarCategoria");
const { atualizarTransacao } = require("../../repositorios/transacoes/atualizarTransacao");
const { verificarTransacao } = require("../../repositorios/transacoes/verificarTransacao");


const editarTransacao = async (req, res) => {
  const { id } = req.params;
  const { usuario_id } = req;
  const { descricao, valor, data, categoria_id, tipo } = req.body;

  try {
    const categoriaValida = await verificarCategoria(categoria_id);
    if (!categoriaValida) {
      return res.status(400).json({ mensagem: "Categoria informada inválida." });
    }
  
    const transacaoValidaDeUsuario = await verificarTransacao({ id, usuario_id });
    if (!transacaoValidaDeUsuario) {
      return res.status(404).json({ mensagem: "Transação não encontrada." })
    }
  
    atualizarTransacao({ descricao, valor, data, categoria_id, tipo, id });
  
    return res.status(204).send();
} catch (error) {
    return res.status(500).json({ mensagem: "Erro interno no servidor." })
  }
}

module.exports = { editarTransacao };