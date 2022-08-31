let dias = document.querySelector(".dias__contador").textContent;
let horas = document.querySelector(".horas__contador").textContent;
let minutos = document.querySelector(".minutos__contador").textContent;
let segundos = document.querySelector(".segundos__contador").textContent;


    function contaSegundo(){
        console.log(segundos);
        segundos = parseInt(segundos) - 1;
        
    }
    setInterval(contaSegundo, 1000);
    clearInterval(contaSegundo, 0)

/*for(segundos == 41; segundos>=0 ; segundos--) {

    function ContaSegundo(){
        segundos = parseInt(segundos)-1;
        console.log(segundos);
        setTimeout(ContaSegundo, 1000);
    }
    
    
    
}*/

