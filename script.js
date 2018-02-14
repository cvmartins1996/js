let valorA = 12;
let valorB = 18;

let oMaiorValor =  (function (a, b) {
  let resultado;
  a > b ? resultado = ["a", a] : resultado = ["b", b];
  return resultado;
})(valorA, valorB);

console.log(oMaiorValor);
