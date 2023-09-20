const { listarTransacoesNoBanco } = require("../../repositorios/transacoes/listarTransacoes");
const { formatarTransacoesPorCategoria } = require("../../uteis/formatarTransacoesPorCategoria");
const { obterTransacoes } = require("../../uteis/obterTransacoes");

const listarTransacoes = async (req, res) => {
    const { usuario_id } = req;
    const { filtro } = req.query;

    try {
        if (filtro !== undefined) {
            const transacoesPorCategorias = await obterTransacoes(filtro, usuario_id);
            const transacoes = formatarTransacoesPorCategoria(transacoesPorCategorias);
            return res.status(200).json(transacoes)
        }
        const transacoes = await listarTransacoesNoBanco(usuario_id);
        return res.status(200).json(transacoes)
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno no servidor." })
    }

}

module.exports = {
    listarTransacoes
}