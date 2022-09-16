function fetchWithAuth(url: string, method: "post" | 'get') {

};
function fetchWithAuth_typeReturn(url: string, method: "post" | 'get'): 1 | -1 { 
    return 1
};


fetchWithAuth('s', 'post'); 
// fetchWithAuth('s', 'p'); // ошибка, не тот литеральный тип


let method = 'post';
//fetchWithAuth('s', method); ошибка типа
fetchWithAuth('s', method as 'post');
method = 'another string';
fetchWithAuth('s', method as 'post');