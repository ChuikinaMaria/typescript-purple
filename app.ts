interface IUser {
    login: string;
    password?: string; // ? - пароль опционален
}
 

const user: IUser = {
    login: "á@a.ru",
    password: '1'
}

function multiply(first: number, second?: number): number {
    if (!second) {
        return first*first;
    } else
    return first * second;
}

function multiply_5(first: number, second: number = 5): number {
    return first * second;
}

console.log(multiply(3));
console.log(multiply_5(3));

interface IUser_PRO {
    login: string;
    password?: {
        type: 'primary' | 'secondary'
    }
}
function testPass(user: IUser_PRO) {
    const t = user.password?.type; // const t = user.password? user.password.type : undefined;
    const p = user.password!.type; // ! - точно будет password

}
function test(param?: string) {
    const t = param?? multiply(5); // если нет param, то присваивается значение вычисления функции
}