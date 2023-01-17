// Функция merge создаёт новый объект из комбинации двух или более объектов.

// Мы используем Array.prototype.reduce() в сочетании с Object.keys(obj) для перебора всех объектов и ключей. Затем, с помощью hasOwnProperty() проверяем, есть ли уже в объекте указанное свойство, и если да - добавляем через Array.prototype.concat() значения для ключей, существующих в нескольких объектах.

// const merge = (...objs) =>
//   [...objs].reduce(
//     (acc, obj) =>
//       Object.keys(obj).reduce((a, k) => {
//         acc[k] = acc.hasOwnProperty(k)
//           ? [].concat(acc[k]).concat(obj[k])
//           : obj[k];
//         return acc;
//       }, {}),
//     {}
//   );

// // Пример:

// const obj1 = {
//   a: [{ x: 1 }, { y: 2 }],
//   b: 3
// };

// const obj2 = {
//   a: { z: 4 },
//   b: [5, 6],
//   c: "text"
// };

// merge(obj1, obj2);
// // {
// //  a: [{ x: 1 }, { y: 2 }, { z: 4 }],
// //  b: [3, 5, 6],
// //  c: "text"
// // }