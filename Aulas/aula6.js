const array = [
  {
    nome: "Samira",
    idade: 25,
    estudante: false,
  },
  {
    nome: "Amora",
    idade: 3,
    estudante: false,
  },
  1,
  "c1",
  true,
];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

array.push("batatinha");
array.unshift("primeiro");
console.log(array);

array.pop();
array.shift();
console.log(array);

const nomes = ["José", "Maria", "Pedro", "Larissa", "Henrique"];
const sobrenomes = ["Costa", "Silva", "Medeiros", "Trindade", "Araujo"];

console.log(nomes.join(", "));

const nomeSobrenomes = nomes.concat(sobrenomes);

console.log(nomeSobrenomes);

const nomesSlice = nomes.slice(2, 3);

console.log(nomesSlice);


const nomes = []

let entrada = prompt("Nomes:")


    switch(entrada) {
        case "ESC" :
            break;
    }