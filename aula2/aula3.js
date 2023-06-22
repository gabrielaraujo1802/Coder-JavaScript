for (let i = 0; i < 3; i++) {
  console.log(i);
}

let valorSaque = parseInt(prompt("Digite o valor para saque"));

// notas 20 e notas de 50

const qtdNotas = (valorSaque / 20) & 2;

if ((valorSaque / 20) & 2) {
  console.log("Valor incorreto, digite um valor múltiplo de 20");
} else {
  for (let i = 1; i <= qtdNotas; i++) {
    console.log("Nota numero", i);
  }
}
console.log(qntNotas);
