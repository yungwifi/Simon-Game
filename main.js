//Square options and game memory arrays

const squareOptions = ['red', 'blue', 'yellow', 'green']
const gameMemory = []
let randomSquare;
//random square generator 
const squareSelector = function () {
    randomSquare = squareOptions[Math.floor(Math.random() * squareOptions.length)]

}


//user clicks square 
userClick = $('.piece').click(() => {
    console.log('user clicked')
})
userClicksRed = $('#red').click(() => {
    $('#red').css("background-color", "black")
    setTimeout($.proxy(userClicksRed, 'jQuery'), 1000)
})
userClicksYellow = $('#yellow').click(() => {
    $('#yellow').css("background-color", "black")
})
userClicksGreen = $('#green').click(() => {
    $('#green').css("background-color", "black")
})
userClicksBlue = $('#blue').click(() => {
    $('#blue').css("background-color", "black")
})


//AI displays randomly selected sqaure 
displaySquare = function () {
    if (randomSquare == '') {
        userClicksRed()
    } else if (randomSquare == 'yellow') {
        return userClicksYellow
    } else if (randomSquare == 'blue') {
        return userClicksBlue
    } else if (randomSquare == 'green') {
        return userClicksGreen
    }
}

//user clicks start and game begins 
$('#start').click(() => {
    squareSelector()
    gameMemory.push(randomSquare)
    console.log(randomSquare)
})

displaySquare();


//how do I limit these clicks to only one event per session? 
//why is my gameMemory push different from my randomsquare generator in console

$(document).ready()
console.log('Start Game')

