// window.onload = () => {

// };

// capturando as bolas (divs) que são estilizadas pela classe .ball contidas dentro do arquivoo style.css.;
// criando uma const de nome getCaptureClass que irá receber as divis que são refereciadas pela classe ball;
// querySelectorAll foi o métod que capturou de fatos as divs que serão trabalhadas no DOM
const getCaptureClass = document.querySelectorAll('.ball');

// Fazendo referência ao Contéudo de pesquisa: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript

/** A função Math.random() retorna um número float aleatório de 0 a 1. Ao multiplicar por 255, estamos dizendo que o valor máximo para o valor de qualquer elemento do rgb seja de 0 a 255. */

function gerarCor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgba(${r}, ${g}, ${b})`;
}

for (let i = 0; i < getCaptureClass.length; i += 1) {
  getCaptureClass[i].style.background = gerarCor();
}
