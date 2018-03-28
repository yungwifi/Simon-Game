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
            $('#red').css("background-color", "black")
            setTimeout(returnSquare, 500)
        } else if (gameMemory[i] === 'yellow') {
            console.log(gameMemory)
            $('#yellow').css("background-color", "black")
            setTimeout(returnSquare, 500)
        } else if (gameMemory[i] === 'blue') {
            console.log(gameMemory)
            $('#blue').css("background-color", "black")
            setTimeout(returnSquare, 500)
        } else if (gameMemory[i] === 'green') {
            console.log(gameMemory)
            $('#green').css("background-color", "black")
            setTimeout(returnSquare, 500)
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
        gameMemory.push(randomSquare)  //second
        displaySquare() // display SQUARESSSSS
        console.log(randomSquare)
    } else {
        alert('Game Over')
    }
}

// game win logic 
gameWin = function () {
    if (gameMemory.length > 5)
        alert('You won the game!')
}

//user clicks start and game begins 
$('#start').click(() => {
    squareSelector()
    setTimeout(returnSquare, 500)
    gameMemory.push(randomSquare)
    displaySquare()
    console.log(randomSquare)
})
//user clicks red
$('#red').click(() => {
    userClick = 'red'
    console.log('red click')
    gameWin()
    setTimeout(returnSquare, 500)
    userInput.push(userClick)
    nextRound()
})
//user clicks yellow
$('#yellow').click(() => {
    userClick = 'yellow'
    console.log('yellow click')
    gameWin()
    setTimeout(returnSquare, 500)
    userInput.push(userClick)
    nextRound()
})
//user clicks green
$('#green').click(() => {
    userClick = 'green'
    console.log('green click')
    gameWin()
    setTimeout(returnSquare, 500)
    userInput.push(userClick)
    nextRound()
})
//user clicks blue 
$('#blue').click(() => {
    userClick = 'blue'
    console.log('blue click')
    gameWin()
    setTimeout(returnSquare, 500)
    userInput.push(userClick)
    nextRound()
})

//prevents user from clicking start game multiple times
$('#start').one('click', function () {
    $(this).attr('disabled', 'disabled');
})


$(document).ready()
console.log('Start Game')

