const { obterTotalDeSaidas } = require("./obterTotalDeSaidas");


const obterSaidas = (transacoes) => {
  const listaSaidas = transacoes.filter((item) => {
    return item.tipo === "saida";
  })
  return obterTotalDeSaidas(listaSaidas);
}

module.exports = { obterSaidas };