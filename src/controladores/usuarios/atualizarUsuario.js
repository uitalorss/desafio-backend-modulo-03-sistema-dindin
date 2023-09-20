const bcrypt = require("bcrypt");
const { verificaUsuarioValido } = require("../../repositorios/usuarios/verificaUsuario");
const { alteracaoDeUsuarioNoBanco } = require("../../repositorios/usuarios/alteracaoDeUsuarioNoBanco");
const { obterUsuario } = require("../../repositorios/usuarios/obterUsuario");
const { verificaEmailValido } = require("../../uteis/verificaEmailValido");


const atualizarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;
  const { usuario_id } = req;
  const id = usuario_id
  const usuario = await obterUsuario(id);

  try {
    if (!nome || !email || !senha) {
      return res.status(400).json({ mensagem: "Todos os campos são obrigatórios." });
    }
    const emailValido = verificaEmailValido(email);
    if (!emailValido) {
      return res.status(400).json({ mensagem: "E-mail passado não é um e-mail válido." });
    }
    if (email !== usuario.email) {
      const usuarioIndisponivel = await verificaUsuarioValido(email);
      if (usuarioIndisponivel) {
        return res.status(400).json({ mensagem: "O e-mail informado já está sendo utilizado por outro usuário." })
      }
    }
    const senhaEncriptada = await bcrypt.hash(senha, 10);
    await alteracaoDeUsuarioNoBanco({ nome, email, senhaEncriptada, id })
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno no servidor." })
  }
}

module.exports = { atualizarUsuario }