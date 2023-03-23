// Массив объектов студентов
export const studentsList = JSON.parse(localStorage.getItem('studentsList')) || [
  {
    name: 'Наталья',
    surname: 'Олеговна',
    lastname: 'Иванова',
    birthday: '10.05.2005',
    startEducation: 2022,
    faculty: 'Географии'
  },
  {
    name: 'Артём',
    surname: 'Сергеевич',
    lastname: 'Морозов',
    birthday: '08.11.1990',
    startEducation: 2022,
    faculty: 'Химии'
  },
  {
    name: 'Евгения',
    surname: 'Дмитриевна',
    lastname: 'Зайцева',
    birthday: '02.09.1992',
    startEducation: 2010,
    faculty: 'Исторический'
  },
  {
    name: 'Николай',
    surname: 'Иванович',
    lastname: 'Ильин',
    birthday: '25.10.1997',
    startEducation: 2015,
    faculty: 'Экономический'
  },
  {
    name: 'Александр',
    surname: 'Валерьевич',
    lastname: 'Костин',
    birthday: '18.01.2002',
    startEducation: 2020,
    faculty: 'Искусств'
  }
]
