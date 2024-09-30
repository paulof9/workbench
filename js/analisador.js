const analisadorBtnShow = document.getElementById('analisadorBtnShow');
const analisadorContent = document.getElementById('analisadorContent');

analisadorBtnShow.addEventListener('click', () => {
    analisadorContent.classList.toggle('hidden');
});
//

const analisadorInput = document.getElementById('analisadorInput'); //input
const adicionarBtn = document.getElementById('adicionarBtn');       //btn
const lista = document.getElementById('lista');                     //select
const analisarBtn = document.getElementById('analisarBtn');         //btn
const analiseRes = document.getElementById('analiseRes');           //res
var valores = [];

    function SeNumero(n){
        if(Number(n) >= 1 && Number(n) <= 100) { //delimita numeros de 1 a 100
            return true;
        }else{
            return false;
        }
    }

    function EmLista(n, l){
        if(l.indexOf(Number(n)) != -1) {        //-1 indica que o valor nao foi encontrado na lista
        return true;
    }else{
        return false;
    }}

adicionarBtn.addEventListener('click', () => {
    if(SeNumero(analisadorInput.value) && !EmLista(analisadorInput.value, valores)) {
        valores.push(Number(analisadorInput.value))
        let item = document.createElement('option')
        item.classList.add('text-black')        //classe text-black
        item.text = `Valor ${analisadorInput.value} adicionado.`
        lista.appendChild(item)

        analiseRes.innerHTML = '';
    }else{
        analiseRes.innerHTML = 'Valor já encontrado na lista ou inválido.'
    }

    analisadorInput.value = '';
    analisadorInput.focus();
})

    function somarValores() {
        let soma = 0;
        for (let i = 0; i < valores.length; i++) {
            soma += valores[i];                     //sem o [i], não seria possivel acessar TODOS os conteúdos do array. valores[]
        }
        return soma;
    }

analisarBtn.addEventListener('click', () => {
    if(valores.length == 0) {
        analiseRes.innerHTML = 'Adicione valores.'
    }else{
    let soma = somarValores();
                                        //sortby valores maiores/menores, verifica cada valor, 1 maior que o 2?se sim 1 fica em 1 e 2 no no, porem se 3 for maior que 1 entao ficaria 3, 1, 2
    let maior = valores[0]
    let menor = valores[0]
        for(let valor in valores) {       //"valores" "EM" "var valores" -> let pos in valores
            if(valores[valor] > maior) {
                maior = valores[valor]
            } if(valores[valor] < menor) {
                menor = valores[valor]
            }}

    analiseRes.innerHTML =  `A lista possui ${lista.length} entradas,<br>
                            a soma é ${soma}, o maior valor é ${maior} e o menor é ${menor}`
    }
})