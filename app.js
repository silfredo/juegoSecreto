/*let numeroSecreto = 0
let intentos = 0
let  listaNumerosSorteados  = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? "Vez" : "Veces"}`)
        document.getElementById("reiniciar").removeAttribute('disabled')
    }else {
        //El usuario no acerto
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento("p"," El numero secreto es menor")
        }else{
            asignarTextoElemento("p"," El numero secreto es mayor")
        }
        intentos++
        limpiarcaja()
    } 
    return;
}

function limpiarcaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   // si ya sorteamos todos los numeros 
   if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los numeros posibles")
   }else{
        //si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
   }
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del Numero Secreto!")
    asignarTextoElemento("p",`Indica un Numero del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1
}

function reiniciarJuego(){
    //limpiar caja
    limpiarcaja();
    //indicar mensaje de intervalo de numero
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','tru');
    
}

condicionesIniciales();
*/

function lenguaje(){
      return  ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
}

console.log(lenguaje)