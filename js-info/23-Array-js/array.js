// Функция remove удаляет элементы из массива, для которых переданная функция возвращает false.

// Используем Array.prototype.filter(), чтобы найти элементы массива, которые возвращают истинные значения и Array.prototype.reduce() вместе с Array.prototype.splice() чтобы удалить элементы из оригинального массива. Также, вызов этой функции вернёт массив с теми элементами, которые были удаленны из оригинального массива. Функция func вызывается с тремя аргументами (value, index, array).

// const remove = (arr, func) =>
//   // Проверяем, является ли arr массивом.
//   Array.isArray(arr)
//     // Фильтруем массив arr применяя функцию func к каждому элементу.
//     ? arr.filter(func).reduce((acc, val) => {
//         // Удаляем отфильтрованные элементы из оригинального массива.
//         arr.splice(arr.indexOf(val), 1);
//         // Возвращаем новый массив только с отфильтрованными элементами.
//         return acc.concat(val);
//       }, [])
//     : [];

// // Пример:

// const arr = [1, 2, 3, 4, 5, 6];
// const func = n => n % 2 === 0;

// remove(arr, func); // [2, 4, 6]
// // arr = [1, 3, 5]

// Array method //

const person = [
  { name: 'Vlad', age: 17, job: 'Front-End', budget: 100000 },
  { name: 'Viktoria', age: 13, job: 'SEO', budget: 1040030 },
  { name: 'Maxim', age: 37, job: 'Beack-End', budget: 45000 },
  { name: 'Dasha', age: 19, job: 'SMM', budget: 1200000 },
  { name: 'Lena', age: 17, job: 'Design', budget: 45500 },
]

// ForEach //

// const personName = person.forEach((p) => console.log(p.name))
// console.log(personName)
// const personAge = person.forEach((p) => console.log(p.age))
// console.log(personAge)
// const personJob = person.forEach((p) => console.log(p.job))
// console.log(personJob)
// const personBudget = person.forEach((p) => console.log(p.budget))
// console.log(personBudget)

// Map //

// const person1 = person.map((p) => p.budget * 4) // new Array
// console.log(person1)

// const age1 = person.map((a) => (a.age = '10'))
// console.log(age1)

// Filter //

// const personAge18 = person.filter((person) => person.age >= 18)
// console.log(personAge18)

// Find //

// const p = person.find((p) => p.budget >= 1000000)
// console.log(p)

//findIndex //

// const per = person.findIndex((i) => i.name === 'Lena')
// console.log(per)
