//Square options, game memory array, and user click history
const squareOptions = ['red', 'blue', 'yellow', 'green']
const gameMemory = []
const userInput = []
let randomSquare;
let userClick;
//random square generator 
const squareSelector = function () {
    randomSquare = squareOptions[Math.floor(Math.random() * squareOptions.length)]
}
//AI displays randomly selected sqaure 
displaySquare = function () {
    for (var i = 0; i < gameMemory.length; i++) {
        if (gameMemory[i] === 'red') {
            console.log(gameMemory)
            $('#gameround').html(gameMemory)
        } else if (gameMemory[i] === 'yellow') {
            console.log(gameMemory)
            $('#gameround').html(gameMemory)
        } else if (gameMemory[i] === 'blue') {
            console.log(gameMemory)
            $('#gameround').html(gameMemory)
        } else if (gameMemory[i] === 'green') {
            console.log(gameMemory)
            $('#gameround').html(gameMemory)
        } else {
        }
        setTimeout(returnState, 500)
    }
}
//return square's original state 
returnState = function () {
    if (displaySquare == true) {
        $('#gameround').remove()
    }
}
// next round logic 
nextRound = function () {
    if (randomSquare === userClick) { //this function needs to include game memory contents 
        squareSelector() //first
        gameMemory.push(randomSquare)  //second
        displaySquare() // display SQUARESSSSS
        console.log(randomSquare)
    } else {
        alert('Game Over')
    }
}

// game win logic 
gameWin = function () {
    if (gameMemory.length > 4)
        alert('You won the game!')
}

//user clicks start and game begins 
$('#start').click(() => {
    squareSelector()
    gameMemory.push(randomSquare)
    displaySquare()
    console.log(randomSquare)
})
//user clicks red
$('#red').click(() => {
    userClick = 'red'
    console.log('red click')
    gameWin()
    userInput.push(userClick)
    nextRound()
})
//user clicks yellow
$('#yellow').click(() => {
    userClick = 'yellow'
    console.log('yellow click')
    gameWin()
    userInput.push(userClick)
    nextRound()
})
//user clicks green
$('#green').click(() => {
    userClick = 'green'
    console.log('green click')
    gameWin()
    userInput.push(userClick)
    nextRound()
})
//user clicks blue 
$('#blue').click(() => {
    userClick = 'blue'
    console.log('blue click')
    gameWin()
    userInput.push(userClick)
    nextRound()
})

//prevents user from clicking start game multiple times
$('#start').one('click', function () {
    $(this).attr('disabled', 'disabled');
})


$(document).ready()
console.log('Start Game')