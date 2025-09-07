const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let currentDate = new Date(); // Data de hoje para referência constante
let today = new Date(); // Cria uma constante para o "hoje"

const eventos = [
    { dia: 28, mes: 7, descricao: "Fim das Férias" }, // 28 de agosto
    { dia: 7, mes: 8, descricao: "Reunião de Pais e Mestres" }, //7 de setembro
    { dia: 9, mes: 9, descricao: "Prosa e Poesia" }, // 9 de outubro
    { dia: 15, mes: 9, descricao: "Dia do Professor (Feriado)" }, // 15 de outubro
    { dia: 27, mes: 9, descricao: "Suspensão de atividades" }, // 27 de outubro
    { dia: 6, mes: 10, descricao: "Mostra Tecnica" },  // 6 de novembro
    { dia: 7, mes: 10, descricao: "Mostra Tecnica" }, // 7 de novembro
    { dia: 20, mes: 10, descricao: "Dia Nacional da Consciência Negra" }, // 20 de novembro
    { dia: 21, mes: 10, descricao: "Suspensão de atividades" } // 21 de novembro
];

// Função para gerar o calendário
function generateCalendar(date) {
    const month = date.getMonth();
    const year = date.getFullYear();

    // Set month and year in the header
    document.getElementById("monthYear").textContent = `${monthNames[month]} ${year}`;

    // Get the first day of the month and the number of days in the month
    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();

    // Get the days for the calendar grid
    let calendarDaysHTML = '';

    // Empty cells before the first day
    for (let i = 0; i < firstDay; i++) {
        calendarDaysHTML += '<div></div>';
    }

    // Add the days of the month
    for (let day = 1; day <= lastDay; day++) {
        // Verifica se o dia é o de hoje
        const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
        const isEventDay = eventos.some(evento => evento.dia === day && evento.mes === month);

        if (isToday) {
            calendarDaysHTML += `<div class="today">${day}</div>`; // Destaque para o dia atual
        } else if (isEventDay) {
            calendarDaysHTML += `<div class="event-day">${day}</div>`; // Destaque para o dia de evento
        } else {
            calendarDaysHTML += `<div>${day}</div>`;
        }
    }

    // Add the days to the calendar
    document.getElementById("calendarDays").innerHTML = `
        <div class="header">Dom</div>
        <div class="header">Seg</div>
        <div class="header">Ter</div>
        <div class="header">Qua</div>
        <div class="header">Qui</div>
        <div class="header">Sex</div>
        <div class="header">Sáb</div>
        ${calendarDaysHTML}
    `;
}

// Navegação para o mês anterior e próximo
document.getElementById("prevMonth").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate);
});

document.getElementById("nextMonth").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate);
});

// Geração inicial do calendário
generateCalendar(currentDate);