class Payment {
    private date: Date = new Date();

    getDate(this: Payment, a?: number) {
        return this.date;
    }

    getDateArrow = () => { // стрелочная ф-я несет контекст с собой
        return this.date
    }
}
 
const p = new Payment();

const user = {
    id: 1,
    paymentDate: p.getDate.bind(p), // bind передает контекст функции, что this. будет взято из Payment
    paymentDateArrow: p.getDateArrow
}   
console.log(p.getDate(1));                               
console.log(user.paymentDate(1));
console.log(user.paymentDateArrow());

class PaymentPersistent extends Payment {
    save() {
        return super.getDate() // return this.getDateArrow() 
    }// super - обращение к прототипу, а стрелочная функция не в прототипе
}
console.log(new PaymentPersistent().save());
