interface IUser {
    name: string;
    email: string;
    login: string;
}

const user = //<IUSer> - не работает с React
 {
    name: 'Masha',
    email: 'Masha@ya.ru',
    login: 'Masyanya'
} as IUser;

interface IAdmin {
    name: string;
    role: number;
}
function logId(id: string | number) {
    if (isString(id)) {
        console.log(id);
    } else {
        console.log(id);
    }
   }

function isString(x: string | number): x is string {
    return typeof x === 'string';
}

function isAdmin(user: IUser | IAdmin): user is IAdmin { // не работает асинхронно
    return 'role' in user;
    
}

function isAdminAlternative(user: IUser | IAdmin): user is IAdmin { // не работает асинхронно
    return (user as IAdmin).role !== undefined; // если нет role, будет undefined
}

function setRoleZero(user: IUser | IAdmin) {
    if (isAdmin(user)) {
        user.role = 0;
    } else {
        throw new Error('User is not Admin');
    }
}