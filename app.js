"use strict";
class Controller {
    handleWithLogs(req) {
        console.log('start');
        this.handle(req);
        console.log('end');
    }
}
// new Controller() - error
class UserController extends Controller {
    handle(req) {
        console.log(req);
    }
}
const c = new UserController(); // нет ошибки
c.handleWithLogs('request');
