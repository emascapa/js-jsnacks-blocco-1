//SNACK 3
//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

let sum = 0;
let number;


console.log(`Inseridci dieci numeri e ti dico la somma`);
for (let i = 0; i < 10; i++) {
    number = parseInt(prompt(`Inserisci un numero (iterazione n° ${i+1})`));
    console.log(`hai inserito ${number} alla iterazione ${i+1}`);
    sum = sum + number;
}

console.log(`La somma dei numeri inseriti è ${sum}`);