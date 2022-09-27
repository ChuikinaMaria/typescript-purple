class UserService {
    // static name: string = 'dfg' // без статика работает, со статиком нет (есть встроенный name)

    private static db: any;

    static async getUser(id: number) {  // this - обращение к инстансу
        return UserService.db.findById(id);  // здесь обращение к объекту (классу)
    }
    create(){};

    static {
        UserService.db = 'dfgd'  // не может быть асинх
    }
}

UserService.db  // не нужно создават экземпляр (instance) класса, чтобы обратиться к свойству
UserService.getUser(1);

const inst = new UserService()
inst.create().getUser