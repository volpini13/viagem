// Distâncias aproximadas entre os estados
const distancias = {
    "São Paulo": { "Bahia": 1600, "Minas Gerais": 600, "Rio de Janeiro": 400, "Paraná": 400, "Rio Grande do Sul": 1100, "Santa Catarina": 800, "Ceará": 2800, "Pernambuco": 2400, "Sergipe": 2500, "Espírito Santo": 600, "Tocantins": 1500, "Mato Grosso": 1400, "Mato Grosso do Sul": 1000, "Acre": 3000, "Amapá": 3500, "Amazonas": 3800, "Pará": 3500, "Rondônia": 3500, "Roraima": 4000 },
    "Bahia": { "São Paulo": 1600, "Minas Gerais": 1000, "Rio de Janeiro": 1300, "Paraná": 2000, "Rio Grande do Sul": 2700, "Santa Catarina": 2500, "Ceará": 1000, "Pernambuco": 800, "Sergipe": 600, "Espírito Santo": 1300, "Tocantins": 1200, "Mato Grosso": 2000, "Mato Grosso do Sul": 2100, "Acre": 3000, "Amapá": 3200, "Amazonas": 3500, "Pará": 3000, "Rondônia": 3100, "Roraima": 3600 },
    "Minas Gerais": { "São Paulo": 600, "Bahia": 1000, "Rio de Janeiro": 300, "Paraná": 800, "Rio Grande do Sul": 1200, "Santa Catarina": 900, "Ceará": 1800, "Pernambuco": 1600, "Sergipe": 1700, "Espírito Santo": 300, "Tocantins": 1200, "Mato Grosso": 1000, "Mato Grosso do Sul": 900, "Acre": 2400, "Amapá": 2600, "Amazonas": 2800, "Pará": 2500, "Rondônia": 2700, "Roraima": 3000 },
    "Rio de Janeiro": { "São Paulo": 400, "Bahia": 1300, "Minas Gerais": 300, "Paraná": 900, "Rio Grande do Sul": 1400, "Santa Catarina": 1100, "Ceará": 2300, "Pernambuco": 2100, "Sergipe": 2200, "Espírito Santo": 200, "Tocantins": 1300, "Mato Grosso": 1200, "Mato Grosso do Sul": 1100, "Acre": 2900, "Amapá": 3100, "Amazonas": 3200, "Pará": 2900, "Rondônia": 3000, "Roraima": 3400 },
    // Adicione distâncias para outros estados conforme necessário
};

function calcular() {
    const estadoPartida = document.getElementById('estadoPartida').value;
    const estadoDestino = document.getElementById('estadoDestino').value;

    // Verifica se o estado de partida é igual ao estado de destino
    if (estadoPartida === estadoDestino) {
        alert("O estado de partida não pode ser o mesmo que o estado de destino.");
        return;
    }

    const transporteSelecionado = document.getElementById('transporte').value;
    const distanciaKm = distancias[estadoPartida][estadoDestino];
    const precoAviaoPorKm = parseFloat(document.getElementById('precoAviao').value);
    const precoOnibusPorKm = parseFloat(document.getElementById('precoOnibus').value);

    let custo;
    if (transporteSelecionado === 'aviao') {
        custo = distanciaKm * precoAviaoPorKm;
    } else {
        custo = distanciaKm * precoOnibusPorKm;
    }

    // Resultados
    const resultado = `Distância de ${estadoPartida} até ${estadoDestino}: ${distanciaKm} km\n` +
                      `Custo de viagem de ${transporteSelecionado === 'aviao' ? 'avião' : 'ônibus'}: R$ ${custo.toFixed(2)}`;
    document.getElementById('result').value = resultado;
}

function limpar() {
    document.getElementById('estadoPartida').selectedIndex = 0;
    document.getElementById('estadoDestino').selectedIndex = 0;
    document.getElementById('transporte').selectedIndex = 0;
    document.getElementById('precoAviao').value = 0.5;
    document.getElementById('precoOnibus').value = 0.2;
    document.getElementById('result').value = '';
}

function validarEstados() {
    const estadoPartida = document.getElementById('estadoPartida').value;
    const estadoDestino = document.getElementById('estadoDestino').value;

    // Se os estados forem iguais, desabilita o estado de destino
    if (estadoPartida === estadoDestino) {
        document.getElementById('estadoDestino').value = '';
    }
}
