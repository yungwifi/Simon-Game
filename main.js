
//Square options, game memory array, and user click history
const squareOptions = ['red', 'blue', 'yellow', 'green']
const gameMemory = []
const userInput = []
let randomSquare;
let userClick;
let round = gameMemory.length

//random square generator 
const squareSelector = function () {
    randomSquare = squareOptions[Math.floor(Math.random() * squareOptions.length)]

}

//AI displays randomly selected sqaure 
changeSquareBlack = function () {
    for (var i = 0; i < gameMemory.length; i++) {
        if (gameMemory[gameMemory.length - 1] === 'red') {
            console.log('Change square value red: ', gameMemory[i])
            $('#red').css("background-color", "#FF6470")
        } else if (gameMemory[gameMemory.length - 1] === 'yellow') {
            console.log('Change square value yellow: ', gameMemory[i])
            $('#yellow').css("background-color", "#FFF090")
        } else if (gameMemory[gameMemory.length - 1] === 'blue') {
            console.log('Change square value blue: ', gameMemory[i])
            $('#blue').css("background-color", "#5C5EFF")
        } else if (gameMemory[gameMemory.length - 1] === 'green') {
            console.log('Change square value green: ', gameMemory[i])
            $('#green').css("background-color", "#5DE859")
        } else {
        }
    }
}

//return square's original state 
returnSquare = function () {
    if (randomSquare === 'red') {
        console.log('return red')
        $('#red').css("background-color", "red")
    } else if (randomSquare === 'yellow') {
        console.log('return yellow')
        $('#yellow').css("background-color", "yellow")
    } else if (randomSquare === 'blue') {
        console.log('return blue')
        $('#blue').css("background-color", "blue")
    } else if (randomSquare === 'green') {
        console.log('return green')
        $('#green').css("background-color", "green")
    } else {
    }
}

// next round logic 
nextRound = function () {
    if (randomSquare === userClick) { //this function needs to include game memory contents 
        gameWin()

    }
    else {
        alert('Game Over')
    }
}

// game win logic 
gameWin = function () {
    if (gameMemory.length < 4) {
        setTimeout(orchestrator, 500)
    } else {
        alert('You won the game!')
    }
}
orchestrator = function () {
    squareSelector()
    gameMemory.push(randomSquare)
    changeSquareBlack()
    setTimeout(returnSquare, 500)
}

startTimeOutFunction = function () {
    changeSquareBlack()
    setTimeout(returnSquare, 500)
}

//user clicks start and game begins 
$('#start').click(() => {
    squareSelector()
    console.log('Random square: ', randomSquare)
    gameMemory.push(randomSquare)
    setTimeout(startTimeOutFunction, 500)
})

//user clicks square
$('.piece').click(() => {
    console.log("Event Target on color:", event.target.id)
    userClick = event.target.id
    nextRound()

})

//prevents user from clicking start game multiple times
$('#start').one('click', function () {
    $(this).attr('disabled', 'disabled');
})

$(document).ready()
console.log('Start Game')


