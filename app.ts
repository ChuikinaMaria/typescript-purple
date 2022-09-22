const n: null = null;
const n1: any = null;
const n2: number = null;
const n3: string = null;
const n4: boolean = null;
const n5: undefined = null;

// "strictNullChecks": false in tsconfig.json , - no errors,
// true - n2, n3, n4, n5 - error

interface IUser{
    name: string;
}

function getUser() {
    if (Math.random() > 0.5) {
        return null; // null - осознанное отсутствие пользователя
    } else {
        return {
            name: 'Masha'
        } as IUser
    }
}

const user = getUser();
if (user) {
    const username = user.name;
}
// "strictNullChecks": true проверит, что иногда нет значения (первый ретерн) 
// alt + up - перемещение строки