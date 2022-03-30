//SNACK 5
//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.


let myArray = [];

let inputNumber;

for (let i = 0; i < 6; i++) {
    inputNumber = parseInt(prompt(`Inserisci un numero (${i+1}/6)`));
    if (inputNumber % 2 !== 0) {
        myArray.push(inputNumber);
    }
}

console.log(myArray);