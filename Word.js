var Letter = require("./Letter.js")


function Word(word){
    this.letterArray = [];
    for (var i = 0; i < word.length; i++){
        var letter = new Letter(word[i]);
        this.letterArray.push(letter);
    }
    
   

}

Word.prototype.letterArrayString = function(){
    this.wordDisplay = "";
    for (var j = 0; j < this.letterArray.length; j++){
        this.wordDisplay += this.letterArray[j].toString() + " ";  
    }
    console.log(this.wordDisplay);
}

var example = new Word("example");
example.letterArrayString();

module.exports = Word;



