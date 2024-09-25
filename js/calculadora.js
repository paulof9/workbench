const botaoCalc = document.getElementById('botaoCalc'); //pendente!
const calc = document.getElementById('calc');

botaoCalc.addEventListener('click', () => {             //arrow function, click recebe hidden
    calc.classList.toggle('hidden');                    //atribui classe
});
//
'use strict';
const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=op]');

let novoNumero = true;
let op;
let numeroAnterior;

//sistema de novo valor ou operação pendente
const operacaoPendente = () => op != undefined;

const calcular = () => {
    if(operacaoPendente()){
        const numeroAtual = parseFloat(display.textContent);
        novoNumero = true;
        const resultado = eval (`${numeroAnterior}${op}${numeroAtual}`)
        attDisplay(resultado)
    }
}

const attDisplay = (texto) => {
    if(novoNumero){                 //se o número for novo, adiciona e depois não se torna mais novo número
        display.textContent = texto;
        novoNumero = false;
    }else{                          //se não, concatena os números
    display.textContent += texto;
}}

/*
evento: É o objeto que contém informações sobre o evento que ocorreu (por exemplo, um click).
evento.target: É o elemento HTML que foi clicado (o alvo do evento).
evento.target.textContent: É o texto dentro do elemento HTML clicado.
(evento pode ser qualquer nome!)
        function inserirNumero(evento) {
            attDisplay(evento.target.textContent);
        }
interessante pensar como se fosse um X da matemática!
*/ 

//teclas
    const inserirNumero = (evento) => attDisplay(evento.target.textContent);  //carrega a função de Se novoNumero de attDisplay
    numeros.forEach (numero => numero.addEventListener('click', inserirNumero));
    //para cada tecla, torna-se clicavel e usa a função inserirNúmero, carregada com attDisplay

//operadores
    const selecionarOperador = (evento) => {
        if(!novoNumero) {
            calcular()
            novoNumero = true;
            op = evento.target.textContent;        //identifica qual operador foi clicado
            numeroAnterior = parseFloat(display.textContent);
            console.log (op);
        }
    }   //quando clicar em algum operador, diz que os numeros seguintes serão novos para realizar operação e guarda o anterior
    operadores.forEach (op => op.addEventListener('click', selecionarOperador));

    //botao igual
    const ativarIgual = () => {
        calcular();
        op = undefined; //desclassifica contas pendentes
    }
    document.getElementById('igual').addEventListener('click', ativarIgual);

    //botao limpar
    const limpar = () => {
        display.textContent = '';  //limpar display e calculo
        op = undefined;
        novoNumero = true;
        numeroAnterior = undefined;
    }
    document.getElementById('limpar').addEventListener('click', limpar);

    //botao backspace
    const removerUltimoNumero = () => display.textContent = display.textContent.slice(0, -1)
                                    //metodo para arrays, inicia do zero e tira o ultimo
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
const mapearTeclado = (evento) => {
    const tecla = evento.key

    const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) != -1 //verifica se as teclas estao dentro de mapaTeclado e verifica se existe, sendo diferente de -1 (posicao de array)
    if(teclaPermitida())    document.getElementById(mapaTeclado[tecla]).click();
}
document.addEventListener('keydown', mapearTeclado);