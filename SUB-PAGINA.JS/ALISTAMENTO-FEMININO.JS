
const nascimento = document.querySelector("#nascimento");
const botao = document.querySelector("#btn-verificar");
const mensagem = document.querySelector("#mensagem");

const cpf = document.querySelector("#cpf");
const nome = document.querySelector("#nome");
const mae = document.querySelector("#mae");
const avancar = document.querySelector("#avancar");

/* ===== VERIFICA IDADE ===== */
botao.addEventListener("click", () => {
    if (nascimento.value === "") {
        alert("Preencha o ano de nascimento");
        return;
    }

    const anoNascimento = Number(nascimento.value);
    const anoAtual = new Date().getFullYear();

    if (anoNascimento < 1900 || anoNascimento > anoAtual) {
        alert("Ano de nascimento inválido");
        return;
    }

    const idade = anoAtual - anoNascimento;

    if (idade >= 18 && idade <= 45) {
        mensagem.innerText = "Você PRECISA se alistar ate esse ano";
    } else {
        mensagem.innerText = "Você NÃO precisa se alistar";
        return;
    }
});

/* ===== BLOQUEAR NÚMEROS NO NOME ===== */
nome.addEventListener("input", () => {
    nome.value = nome.value.replace(/[0-9]/g, "");
});

mae.addEventListener("input", () => {
    mae.value = mae.value.replace(/[0-9]/g, "");
});

/* ===== MÁSCARA CPF ===== */
cpf.addEventListener("input", () => {
    let valor = cpf.value.replace(/\D/g, "");

    if (valor.length > 11) valor = valor.slice(0, 11);

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    cpf.value = valor;



/* ===== MENU HAMBÚRGUER ===== */
const btnHamburguer = document.querySelector('.hamburguer');
const menuSub = document.querySelector('.sub');

btnHamburguer.addEventListener('click', () => {
    menuSub.classList.toggle('ativo');
});
});
if(avancar != null){
avancar.addEventListener("click", (e) => {
    if (cpf.value === "" || nome.value === "" || mae.value === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }else{
        alert("Formulário enviado com sucesso!");
    }
    
});
}