let cambioH1 = document.querySelector('h1');
cambioH1.innerHTML = 'Hora del Desafío';

function clickConsole() {
    console.log('El botón fue clicado');
}

function clickPrompt() {
    let ciudad = prompt('Ingrese una ciudad de Brasil');
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function clickAlerta() {
    alert('Yo amo JS');
}

function clickSuma() {
    let num1 = prompt('Ingrese un número: ');
    let num2 = prompt('Ingrese otro número: ');
    let suma = parseInt(num1) + parseInt(num2);
    alert(`La suma de los números es: ${suma}`);
}