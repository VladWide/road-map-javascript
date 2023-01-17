// Цикл for in
// Object.keys
// Object.values
// Object.entries
// Object getOwnPropertyNames
// Цикл for in
// Цикл for in помогает получать на каждой итерации ключ объекта, используя который, мы получаем доступ к значению объекта.

// Проблема с циклом for in заключается в том, что он перебирает свойства в цепочке Prototype. Когда мы перебираем объект с помощью цикла for in, нам нужно проверить, принадлежит ли свойство этому объекту. Можно сделать это при помощи hasOwnProperty.

// const obj = {
//   width: 300,
//   height: 200,
//   title: "Menu"
// }

// for (let key in obj) {
//   if(obj.hasOwnProperty(key)){
//     console.log(`${key} : ${obj[key]}`)
//   }
// }

// // width : 300
// // height : 200
// // title : Menu
// Также, есть другие способы перебрать объект, которые не требуют полагаться на for in и hasOwnProperty. Для начала нужно преобразовать объект в массив, а затем перебирать сам массив.

// Мы можем преобразовать объект в массив четермя способами:

// Object.keys;
// Object.values;
// Object.entries;
// Object getOwnPropertyNames.
// Object.keys
// Метод Object.keys() принимает объект в качестве аргумента и возвращает массив с заданными ключами объекта.

// Итерируя метод Object.keys с методом forEach, мы получаем доступ к паре ключ-значение объекта.

// Например:

// const obj = {
//   width: 300,
//   height: 200,
//   title: "Menu"
// }

// const keys = Object.keys(obj);
// // ["width", "height", "title"]

// keys.forEach(key => {
//   console.log(`${key} : ${obj[key]}`);
// });

// // width : 300
// // height : 200
// // title : Menu
// Object.values
// Метод Object.values() принимает объект в качестве аргумента и возвращает массив с заданными значениями объекта.

// Используя данный метод, мы получаем доступ только к значениям объекта.

// Например:

// const obj = {
//   width: 300,
//   height: 200,
//   title: "Menu"
// }

// const values = Object.values(obj);
// // [300, 200, "Menu"]

// values.forEach(value => {
//   console.log(value);
// });

// // 300
// // 200
// // Menu
// Object.entries
// Метод Object.entries() принимает объект в качестве аргумента и возвращает массив с массивами, которые являются парами [key, value] данного объекта.

// Например:

// const obj = {
//   width: 300,
//   height: 200,
//   title: "Menu"
// }

// const entries = Object.entries(obj);
// //  [["width", 300], ["height", 200], ["title", "Menu"]]

// entries.forEach(([key, value]) => {
//   console.log(`${key}: ${value}`)
// })

// // width : 300
// // height : 200
// // title : Menu
// Так как Object.entries возвращает массив массивов, то мы деструктурируем массив в его ключ и свойство.

// Object getOwnPropertyNames
// Метод Object.getOwnPropertyNames также принимает объект в качестве аргумента и возвращает массив строк, соответствующих перечисляемым и неперечисляемым свойствам, найденным непосредственно в объекте.

// Например:

// const obj = {
//   width: 300,
//   height: 200,
//   title: "Menu"
// }

// const getOwnPropertyNames = Object.getOwnPropertyNames(obj);
// // ["width", "height", "title"]

// getOwnPropertyNames.forEach(key => {
//   console.log(`${key} : ${obj[key]}`);
// })

// // width : 300
// // height : 200
// // title : Menu

// const person = {
//   name: 'Vlad',
//   age: 26,
//   isProgramer: true,
//   greet(name) {
//     console.log(`Hello ${name}`)
//   },
// }

// console.log(person)

// const key = Object.keys(person)
// obj.forEach((key) => {
//   console.log(`"key": ${key}, "value":${person[key]}`)
// })

// const val = Object.values(person)
// per.forEach((value) => {
//   console.log(value)
// })

// const keyVal = Object.entries(person)
// keyVal.forEach((key, value) => {
//   console.log(`${key}: ${value}`)
// })

// person.greet('Vlad') // contexst //
// person.greet('Dasha')

// Object original ES3-5 //

// const person = Object.create(
//   {
//     calculateAge() {
//       console.log('Age: ', new Date().getFullYear() - this.birthYear)
//     },
//   },
//   {
//     name: {
//       value: 'Vladislav',
//       enumerable: true,
//       writable: true,
//       configurable: true,
//     },
//     birthYear: {
//       value: 1996,
//     },
//     age: {
//       get() {
//         return new Date().getFullYear() - this.birthYear
//       },
//       set(value) {
//         document.body.background = 'red'
//         console.log(`Set age: ${value}`)
//       },
//     },
//   }
// )

// // ES6

// const vlad = {
//   fullName: 'Vladislav Shyrokiy',
//   fullAge: 26,
//   work: 'Front-End',
//   trevaler: true,
//   nationaliti: ['uk', 'it'],
//   gender: 'male',
//   workerNow: false,
//   programer: true,
//   get() {
//     console.log(`My Name: ${this.fullName}, my age: ${this.fullAge}`)
//   },
//   set(value) {
//     const calc = (value += 41)
//     return calc
//   },
// }

// console.log(vlad.set(1))
