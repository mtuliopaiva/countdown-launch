let dias = document.querySelector(".dias__contador").textContent;
let horas = document.querySelector(".horas__contador").textContent;
let minutos = document.querySelector(".minutos__contador").textContent;
let segundos = document.querySelector(".segundos__contador").textContent;

contaSegundo();


    function contaSegundo() {
        var myInterval = setInterval(function(){
            document.querySelector(".segundos__contador").textContent = segundos;
        segundos--;

        },1000);

        setTimeout(function() {
            clearInterval(myInterval);
            segundos = 59;
            contaSegundo();
            contaMinuto();
        },60000)
    }
    function contaMinuto() {
        minutos--;
        console.log(minutos);
    }



