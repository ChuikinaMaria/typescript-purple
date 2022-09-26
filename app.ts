type PaymentStatus = 'new' | 'paid';

class Payment {
    id: number;
    status: PaymentStatus = 'new';

    constructor(id: number) {
        this.id = id;
    }

    pay() {
        this.status = 'paid';
    }
}

class PersistedPayment extends Payment {
    databaseId: number;
    paidAt: Date;

    constructor() {
        const id = Math.random();
        super(id);  // обращение к конструктору исходного класса, которому наследует
    }

    save() {
        // сохраняет в базу
    }

    override pay(date?: Date) {
        super.pay();   // override mathod
        if (date) {
            this.paidAt = date;
        }

    }

new Payment().
new PersistedPayment().