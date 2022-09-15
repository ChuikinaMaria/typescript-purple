function getFullName(userEntity: {firstname: string, surname: string}): string {
    
    return `${userEntity.firstname} ${userEntity.surname}`;
}

// const getFullNameArrow = (firstName: string, surname: string): string => {
//     return `${firstName} ${surname}`;
// }

const user = {
    firstname:'Masha',
    surname: 'Chuikinaa',
    city: 'Neerlinter',
    age: 36,
    skills: {
        dev: true,
        devops: false
    }
}

if (user.skills.dev) {
    console.log('Wow!')
}

console.log(getFullName(user));

