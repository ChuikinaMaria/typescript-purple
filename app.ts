let input: unknown;

input = 3;
input = ['sd', 'fgh'];

// let res: string = input;   выдает ошибку, потому что unknown != string

let input_any: any;
input_any = 3;
let res_any: string = input_any;  // не выдает ошибку, any можно записать в string

function run(i: unknown) {
    if (typeof i == 'number') {
        i++
    } else {
        i
    }

}

run(input);

// type assertion - проверка типа

async function getData() {
    try {
        await fetch("");
    } catch (error) {
        // console.log(error.message); ошибка, нельзя обратиться к свойству unknown, к any можно было
        if (error instanceof Error) {
            console.log(error.message); // явная проверка, почти всегда
        }
    }
}
async function getDataForce() {
    try {
        await fetch("");
    } catch (error) {
        const e = error as Error;
        console.log(e.message); // выдаст ошибку если е != error
        }
    }

type U1 = unknown | null; // union type with unknown always unknown
type I1 = unknown & string; // intersection goes to narrow type, typeof I1 == string