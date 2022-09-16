type httpMethod = 'post' | 'get';

type coolString = string;

function fetchWithAuth(url: string, method: httpMethod): 1 | -1 { 
    return 1
};

let user: {
    name: string,
    age: number,
    skills: string[]
} = {
    name: 'Sasha',
    age: 33,
    skills: ['1', '2']
};

type User = {
    name: string,
    age: number,
    skills: string[]
};

let newUser: User = {
    name: 'Dasha',
    age: 34,
    skills: ['3', '4']
}

type Role = {
    name: string
    id: number
};

type UserWithRole = User & Role;
type UserWithRoleTwoNames = {
    user: User,
    role: Role
}

let newUserWithRole: UserWithRole = {
    name: 'Sasha',
    age: 33,
    skills: ['1', '2'],
    id: 1

}