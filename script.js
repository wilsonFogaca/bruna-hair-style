document.getElementById('agendamentoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;
    const procedimento = document.getElementById('procedimento').value;

    // Salva no localStorage (para demonstração)
    const agendamento = {
        nome,
        data,
        horario,
        procedimento,
        timestamp: new Date().toISOString()
    };

    let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    agendamentos.push(agendamento);
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

    // Mostra mensagem de sucesso
    document.getElementById('successMessage').style.display = 'block';

    // Limpa o formulário
    this.reset();

    // Scroll para cima
    window.scrollTo({ top: 0, behavior: 'smooth' });
});