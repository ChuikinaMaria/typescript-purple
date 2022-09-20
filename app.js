"use strict";
const user = {
    login: "á@a.ru",
    password: '1'
};
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    else
        return first * second;
}
function multiply_5(first, second = 5) {
    return first * second;
}
console.log(multiply(3));
console.log(multiply_5(3));
