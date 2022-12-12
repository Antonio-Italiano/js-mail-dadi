// ESERCIZIO 1 - Gioco dei dadi
// 1 - Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// 2 - Stabilire il vincitore, in base a chi fa il punteggio più alto.
// 3 - Stampiamo in pagina i due tiri e il risultato

// Elementi DOM
const playerNumber = document.getElementById('player')
const computerNumber = document.getElementById('computer')
const resultElement = document.getElementById('result')


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