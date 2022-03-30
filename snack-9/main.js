//Calcola la somma e la media dei primi 10 numeri.

const userNumber = parseInt(prompt('Inserisci un numero intero N e ti scrivo in console la somma dei primi N numeri interi e la loro media aritmetica'));

console.log(`Numero inserito: ${userNumber}`);

let sum = 0;

let average;

for (let i = 1; i <= userNumber; i++) {

    sum = sum + i;

    if (i === userNumber) {
        average = sum / i;
    }
}


console.log(`Somma dei primi ${userNumber} numeri: ${sum}`);
console.log(`Media dei primi ${userNumber} numeri: ${average}`);