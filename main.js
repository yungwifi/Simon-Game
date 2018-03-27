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
    if (userClick === randomSquare) {
        squareSelector()
        displaySquare()
        gameMemory.push(randomSquare)
        console.log(randomSquare)
    } else {
        //game over function
    }
}

//pass or fail logic 
passFail = function () {
    for (var i = 0; i < gameMemory.length; i++) {
        if (userClicksRed === randomSquare) {

        }

    }

}

//user clicks start and game begins 
$('#start').click(() => {
    squareSelector()
    displaySquare()
    gameMemory.push(randomSquare)
    console.log(randomSquare)
})

$('#start').one('click', function () {
    $(this).attr('disabled', 'disabled');
});



//how do I limit these clicks to only one event per session? 

$(document).ready()
console.log('Start Game')

