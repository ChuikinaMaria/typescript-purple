class User {
    _login: string;
    password: string;
    createdAt: Date;

    set login(l: string | number) {
        this._login = 'from set ' + l;
        this.createdAt = new Date();
    }

    get login() {
        return this._login
    }
}

const user = new User();
user.login = 'myLogin'

console.log(user._login);
console.log(user);
console.log(user.login);

