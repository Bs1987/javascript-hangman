
// we importeren readline, we halen de question function eruit
const { question } = require("readline-sync");

// we destructureren variabelen uit gamelogic
const { displayWordSoFar, isGameWon, isGameLost } = require("./gamelogic");

// we definieren een functie game
// parameter 1: word
// parameter 2: guesses
function game(word, guesses) {
  // we loggen de guesses parameter (feedback user)
  console.log("Dit heb je tot nu toe geraden: ", guesses);

  // we roepen de question function aan, de return waarde slaan we op in de letter variabele
  const letter = question("Raad een letter: ");

  // voeg de geraden letter toe aan de array met guesses
  guesses.push(letter);

  // volgende ronde! we roepen game nog een keer aan
  game(word, guesses);
}

// we loggen een glagje logo met een template string
console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

//de game functie wordt aangeroepen met:
// argument 1: string
// argument 2: lege array
game("javascript", []);