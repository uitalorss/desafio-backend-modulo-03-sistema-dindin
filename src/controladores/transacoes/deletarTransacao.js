const { deletarTransacaoNoBanco } = require("../../repositorios/transacoes/deletarTransacaoNoBanco");
const { verificarTransacao } = require("../../repositorios/transacoes/verificarTransacao");

const deletarTransacao = async (req, res) => {
    const { id } = req.params;
    const { usuario_id } = req;
    try {
        const transacaoValidaDeUsuario = await verificarTransacao({ id, usuario_id });
        if (!transacaoValidaDeUsuario) {
            return res.status(404).json({ mensagem: "Transação não encontrada." })
        }

        const exclusao = await deletarTransacaoNoBanco(id)
        return res.status(204).json(exclusao)
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno no servidor." })
    }
}

module.exports = {
    deletarTransacao
}