//Stampa il cubo dei primi N numeri,
//dove N è un numero indicato dall’utente.

console.log(Math.pow(3, 3));

const userNumber = parseInt(prompt('Inserisci un numero N e ti stamperò in console i cubi dei primi N numeri ;)'));

for (let i = 1; i <= userNumber; i++) {
    console.log(`${i} elevato alla terza = ${Math.pow(i, 3)}`);
}