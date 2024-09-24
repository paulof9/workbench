var inputparimpar = document.getElementById('inputparimpar');
var parimparRes = document.getElementById('parimparRes');
const parimparBtn = document.getElementById('parimparBtn');

parimparBtn.addEventListener('click', () => {
    //nesse caso não precisa criar uma variavel pro .value do input antes, cria-se dentro do if
    if (isNaN(parseInt(inputparimpar.value)) || inputparimpar.value.includes(',') || inputparimpar.value.includes('.')) {
        parimparRes.innerHTML = `Por favor, escreva um número inteiro sem vírgulas. Ex. "1", "10"`;
    } else if (parseInt(inputparimpar.value) % 2 === 0) {
        parimparRes.innerHTML = inputparimpar.value + " é par";
    } else {
        parimparRes.innerHTML = inputparimpar.value + " é ímpar";
    }
});
