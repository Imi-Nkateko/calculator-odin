// Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, so start by creating functions for the following items and testing them in your browser’s console:

 // add
const add = (a,b) => {
    return a + b
}


// subtract
const subtract = (a, b) => {
  return a - b;
};


// multiply
const multiply = (a, b) => {
  return a * b;
};


// divide
const divide = (a, b) => {
  return a / b;
};


// Calculator operations
let firstNumber = 0;
let secondNumber = 0;
let operator;

const operate = (firstNumber, secondNumber, operator) => {
    add(firstNumber, secondNumber)
}

// populate display when digit button is clicked
const lastOperationScreen = document.querySelector("#lastOperationScreen")
const digitBtns = document.querySelectorAll("#btn");

digitBtns.forEach(digitBtn => {
  digitBtn.addEventListener("click", () => {
    let digitValue = digitBtn.textContent
    populateDisplay(digitValue)
  })
});

const populateDisplay = (digit) => {
  lastOperationScreen.textContent  += digit
}

