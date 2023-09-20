const bcrypt = require("bcrypt");
const { cadastrarUsuarioNoBanco } = require("../../repositorios/usuarios/cadastrarUsuarioNoBanco");
const { verificaUsuarioValido } = require("../../repositorios/usuarios/verificaUsuario");


const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const usuarioIndisponivel = await verificaUsuarioValido(email);
    if (!usuarioIndisponivel) {
      const senhaEncriptada = await bcrypt.hash(senha, 10);
      const usuario = await cadastrarUsuarioNoBanco({ nome, email, senhaEncriptada });
      return res.status(201).json(usuario);
    }
    return res.status(400).json({ mensagem: "Já existe usuário cadastrado com o e-mail informado." });
  } catch (error) {
    res.status(error.status).json({ mensagem: error.message });
  }
}

module.exports = { cadastrarUsuario }