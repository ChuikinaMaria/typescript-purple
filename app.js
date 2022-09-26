"use strict";
class Payment {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class PersistedPayment extends Payment {
    constructor() {
        const id = Math.random();
        super(id); // обращение к конструктору исходного класса, которому наследует
    }
    save() {
        // сохраняет в базу
    }
    pay(date) {
        super.pay(); // override mathod
        if (date) {
            this.paidAt = date;
        }
    }
}
class User {
    constructor() {
        this.name = 'user';
        console.log(this.name);
    }
}
class Admin extends User {
    constructor() {
        super();
        this.name = 'admin';
        console.log(this.name);
    }
}
new Admin();
