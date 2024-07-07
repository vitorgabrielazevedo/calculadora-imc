// selecionando dados

const alturaInput = document.querySelector("#altura");
const pesoInput = document.querySelector("#peso");
const calcBtn = document.querySelector("#calc-btn");
const limparBtn = document.querySelector("#limpar-btn");

// funções

const calcularImc = (altura, peso) => {
  const imc = peso / altura ** 2;

  console.log(imc);
};

// eventos

calcBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const altura = alturaInput.value;

  console.log(altura);

  //   calcularImc(altura, peso);
});
