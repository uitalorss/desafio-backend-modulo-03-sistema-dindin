require("dotenv").config();
const jwt = require('jsonwebtoken');

const { verificaUsuarioValido } = require("../../repositorios/usuarios/verificaUsuario");
const { validarSenha } = require("../../uteis/validarSenha");


const logarUsuario = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ mensagem: "Todos os dados são obrigatórios." });
  }

  try {
    const dadosUsuario = await verificaUsuarioValido(email);
    if (!dadosUsuario) {
      return res.status(401).json({ mensagem: "Usuário e/ou senha inválido(s)." })
    }
    const senhaValida = await validarSenha(senha, dadosUsuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ mensagem: "Usuário e/ou senha inválido(s)." })
    }
    const token = jwt.sign({ id: dadosUsuario.id }, process.env.JWT_KEY, { expiresIn: "15m" });
    const { senha: _, ...usuario } = dadosUsuario
    return res.status(200).json({ usuario, token });
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno no servidor." })
  }
}

module.exports = { logarUsuario };