var Word = require("./Word.js");
var inquirer = require("inquirer");

var remGuesses = 5;
var words = ["amphisbaena", "investigation", "administration", "preoccupation", "entertainment", "comprehensive",
    "responsibility", "representative", "strikebreaker", "correspondence", "identification", "revolutionary",
    "short circuit", "superintendent", "communication", "qualification"
];

var currentWord = words[Math.floor(Math.random() * words.length)];

var currentWordObject = new Word(currentWord);
currentWordObject.letterArrayString();

function prompt() {
    inquirer.prompt([{
        type: "input",
        name: "letterGuess",
        message: "Please guess a letter: "
    }, ]).then(function (data) {

        if (currentWordObject.checkCharacter(data.letterGuess)) {
            
            console.log("true: " + remGuesses + " guesses remaining");
        }else{
            remGuesses--;
            console.log("false: " + remGuesses + " guesses remaining");
        }
        if (remGuesses > 0){
            prompt();
        }

    });

    
}

prompt();


// I worked on redoing the FriendFinder app most of the night and only had about an hour
// or so to spend on this one. I can get it to work for a single guess or the way
// I have it set up now almost works but it doesn't update remGuesses correctly
// and there is no condition to check if the user has won. I needed another hour or two 
// to troubleshoot the recursive inquirer prompt and add a condition to check if there are no "_"
// left in the word display (the user has won)



