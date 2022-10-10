const arr: Array<number> = [1, 2, 3]; // generic

async function test() {
const a = await new Promise<number>((resolve, reject) => {
    resolve(1);
})
}

const check: Record<string, boolean> = {
    drive: true,
    kpp: false
};

function logMiddleware(data: number): number {
    console.log(data);
    return data;
}

function logMiddlewareGen<T>(data: T): T {
    console.log(data);
    return data;
}

const res = logMiddleware(10);
// const res1 = logMiddleware('string'); error, wrong type
const res2 = logMiddlewareGen(10);
const res3 = logMiddlewareGen('string');

function getSplitedHalf<T>(data: Array<T>): Array<T> {
    const len = data.length / 2;
    return data.splice(0, len);
}

getSplitedHalf<number>([1,2,3]);

const split: <T>(data: Array<T>) => Array<T> = getSplitedHalf;
const split2: <Y>(data: Array<Y>) => Array<Y> = getSplitedHalf;

interface IlogLine<T> {
    timeStamp: Date;
    data: T
}

type logLineType<T> = {
    timeStamp: Date;
    data: T
}

const logLineI: IlogLine<{a: number}> = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
}

const logLineT: logLineType<{a: number}> = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
}