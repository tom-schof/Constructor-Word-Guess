function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
}


Letter.prototype.updateDisplay = function (){
    if (this.guessed == true) {
        console.log(this.letter);
    } else {
        console.log("_");
    }
}

Letter.prototype.checkGuess = function (guess) {
    if (guess === this.letter) {
        this.guessed = true;
    }
    updateDisplay();
};

