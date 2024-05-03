const numeros = [1, 2, 3, 4, 5];
const sumaPares = numeros.reduce((total, num) => (num % 2 === 0) ? total + num : total, 0);
console.log('La suma de los números pares en el array es:', sumaPares);