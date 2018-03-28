
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
            console.log(returnSquare)
            $('#red').css("background-color", "black")
        } else if (gameMemory[i] === 'yellow') {
            console.log(gameMemory)
            $('#yellow').css("background-color", "black")
        } else if (gameMemory[i] === 'blue') {
            console.log(gameMemory)
            $('#blue').css("background-color", "black")
        } else if (gameMemory[i] === 'green') {
            console.log(gameMemory)
            $('#green').css("background-color", "black")
        } else {
        }
    }
}

//return square's original state 
returnSquare = function () {
    if (randomSquare === 'red') {
        $('#red').css("background-color", "red")
    } else if (randomSquare === 'yellow') {
        $('#yellow').css("background-color", "yellow")
    } else if (randomSquare === 'blue') {
        $('#blue').css("background-color", "blue")
    } else if (randomSquare === 'green') {
        $('#green').css("background-color", "green")
    } else {
    }
}

// next round logic 
nextRound = function () {
    if (randomSquare === userClick) { //this function needs to include game memory contents 
        squareSelector() //first
        displaySquare()
        gameMemory.push(randomSquare)  //second
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
orchestrator = function () {
    nextRound()
    returnSquare()
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
    userInput.push(userClick)
    gameWin()
    setTimeout(orchestrator, 500)
})
//user clicks yellow
$('#yellow').click(() => {
    userClick = 'yellow'
    console.log('yellow click')
    userInput.push(userClick)
    setTimeout(orchestrator, 500)
    gameWin()
})
//user clicks green
$('#green').click(() => {
    userClick = 'green'
    console.log('green click')
    userInput.push(userClick)
    setTimeout(orchestrator, 500)
    gameWin()
})
//user clicks blue 
$('#blue').click(() => {
    userClick = 'blue'
    console.log('blue click')
    userInput.push(userClick)
    setTimeout(orchestrator, 500)
    gameWin()
})

//prevents user from clicking start game multiple times
$('#start').one('click', function () {
    $(this).attr('disabled', 'disabled');
})

$(document).ready()
console.log('Start Game')