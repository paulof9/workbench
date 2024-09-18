const idadebtn = document.getElementById('idadebtn');
const idadecontent = document.getElementById('idadecontent');

idadebtn.addEventListener('click', () => {             //arrow function, click recebe hidden
    idadecontent.classList.toggle('hidden');           //atribui classe
});
//

const verificarIdadebtn = document.getElementById('verificarIdadebtn');     //botão verificar, cria abaixo uma funcao de click

verificarIdadebtn.addEventListener('click', () => {
    var respostaIdade = document.getElementById('respostaIdade');
    var nascimento = document.getElementById('nascimento').value;           //input ano

    if (nascimento === '') {                                                //verifica se algo foi escrito no input
        respostaIdade.innerHTML = 'Insira uma data!';
        return; // impede que o código seguinte seja executado a.k.a. break
    }

    var nascimentoHj = new Date()                                           //pega dados de data do sistema
    var ano = nascimentoHj.getFullYear()                                    //pega dados do ano
    var nascimentoCalc =  ano - nascimento                                  //sistema - input

    var sexo = document.getElementsByName('sexo');
    var genero = ''
        if (sexo[0].checked){                                               //0 masc, 1 fem (ordem dos radios)
            genero = 'Masculino'
        }else{
            genero = 'Feminino'
        }

    if(nascimentoCalc > 110 | nascimentoCalc === 0) {
        respostaIdade.innerHTML=`${nascimentoCalc} anos... insira uma data válida!`
    }else{
        respostaIdade.innerHTML=`Informações:
        <br>${nascimentoCalc} anos
        <br> Gênero: ${genero}`
    }

    document.getElementById('nascimento').value = ''                        //reseta input após tarefas
});

function iniciarAtualizacao() {
    verificarIdadebtn();
    setInterval(verificarIdadebtn, 1000);      //milissegundos
}
verificarIdadebtn.addEventListener('click', iniciarAtualizacao);