const contadorModel = require('../models/contadorModel');

exports.index = (req, res) => {
  res.render('index', { numeros: null });
};

exports.contar = (req, res) => {
  const inicio = parseInt(req.body.inicio);
  const fim = parseInt(req.body.fim);

  if (isNaN(inicio) || isNaN(fim)) {
    return res.render('index', { numeros: ['Entrada inválida!'] });
  }

  const numeros = contadorModel.gerarContagem(inicio, fim);
  res.render('index', { numeros });
};
