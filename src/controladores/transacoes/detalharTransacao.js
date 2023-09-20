const { detalharTransacaoNoBanco } = require("../../repositorios/transacoes/detalharTransacao");
const { verificarTransacao } = require("../../repositorios/transacoes/verificarTransacao");

const detalharTransacao = async (req, res) => {
    const { id } = req.params;
    const { usuario_id } = req;

    const transacaoValidaDeUsuario = await verificarTransacao({ id, usuario_id });

    if (!transacaoValidaDeUsuario) {
        return res.status(404).json({ mensagem: "Transação não encontrada." })
    }

    try {
        const { id } = req.params;
        const transacoes = await detalharTransacaoNoBanco(id)
        return res.status(200).json(transacoes)
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno no servidor." })
    }

}

module.exports = {
    detalharTransacao
}