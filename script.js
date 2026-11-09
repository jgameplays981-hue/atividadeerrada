const PRECO = 39.9;
const quantidade = 0;

const spanQuantidade = document.getElementById('quantidade');
const spanTotal = document.getElementById('total');

function calcularTotal() {
    let total = quantidade * PRECO;
    if (quantidade > 3) {
        total = total * 0.9;
    }
    return total;
}

function atualizar() {
    spanQuantidade.textContent = quantidade;
    spanTotal.textContent = calcularTotal().toFixed(2);
}

document.getElementById('btnAdicionar').addEventListener('click', () => {
    quantidade++;
    atualizar();
});

document.getElementById('btnLimpar').addEventListener('click', () => {
    quantidade = 0;
    atualizar();
});
