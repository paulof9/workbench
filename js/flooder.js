const flooderbtnshow = document.getElementById('flooderbtnshow');
const floodercontent = document.getElementById('floodercontent');

flooderbtnshow.addEventListener('click', () => {             //arrow function, click recebe hidden
    floodercontent.classList.toggle('hidden');           //atribui classe
});
//

var loopvalue = document.getElementsByName('loopvalue');     //valores radio

var floodInputset = document.getElementById('floodInputset')  //input valor a ser definido
var flooderRes = document.getElementById('flooderRes')                      //Div-resposta

const flooderBtn = document.getElementById('flooderBtn')                    //btn ver
var floodInput = document.getElementById('floodInput')                      //msg

    flooderBtn.addEventListener('click', () => {
        var valorInput = floodInput.value
        var loopvalor = 0
        
            if (loopvalue[0].checked) {
                loopvalor = 10
                } else if (loopvalue[1].checked) {
                    loopvalor = 20
                } else if (loopvalue[2].checked) {
                    loopvalor = 50
                } else if (loopvalue[3].checked) {
                    loopvalor = 100
            }

            var resultadoLoop = ''
            var contadorLoop = 0

            while(contadorLoop < loopvalor) {   //enquanto contadorLoop for menor que o valor selecionado acima nos radios,
                resultadoLoop += valorInput     //o valor resultadoLoop (ficticio) será somado ao valor digitado no input
                contadorLoop++                  //contagem para o loop terminar
            }
            loopvalue.forEach((radio) => {
                radio.checked = false;
            });

            var valorfloodInputset = Number(floodInputset.value)
                while (contadorLoop < valorfloodInputset) {
                    resultadoLoop += valorInput
                    contadorLoop++
                }
            flooderRes.innerHTML = resultadoLoop;   //exibe na div o valor concatenado do while.
            contadorLoop = 0
    })