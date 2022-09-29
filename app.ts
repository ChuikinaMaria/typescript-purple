abstract class Logger {
    abstract log(message: string): void;

    printDate(date: Date) {
        this.log(date.toString());
    }
}

class myLogger extends Logger {
    log(message: string): void {
        console.log(message);
    }
    logWithDate(message: string) {
        this.printDate(new Date());
        this.log(message);
    }
}

const a = new myLogger();
a.logWithDate('Ну нифига себе')



// abstract class Controller {          // абстрактный класс не инстанциируется
//     abstract handle(req: any): void; // абс метод только в абс классе

//     handleWithLogs(req: any) {  // в абстрактный констроллер можно обавить конкретный метод
//         console.log('start');
//         this.handle(req);
//         console.log('end');
//     }
// }

// // new Controller() - error

// class UserController extends Controller{
//     handle(req: any): void {
//         console.log(req);        
//     }
// }

// const c = new UserController(); // нет ошибки
// c.handleWithLogs('request');