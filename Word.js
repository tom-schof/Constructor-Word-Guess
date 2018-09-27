var Letter = require("./Letter.js")


function Word(word){
    this.letterArray = [];
    for (var i = 0; i < word.length; i++){
        var letter = new Letter(word[i]);
        letter.updateDisplay();
        this.letterArray.push(letter);
    }
    
   

}

Word.prototype.toString = function(){
    this.wordDisplay = [];
    for (var j = 0; j < this.letterArray.length; j++){
        this.wordDisplay.push(this.letterArray[j].updateDisplay());  
    }
    console.log(this.wordDisplay.join(" "));
}


module.exports = Word;



