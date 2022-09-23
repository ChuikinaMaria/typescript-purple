class User {
    name: string;
    age: number;

    constructor();
    constructor(name: string);
    constructor(age: number);
    constructor(name: string, age: number); // для проверки на тип в компайлтайме

    constructor(ageOrName?: string | number, age?: number) {  // конструктор имплементации
        if (typeof ageOrName === 'string'){
            this.name = ageOrName;
        } else if (typeof ageOrName === 'number'){
            this.age = ageOrName;
        }
        if (typeof age === 'number'){
            this.age = age;

}
}}

const user = new User('Masha');
const user1 = new User();
const user2 = new User(33);
const user3 = new User('Galya', 86);