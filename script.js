// script.js
const calculatorScreen = document.querySelector('.calculator-screen');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            calculatorScreen.value = '';
        } else if (value === '=') {
            if (previousInput !== '' && currentInput !== '') {
                currentInput = evaluate(previousInput, currentInput, operator);
                calculatorScreen.value = currentInput;
                previousInput = '';
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput !== '') {
                previousInput = currentInput;
                currentInput = '';
                operator = value;
            }
        } else {
            currentInput += value;
            calculatorScreen.value = currentInput;
        }
    });
});

function evaluate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return num2;
    }
}
