/**
  // Exemplo 1:
const user = {
    name: 'Cristiano',
    lastName: 'Enke'
}

function getUserFullName(user){
    return {
        ...user,
        fullName: user.name +' ' +user.lastName
    }
}

const userFullName = getUserFullName(user);
console.log(userFullName);
alert(userFullName.fullName)
*/

// Exemplo 2:
const students = [
{
    name: 'Tom',
    grade: 10
},
{
    name: 'Tony',
    grade: 2
},
{
    name: 'Tina',
    grade: 7
},
]

function getApprovedStudents(studentList){
    return studentList.filter(student => student.grade >= 7);
}

console.log("Alunos Aprovados:");
console.log(getApprovedStudents(students));