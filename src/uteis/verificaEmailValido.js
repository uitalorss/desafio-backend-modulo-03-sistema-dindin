
function verificaEmailValido(email) {
  if (email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i)) {
    return true;
  }
  return false;
}

module.exports = { verificaEmailValido };