

const obterTotalDeEntradas = (transacoes) => {
  const valorEntradas = transacoes.reduce((item) => {
    if (item.tipo === "entrada") {
      return item.valor;
    }
  }, 0)
  if (valorEntradas === undefined) {
    return 0;
  }
  return valorEntradas;
}

module.exports = { obterTotalDeEntradas };