    //horas
    function atualizarHoras(){
        var horasAtuais = new Date();
        var horas = horasAtuais.getHours();
        var minutos = horasAtuais.getMinutes();

        if (minutos < 10) {                         //os minutos forem menores que 10, adiciona o zero na esquerda
            minutos = '0' + minutos;
        }

        var horasTab = document.getElementById('horasTab');
        horasTab.innerHTML = `${horas}:${minutos}`;

        atualizarIcone(horas); //linka a function atualizarIcone com atualizarHoras, inclusive a variante (horas)
    }
    //dias
    function atualizarDia(){
        var calendario = [`domingo`, `segunda`, `terça`, `quarta`, `quinta`, `sexta`, `sabado`];
                                                    //array com mapeamento dos dias numericos
        var diaAtual = new Date();
        var diaSemana = diaAtual.getDay();           //retorna numeros de 0 a 6

        var diaDizer = document.getElementById('diaDizer');
        diaDizer.innerHTML = calendario[diaSemana];  //array[seleciona numero do array]
        }
        
    //icone
    function atualizarIcone(horas) {
        var icone = document.getElementById('icone');
        if (horas < 12) {
            //manhã
            icone.innerHTML = `Bom dia! ☀️`;
        } else if(horas < 18) {
            //tarde
            icone.innerHTML = `Boa tarde! 🌞`;
        } else {
            //noite
            icone.innerHTML = `Boa noite! 🌛`;
        }
    }
    //atualizar dados com a página
    function iniciarAtualizacao() {
        atualizarHoras();
        atualizarDia();
        atualizarIcone();
        
        setInterval(atualizarHoras, 1000);      //milissegundos

        setInterval(atualizarDia, 3600000);     //milissegundos
        setInterval(atualizarIcone, 3600000);   //milissegundos
    }

    window.onload = iniciarAtualizacao;         //script inicializa ao carregar a página