var userInput = document.getElementById("userInput");
event.preventDefault()

var randomNumber = function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



 chooses random number between minimun and maximun parameters

function myFunction() {
    document.getElementById("frm1").reset();
}

// resets form (getElementById("form name"))

function name() {
var input = document.getElementById("userInput");
alert(input);
}

// html id in this case is 'userInput'

if ("userInput" === randomNumber) {
  console.log("That's right!");
} else if ("userInput" > randomNumber) {
  console.log("That's too high");
} else {
  console.log("That's too low")
}

// when button is clicked, print message in box

veryImportantButton.addEventListener('click', function(){
  box.innerText = veryImportantMessage.value;
  console.log(veryImportantMessage);
})

// compares userInput to randomNumber

// needs event listener for button click
