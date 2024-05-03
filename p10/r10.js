const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

while (true) {
    const numeroUsuario = parseInt(prompt('Adivina el número secreto (entre 1 y 100):'));
    intentos++;

    if (numeroUsuario === numeroSecreto) {
        console.log(`¡Correcto! Adivinaste en ${intentos} intentos.`);
        break;
    } else if (numeroUsuario < numeroSecreto) {
        console.log('El número secreto es mayor.');
    } else {
        console.log('El número secreto es menor.');
    }
}