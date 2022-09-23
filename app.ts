interface User {
    name: string
}

const a = {};
assertUser(a);
a.name = 'Masha';

function assertUser(obj: unknown): asserts obj is User {
    if (typeof obj === 'object' && !!obj && 'name' in obj) { // !!obj - checking if not null
        return;
    } 
    throw new Error('Not an user');
}