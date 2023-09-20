const { verificarCategoria } = require("../../repositorios/categorias/verificarCategoria");
const { atualizarTransacao } = require("../../repositorios/transacoes/atualizarTransacao");
const { verificarTransacao } = require("../../repositorios/transacoes/verificarTransacao");


const editarTransacao = async (req, res) => {
  const { id } = req.params;
  const { usuario_id } = req;
  const { descricao, valor, data, categoria_id, tipo } = req.body;
  if (!descricao || !valor || !data || !categoria_id || !tipo) {
    return res.status(400).json({ mensage: "Todos os campos obrigatórios devem ser informados." })
  }

  if (tipo !== "saida" && tipo !== "entrada") {
    return res.status(400).json({ mensagem: "Campo tipo possui valores inválidos." });
  }

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
}

module.exports = { editarTransacao };