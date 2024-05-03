function procesarString(inputString) {
    
    const trimmedString = inputString.trim();

    const primeraLetraMayuscula = trimmedString.charAt(0).toUpperCase();

    const ultimaLetraMayuscula = trimmedString.charAt(trimmedString.length - 1).toUpperCase();

    const resultado = primeraLetraMayuscula + trimmedString.slice(1, -1) + ultimaLetraMayuscula;

    console.log(resultado);
}

const miString = "  hola, amigo mio del system, bienvenido a la fuerza!  ";
procesarString(miString); 
