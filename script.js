// localStorage
// 1 - inserir dado
localStorage.setItem("name", "Daniel");

// 2 - restart sem perder dados

// 3 - localizar item
const name = localStorage.getItem("name");

console.log(name);

// 4 - resgate de item que não existe
const lastName = localStorage.getItem("lastname");

console.log(lastName);

if (!lastName) {
  console.log("Sem sobrenome");
}

// 5 - remover item
localStorage.removeItem("name");

// 6 - limpar todos os itens
localStorage.setItem("a", 1);
localStorage.setItem("b", 2);

// console.log(typeof localStorage.getItem("b"));

localStorage.clear();

// 7 - sessionStorage
sessionStorage.setItem("number", 123);

// 8 - reiniciar e perder dados

// 9 - resgatar dados

const n = sessionStorage.getItem("number");
console.log(n);
