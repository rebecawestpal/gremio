// Função para mostrar a tabela do módulo selecionado
function mostrarTabela(moduloId) {
    const curso = document.getElementById("cursoSelect").value;
    
    // Se nenhum curso foi selecionado, não fazer nada
    if (curso === "selecione") {
        alert("Por favor, selecione um curso primeiro.");
        return;
    }
    
    const tabelas = document.querySelectorAll('.tabelasCurso table');
    
    // Esconder todas as tabelas
    tabelas.forEach(t => {
        t.classList.add('tabelaOculta');
        t.style.display = 'none';
    });
    
    // Mostrar a tabela selecionada
    const tabelaId = `tabela_${curso}_${moduloId}`;
    const tabelaSelecionada = document.getElementById(tabelaId);
    
    if (tabelaSelecionada) {
        tabelaSelecionada.classList.remove('tabelaOculta');
        tabelaSelecionada.style.display = 'table';
        
        // Adicionar atributos data-label para responsividade
        const ths = tabelaSelecionada.querySelectorAll('thead th');
        const tds = tabelaSelecionada.querySelectorAll('tbody td');
        
        ths.forEach((th, index) => {
            const label = th.textContent;
            tds.forEach(td => {
                if (td.cellIndex === index) {
                    td.setAttribute('data-label', label);
                }
            });
        });
    }
}

// Adicionar data-label à tabela de professores quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Preparar a tabela de professores para responsividade
    const professorThs = document.querySelectorAll('.professores-table thead th');
    const professorTds = document.querySelectorAll('.professores-table tbody td');
    
    professorThs.forEach((th, index) => {
        const label = th.textContent;
        professorTds.forEach(td => {
            if (td.cellIndex === index) {
                td.setAttribute('data-label', label);
            }
        });
    });
    
    // Adicionar evento de change ao select
    document.getElementById('cursoSelect').addEventListener('change', function() {
        // Esconder todas as tabelas quando o curso é alterado
        const tabelas = document.querySelectorAll('.tabelasCurso table');
        tabelas.forEach(t => {
            t.classList.add('tabelaOculta');
            t.style.display = 'none';
        });
    });
});