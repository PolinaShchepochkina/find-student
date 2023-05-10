// // import { studentsList } from './data.js';
// import {
//   sortStudentsByName, sortStudentsByBirthday,
//   sortStudentsByStartEducation, sortStudentsByFaculty
// } from './sort.js';
// import { filterStudentsArray } from './filter.js';
// import { calculateAge, getEducationPeriod } from './utils.js';

// // Функция, создающая HTML-элемент для вывода одного студента в таблицу
// function getStudentItem(studentObj) {
//   const tableRow = document.createElement('tr');
//   const nameCell = document.createElement('td');
//   const birthdayCell = document.createElement('td');
//   const startEducationCell = document.createElement('td');
//   const facultyCell = document.createElement('td');
//   const age = calculateAge(studentObj.birthday);
//   const startYear = parseInt(studentObj.startEducation);

//   // Добавление информации о студенте в созданные элементы HTML
//   nameCell.textContent = `${studentObj.lastname} ${studentObj.name} ${studentObj.surname}`;
//   birthdayCell.textContent = `${studentObj.birthday.split('-').reverse().join('.')} (${age} лет)`;
//   startEducationCell.textContent = getEducationPeriod(startYear);
//   facultyCell.textContent = studentObj.faculty;

//   // Добавление созданных элементов HTML в строку таблицы
//   tableRow.appendChild(nameCell)
//   tableRow.appendChild(birthdayCell)
//   tableRow.appendChild(startEducationCell)
//   tableRow.appendChild(facultyCell)

//   return tableRow;
// };

// // Функция, отображающая таблицу со списком студентов
// function renderStudentsTable() {
//   const tableBody = document.querySelector('#students-list'); // тело таблицы
//   const fragment = document.createDocumentFragment(); // создание фрагмента для таблицы со списком студентов

//   // Создание строк таблицы с данными студентов, в том числе отфильтрованных, и добавление их во фрагмент
//   let studentsArray = [...studentsList];
//   const nameFilter = filterForm.elements['name-filter'].value.trim();
//   const facultyFilter = filterForm.elements['faculty-filter'].value.trim();
//   const startEducFilter = filterForm.elements['start-educ-filter'].value.trim();
//   const finishEducFilter = filterForm.elements['finish-educ-filter'].value.trim();
//   const filters = {
//     name: nameFilter,
//     faculty: facultyFilter,
//     startEducation: startEducFilter,
//     finishEducation: finishEducFilter
//   };
//   studentsArray = filterStudentsArray(studentsList, filters);
//   studentsArray.forEach(student => {
//     const rowContent = getStudentItem(student);
//     fragment.appendChild(rowContent);
//   });

//   // Очистка тела таблицы и добавление фрагмента со строками таблицы
//   tableBody.innerHTML = '';
//   tableBody.appendChild(fragment);

//   // Ограничение максимальной даты рождения на текущую дату
//   const birthdayInput = document.getElementById('birthday');
//   const maxDate = new Date().toISOString().split('T')[0];
//   birthdayInput.setAttribute('max', maxDate);

//   // Ограничение максимального года начала обучения на текущий год
//   const startEducationInput = document.getElementById('start-education');
//   const maxYear = new Date().getFullYear();
//   startEducationInput.setAttribute('max', maxYear);

//   // Добавление обработчиков событий на заголовки таблицы
//   const nameHeader = document.querySelector('th[name="name"]');
//   nameHeader.addEventListener('click', () => {
//     sortStudentsByName(studentsList);
//     renderStudentsTable();
//   });

//   const birthdayHeader = document.querySelector('th[name="birthday"]');
//   birthdayHeader.addEventListener('click', () => {
//     sortStudentsByBirthday(studentsList);
//     renderStudentsTable();
//   });

//   const startEducationHeader = document.querySelector('th[name="start-education"]');
//   startEducationHeader.addEventListener('click', () => {
//     sortStudentsByStartEducation(studentsList);
//     renderStudentsTable();
//   });

//   const facultyHeader = document.querySelector('th[name="faculty"]');
//   facultyHeader.addEventListener('click', () => {
//     sortStudentsByFaculty(studentsList);
//     renderStudentsTable();
//   });
// };

// // К форме добавления студента добавлен слушатель события отправки формы, в котором будет проверка введенных данных
// const addStudentForm = document.querySelector('#add-student-form');
// addStudentForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const surname = addStudentForm.elements.surname.value.trim();
//   const name = addStudentForm.elements.name.value.trim();
//   const lastname = addStudentForm.elements.lastname.value.trim();
//   const birthday = addStudentForm.elements.birthday.value.trim();
//   const startEducation = addStudentForm.elements.startEducation.value.trim();
//   const faculty = addStudentForm.elements.faculty.value.trim();

//   // Если проверка пройдет успешно, добавить объект с данными студентов в массив и запустить функцию отрисовки таблицы
//   if (surname && name && lastname && birthday && startEducation && faculty) {
//     const newStudent = {
//       surname,
//       name,
//       lastname,
//       birthday,
//       startEducation,
//       faculty
//     };

//     studentsList.push(newStudent);
//     localStorage.setItem('studentsList', JSON.stringify(studentsList));
//     renderStudentsTable();
//     addStudentForm.reset();
//   }
// });

// // Фильтрация
// const filterForm = document.querySelector('#filter-form');
// filterForm.addEventListener('submit', event => {
//   event.preventDefault();
//   renderStudentsTable();
//   filterForm.reset();
// });

// // Обработчик события нажатия на кнопку "Сбросить фильтры"
// const resetButton = document.querySelector('#reset-filter');
// resetButton.addEventListener('click', () => {
//   location.reload();
// });

// window.addEventListener('DOMContentLoaded', () => {
//   renderStudentsTable();
// });
