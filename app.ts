class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

}

const user = new User('Masha');
console.log(user);
user.name = 'Natasha';
console.log(user);

class Admin {
    role: number; //role!: number если "strictPropertyInitialization": true в tsconfig
}

const admin = new Admin();
admin.role = 1;