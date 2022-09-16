"use strict";
const arr = ['dfg', 1];
function logId(id) {
    if (typeof id === 'string') {
        console.log(id.toLowerCase());
    }
    else if (typeof id === 'number') {
        console.log(id + 154);
    }
    else
        console.log(id);
}
logId(1);
logId('Masha');
logId(true);
