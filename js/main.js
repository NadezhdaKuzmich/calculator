const operation = prompt(`What arithmetic operation ?
add( + ), sub( - ), mult( * ), div( / )`);

const firstNumber = prompt('Enter the first number');
const secondNumber = prompt('Enter the second number');
const num1 = Number(firstNumber);
const num2 = Number(secondNumber);

let result;
let sign;
let message;

switch(operation){
    case 'add':
    case '+': {
        result = num1 + num2;
        sign = '+'
        break;
    }
    case 'sub':
    case '-': {
        result = num1 - num2;
        sign = '-'
        break;
    }
    case 'mult':
    case '*': {
        result = num1 * num2;
        sign = '*'
        break;
    }
    case 'div':
    case '/': {
        result = num1 / num2;
        sign = '/'
        break;
    }
    default: {
        alert('Unknown operation!');
    }
}

if (firstNumber == '' || firstNumber == null || secondNumber == '' || secondNumber == null) {
    message = 'You entered not all values';
} else if (isNaN(result)) {
    message = 'You entered not all values correctly';
} else if (result == Infinity) {
    message = 'Can’t divide by 0';
} else {
    message = `${firstNumber} ${sign} ${secondNumber} = ${result}`;
}

alert(message);