// exports.gerarContagem = (inicio, fim) => {
//   const resultado = [];
//   const binariosAcumulados = [];
//   const passo = inicio <= fim ? 1 : -1;

//   for (let i = inicio; passo > 0 ? i <= fim : i >= fim; i += passo) {
//     const bin = i.toString(2);
//     binariosAcumulados.push(bin);
//     const binarioConcat = binariosAcumulados.join('');
//     resultado.push({ decimal: i, binario: binarioConcat });
//   }

//   return resultado;
// };

exports.gerarContagem = (inicio, fim) => {
  const resultado = [];
  const passo = inicio <= fim ? 1 : -1;

  //   soma mais 1 ao passo
   for (let i = inicio; passo > 0 ? i <= fim : i >= fim; i += passo + 4) {
  
  // for (let i = inicio; passo > 0 ? i <= fim : i >= fim; i += passo) {
    resultado.push({
      decimal: i,
      binario: i.toString(2),
    });
  }

  return resultado;
};
