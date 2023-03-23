// Функция фильтрации студентов
export function filterStudentsArray(studentsList, filters) {
  const { name, faculty, startEducation, finishEducation } = filters;
  let newArray = studentsList.filter(student => {
    const nameMatch = student.lastname.toLowerCase().includes(name.toLowerCase()) ||
      student.name.toLowerCase().includes(name.toLowerCase()) ||
      student.surname.toLowerCase().includes(name.toLowerCase());
    const facultyMatch = student.faculty.toLowerCase().includes(faculty.toLowerCase());
    const startEducationMatch = student.startEducation >= startEducation;
    const finishEducationMatch = (student.startEducation + 4) >= finishEducation;
    return nameMatch && facultyMatch && startEducationMatch && finishEducationMatch;
  });
  return newArray;
}
