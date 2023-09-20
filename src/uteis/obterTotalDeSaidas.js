

const obterTotalDeSaidas = (transacoes) => {
  const valorSaidas = transacoes.reduce((acc, item) => {
    if (item.tipo === "saida") {
      return acc += item.valor;
    }
  }, 0);
  if (valorSaidas === undefined) {
    return 0;
  }
  return valorSaidas;
}

module.exports = { obterTotalDeSaidas };