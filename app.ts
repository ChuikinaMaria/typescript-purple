const skill: readonly [number, string] = [1, 'Dev'];

// skill[0] = 1; err

const skills: readonly string[] = ['a', 'b', 'c'];

// readonly - const for array
// skills.push('d'); err

// skills[0] = 't'; err

const newSkills: Array<string> = ['a', 'b', 'c']; // generic string[]
const ROnewSkills: ReadonlyArray<string> = ['a', 'b', 'c']; // generic readonly string[]