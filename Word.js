var Letter = require("./Letter.js")


function Word(word){
    this.letterArray = [];
    for (var i = 0; i < word.length; i++){
        var letter = new Letter(word[i]);
        letter.updateDisplay();
        letterArray.push(letter);
    }
    
   

}

Word.prototype.guessLetter = function(guess){
    for (var j = 0; j < this.letterArray.length; j++){
        this.letterArray[j].checkGuess(guess);
    }
}