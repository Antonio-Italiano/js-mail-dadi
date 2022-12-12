// ESERCIZIO 1 - Gioco dei dadi
// 1 - Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// 2 - Stabilire il vincitore, in base a chi fa il punteggio più alto.
// 3 - Stampiamo in pagina i due tiri e il risultato

// Elementi DOM
const playerNumber = document.getElementById('player');
const computerNumber = document.getElementById('computer');
const resultElement = document.getElementById('result');


// 1 - Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

    // generiamo il numero random del giocatore da 1 a 6
    const player = Math.floor(Math.random() * 6) + 1;
    // console.log(player)

    // generiamo il numero random del computer da 1 a 6
    const computer = Math.floor(Math.random() * 6) + 1;
    // console.log(computer)
    
// 2 - Stabilire il vincitore, in base a chi fa il punteggio più alto.

    winner = '';

    if (player > computer) {
      winner = 'vincitore player';
        // console.log(winner)
    } else if (player < computer) {
      winner = 'vincitore computer';
        // console.log(winner)
    } else {
      winner = 'pareggio';        
        // console.log(winner)
    }

// 3 - Stampiamo in pagina i due tiri e il risultato
    playerNumber.innerText ='numero player: ' + player ;
    computerNumber.innerText ='numero computer: ' +  computer ;
    resultElement.innerText = winner ;


/**********************************************************
 
 **********************************************************/
//  ESERCIZIO 2 - Finta Login
// 1 - Inventa una lista di email autorizzate
// 2 - Chiedi all’utente la sua email, con un piccolo form.
// 3 - controlla che sia nella lista di chi può accedere,
// 4 - stampa un messaggio appropriato sull’esito del controllo.

// Elementi DOM
const emailElement = document.getElementById('email');
const buttonElement = document.getElementById('button');
const noticeElement = document.getElementById('notice');
// 1 - Inventa una lista di email autorizzate
const accounts = ["antoitalia@gmail.com", "italiaanto@gmail.com", "anto100@gmail.com"];


buttonElement.addEventListener ('click', function() {
    
    const emailValue = emailElement.value;

    let access = 'negato';

    for (let i = 0; i < accounts.length; i++) {

        let item = accounts[i];
        
        if (emailValue == item) {
            access = 'accettato';
        }
    }

    let result = ''; 

    if (access == 'accettato') {
        result = 'Email corretta puoi accedere';
        console.log(result);
    } else {
        result = 'Email errata non puoi accedere'
        console.log(result);
    }

    noticeElement.innerText = result;
})