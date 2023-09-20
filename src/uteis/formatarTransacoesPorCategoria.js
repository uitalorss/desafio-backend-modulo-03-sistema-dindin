

const formatarTransacoesPorCategoria = (transacoes) => {
  const transacoesFormatadas = [];
  transacoes.map((item) => {
    for (const transacao of item) {
      transacoesFormatadas.push(transacao);
    }
  })
  return transacoesFormatadas;
}

module.exports = { formatarTransacoesPorCategoria };