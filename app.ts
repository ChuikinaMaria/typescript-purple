interface IUser {
    name: string
}

interface IUser {  // классы имплементируют интерфейсы
    age: number    // в большинстве случаев интерфейсы
}

const user: IUser = {
    name: 'MAsha',
    age: 37
}

type ID = string | number; // type  всегда с несколькими типами

interface IID {
    ID: string | number;
}


   