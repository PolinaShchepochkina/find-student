// // Функция сортировки студентов по имени
// export function sortStudentsByName(studentsArray) {
//   studentsArray.sort((a, b) => {
//     const nameA = `${a.lastname} ${a.name} ${a.surname}`;
//     const nameB = `${b.lastname} ${b.name} ${b.surname}`;
//     return nameA.localeCompare(nameB);
//   });
// };

// // Функция сортировки студентов по возрасту
// export function sortStudentsByBirthday(studentsArray) {
//   studentsArray.sort((a, b) => {
//     const dateA = a.birthday.split('.').reverse().join('-');
//     const dateB = b.birthday.split('.').reverse().join('-');
//     return new Date(dateB) - new Date(dateA);
//   });
// };

// // Функция сортировки студентов по году поступления
// export function sortStudentsByStartEducation(studentsArray) {
//   studentsArray.sort((a, b) => a.startEducation - b.startEducation);
// };

// // Функция сортировки студентов по факультету
// export function sortStudentsByFaculty(studentsArray) {
//   studentsArray.sort((a, b) => a.faculty.localeCompare(b.faculty));
// };
