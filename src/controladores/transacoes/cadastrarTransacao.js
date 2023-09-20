const { cadastrarTransacaoNoBanco } = require("../../repositorios/transacoes/cadastrarTransacaoNoBanco");
const { verificarCategoriaValida } = require("../../repositorios/transacoes/verificarCategoria");

const cadastrarTransacao = async (req, res) => {
    const { descricao, valor, data, categoria_id, tipo } = req.body;
    const { usuario_id } = req;

    try {
        const categoria = await verificarCategoriaValida(categoria_id);
        if (!categoria) {
            return res.status(400).json({ mensagem: "Categoria informada inválida." });
        }
        const transacao = await cadastrarTransacaoNoBanco({ tipo, descricao, valor, data, usuario_id, categoria_id });
        return res.status(201).json(transacao);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno no servidor." })
    }
}

module.exports = { cadastrarTransacao }