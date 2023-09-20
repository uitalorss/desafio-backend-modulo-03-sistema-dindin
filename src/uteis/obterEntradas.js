const { obterTotalDeEntradas } = require("./obterTotalDeEntradas");

const obterEntradas = (transacoes) => {
  const listaEntradas = transacoes.filter((item) => {
    return item.tipo === "entrada";
  })
  return obterTotalDeEntradas(listaEntradas);
}

module.exports = { obterEntradas };