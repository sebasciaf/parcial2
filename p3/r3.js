let sumaPares = 0;
let i = 1;
while (i <= 100) {
    if (i % 2 === 0) {
        sumaPares += i;
    }
    i++;
}
console.log('La suma de los números pares del 1 al 100 es:', sumaPares); 
