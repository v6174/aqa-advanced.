

// function declaration method 
function rectangleAreaDeclaration(widht, height) {
    return widht * height;
}
console.log("");
console.log("1. Declaration method.Rectangle area is:", rectangleAreaDeclaration(23, 5), "\n");


// function expression method
const rectangleAreaExpression = function(widht, height) {
    return widht * height;
};

console.log("2. Expression method.Rectangle area is:", rectangleAreaExpression(24, 6), "\n");


// arrow function method
const rectangleAreaArrow = (widht, height) => widht * height;

console.log("3. Arrow method.Rectangle area is:", rectangleAreaArrow(25, 7), "\n");

