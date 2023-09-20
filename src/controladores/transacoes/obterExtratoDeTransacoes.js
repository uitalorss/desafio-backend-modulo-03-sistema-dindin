const { listarTransacoesNoBanco } = require("../../repositorios/transacoes/listarTransacoes");
const { obterEntradas } = require("../../uteis/obterEntradas");
const { obterSaidas } = require("../../uteis/obterSaidas");
const { obterTotalDeSaidas } = require("../../uteis/obterTotalDeSaidas");


const obterExtratoDeTransacoes = async (req, res) => {
  const { usuario_id } = req;
  const transacoes = await listarTransacoesNoBanco(usuario_id);
  const extrato = {}

  try {
    extrato.entradas = await obterEntradas(transacoes);
    extrato.saidas = await obterSaidas(transacoes);

    return res.status(200).json(extrato);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno no servidor." })
  }
}

module.exports = { obterExtratoDeTransacoes }