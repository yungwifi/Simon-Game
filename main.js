//Square options, game memory array, and user click history
const squareOptions = ['red', 'blue', 'yellow', 'green']
const gameMemory = []
const round = gameMemory.length
const userInput = []
let randomSquare;
let userClick;
//random square generator 
const squareSelector = function () {
    randomSquare = squareOptions[Math.floor(Math.random() * squareOptions.length)]

}
//AI display randomly selected square sequence 
displayMemory = function () {
    for (var i = 0; i < gameMemory.length; i++) {
        if (userInput === gameMemory) {
            squareSelector()
            gameMemory.push(randomSquare)
            console.log(gameMemory)
        }
    }
}
//AI displays randomly selected sqaure 
displaySquare = function () {
    if (randomSquare === 'red') {
        $('#red').css("background-color", "black")
    } else if (randomSquare === 'yellow') {
        $('#yellow').css("background-color", "black")
    } else if (randomSquare === 'blue') {
        $('#blue').css("background-color", "black")
    } else if (randomSquare === 'green') {
        $('#green').css("background-color", "black")
    } else {
    }
}
// next round logic 
nextRound = function () {
    if (randomSquare === userClick) {
        squareSelector()
        displayMemory()
        gameMemory.push(randomSquare)
        console.log(randomSquare)
    } else {
        alert('Game Over')
    }
}

// game win logic 
gameWin = function () {
    if (userInput > 5)
        alert('You won the game!')
}

//user clicks start and game begins 
$('#start').click(() => {
    squareSelector()
    displaySquare()
    gameMemory.push(randomSquare)
    console.log(randomSquare)
})
//user clicks red
$('#red').click(() => {
    userClick = 'red'
    console.log('red click')
    nextRound()
    gameWin()
    userInput.push(userClick)
})
//user clicks yellow
$('#yellow').click(() => {
    userClick = 'yellow'
    console.log('yellow click')
    nextRound()
    gameWin()
    userInput.push(userClick)
})
//user clicks green
$('#green').click(() => {
    userClick = 'green'
    console.log('green click')
    nextRound()
    gameWin()
    userInput.push(userClick)
})
//user clicks blue 
$('#blue').click(() => {
    userClick = 'blue'
    console.log('blue click')
    nextRound()
    gameWin()
    userInput.push(userClick)
})

//prevents user from clicking start game multiple times
$('#start').one('click', function () {
    $(this).attr('disabled', 'disabled');
})


$(document).ready()
console.log('Start Game')

