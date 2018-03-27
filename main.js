//Square options, game memory array, and user click history
const squareOptions = ['red', 'blue', 'yellow', 'green']
const gameMemory = []
let randomSquare;
let userClick;
//random square generator 
const squareSelector = function () {
    randomSquare = squareOptions[Math.floor(Math.random() * squareOptions.length)]

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
        displaySquare()
        gameMemory.push(randomSquare)
        console.log(randomSquare)
    } else {
        alert('Game Over')
    }
}

// game win logic 

gameWin = function () {

}

//user clicks start and game begins 
$('#start').click(() => {
    squareSelector()
    displaySquare()
    gameMemory.push(randomSquare)
    console.log(randomSquare)
})

$('#red').click(() => {
    userClick = 'red'
    console.log('red click')
    nextRound()
})

$('#yellow').click(() => {
    userClick = 'yellow'
    console.log('yellow click')
    nextRound()
})
$('#green').click(() => {
    userClick = 'green'
    console.log('green click')
    nextRound()
})
$('#blue').click(() => {
    userClick = 'blue'
    console.log('blue click')
    nextRound()
})

$('#start').one('click', function () {
    $(this).attr('disabled', 'disabled');
})



$(document).ready()
console.log('Start Game')

