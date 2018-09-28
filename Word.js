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

Word.prototype.checkCharacter = function(character){
    var truth = false;
    for (var k = 0; k < this.letterArray.length; k++){
    if (this.letterArray[k].checkGuess(character)){
        truth = true;
    };
    
    }

    this.letterArrayString();
    return truth;
}



// var example = new Word("example");
// example.letterArrayString();

// example.checkCharacter("x");
// example.checkCharacter("a");
// example.checkCharacter("e");


module.exports = Word;



