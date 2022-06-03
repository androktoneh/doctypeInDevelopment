function play(){
    // array with texts to type in typewriter
    var dataText = [' ',`
˂!DOCTYPE html˃
˂html lang="pt-BR"˃
˂head˃
    ˂meta charset="UTF-8"˃
    ˂title˃ DOCTYPE: In development ˂/title˃
˂/head˃
˂body˃
    ˂!-- Caro desenvolvedor em desenvolvimento...
        Você tem, aqui, uma página vazia para construir a própria história - o próprio futuro.
        Nessa jornada, daqui em diante, você vai precisar ter e entender três ferramentas fundamentais.
        Elas vão ficar à sua disposição e ao seu alcance, na div abaixo pra você começar essa caminhada. --˃
    
        ˂div class="foco paciencia resiliencia"˃ ˂/div˃

    ˂!-- Com elas, eu lhe garanto... seu futuro será...˃
˂/body˃
˂/html˃ `];
    
    function typeWriter(text, i, fnCallback) {
        if (i < (text.length)) {
            document.querySelector(".areaTexto").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
            var timetoawait = 50;
            if(i == 122 || i == 179 || i == 487 || i == 513 || i == 517 || i == 527 || i == 548 ){
                timetoawait = 1500;
            }
            else if (i == 622){
                timetoawait = 5000;
            }
            setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
            }, timetoawait);
        }
        else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }

    function StartTextAnimation(i) {
        document.querySelector('audio').play();
        typeWriter(dataText[0], 0, function(){ });
        setTimeout(function() {
            typeWriter(dataText[1], 0, function(){ });
        }, 7000);
        setTimeout( function() {
            document.querySelector('.displayMensagem').style.display = 'none';
            document.querySelector('.background-gradient').classList.add('fadeIn');
            // document.querySelector('.background-gradient').style.display = 'block';
            document.querySelector('.starField').classList.add('fadeIn');
            document.querySelector('.textFim').classList.add('fadeIn');

            setTimeout(function(){
                document.querySelector('.starField').style.opacity = '1';
                document.querySelector('.textFim').style.opacity = '1';
            }, 1000)
        }, 56500);
    }

    StartTextAnimation(0);
  };