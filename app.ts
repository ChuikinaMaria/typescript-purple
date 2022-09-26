class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Users extends Array<User> {  // Наследование
    searchByName(name: string) {
        return this.filter(u => u.name === name);
    }

    override toString(): string {
        return this.map(u => u.name).join(', ')
    }

}

const users = new Users();
users.push(new User('Masha'));
users.push(new User('Sasha'));
console.log(users.toString());

class UserList {    // Композиция
    users: User[];

    push(u: User) {
        this.users.push(u);
    }
}

class Payment {
    date: Date;
}

class UserWithPayment extends Payment {  // наследование, предметные области перемешаны
    name: string;
}

class UserWithPayment2 { // композиция, берем что надо из каждой области (агрегационный класс)
    user: User;
    payment: Payment;

    constructor(user: User, payment: Payment) {
        this.user = user;
        this.payment = payment;
    }
}