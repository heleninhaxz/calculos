document.addEventListener('DOMContentLoaded', function() {
    let resultado = 5 + 3 * 4 - 8 / 2;
    document.getElementById('resultado').textContent = `O resultado é: ${resultado.toFixed(2)}`;
});