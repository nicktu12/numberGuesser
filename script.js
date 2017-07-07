var userInput = document.getElementById('user-input');
var guessButton = document.getElementById('guess-button');
var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset');
var lastGuess = document.getElementById('output-number');
var userMin = document.getElementById('user-min');
var userMax = document.getElementById('user-max');
var userRangeSubmit = document.getElementById('user-range-button');
var minText = document.getElementById('min-value');
var maxText = document.getElementById('max-value');
var minBubble = document.getElementById('min-bubble');
var maxBubble = document. getElementById('max-bubble');
var updateStaticText = document.getElementById('static-output-text');

var randomNumberGlobal;
var minValueGlobal = 0;
var maxValueGlobal = 100;
var roundNumberGlobal = 1;

userRangeSubmit.addEventListener('click', userRandomNumber);
guessButton.addEventListener('click', guessButtonFunction);
clearButton.addEventListener('click', clearField);
resetButton.addEventListener('click', reloadPage);
minText.addEventListener('click', updateText);
maxText.addEventListener('click', updateText);
minBubble.addEventListener('click', updateText);
maxBubble.addEventListener('click', updateText);
userInput.addEventListener('input', buttonEnable);
updateStaticText.addEventListener('click', updateStaticTextFunction);

function getRandomNum () {
  randomNumberGlobal = Math.round(Math.random()*100);
  console.log('random number', randomNumberGlobal);
};

getRandomNum();

function buttonEnable() {
  document.getElementById('clear-button').removeAttribute('disabled');
  document.getElementById('guess-button').removeAttribute('disabled');
  document.getElementById('reset-button').removeAttribute('disabled');
};

function getRandomFromUser(minValueNumberInput, maxValueNumberInput) {
  minValueGlobal = Math.ceil(minValueNumberInput);
  console.log(minValueGlobal);
  maxValueGlobal = Math.floor(maxValueNumberInput);
  console.log(maxValueGlobal);
  randomNumberGlobal = Math.floor(Math.random() * (maxValueNumberInput - minValueNumberInput + 1)) + minValueNumberInput;
  console.log("new", randomNumberGlobal);
};


function updateText (minValueTextInput, maxValueTextInput) {
  // minValueGlobal = userMin.value;
  // maxValueGlobal = userMax.value;
  minText.innerText = minValueGlobal;
  maxText.innerText = maxValueGlobal;
  minBubble.innerText = minValueGlobal;
  maxBubble.innerText = maxValueGlobal;
  console.log('new min val', minValueGlobal)
  console.log('new max val', maxValueGlobal)
};

function userRandomNumber (event) {
  event.preventDefault();
  console.log('user min value', userMin.value);
  console.log('user max value', userMax.value);
  var parsedMin = parseInt(userMin.value);
  var parsedMax = parseInt(userMax.value);
  getRandomFromUser(parsedMin, parsedMax);
  updateText ();
};

function guessButtonFunction (event) {
  event.preventDefault();
  var guessText = document.getElementById('output-text');
  var userInputValue = parseInt(userInput.value);
  lastGuess.innerText = userInputValue;
  minBubble.innerText = minValueGlobal;
  maxBubble.innerText = maxValueGlobal;
  if (userInputValue < minValueGlobal || userInputValue > maxValueGlobal) {
    alert("Enter a number between " + minValueGlobal + " and " + maxValueGlobal + " ...or don't, I don't care :-|")
  } else if (userInputValue < randomNumberGlobal) {
    guessText.innerText = "Your guess was too low!";
  } else if (userInputValue > randomNumberGlobal) {
    guessText.innerText = "Your guess was too high!";
  } else {
    winAudio();
    alert("Wow! That's right! Enjoy a song by the legendary rock band Journey.");
    lastGuess.innerText = "^.^"
    roundCounter();
    roundIncrement();
    getRandomNum();
    updateBubbles();
    updateStaticTextFunction();
  };
};

// <audio id="song" />
//
// function playSong() {
//   grabelement toggle autoplay = true
// }

function winAudio() {
  console.log("audio works");
  var noise = new Audio("Journey - Anyway You Want It (1).mp3");
  noise.oncanplaythrough = function() {
       noise.play();
     }
   }

function updateStaticTextFunction() {
  updateStaticText.innerText ="Guess again";
};

function updateBubbles() {
  alert("Enter a number between " + minValueGlobal + " & " + maxValueGlobal + ".");
  updateText();
};

function roundIncrement() {
  var guessText = document.getElementById('output-text');
  minValueGlobal = parseInt(minValueGlobal - 10);
  maxValueGlobal = parseInt(maxValueGlobal + 10);
  console.log("minValue", minValueGlobal)
  console.log("maxValue", maxValueGlobal)
  guessText.innerText = "Guess a number between " + minValueGlobal + " and " + maxValueGlobal + ".";
};

function clearField (event) {
  event.preventDefault();
  var reset = "Enter your guess";
  userInput.value = reset;
};

function reloadPage () {
  location.reload ();
};

function roundCounter() {
    roundNumberGlobal = roundNumberGlobal + 1;
    console.log("roundCounter", roundNumberGlobal)
};

// konami code
// min and max statement
