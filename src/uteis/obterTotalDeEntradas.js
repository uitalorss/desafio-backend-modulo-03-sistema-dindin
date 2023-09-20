

const obterTotalDeEntradas = (transacoes) => {
  const valorEntradas = transacoes.reduce((acc, item) => {
    if (item.tipo === "entrada") {
      return acc += item.valor;
    }
  }, 0)
  if (valorEntradas === undefined) {
    return 0;
  }
  return valorEntradas;
}

module.exports = { obterTotalDeEntradas };