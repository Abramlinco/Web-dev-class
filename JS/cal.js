// Selecting elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.calculator-button');

// Variables to store values and operations
let currentOperand = '';
let previousOperand = '';
let operation = null;

// Adding event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    handleButtonClick(value);
  });
});

// Handling button clicks based on type
function handleButtonClick(value) {
  if (!isNaN(value)) { // Number
    currentOperand += value;
    updateDisplay(currentOperand);
  } else if (value === 'C') { // Clear
    clear();
  } else if (value === '=') { // Calculate result
    calculate();
  } else { // Operator (+, -, *, /)
    chooseOperation(value);
  }
}

// Choosing an operation and preparing for the next operand
function chooseOperation(operator) {
  if (currentOperand === '') return;
  if (previousOperand !== '') {
    calculate();
  }
  operation = operator;
  previousOperand = currentOperand;
  currentOperand = '';
}

// Performing the calculation based on the stored operator
function calculate() {
  let result;
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(curr)) return;

  switch (operation) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = prev / curr;
      break;
    default:
      return;
  }
  currentOperand = result;
  operation = null;
  previousOperand = '';
  updateDisplay(currentOperand);
}

// Updating the display
function updateDisplay(value) {
  display.innerText = value;
}

// Clearing the calculator
function clear() {
  currentOperand = '';
  previousOperand = '';
  operation = null;
  updateDisplay('0');
}
