const operator = prompt("Enter an operator(+,-,*,/)");
const num1 = parseFloat(prompt("Enter first number:"));
const num2 = parseFloat(prompt("Enter second number:"));

let results;

if (operator == "+") {
    results = num1 + num2;
} else if (operator == "-") {
    results = num1 - num2;
} else if (operator == "*") {
    results = num1 * num2;
} else if (operator == "/") {
    results = num1 / num2;
} else {
    alert("Please enter a valid operator(+,-,*,/)");
}

alert(results);