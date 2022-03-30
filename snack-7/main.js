//Stampa le potenze di 2 fino a 1000.

console.log('Ecco a te le potenze di 2 fino a 1000');

let potenza;

for (let i = 0; true; i++) {
    potenza = Math.pow(2, i);
    console.log(`2 elevato alla ${i} = ${potenza}`);

    if (potenza >= 1000) {
        break;
    }
}