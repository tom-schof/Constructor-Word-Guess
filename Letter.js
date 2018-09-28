function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
}


Letter.prototype.toString = function (){
    if (this.guessed == true) {
        return this.letter;
    } else {
         return "_";
    }
}

Letter.prototype.checkGuess = function (guess) {
    if (guess === this.letter) {
        this.guessed = true;
    }
    this.toString();
};

module.exports = Letter;

