let dias = document.querySelector(".dias__contador").textContent;
let horas = document.querySelector(".horas__contador").textContent;
let minutos = document.querySelector(".minutos__contador").textContent;
let segundos = document.querySelector(".segundos__contador").textContent;

contaSegundo();


    function contaSegundo() {
        var t = segundos;
        var myInterval = setInterval(function(){
            segundos--;
            document.querySelector(".segundos__contador").textContent = segundos;
        },1000);

        setTimeout(function() {
            clearInterval(myInterval);
            segundos = 59;
            contaSegundo();
            relogio();
            

        },t*1000)
    }
    function relogio() {
        if(minutos != '0'){
            minutos--;
            document.querySelector(".minutos__contador").textContent = minutos;
        }
        else{
            minutos = 59;
            horas--;
            document.querySelector(".minutos__contador").textContent = minutos;
            document.querySelector(".horas__contador").textContent = horas;
            if(horas =='0'){
                horas = 23;
                document.querySelector(".horas__contador").textContent = horas;
                if(dias!='0'){
                    dias--;
                    document.querySelector(".dias__contador").textContent = dias;
                }
                if(dias =='0'){
                    document.querySelector(".dias__contador").textContent = dias;
                }
            }
        }
    }



