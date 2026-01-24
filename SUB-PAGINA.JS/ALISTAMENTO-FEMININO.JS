/* ===== SELETORES ===== */
const nascimento = document.querySelector("#nascimento");
const botao = document.querySelector("#btn-verificar");
const mensagem = document.querySelector("#mensagem");

const cpf = document.querySelector("#cpf");
const nome = document.querySelector("#nome");
const mae = document.querySelector("#mae");
const avancar = document.querySelector("#avancar");

const uf = document.querySelector("#uf");
const municipio = document.querySelector("#municipio");

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
        mensagem.innerText = "Você PRECISA se alistar até esse ano";
        mensagem.style.color = "green";
    } else {
        mensagem.innerText = "Você NÃO precisa se alistar";
        mensagem.style.color = "red";
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
});

/* ===== ESTADOS E CIDADES ===== */
const cidadesPorEstado = {
    AC: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira"],
    AL: ["Maceió", "Arapiraca", "Palmeira dos Índios"],
    AP: ["Macapá", "Santana", "Laranjal do Jari"],
    AM: ["Manaus", "Parintins", "Itacoatiara"],
    BA: ["Salvador", "Feira de Santana", "Vitória da Conquista"],
    CE: ["Fortaleza", "Caucaia", "Juazeiro do Norte"],
    DF: ["Brasília"],
    ES: ["Vitória", "Vila Velha", "Serra"],
    GO: ["Goiânia", "Aparecida de Goiânia", "Anápolis"],
    MA: ["São Luís", "Imperatriz", "Caxias"],
    MT: ["Cuiabá", "Várzea Grande", "Rondonópolis"],
    MS: ["Campo Grande", "Dourados", "Três Lagoas"],
    MG: ["Belo Horizonte", "Uberlândia", "Contagem"],
    PA: ["Belém", "Ananindeua", "Santarém"],
    PB: ["João Pessoa", "Campina Grande", "Patos"],
    PR: ["Curitiba", "Londrina", "Maringá"],
    PE: ["Recife", "Olinda", "Caruaru"],
    PI: ["Teresina", "Parnaíba", "Picos"],
    RJ: ["Rio de Janeiro", "Niterói", "Duque de Caxias"],
    RN: ["Natal", "Mossoró", "Parnamirim"],
    RS: ["Porto Alegre", "Caxias do Sul", "Pelotas"],
    RO: ["Porto Velho", "Ji-Paraná", "Ariquemes"],
    RR: ["Boa Vista"],
    SC: ["Florianópolis", "Joinville", "Blumenau"],
    SP: ["São Paulo", "Campinas", "Santos", "Guarulhos"],
    SE: ["Aracaju", "Itabaiana", "Lagarto"],
    TO: ["Palmas", "Araguaína", "Gurupi"]
};

uf.addEventListener("change", () => {
    municipio.innerHTML = '<option disabled selected>Selecione o município</option>';

    const estadoSelecionado = uf.value;

    if (!cidadesPorEstado[estadoSelecionado]) return;

    cidadesPorEstado[estadoSelecionado].forEach(cidade => {
        const option = document.createElement("option");
        option.value = cidade;
        option.textContent = cidade;
        municipio.appendChild(option);
    });
});

/* ===== MENU HAMBÚRGUER ===== */
const btnHamburguer = document.querySelector(".hamburguer");
const menuSub = document.querySelector(".sub");

if (btnHamburguer) {
    btnHamburguer.addEventListener("click", () => {
        menuSub.classList.toggle("ativo");
    });
}

/* ===== VALIDAÇÃO FINAL ===== */
if (avancar) {
    avancar.addEventListener("click", (e) => {
        if (
            nascimento.value === "" ||
            cpf.value === "" ||
            nome.value === "" ||
            mae.value === "" ||
            uf.value === "" ||
            municipio.value === ""
        ) {
            e.preventDefault();
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        alert("Formulário enviado com sucesso!");
    });
}
