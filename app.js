"use strict";
class User {
    set login(l) {
        this._login = 'from set ' + l;
    }
    get login() {
        return this._login;
    }
}
const user = new User();
user.login = 'myLogin';
console.log(user._login);
console.log(user);
console.log(user.login);
