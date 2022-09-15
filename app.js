"use strict";
const skill = [1, 'Dev'];
const id = skill[0];
const skillName = skill[1];
const [newId, newSkillName] = skill;
console.log(newId, newSkillName);
skill.push('tratata');
skill.push('trututu');
console.log(skill.pop());
// const tratata = skill[2]; //error
