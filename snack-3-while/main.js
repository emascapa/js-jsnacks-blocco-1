//SNACK 3
//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

let sum = 0;
let number;


console.log(`La somma dei numeri inseriti è ${sum}`);

let i = 0;

console.log(`Inserisci dieci numeri e ti dico la somma`);
while (i < 10) {
    number = parseInt(prompt(`Inserisci un numero (iterazione n° ${i+1})`));
    console.log(`hai inserito ${number} all'iterazione ${i+1}`);

    sum = sum + number;

    i++;
}

console.log(`La somma dei numeri inseriti è ${sum}`);