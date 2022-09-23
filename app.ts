class User {
    skills: string[];

    constructor(skills) {
        this.skills = skills;
    }

    addSkill(skill: string): void;  // overload of method
    addSkill(skill: string[]): void;
    addSkill( skillOrSkills: string | string[]): void {
        if (typeof skillOrSkills == 'string') {
            this.skills.push(skillOrSkills)
        } else {
            this.skills = this.skills.concat(skillOrSkills);
        }

    }
}

const user = new User(['a', 'b']);
user.addSkill('c');
user.addSkill(['d','e']);
console.log(user)

function run(distance: number): number;
function run(distance: string): string; // перегрузка без фигурных скобок
function run(distance: number | string): number | string {
    if (typeof distance == 'string') {  // имплементации с фигурными скобками
        return 'string'
    } else {
        return 5607
    }
}; 

console.log(run(1));
console.log(run('1'));