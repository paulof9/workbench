const tabuadaBtnShow = document.getElementById('tabuadaBtnShow');
const tabuadaContent = document.getElementById('tabuadaContent');

tabuadaBtnShow.addEventListener('click', () => {
    tabuadaContent.classList.toggle('hidden');
});
//

const tabuadaBtn = document.getElementById('tabuadaBtn');
var inputTabuada = document.getElementById('inputTabuada');

tabuadaBtn.addEventListener('click', () => {  
    var valorTabuada = parseInt(inputTabuada.value);
    var tabuadaloop = ''; // Armazena resultados
    let tabuadaRes = document.getElementById('tabuadaRes');

    if (isNaN(valorTabuada)) {
        tabuadaRes.innerHTML = `Apenas valores inteiros são permitidos!`;
    } else {
        for (let stabuada = 0; stabuada <= 10; stabuada++) {
            let multTabuada = valorTabuada * stabuada;
            tabuadaloop += `${valorTabuada} x ${stabuada} = ${multTabuada}<br>`;
        }
        tabuadaRes.innerHTML = `${tabuadaloop}`;
    }
});