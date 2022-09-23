"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
const user = new User('Masha');
console.log(user);
user.name = 'Natasha';
console.log(user);
