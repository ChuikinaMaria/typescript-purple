let a = 5;
let b: string = a.toString();
let e = new String(a).valueOf(); // без valueOF тип String (объект), а не string
let f: boolean = new Boolean(a).valueOf();

let c = 'fgh';
let d: number = +c; // parseInt(c);

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

const admin: IAdmin = {
    ...user, // спред оператор берет все свойства из user и добавляет в admin
    role: 1
} // сохранит и другие свойства, хоть и не явно

function userToAdmin(user: IUser): IAdmin {
    return {
        name: user.login, // можно присвоить значение другому ключу
        role: 1
    }
} // полученный объект содержит только нужные поля, иначе объект бует шире, чем нужно.