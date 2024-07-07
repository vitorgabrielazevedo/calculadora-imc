const dados = [
  {
    min: 0,
    max: 18.4,
    classificacao: "Menor que 18,5",
    info: "Baixo peso",
    obesidade: "0",
  },
  {
    min: 18.5,
    max: 24.9,
    classificacao: "Entre 18,5 e 24,9",
    info: "Peso normal",
    obesidade: "0",
  },
  {
    min: 25,
    max: 29.9,
    classificacao: "Entre 25 e 29,9",
    info: "Sobrepeso",
    obesidade: "I",
  },
  {
    min: 30,
    max: 39.9,
    classificacao: "Entre 30 e 39,9",
    info: "Obesidade",
    obesidade: "II",
  },
  {
    min: 40,
    max: 99,
    classificacao: "Maior que 40",
    info: "Obesidade grave",
    obesidade: "III",
  },
];

// selecionando dados

const imcTable = document.querySelector("#imc-table");
const alturaInput = document.querySelector("#altura");
const pesoInput = document.querySelector("#peso");
const calcBtn = document.querySelector("#calc-btn");
const limparBtn = document.querySelector("#limpar-btn");

// funções

const criarTable = (dados) => {
  dados.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("table-dado");

    const classificacao = document.createElement("p");
    classificacao.innerText = item.classificacao;

    const info = document.createElement("p");
    info.innerText = item.info;

    const obesidade = document.createElement("p");
    obesidade.innerText = item.obesidade;

    div.appendChild(classificacao);
    div.appendChild(info);
    div.appendChild(obesidade);

    imcTable.appendChild(div);
  });
};

// eventos

calcBtn.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("hahaha");
});
