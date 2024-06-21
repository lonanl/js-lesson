// console.log('Hello, world!')
// rootWrite('Hello world!')

// rootWrite('Привет ' + 'Ашарин ' + 'Алексей')

// let name = 'Алексей'
// let surname = 'Ашарин'
// let fullname = name + ' ' + surname


// rootWrite('Привет, ' + fullname)

// rootWrite('<h1>Привет ' + fullname + '</h1>')

// let studentNames = ['Алексей', 'Иван', 'Витослав', 'Михаил', 'Алекс']

// rootWrite(studentNames[0] + '<br>')
// rootWrite(studentNames[1] + '<br>')
// rootWrite(studentNames[2] + '<br>')
// rootWrite(studentNames[3] + '<br>')
// rootWrite(studentNames[4] + '<br>')

// for (let i = 0; i < 5; i++) {
//   rootWrite(studentNames[i] + '<br>')
// }

// let studentSurnames = ['Ашарин', 'Иванов', 'Алексеев', 'Дуничкин', 'Петухов']

let studentSurnames = ["Иванов", "Петрова", "Смирнов", "Козлова", "Новиков", "Морозова", "Васильев", "Попова", "Александров", "Соколова", "Кузнецов", "Лебедева", "Семенов", "Егорова", "Павлов"]
let studentNames = ["Иван", "Анна", "Дмитрий", "Екатерина", "Артем", "Ольга", "Алексей", "Мария", "Игорь", "Анастасия", "Денис", "Елена", "Максим", "Алиса", "Артур"]
let studentGenders = ["М", "Ж", "М", "Ж", "М", "Ж", "М", "Ж", "М", "Ж", "М", "Ж", "М", "Ж", "М"]

for (let i = 0; i < studentGenders.length; i++) {
  if (studentGenders[i] === 'М')
    rootWrite(studentNames[i] + ' ' + studentSurnames[i] + ' М' + '<br>')
  else
    rootWrite(studentNames[i] + ' ' + studentSurnames[i] + ' Ж' + '<br>')
}