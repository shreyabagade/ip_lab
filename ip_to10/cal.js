const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function calculator() {
  rl.question('Enter an operation (+, -, *, /) or "exit" to quit: ', (operation) => {
    if (operation === 'exit') {
      rl.close();
      return;
    }

    rl.question('Enter the first number: ', (num1) => {
      rl.question('Enter the second number: ', (num2) => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if (isNaN(number1) || isNaN(number2)) {
          console.log('Invalid input. Please enter valid numbers.');
        } else {
          let result;

          switch (operation) {
            case '+':
              result = number1 + number2;
              break;
            case '-':
              result = number1 - number2;
              break;
            case '*':
              result = number1 * number2;
              break;
            case '/':
              if (number2 === 0) {
                console.log('Error: Division by zero.');
                calculator();
                return;
              }
              result = number1 / number2;
              break;
          }

          console.log(`Result: ${result}`);
        }

        calculator();
      });
    });
  });
}

calculator();

