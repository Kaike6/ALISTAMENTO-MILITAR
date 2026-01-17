const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector(".sub");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});
