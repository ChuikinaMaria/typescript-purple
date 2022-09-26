class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number
    ) {}   
}

class Delivery {
    constructor(
        public date: Date
    ) {}
}

class HomeDelivery extends Delivery {
    constructor(date: Date, public address: string) {
        super(date);     
    } 
}

class ShopDelivery extends Delivery {
    constructor(public shopId: number) {
        super(new Date());     
    } 
}

type deliveryOption = HomeDelivery | ShopDelivery;

class Cart {
    private products: Product[] = [];
    private delivery: deliveryOption;

    public addProduct(product: Product): void {
        this.products.push(product)
    }
    public deleteProductById(productId: number): void{
        this.products = this.products.filter((p: Product)=>p.id !== productId);
    }
    public getSum(): number {
        return this.products
            .map((p: Product) => p.price)
            .reduce((p1: number, p2: number) => p1 + p2)
    }
    public setDelivery(delivery: deliveryOption): void {
        this.delivery = delivery;
    }
    public checkOut() {
        if (this.products.length == 0) {
            throw new Error('Cart is empty')
        }
        if (!this.delivery) {
            throw new Error('No delivery option chosen')
        }
        return { success: true };
    }
}

const cart = new Cart();
cart.addProduct(new Product(1, 'coockie', 10));
cart.addProduct(new Product(2, 'water', 5));
cart.addProduct(new Product(3, 'apple', 15));
cart.deleteProductById(1);
console.log(cart);
console.log('Totale sum is ' + cart.getSum())
//cart.setDelivery(new HomeDelivery(new Date(), 'sgsdgsdgs')); проверка ошибки
console.log(cart.checkOut())







class Vehicle {
    public make: string;   // доступно наследникам и извне
    private damages: string[]; // недоступно наследникам, недоступно извне
    private _model: string;
    protected run: number;  // доступно наследникам, недоступно извне
    #price: number // # - родное приватное свойство JavaScript

    set model(model: string) {
        this._model = model;
        this.#price = 100;
    }

    get model() {
        return this._model;
    }

isPriceEqual(v: Vehicle) {
    return this.#price === v.#price  // можем проверить эквивалентность двух свойств, доступ есть
}

    addDamage(damage: string) {
        this.damages.push(damage);
    }

}

