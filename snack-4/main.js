//SNACK 4
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const guests = [
    'Aldo',
    'Giovanni',
    'Giacomo'
];

const userName = prompt('Sei nella lista invitati? Scrivi il tuo nome e controlla output in console');

let invitation = false;

for (let i = 0; i < guests.length; i++) {
    if (userName === guests[i]) {
        invitation = true;
        
    }

}

if (invitation) {
    console.log(`'${userName}' è nella lista invitati, benvenuto!`);
} else {
    console.log(`'${userName}' non è tra gli invitati. Torna a casa poraccio`);
}