const express = require('express')

const { cadastrarUsuario } = require('../controladores/usuarios/cadastrarUsuario');
const { listarCategorias } = require('../controladores/categorias/listarCategorias');
const { logarUsuario } = require('../controladores/usuarios/logarUsuario');
const { autenticarUsuario } = require('../intermediarios/autenticarUsuario');
const { detalharUsuario } = require('../controladores/usuarios/detalharUsuario');
const { atualizarUsuario } = require('../controladores/usuarios/atualizarUsuario');
const { listarTransacoes } = require('../controladores/transacoes/listarTransacoes');
const { cadastrarTransacao } = require('../controladores/transacoes/cadastrarTransacao');
const { editarTransacao } = require('../controladores/transacoes/editarTransacao');
const { obterExtratoDeTransacoes } = require('../controladores/transacoes/obterExtratoDeTransacoes');
const { deletarTransacao } = require('../controladores/transacoes/deletarTransacao');
const { detalharTransacao } = require('../controladores/transacoes/detalharTransacao');

const rotas = express()

rotas.post('/usuario', cadastrarUsuario);
rotas.post('/login', logarUsuario);
rotas.get('/categoria', autenticarUsuario, listarCategorias);
rotas.post('/transacao', autenticarUsuario, cadastrarTransacao);
rotas.get('/transacao', autenticarUsuario, listarTransacoes);
rotas.get('/usuario', autenticarUsuario, detalharUsuario);
rotas.put('/usuario', autenticarUsuario, atualizarUsuario);
rotas.put('/transacao/:id', autenticarUsuario, editarTransacao);
rotas.get('/transacao/extrato', autenticarUsuario, obterExtratoDeTransacoes);
rotas.delete('/transacao/:id', autenticarUsuario, deletarTransacao);
rotas.get('/transacao/:id', autenticarUsuario, detalharTransacao);

module.exports = {
    rotas
}