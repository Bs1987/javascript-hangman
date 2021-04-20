// Input:
// Word: "javascript"
// Guesses: []
//
// Output:
// _ _ _ _ _ _ _ _ _ _

// javascript => _ _ _ _ _ _ _ _ _ _

// Steps:
//  - transformeren
//  - for loop maken:
//    - elke letter vervangen door een "_ "
//    - Tot we alle letters gehad hebben van het woord
//  - return resultaat
//  -
//  - functies

function displayWordSoFar(word, guesses) {
    let output = "";
    for (let i = 0; i < 10; i++) {
        output = output + "_ ";
        console.log("WORD[I] IS: ", word[i]);
        console.log("OUTPUT IS: ", output);
        return output;
    }
console.log("What is the output", displayWordSoFar("javascript", []));


}

displayWordSoFar("javascript", []);

function isGameWon(word, guesses) {
    // WRITE ME
}

function isGameLost(word, guesses) {
    // WRITE ME
}

module.exports = {
    displayWordSoFar: displayWordSoFar,
    isGameWon: isGameWon,
    isGameLost: isGameLost,
};