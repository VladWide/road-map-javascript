// Функция dig возвращает целевое значение во вложенном объекте JSON на основе заданного ключа.

// Сначала используем оператор in, чтобы проверить, существует ли target в obj. Если такой имеется - возвращаем значение obj[target]; в противном случае используем Object.values(obj) и Array.prototype.reduce(), чтобы рекурсивно вызывать dig для каждого вложенного объекта, пока не будет найдена первая подходящая пара ключ / значение.

// const dig = (obj, target) =>
//   target in obj
//     ? obj[target]
//     : Object.values(obj).reduce((acc, val) => {
//         if (acc !== undefined) return acc;
//         if (typeof val === "object") return dig(val, target);
//       }, undefined);

// // Пример:

// const data = {
//   level1: {
//     level2: {
//       level3: "some data",
//     }
//   }
// };

// dig(data, 'level3'); // "some data"
// dig(data, 'level4'); // undefined