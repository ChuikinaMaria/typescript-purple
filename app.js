"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode["IN_PROCESS"] = "p";
    StatusCode["FAILED"] = "f";
})(StatusCode || (StatusCode = {}));
;
const res = {
    message: 'added succesfully',
    statusCode: StatusCode.SUCCESS
};
// 1 - success
// p - processing
// f - failed
if (res.statusCode === StatusCode.SUCCESS) {
}
function action(status) {
}
;
action(StatusCode.SUCCESS);
action(1);
// action('p'); // err
function compute() {
    return 3;
}
;
const res2 = 1 /* Roles.ADMIN */;
