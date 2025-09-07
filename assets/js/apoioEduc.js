function mostrarTabela(moduloId) {
    const curso = document.getElementById("cursoSelect").value;
    const tabelas = document.querySelectorAll('.tabelasCurso table');

    tabelas.forEach(t => t.classList.add('tabelaOculta'));

    const tabelaId = `tabela_${curso}_${moduloId}`;
    const tabelaSelecionada = document.getElementById(tabelaId);

    if (tabelaSelecionada) {
        tabelaSelecionada.classList.remove('tabelaOculta');
    }
}