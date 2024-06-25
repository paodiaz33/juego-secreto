let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let maximoIntentos = 5;

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
    let elementoHTL = document.querySelector(elemento);
    elementoHTL.innerHTML = texto;
    return;
}

function verificarIntento(){
    if (intentos == maximoIntentos){
        asignarTextoElemento('p',`Se han agotado los ${maximoIntentos} intentos. El número secreto era ${numeroSecreto}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;

    }

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos } ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');

        }else{
            asignarTextoElemento('p','El número secreto es mayor');

        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

console.log(numeroGenerado);
console.log(listaNumerosSorteados);

if (listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p','Se han sorteado todos los números posibles ');
}else{

    //si el número generado ya esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
     //Iniciar el número de intentos 
     condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
   
}


condicionesIniciales();

