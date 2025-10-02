let number = 10;

document.getElementById("variable").innerText = "variable value: " + number;

let sum = number + 5;
document.getElementById("operator").innerText = "Operators: 10 + 5 = " + sum;

if (sum > 10) {
    document.getElementById("condition").innerText = "Condition: sum is greater than 10";
} else {
    document.getElementById("condition").innerText = "Condition: sum is not greater than 10";
}

let loopText = "Loop: ";
for (let i = 0; i < 5; i++) {
    loopText += i + " ";
}
document.getElementById("loop").innerText = loopText;

let myString = "Hello, World!";
document.getElementById("string").innerText = "String: " + myString;

function multiply(a, b) {
    return a * b;
}
document.getElementById("function").innerText = "Function: 10 * 5 = " + multiply(10, 5);

let person = { 
    name: "Joseph Noel M. Sulit", 
    age: 21,
    greet: function() {
        return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
    }
};
document.getElementById("object").innerText = person.greet();