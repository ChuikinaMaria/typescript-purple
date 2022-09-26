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

class EuroTrack extends Vehicle {  // приватные свойства не доступны при наследовании
    setRun(km: number) {
        this.run = km/0.62;
        // this.damages - error
    }
}

new Vehicle()