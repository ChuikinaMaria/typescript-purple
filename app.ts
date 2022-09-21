function logId (id: string | number): void {
    console.log(id);
}

const a = logId(3); // a: void

function multiply(f: number, s?: number): number | void {
    if (!s) {
        return f * f;
    }
}

type voidFunc = () => void;

const f1: voidFunc = () => {};
const f2: voidFunc = () => {
    return true;
}
const b = f2();

const skills = ["Dev", "DevOps"];
const user = {
    s: ['s']
}

skills.forEach((skill) => user.s.push(skill)); 
// push добавляет э-т в массив и возвращает новую длину массива,
// поэтому несовместим с forEach, который ничего не возвращает
// void позволяет игнорировать возвращаемое значение