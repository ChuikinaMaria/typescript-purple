function generateError (message: string): never { // никогда не возвращается
    throw new Error(message);
}

function dumpError():never {
    // return "s"; // - ошибка, потоу что never никогда не возвращает
    while(true) {}
}

function recurtion():never {
    return recurtion();
}

// const a: never = 123;  // ошибка, не можем присвоить к never
const a: void = undefined;

type paymentAction = 'refund' | 'checkout' // | 'reject'; // при добавлении третьего варианта
// проверка на тип never внизу не срабатывает и можно отловить ошибку на компайле, а не на ране

function processAction(action: paymentAction) {
    switch (action) {
        case 'refund':
            //...
            break;
        case 'checkout':
            //...
            break;
        /*case 'reject':
            //...
            break;*/  // добавлением третьего кейса исправляем ошибку, добавив новое действие
        default:
            const _: never = action; // проверка на тип, action после switch - never 
            throw new Error('fault action')
    }
}

function isString(x: string | number): boolean{
    if (typeof x === 'string') {
        return true;
    } else if(typeof x === 'number') {
        return false;
    }
    generateError('oops'); // исчерпывающая проверка на undefined
}

