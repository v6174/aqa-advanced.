

const number = 7; // the number that the the table will be built with

// using the 'for' loop to build the multiplication table 
for (let i = 1; i <= 10; i++) {
    console.log(number + "x" + i + "=" + (number * i));
}

console.log("\n"); //spacing

// using the 'while' loop to build the multiplication table
let j = 1;
while (j <= 10) {
    console.log(number + "x" + j + "=" + (number * j));
    j++;
}
