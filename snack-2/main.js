//SNACK 2 
//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.


const firstWord = prompt('Inserisci una parola');
const firstLength = firstWord.length;
console-console.log(`Prima parola inserita: ${firstWord}. Lunghezza: ${firstLength}`);

const secondWord = prompt('Inserisci un\' altra parola');
const secondLength = secondWord.length;
console-console.log(`Seconda parola inserita: ${secondWord}, Lunghezza: ${secondLength}`);



if (firstLength > secondLength) {
    console.log(`Parola più corta: ${secondWord}`);
    console.log(`Parola più lunga: ${firstWord}`);
} else if (firstLength < secondLength) {
    console.log(`Parola più corta: ${firstWord}`);
    console.log(`Parola più lunga: ${secondWord}`);
} else if (firstLength === secondLength) {
    console.log(`Le due parole hanno la stessa lunghezza`);
} else {
    console.log(`ops! Qualcosa è andato storto`);
}