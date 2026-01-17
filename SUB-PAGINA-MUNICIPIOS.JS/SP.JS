const ufSelect = document.querySelector("#uf");
const municipioSelect = document.querySelector("#municipio");

const municipiosPorEstado = {
    AC: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauacá", "Feijó"],
    AL: ["Maceió", "Arapiraca", "Rio Largo", "Palmeira dos Índios", "Penedo"],
    AP: ["Macapá", "Santana", "Laranjal do Jari", "Oiapoque", "Porto Grande"],
    AM: ["Manaus", "Parintins", "Itacoatiara", "Manacapuru", "Coari"],
    BA: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Itabuna"],
    CE: ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú", "Sobral"],
    DF: ["Brasília", "Ceilândia", "Taguatinga", "Samambaia", "Plano Piloto"],
    ES: ["Vitória", "Vila Velha", "Serra", "Cariacica", "Cachoeiro de Itapemirim"],
    GO: ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde", "Luziânia"],
    MA: ["São Luís", "Imperatriz", "São José de Ribamar", "Timon", "Caxias"],
    MT: ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop", "Tangará da Serra"],
    MS: ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá", "Ponta Porã"],
    MG: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim"],
    PA: ["Belém", "Ananindeua", "Santarém", "Marabá", "Parauapebas"],
    PB: ["João Pessoa", "Campina Grande", "Santa Rita", "Patos", "Bayeux"],
    PR: ["Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel"],
    PE: ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru", "Petrolina"],
    PI: ["Teresina", "Parnaíba", "Picos", "Piripiri", "Floriano"],
    RJ: ["Rio de Janeiro", "Niterói", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu"],
    RN: ["Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante", "Macaíba"],
    RS: ["Porto Alegre", "Caxias do Sul", "Canoas", "Pelotas", "Santa Maria"],
    RO: ["Porto Velho", "Ji-Paraná", "Ariquemes", "Vilhena", "Cacoal"],
    RR: ["Boa Vista", "Rorainópolis", "Caracaraí", "Pacaraima", "Cantá",],
    SC: ["Florianópolis", "Joinville", "Blumenau", "São José", "Chapecó",
        "Criciúma", "Itajaí", "Jaraguá do Sul", "Palhoça", "Balneário Camboriú"],
    SP: ["São Paulo", "Guarulhos", "Campinas", "São Bernardo do Campo", "Santo André",
        "Adamantina", "Adolfo", "Aguaí", "Águas da Prata", "Águas de Lindóia",
        "Águas de Santa Bárbara", "Águas de São Pedro", "Agudos", "Alambari",
        "Alfredo Marcondes", "Altair", "Altinópolis", "Alto Alegre", "Alumínio"],
    SE: ["Aracaju", "Nossa Senhora do Socorro", "Lagarto", "Itabaiana", "São Cristóvão",
        "Aquidabã", "Areia Branca", "Barra dos Coqueiros", "Boquim", "Brejo Grande"],
    TO: ["Palmas", "Araguaína", "Gurupi", "Porto Nacional", "Paraíso do Tocantins",
        "Abreulândia", "Aguiarnópolis", "Aliança do Tocantins", "Almas", "Alvorada"]
};


ufSelect.addEventListener("change", () => {

    municipioSelect.innerHTML = '<option value="" disabled selected>Selecione o município</option>';

    const estadoSelecionado = ufSelect.value;
    const cidades = municipiosPorEstado[estadoSelecionado];

    if (cidades) {
        cidades.forEach(cidade => {
            const option = document.createElement("option");
            option.value = cidade;
            option.textContent = cidade;
            municipioSelect.appendChild(option);
        });
    }
});