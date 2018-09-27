var Word = require("./Word.js");
var Inquirer = require("inquirer");

var remGuesses = 5;
var words = ["amphisbaena"]



inquirer.prompt([{
    type: "input",
    name: "letterGuess",
    message: "Please guess a letter: "
}, ]).then(function (data) {

    bandsintownAPI(concertData);

})