const botaoCalc = document.getElementById('botaoCalc');
const calc = document.getElementById('calc');

botaoCalc.addEventListener('click', () => {
    calc.classList.toggle('hidden');
});
//

'use strict';
const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=op]');

let novoNumero = true;  //indica se um novo número está sendo digitado.
let op;                 //guarda o operador atual (ex: +, -, *, /).
let numeroAnterior;     //armazena o número antes de uma operação ser realizada.

//verifica se já há um operador armazenado.
const operacaoPendente = () => op != undefined;

//Se houver uma operação pendente, pega o número atual do display (numeroAtual), usa o eval() para calcular o resultado da operação anterior e exibe o resultado.
const calcular = () => {
    if(operacaoPendente()){                                             //se houver uma operação pendente
        const numeroAtual = parseFloat(display.textContent);            //obtém o número atual do display
        novoNumero = true;                                              //indica que um novo número será inserido
        const resultado = eval (`${numeroAnterior}${op}${numeroAtual}`) //executa a operação armazenada usando eval
        attDisplay(resultado)                                           //atualiza o display com o resultado
    }
}

//Exibe o número ou resultado no display. Se for um novo número, substitui o conteúdo; senão, concatena o novo número.
const attDisplay = (texto) => {
    if(novoNumero){                 //se for um novo número, substitui o conteúdo do display
        display.textContent = texto;
        novoNumero = false;         //a partir de agora, o número inserido será acumulado no display
    }else{                          //se não for um novo número, concatena o texto ao conteúdo do display
    display.textContent += texto;
}}

/*
evento: É o objeto que contém informações sobre o evento que ocorreu (por exemplo, um click).
evento.target: É o elemento HTML que foi clicado (o alvo do evento).
evento.target.textContent: É o texto dentro do elemento HTML clicado.
(evento pode ser qualquer nome, interessante pensar como se fosse um X da matemática!)
*/ 

//Teclas //Quando um botão de número é clicado, chama inserirNumero que atualiza o display com o número clicado.
    const inserirNumero = (evento) => attDisplay(evento.target.textContent);
    numeros.forEach (numero => numero.addEventListener('click', inserirNumero));

//Operadores //Quando um operador é clicado, calcula o valor pendente, salva o operador e guarda o número anterior para a próxima operação.
    const selecionarOperador = (evento) => { //"evento" remete ao evento de click
        if(!novoNumero) {
            calcular()
            novoNumero = true;
            op = evento.target.textContent;
            numeroAnterior = parseFloat(display.textContent);
        }
    }   //quando clicar em algum operador, diz que os numeros seguintes serão novos para realizar operação e guarda o anterior
    operadores.forEach (op => op.addEventListener('click', selecionarOperador));

    //Botao igual //Quando o botão igual é clicado, calcula o resultado e finaliza a operação.
    const ativarIgual = () => {
        calcular();
        op = undefined; //Desclassifica contas pendentes
    }
    document.getElementById('igual').addEventListener('click', ativarIgual);

    //Botao limpar //Limpa o display e reinicia as variáveis.
    const limpar = () => {
        display.textContent = '';    //limpar display
        op = undefined;              //C calc
        novoNumero = true;           //C calc
        numeroAnterior = undefined;  //C calc
    }
    document.getElementById('limpar').addEventListener('click', limpar);

    //Botao backspace //Remove o último número do display (usando slice). //Inicia do zero e tira o ultimo.
    const removerUltimoNumero = () => display.textContent = display.textContent.slice(0, -1)
    document.getElementById('backspace').addEventListener('click', removerUltimoNumero)

const mapaTeclado = {
    '0' : 'tecla0',
    '1' : 'tecla1',
    '2' : 'tecla2',
    '3' : 'tecla3',
    '4' : 'tecla4',
    '5' : 'tecla5',
    '6' : 'tecla6',
    '7' : 'tecla7',
    '8' : 'tecla8',
    '9' : 'tecla9',
    '-' : 'opSubtracao',
    '+' : 'opSoma',
    '/' : 'opDivisao',
    '*' : 'opVezes',
    'Enter' : 'igual',
    'Backspace' : 'backspace',
    'c' : 'limpar',
}

//Escuta eventos de teclado, verifica se a tecla pressionada está no mapaTeclado e simula um clique no botão correspondente.
const mapearTeclado = (evento) => {
    const tecla = evento.key                                                    //captura a tecla pressionada
    const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) != -1  //verifica se a tecla está no mapaTeclado
    if(teclaPermitida())                                                        //se a tecla for permitida
        document.getElementById(mapaTeclado[tecla]).click();              //simula o clique do botão correspondente à tecla pressionada
}
document.addEventListener('keydown', mapearTeclado);                      //escuta o evento de tecla pressionada