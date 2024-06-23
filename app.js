let numeroSecreto = 0;
let intentos = 0 ;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarElemento(selector, dato ){
    let elementoHTML = document.querySelector(selector);
    elementoHTML.innerHTML= dato;
}

function intentoDeusuario(){
    let valorUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroSecreto === valorUsuario){
        asignarElemento('p', `Acertaste el numero en ${intentos} ${intentos== 1 ? 'intento': 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(valorUsuario > numeroSecreto){
            asignarElemento('p', 'el numero secreto es menor');

        }else{
            
            asignarElemento('p', 'el numero secreto es mayor');

        }
        intentos++;
        limpiarCaja();

    }

}


function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();

    //indicar mensaje de intervalo de nuemeros
    //generar el numero aleatorio  
    //inicializar el numero de intentos
    condicionesIniciales();

    //desabilitar el boton de juego nuevo
    document.getElementById('reiniciar').setAttribute('disabled', 'true');


}

function condicionesIniciales() {

    asignarElemento ('h1','Juego del número Secreto');
    asignarElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    
    console.log(numeroSecreto);
    intentos=1;
    
}

function limpiarCaja() {
    document.getElementById('valorUsuario').value= '';
    
}

function generarNumeroSecreto() {
    let num = Math.floor(Math.random()*numeroMaximo)+1;
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarElemento('p', `ya se sortearon todos los numeros posibles`);

    }else{
        if (listaNumerosSorteados.includes(num)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(num);
            return num;
        }
    }

}

condicionesIniciales();
