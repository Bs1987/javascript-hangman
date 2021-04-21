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
    const lettersInWordArray = word.split("");
    let output = "";
    for (let i = 0; i < lettersInWordArray.length; i++) {
        const letterInWord = lettersInWordArray[i];
        const letterIsGuessed = guesses.includes(letterInWord);

        if (!letterIsGuessed){
            output = output + "_ ";

        }
        if (letterIsGuessed) {
            output = output + letterInWord + " ";
        }
    }
    return output;
}

console.log("What is the output", displayWordSoFar("javascript", []));


displayWordSoFar("javascript", []);

function isGameWon(word, guesses) {
// DOEL: isGameWon
    // word = "javascript" guesses = ["j", "a", "v", "s", "c", "r", "i", "p", "t"] -> true
    // word = "javascript" guesses = [], ["j", "a"] -> false
    // Strategie:
    // Kunnen we 1 letter vinden die je niet hebt geraden? return false
    // Kunnen niet 1 letter vinden die je niet hebt geraden return true
    // - [ ] loggen: wat is word & guesses
    // - [ ] word -> word.split(""): ["j", "a", "v","a", "s", "c", "r", "i", "p", "t"]
    // - [ ] loopen over dat array met de letters van het woord
    // - [ ] Voor elke letter in het woord
    // - [ ] Zit deze letter in guesses -> guesses.includes(letter)
    // - [ ] if in de loop
    // - [ ] in guesses true -> we gaan door
    // - [ ] in guesses false -> we stoppen: return false
    // - [ ] Zijn we aan het einde van de loop? aan het einde van de functie return true

}

function isGameLost(word, guesses) {
    // DOEL: isGameLost
    // word = "javascript" guesses = ["q", "w", "e", "y", "u", "o", "d"]; -> true
    // word = "javascript" guesses = ["q", "w", "e", "a", "t"]; -> false
    // STRATEGIE:
    // fouten tellen
    // 7 fout (of meer?) -> return true
    // minder dan 7 fout -> return false
    // - [ ] counter aanmaken -> start bij 0
    // - [ ] for loop over de guesses
    // - [ ] voor elke guess
    // - [ ] zit deze guess (letter) in het woord word.includes(guess)
    // - [ ] if
    // - [ ] Als true (we doen niets)
    // - [ ] Als false -> counter met 1 verhogen
    // - [ ] aan het eind van de functie een if statement maken
    // - [ ] if
    // - [ ] count is 7 -> return true
    // - [ ] count is minder dan 7 -> return false
}

module.exports = {
    displayWordSoFar: displayWordSoFar,
    isGameWon: isGameWon,
    isGameLost: isGameLost,
};