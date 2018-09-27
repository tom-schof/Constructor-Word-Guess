var Word = require("./Word.js");
var Inquirer = require("inquirer");

var remGuesses = 5;
var words = ["amphisbaena", "investigation", "administration", "preoccupation", "entertainment","comprehensive",
 "responsibility", "representative", "strikebreaker", "correspondence", "identification", "revolutionary", 
 "short circuit", "superintendent", "communication", "qualification"];

var currentWord = words[Math.floor(Math.random()*words.length)];

var currentWordObject = new Word(currentWord);

inquirer.prompt([{
    type: "input",
    name: "letterGuess",
    message: "Please guess a letter: "
}, ]).then(function (data) {

    currentWordObject(data.letterGuess);

})