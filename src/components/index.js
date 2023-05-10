import { calculateAge, getEducationPeriod } from './utils.js';

const SERVER_URL = `http://localhost:3000`;

async function serverAddStudent(obj) {
  let response = await fetch(`${SERVER_URL}/api/students`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });

  let data = await response.json();
  return data;
};

async function serverGetStudents() {
  let response = await fetch(`${SERVER_URL}/api/students`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });

  let data = await response.json();
  return data;
};

async function serverDeleteStudent(id) {
  let response = await fetch(`${SERVER_URL}/api/students/${id}`, {
    method: "DELETE"
  });

  let data = await response.json();
  return data;
};

let serverData = await serverGetStudents();

let studentsList = [];

if (serverData) {
  studentsList = serverData;
}

function getNewStudent(student) {
  const tr = document.createElement("tr");
  const tdFIO = document.createElement("td");
  const tdBirthday = document.createElement("td");
  const tdFaculty = document.createElement("td");
  const tdStart = document.createElement("td");
  const deleteStudent = document.createElement("td");
  const buttonDelete = document.createElement("button");
  buttonDelete.classList.add("button-delete");
  buttonDelete.textContent = "Удалить";
  const age = calculateAge(student.birthday);
  const startYear = parseInt(student.studyStart);

  tdFIO.textContent = `${student.lastname} ${student.name} ${student.surname}`;
  tdBirthday.textContent = `${student.birthday.split('-').reverse().join('.')} (${age} лет)`;
  tdStart.textContent = getEducationPeriod(startYear);
  tdFaculty.textContent = student.faculty;

  buttonDelete.addEventListener("click", async function (event) {
    event.preventDefault();

    await serverDeleteStudent(student.id);
    tr.remove();
  })

  deleteStudent.append(buttonDelete);
  tr.append(tdFIO, tdBirthday, tdStart, tdFaculty, buttonDelete)
  return tr;
}

function render(arr) {
  let copyArr = [...arr];

  const studentTable = document.getElementById("stud-table");

  // сортировка (copyArr)
  // фильтрация (copyArr)

  studentTable.innerHTML = '';
  for (const student of copyArr) {
    const newTr = getNewStudent(student);
    studentTable.append(newTr);
  }
}

render(studentsList);

document.getElementById("add-student-form").addEventListener("submit", async function (event) {
  event.preventDefault();

  let newStudent = {
    name: document.getElementById("name").value,
    surname: document.getElementById("surname").value,
    lastname: document.getElementById("lastname").value,
    birthday: document.getElementById("birthday").value,
    studyStart: document.getElementById("studyStart").value,
    faculty: document.getElementById("faculty").value
  }

  let servDataObj = await serverAddStudent(newStudent);

  studentsList.push(servDataObj);
  render(studentsList);
});
