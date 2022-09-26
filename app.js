"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Vehicle_price;
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProductById(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    getSum() {
        return this.products
            .map((p) => p.price)
            .reduce((p1, p2) => p1 + p2);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkOut() {
        if (this.products.length == 0) {
            throw new Error('Cart is empty');
        }
        if (!this.delivery) {
            throw new Error('No delivery option chosen');
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
console.log('Totale sum is ' + cart.getSum());
//cart.setDelivery(new HomeDelivery(new Date(), 'sgsdgsdgs'));
console.log(cart.checkOut());
class Vehicle {
    constructor() {
        _Vehicle_price.set(this, void 0); // # - родное приватное свойство JavaScript
    }
    set model(model) {
        this._model = model;
        __classPrivateFieldSet(this, _Vehicle_price, 100, "f");
    }
    get model() {
        return this._model;
    }
    isPriceEqual(v) {
        return __classPrivateFieldGet(this, _Vehicle_price, "f") === __classPrivateFieldGet(v, _Vehicle_price, "f"); // можем проверить эквивалентность двух свойств, доступ есть
    }
    addDamage(damage) {
        this.damages.push(damage);
    }
}
_Vehicle_price = new WeakMap();
