let btnGenerarNumero = document.querySelector('#generarNumero');
let formulario = document.querySelector('form');
let numeroAleatorio;

btnGenerarNumero.addEventListener('click',GenerarnumeroAleatorio);
formulario.addEventListener('submit',numeroUsuario);

function GenerarnumeroAleatorio(){
    console.log('Generar numero aleatorio')
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    alert("¡Comencemos! elegi un número del 1 al 100. ¡Intenta adivinarlo!");
    console.log(numeroAleatorio);
    return numeroAleatorio;
}

function numeroUsuario(e){
    e.preventDefault();
    let numeroIngresado = parseInt(document.querySelector('input').value);
    console.log(numeroIngresado);
    if (numeroIngresado === numeroAleatorio) {
        alert("¡Felicitaciones! Adivinaste el número.");
      } else if (numeroIngresado < numeroAleatorio) {
        alert("Lo siento, el número que ingresaste es menor al número mágico.");
      } else {
        alert("Lo siento, el número que ingresaste es mayor al número mágico.");
      }

}

