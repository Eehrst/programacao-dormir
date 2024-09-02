const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
{
    enunciado: "Dormir é muito mais do que simplesmente descansar. É um processo fundamental para a saúde física e mental. Durante o sono, nosso corpo realiza uma série de funções essenciais, como a reparação de tecidos, a consolidação da memória e o fortalecimento do sistema imunológico. Além disso, dormir bem está diretamente ligado ao nosso bem-estar emocional, à capacidade de concentração e ao desempenho cognitivo ao longo do dia. Você se considera uma pessoa que dorme o suficiente? ",
    alternativas: [
        {
            texto: "Sim, sempre durmo a quantidade de horas recomendada.",
            afirmacao: "Dormir é essencial para a saúde física e mental. "
        },
        {
            texto: "Não, frequentemente sinto que não durmo o bastante.",
            afirmacao: "Dormir mal pode trazer sérias consequências para o corpo e a mente. "
        }
    ]
},
{
    enunciado: "Qual é a sua estratégia preferida para relaxar antes de dormir?",
    alternativas: [
        {
            texto: "Ler um livro ou ouvir música calma.",
            afirmacao: "Durante o sono, o corpo se recupera e se revitaliza. "
        },
        {
            texto: "Assistir a filmes ou séries até tarde da noite.",
            afirmacao: "Noites de sono inadequadas podem levar à fadiga crônica e irritabilidade durante o dia. "
        }
    ]
},
{
    enunciado: "Como você se sente quando não dorme bem durante alguns dias?",
    alternativas: [
        {
            texto: "Fico irritado e com dificuldade de concentração.",
            afirmacao: " Uma boa noite de sono melhora a concentração e o humor. "
        },
        {
            texto: " Sinto-me normal, não percebo muita diferença.",
            afirmacao: "A falta de sono de qualidade compromete a capacidade de concentração e tomada de decisões.  "
        }
    ]
},
{
    enunciado: "Você costuma seguir uma rotina de horários para dormir e acordar?",
    alternativas: [
        {
            texto: " Sim, tento manter horários regulares todos os dias.",
            afirmacao: " É importante manter horários regulares de sono para um descanso eficaz. "
        },
        {
            texto: " Não, meus horários de sono variam bastante.",
            afirmacao: " Problemas de saúde como aumento do estresse, pressão arterial elevada e maior risco de doenças cardiovasculares estão associados à privação de sono."
        }
    ]
},
{
    enunciado: "Você acredita que a qualidade do seu sono afeta seu desempenho diário?",
    alternativas: [
        {
            texto: "Sim, percebo que quando durmo bem, me sinto mais produtivo.",
            afirmacao: " Qualidade de vida e bem-estar estão diretamente ligados a uma boa qualidade de sono."
        },
        {
            texto: "Não, acho que minha produtividade não é afetada pelo sono.s",
            afirmacao: " É essencial priorizar hábitos que promovam um sono reparador para manter a saúde e o bem-estar geral. "
        }
    ]
},
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "...";
function mostraPergunta() {
if (atual >= perguntas.length) {
mostraResultado();

return;
}
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "...";
mostraAlternativas();
}
function mostraAlternativas() {
for (const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document.createElement("button");
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener("click", () =>
respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativas);
}
}
function respostaSelecionada(opcaoSelecionada) {
const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal += afirmacoes + "... ";
atual++;
mostraPergunta();
}
function mostraResultado() {
caixaPerguntas.textContent = "importania do sono "
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "...";
}
mostraPergunta();