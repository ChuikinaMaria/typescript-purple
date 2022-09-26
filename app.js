"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
class Users extends Array {
    searchByName(name) {
        return this.filter(u => u.name === name);
    }
    toString() {
        return this.map(u => u.name).join(', ');
    }
}
const users = new Users();
users.push(new User('Masha'));
users.push(new User('Sasha'));
console.log(users.toString());
