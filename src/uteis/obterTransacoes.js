const { obterIdDeCategoria } = require("../repositorios/categorias/obterIdDeCategoria");
const { obterTransacoesPorCategoria } = require("./obterTransacoesPorCategoria");


const obterTransacoes = async (categorias, usuario_id) => {
  const identificadoresDeCategoria = await Promise.all(categorias.map(async (item) => {
    item = item[0].toUpperCase() + item.substring(1);
    const id = await obterIdDeCategoria(item);
    return id;
  }))
  return obterTransacoesPorCategoria(identificadoresDeCategoria, usuario_id);
}

module.exports = { obterTransacoes };