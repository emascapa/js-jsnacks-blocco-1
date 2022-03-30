//Chiedi un numero di 4 cifre all’utente
//e calcola la somma di tutte le cifre che compongono il numero.

const userNumber = prompt('inserisci un numero di quante cifre ti pare, io le sommo e ti mostro il risultato in console');

console.log(`Numero inserito: ${userNumber}`)

let sum = 0;

let digit;

//console.log(userNumber.at(3));

for (let i= 0; i < userNumber.length; i++) {

    digit = parseInt(userNumber.at(i));
    console.log(`La cifra in posizione ${i+1} del numero inserito è: ${digit}`);

    sum = sum + digit;
} 

console.log(`La somma delle cifre del numero inserito è: ${sum}`);

