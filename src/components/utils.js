// Функция, которая вычисляет возраст на основе даты рождения
export function calculateAge(birthday) {
  const today = new Date();
  const birth = new Date(birthday.split('.').reverse().join('-'));
  let age = today.getFullYear() - birth.getFullYear();
  const month = today.getMonth() - birth.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

// Вычисление года окончания обучения и номера курса
export function getEducationPeriod(startYear) {
  const endYear = startYear + 4;
  const currentYear = new Date().getFullYear();
  let course = '';
  if (currentYear > endYear) {
    course = 'закончил/а';
  } else {
    course = `${currentYear - startYear} курс`;
  }
  return `${startYear}-${endYear} (${course})`;
}
