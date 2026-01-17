const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector(".sub");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});

const perguntas = document.querySelectorAll(".servico-militar");

perguntas.forEach((item) => {
  const titulo = item.querySelector(".titulo");

  titulo.addEventListener("click", () => {
    item.classList.toggle("ativa");
  });
});

// ===== FAQ ALISTAMENTO MILITAR =====
const perguntasZero = document.querySelectorAll(".alistamento-militar");

perguntasZero.forEach((item) => {
  const titulo = item.querySelector(".zero1");

  titulo.addEventListener("click", () => {
    item.classList.toggle("ativa");
  });
});

const perguntasDispensa = document.querySelectorAll(".unico3 .Dispensa");

perguntasDispensa.forEach((titulo) => {
  titulo.addEventListener("click", () => {
    titulo.classList.toggle("ativa");
    titulo.nextElementSibling.classList.toggle("ativa");
  });
});

const perguntasAlistamentoFeminino = document.querySelectorAll(".unico4 .AlistamentoFeminino");

perguntasAlistamentoFeminino.forEach((titulo) => {
  titulo.addEventListener("click", () => {
    titulo.classList.toggle("ativa");
    titulo.nextElementSibling.classList.toggle("ativa");
  });
});


// ===== MENU (MOSTRAR / OCULTAR) =====
const visu = document.getElementById("visu");
const oi = document.getElementById("oi");
const c1 = document.getElementById("c1")
const b1 = document.getElementById("b1")

const blocoServico = document.querySelector(".Perguntas");
const blocoAlistamento = document.querySelector(".unico2");
const blocoAli = document.querySelector(".unico3");
const blocob = document.querySelector(".unico4");

blocoServico.style.display = "block";
blocoAlistamento.style.display = "none";
blocoAli.style.display = "none";
blocob.style.display = "none";


visu.addEventListener("click", (e) => {
  e.preventDefault();
  blocoServico.style.display = "block";
  blocoAlistamento.style.display = "none";
  blocoAli.style.display = "none";
  blocob.style.display = "none";

});

oi.addEventListener("click", (e) => {
  e.preventDefault();
  blocoServico.style.display = "none";
  blocoAlistamento.style.display = "block";
  blocoAli.style.display = "none";
  blocob.style.display = "none";

});

c1.addEventListener("click", (e) => {
  e.preventDefault();
  blocoServico.style.display = "none";
  blocoAlistamento.style.display = "none";
  blocoAli.style.display = "block";
  blocob.style.display = "none";

});

b1.addEventListener("click", (e) => {
  e.preventDefault();
  blocoServico.style.display = "none";
  blocoAlistamento.style.display = "none";
  blocoAli.style.display = "none";
  blocob.style.display = "block";

});


