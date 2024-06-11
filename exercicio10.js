document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formCamisetas').addEventListener('submit', function(event) {
        event.preventDefault();
        calcularPreco();
    });
});

function calcularPreco() {
    const precoPequena = 19;
    const precoMedia = 22;
    const precoGrande = 17;

    const quantidadePequenas = Number(document.getElementById('quantidadePequenas').value);
    const quantidadeMedias = Number(document.getElementById('quantidadeMedias').value);
    const quantidadeGrandes = Number(document.getElementById('quantidadeGrandes').value);

    const total = (quantidadePequenas * precoPequena) + (quantidadeMedias * precoMedia) + (quantidadeGrandes * precoGrande);

    document.getElementById('resultado').textContent = `O preço final é: R$ ${total.toFixed(2)}`;

    resultado.style.fontSize = "1.25rem"
}
