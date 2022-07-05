const nameForm = document.querySelector("#name-form");
const welcomeContainer = document.querySelector("#welcome");
const logoutBtn = document.querySelector("#logout");

nameForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.querySelector("#name");

  localStorage.setItem("name", nameInput.value); // Essa propriedade consegue pegar o valor digitado no input

  nameInput.value = "";

  checkUser();
});

function checkUser() {
    const userName = document.querySelector("#name")

    if(userName) {
        nameForm.style.display = "none";

        welcomeContainer.style.display = "block";
    } else {
        window.alert("Por favor insira seu nome, no campo abaixo!");
    }


}
