const semafaroShowBtn = document.getElementById('semafaroShowBtn');
const semafaroContent = document.getElementById('semafaroContent');

semafaroShowBtn.addEventListener('click', () => {
    semafaroContent.classList.toggle('hidden');
});
//

// luzes
const redCircle = document.getElementById('redCircle');
const yellowCircle = document.getElementById('yellowCircle');
const greenCircle = document.getElementById('greenCircle');

// botões de configuração
const buttons = document.getElementById('buttons');

let luzAtual = 'red'; // variável para controlar a luz atual
let intervalId = null; // armazena o id do intervalo

const semafaros = (evento) => { // evento click
    reset(); // reseta as luzes antes de ativar a nova
    semafaroOn[evento.target.id](); // chama a função correspondente ao botão clicado
}

const autoFunction = () => {
    // reseta todas as luzes
    reset();

    // alterna a luz atual
    if (luzAtual === 'red') {
        redCircle.classList.add('bg-red-500');
        luzAtual = 'yellow';
    } else if (luzAtual === 'yellow') {
        yellowCircle.classList.add('bg-yellow-500');
        luzAtual = 'green';
    } else {
        greenCircle.classList.add('bg-green-500');
        luzAtual = 'red';
    }
}

const semafaroOn = {
    'red': () => redCircle.classList.add('bg-red-500'),
    'yellow': () => yellowCircle.classList.add('bg-yellow-500'),
    'green': () => greenCircle.classList.add('bg-green-500'),
    'auto': () => {
        if (intervalId) {
            pararAutomatico(); // para o automático se já estiver ativo
            auto.classList.remove('bg-green-500')
            auto.classList.add('bg-red-500')
        } else {
            reset(); // reseta antes de iniciar o automático
            intervalId = setInterval(autoFunction, 1000); // inicia o intervalo automático
            auto.classList.remove('bg-red-500')
            auto.classList.add('bg-green-500')
        }
    }
}

const reset = () => {
    // remove todas as classes de luz
    redCircle.classList.remove('bg-red-500');
    yellowCircle.classList.remove('bg-yellow-500');
    greenCircle.classList.remove('bg-green-500');
}

const pararAutomatico = () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null; // reseta o id do intervalo
    }
}

// adiciona evento para os botões
buttons.addEventListener('click', semafaros); // gera evento click
