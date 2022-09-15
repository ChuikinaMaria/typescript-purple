enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS = 'p',
    FAILED = 'f'

};

const res = {
    message: 'added succesfully',
    statusCode: StatusCode.SUCCESS
}

// 1 - success
// p - processing
// f - failed

if (res.statusCode === StatusCode.SUCCESS) {

}

function action(status: StatusCode) {

};

action(StatusCode.SUCCESS);
action(1);
// action('p'); // err

function compute() {
    return 3;
}

const enum Roles{
    ADMIN =1,
    USER = 2
};

const res2 = Roles.ADMIN;