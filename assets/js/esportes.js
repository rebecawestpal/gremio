function mostrarClassificacao() {
    var modalidadeSelecionada = document.getElementById('modalidade').value;
    var linhas = document.querySelectorAll('#tabela-classificacao tbody tr');

    // Se não houver modalidade selecionada, exibe todas as linhas
    if (modalidadeSelecionada === "") {
        linhas.forEach(function (linha) {
            linha.style.display = '';
        });
    } else {
        // Filtra as linhas da tabela
        linhas.forEach(function (linha) {
            if (linha.getAttribute('data-modalidade') === modalidadeSelecionada) {
                linha.style.display = '';
            } else {
                linha.style.display = 'none';
            }
        });
    }
}