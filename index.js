// function declaration/definition
function samFunc() {
  console.log('Hi')
}

// function expression
var samFunc = function () {
  console.log('Hi')
}

// arrow function
var samFunc = () => {
  console.log('Hi');
}

samFunc(); // invoking or calling

// IIFE - Immediately invoked function
(function () {
  console.log('Hi');
})(); // immediate invoke

// anonymous -> a fucntion which does not have any name
[1, 2, 3].forEach(function (num) { // example unamed anonymous function
  console.log('Number', num);
});

// closure --> a function which does have local scope variable instead outer scope variables ( lexical scope )


// global scope
var m1 = 100;
var m2 = 200;

// closure function
function displayMarks() {
  console.log('Marks', m1 + m2);
}

displayMarks();


// local scope
function calculateMarks() {
  var m1 = 100;
  var m2 = 200;

  // closure function
  function displayMarks() {
    console.log('Marks', m1 + m2);
  }

  displayMarks();
}