const somarbotao = document.getElementById('somar');           //botao 'Somar' no html, const pois o valor nao mudará.
somarbotao.addEventListener('click', somar);                   //evento de click para a function

function somar(){
    var n1 = Number(document.getElementById('n1').value);    //input1
    var n2 = Number(document.getElementById('n2').value) ;   //input2
    var resminicalc = document.getElementById('resminicalc');//<p> da resposta
        var resSoma = n1 + n2         ;                      //input1 + input2
        resminicalc.innerHTML = `${resSoma}`;                //resultado da soma

    document.getElementById('n1').value = '';                //reseta
    document.getElementById('n2').value = '';                //reseta
}
