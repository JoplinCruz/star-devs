const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0


btnAvancar.addEventListener("click", function () {

    esconderCartaoSelecionado();
    cartaoAtual++;
    cartaoAtual = cartaoAtual > cartoes.length - 1 ? 0 : cartaoAtual;
    mostrarCartao();

});


btnVoltar.addEventListener("click", function () {

    esconderCartaoSelecionado();
    cartaoAtual--;
    cartaoAtual = cartaoAtual < 0 ? cartoes.length - 1 : cartaoAtual;
    mostrarCartao();

});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
