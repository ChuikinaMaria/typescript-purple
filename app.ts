const skill: [number, string] = [1, 'Dev'];
const id = skill[0];
const skillName = skill[1];

const [newId, newSkillName] = skill;
console.log(newId, newSkillName);

const arr: [number, string, ...boolean[], number] = [1, "tururu", true, false, true, true, 1];

skill.push('tratata');
skill.push('trututu');
console.log(skill.pop());

// const tratata = skill[2]; //error