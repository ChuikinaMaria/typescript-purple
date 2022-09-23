"use strict";
class User {
    constructor(skills) {
        this.skills = skills;
    }
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills == 'string') {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills = this.skills.concat(skillOrSkills);
        }
    }
}
const user = new User(['a', 'b']);
user.addSkill('c');
user.addSkill(['d', 'e']);
console.log(user);
function run(distance) {
    if (typeof distance == 'string') {
        return 'string';
    }
    else {
        return 5607;
    }
}
; // имплементации с фигурными скобками
console.log(run(1));
console.log(run('1'));
