"use strict";
function fetchWithAuth(url, method) {
}
;
function fetchWithAuth_typeReturn(url, method) {
    return 1;
}
;
fetchWithAuth('s', 'post');
// fetchWithAuth('s', 'p'); // ошибка, не тот литеральный тип
let method = 'post';
//fetchWithAuth('s', method); ошибка типа
fetchWithAuth('s', method);
method = 'another string';
fetchWithAuth('s', method);
