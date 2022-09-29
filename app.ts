class UserBuilder {
    name: string;

    setName(name: string): this{
        this.name = name;
        return this;
    }

    isAdmin(): this is AdminBuilder {
        return this instanceof AdminBuilder;
    }
}

class AdminBuilder extends UserBuilder {
    roles: string[];
}

const res = new UserBuilder().setName('Masha');
const res2 = new AdminBuilder().setName('Masha');

let user: UserBuilder | AdminBuilder = new UserBuilder();

if (user.isAdmin()) {
    console.log(user);
} else {
    console.log(user);
}