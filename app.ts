const arr = ['dfg', 1];

function logId(id: string | number | boolean) {  // union type
    if (typeof id === 'string') {                // narrowing down type
        console.log(id.toLowerCase())           // сужение типа
    } else if (typeof id === 'number') {
        console.log(id + 154)
    } else console.log(id);
}

logId(1);
logId('Masha')
logId(true)

function logError(err: string | string[]) {
    if (Array.isArray(err)) {
        console.log(err);
    } else {
        console.log(err);
    }
}

function logObject(obj: {a: number} | {b:number}) {
   if ('a' in obj) {
    console.log(obj.a);
   } else {
    console.log(obj.b);
   }
}

function logMultipleIds(a: string | number, b: string | boolean) {
    if (a === b) {

    } else {
        console.log(a);
    }
}

const a = 1; // тип 1, потоу что константа
let b: 1 = 1; // b=2 не работает, потому что тип = 1
