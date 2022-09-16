interface User {
    name: string,
    age: number,
    skills: string[]

    log: (id: number) => string;
};

type func = {
    log: (id: number) => string;
} 

interface Role {
    roleId: number
}

interface UserWithRole extends User, Role {
    createdAt: Date;
}

let user: UserWithRole = {
    name: 'Dasha',
    age: 34,
    skills: ['3', '4'],
    roleId: 1,
    createdAt: new Date(),

    log(roleId) {
        return '';
    }
};

interface UserDict {
    [index:number]: User
};

type UserDict2 = {
    [index:number]: User
};

type ud = Record<number, User>

// interface IUser = []  - название с I, название с I, чтобы не путать с классами