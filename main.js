let dias = document.querySelector(".dias__contador").textContent;
let horas = document.querySelector(".horas__contador").textContent;
let minutos = document.querySelector(".minutos__contador").textContent;
let segundos = document.querySelector(".segundos__contador").textContent;
var total = parseInt(dias*24*60*60) + parseInt(horas*60*60) + parseInt(minutos*60) + parseInt(segundos);
var controle = total;
console.log(total);
contaSegundo();


 function contaSegundo() {

        var myInterval = setInterval(function(){
 
            if(segundos =='0'){
                segundos = 59;
                document.querySelector(".segundos__contador").textContent = segundos;

                if(minutos =='0'){
                    minutos = 59;
                    document.querySelector(".minutos__contador").textContent = minutos;

                    if(horas =='0'){
                        horas = 23;
                        document.querySelector(".horas__contador").textContent = horas;

                        if(dias =='0'){
                            dias = 00;
                            document.querySelector(".dias__contador").textContent = dias;
                        }
                        
                        else{
                            dias--;
                            document.querySelector(".dias__contador").textContent = dias;
                        }
                    }
                    
                    else{
                        horas--;
                        document.querySelector(".horas__contador").textContent = horas;
                    }
                }
                else{
                    minutos--;
                    document.querySelector(".minutos__contador").textContent = minutos;
                }
            }
            else{
                segundos--;
                document.querySelector(".segundos__contador").textContent = segundos;
                
                controle--;
                console.log(controle);
            }
        },100);

        setTimeout(function() {
            clearInterval(myInterval);
            console.log("TIME UP");
        },total*100)
    }






    // function contaSegundo() {

    //     var myInterval = setInterval(function(){
    //         segundos--;
    //         document.querySelector(".segundos__contador").textContent = segundos;
    //         var total = parseFloat(dias*24*60*60) + parseInt(horas*60*60) + parseInt(minutos*60) + parseInt(segundos);
    //         console.log(total);
    //     },.001);

    //     setTimeout(function() {
    //         clearInterval(myInterval);
    //         segundos = 59;
    //         contaSegundo();
    //         relogio();
            

    //     },segundos*.001)
    // }
    // function relogio() {
    //     if(minutos != '0'){
    //         minutos--;
    //         document.querySelector(".minutos__contador").textContent = minutos;
    //     }
    //     else{
    //         minutos = 59;
    //         horas--;
    //         document.querySelector(".minutos__contador").textContent = minutos;
    //         document.querySelector(".horas__contador").textContent = horas;
    //         if(horas =='0'){
    //             horas = 23;
    //             document.querySelector(".horas__contador").textContent = horas;
    //             if(dias!='0'){
    //                 dias--;
    //                 document.querySelector(".dias__contador").textContent = dias;
    //             }
    //             if(dias =='0'){
    //                 document.querySelector(".dias__contador").textContent = dias;

    //             }
    //         }
    //     }
    // }



