/* <div id="app">
<div>
    <h4 id="tiempo">0.00</h4>
</div>
<div>
<button id="inicio">Inicio</button>
<button id="reseteo">Reset</button>
</div>
</div> */

let textoContador = document.getElementById("tiempo");
let botonIniciarParar = document.getElementById("inicio")
let botonReseteo = document.getElementById("reseteo");

let segundos = 0.00;
let contando = false;
let timer;              //Identificador del temporizador



    botonIniciarParar.addEventListener("click", function() {
        if(contando){
            contando = false;
            clearInterval(timer)
            botonIniciarParar.innerHTML = "Iniciar";
        }else{
            timer = setInterval(()=> {
                segundos += 0.1;
                textoContador.innerHTML = segundos.toFixed(2)
            },100)
            contando = true;
            botonIniciarParar.innerHTML = "Detener"
        }
    })

    botonReseteo.addEventListener("click", function() {
        clearInterval(timer);
        segundos = 0.00;
        textoContador.innerHTML = segundos.toFixed(2);
        contando = false;
        botonIniciarParar.innerHTML = "Iniciar";
    })





