//SNACK 1 
//L’utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore.


const firstNumber = parseInt(prompt('Inserisci il primo numero'));
console-console.log(`Primo numero inserito: ${firstNumber}`);
const secondNumber = parseInt(prompt('Inserisci il secondo numero'));
console-console.log(`Secondo numero inserito: ${secondNumber}`);

if (firstNumber > secondNumber) {
    console.log(`Il maggiore tra i due numeri è ${firstNumber}`);
} else if (firstNumber < secondNumber) {
    console.log(`Il maggiore tra i due numeri è ${secondNumber}`);
} else {
    console.log(`I due numeri si equivalgono oppure non hai inserito un numero`);
}