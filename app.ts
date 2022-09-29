abstract class Controller {          // абстрактный класс не инстанциируется
    abstract handle(req: any): void; // абс метод только в абс классе

    handleWithLogs(req: any) {  // в абстрактный констроллер можно обавить конкретный метод
        console.log('start');
        this.handle(req);
        console.log('end');
    }
}

// new Controller() - error

class UserController extends Controller{
    handle(req: any): void {
        console.log(req);        
    }
}

const c = new UserController(); // нет ошибки
c.handleWithLogs('request');