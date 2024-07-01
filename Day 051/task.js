// ### Task: Student Grade Management System

// You need to create a simple student grade management system. This system will manage student information and their grades for different subjects. The task includes the following steps:

// 1. *Create Student Objects*:
//    - Each student should have the following properties: id, name, and grades.
//    - The grades property should be an object with subjects as keys and corresponding grades as values.

// 2. *Store Students in an Array*:
//    - Create an array to store multiple student objects.

// 3. *Functions*:
//    - *Add a Student*: Create a function to add a new student to the array.
//    - *Remove a Student*: Create a function to remove a student from the array by their id.

// Example student objects
let students = [
    {
        id: 1,
        name: "Rahul",
        grades: {
            Math: 95,
            English: 87,
            Science: 91
        }
    },
    {
        id: 2,
        name: "Piyush",
        grades: {
            Math: 82,
            English: 79,
            Science: 88
        }
    }
];

function addStudent(id, name, grades) {

    const newStudent = {
        id: id,
        name: name,
        grades: grades
    };

    students.push(newStudent);
}

function removeStudent(id) {
    // Find the index of the student with the given id
    const index = students.findIndex(student => student.id === id);
    if (index === -1) {
        console.log(`Student with ID ${id} not found.`);
        return;
    }

    // Remove the student from the array
    students.splice(index, 1);
}

console.log("Before adding new student:");
console.log(students);

addStudent(3, "David", { Math: 88, English: 79, Science: 92 });

console.log("After adding new student:");
console.log(students);

removeStudent(1);

console.log(`After removing student with ID 1 :`);
console.log(students);

