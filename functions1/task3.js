

// funcntion declaration and parameters input
function checkOrder(available, ordered) {
    if (ordered === 0) return "Your order is empty";
    if (ordered > available) return "Your order is too large, we don’t have enough goods.";
    return "Your order is accepted";
}

//
console.log(checkOrder(85, 0));      // "Your order is empty"
console.log(checkOrder(15, 55));     // "Your order is too large, we don’t have enough goods."
console.log(checkOrder(70, 20));     // "Your order is accepted"
