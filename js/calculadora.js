const botaoCalc = document.getElementById('botaoCalc'); //pendente!
const calc = document.getElementById('calc');

botaoCalc.addEventListener('click', () => {             //arrow function, click recebe hidden
    calc.classList.toggle('hidden');                    //atribui classe
});