// Contribuição: Gabriel Pinheiro
window.onload = function onload() {
  // eslint-disable-next-line no-use-before-define
  colorResponse();
};

// eslint-disable-next-line no-use-before-define
// window.onload = () => colorResponse();

// capturando as bolas (divs) que são estilizadas pela classe .ball contidas dentro do arquivoo style.css.;
// criando uma const de nome getCaptureClass que irá receber as divis que são refereciadas pela classe ball;
// querySelectorAll foi o métod que capturou de fatos as divs que serão trabalhadas no DOM
const getCaptureClass = document.querySelectorAll('.ball');
const getRgbResult = document.getElementById('rgb-color');
const getButton= document.getElementById('reset-game');

// Fazendo referência ao Contéudo de pesquisa: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript

/** A função Math.random() retorna um número float aleatório de 0 a 1. Ao multiplicar por 255, estamos dizendo que o valor máximo para o valor de qualquer elemento do rgb seja de 0 a 255. */

function gerarCor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgba(${r}, ${g}, ${b})`; // esse retorno coloca na tag html o resultado rgb para ser comparado no momento que o usuario for fazer a escolha
}

function colorResponse() {
  // Neste ponto a constante getRgbResul recebe por meio da propriedade innerTGext o resultado do sorterio de uma das 6 (divs) capturadas pela const gerCaptureClass para que possa fazer o comparativo do background no momento que o usuário efetuar sua escolha
  getRgbResult.innerText = getCaptureClass[Math.floor(Math.random() * 5)].style.backgroundColor;
}

function captureCompareColor(event) {
  const captureAnswer = document.getElementById('answer');
  const colorSelected = event.target.style.backgroundColor;
  if (colorSelected === getRgbResult.innerText) {
    captureAnswer.innerText = 'Acertou!';
  } else {
    captureAnswer.innerText = 'Errou! Tente novamente!';
  }
}

//  nesse ponto fazemos um for passando por todos elementos que possui a classe ball e colocamso uma escutador click em cada um deles
for (let i = 0; i < getCaptureClass.length; i += 1) {
  getCaptureClass[i].addEventListener('click', captureCompareColor);
}
// nesse ponto passamos em todos os elementos que possuem a class ball e geramos cores rgb aleatorias em cada um deles por meio da função gerarCor()
for (let i = 0; i < getCaptureClass.length; i += 1) {
  getCaptureClass[i].style.background = gerarCor();
}

// ref: https://stackoverflow.com/questions/55127650/location-reloadtrue-is-deprecated
function restart() {
  window.location.reload();
}
getButton.addEventListener('click', restart);
