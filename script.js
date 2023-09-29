// Calcula o saldo de vitórias
function calculoVitoriasESaldo (vitorias, derrotas) {
    const saldo = vitorias - derrotas;

// Determina o nível
let nivel = '';

    if (vitorias < 10) {
        nivel = 'Ferro';

    } else if (vitorias <= 20) {
        nivel = "Bronze";

    } else if (vitorias <= 50) {
        nivel = 'Prata';

    } else if (vitorias <= 80) {
        nivel = 'Ouro';

    } else if (vitorias <= 90) {
        nivel = 'Diamante';

    } else if (vitorias <= 100) {
        nivel = 'Lendário';

    } else {
        nivel = 'Imortal'

    }


//Mostra mensagem de saída
    const mensagem = `O héroi tem um saldo de ${saldo} e está no nível ${nivel}`;

    // Retornar mensagem
    return mensagem
}

const saldoVitorias = calculoVitoriasESaldo (60, 20);

console.log(saldoVitorias)