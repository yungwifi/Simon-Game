//Square options and game memory arrays

const squareOptions = ['red', 'blue', 'yellow', 'green']
const gameMemory = []
//random square generator 
const randomSquare = function () {
    return squareOptions[Math.floor(Math.random() * squareOptions.length)]
}

const colorReset = function () {
    setTimeout(function () {
        document.getElementsByClassName('piece')
    }, 3000);

}

//user clicks square 
const userClick = $('.piece').click(() => {
    console.log('user clicked')
})
const userClicksRed = $('#red').click(() => {
    $('#red').css("background-color", "black")
})
const userClicksYellow = $('#yellow').click(() => {
    $('#yellow').css("background-color", "black")
})
const userClicksGreen = $('#green').click(() => {
    $('#green').css("background-color", "black")
})
const userClicksBlue = $('#blue').click(() => {
    $('#blue').css("background-color", "black")
})


//AI displays randomly selected sqaure 
const displaySquare = function () {
    var r = $('#red')
    if (r === 'red') {
        $('#red').css("background-color", "black")
    } else if (randomSquare === 'yellow') {
        return userClicksYellow
    } else if (randomSquare === 'blue') {
        return userClicksBlue
    } else if (randomSquare === 'green') {
        return userClicksGreen
    }
}

//user clicks start and game begins 
$('#start').click(() => {
    console.log(randomSquare())
    gameMemory.push(randomSquare())
    colorReset(userClicksRed)
})
//how do I limit these clicks to only one event per session? 

$(document).ready()
console.log("Start Game")


