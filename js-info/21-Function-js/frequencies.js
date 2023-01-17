// Функция frequencies возвращает объект с уникальными значениями массива в качестве ключей и их частотами в качестве значений.

// Используем Array.prototype.reduce() для сопоставления уникальных значений с ключами объекта, добавляя их к существующим ключам каждый раз, когда встречается одно и то же значение.

// Если передан не массив, то вернется null.

// const frequencies = arr =>
//   Array.isArray(arr)
//     ? arr.reduce((aсс, v) => {
//         aсс[v] = aсс[v] ? aсс[v] + 1 : 1;
//         return aсс;
//       }, {})
//     : null;

// // Пример:

// frequencies(['a', 'b', 'a', 'c', 'a', 'a', 'b', 'b', 'c', 'z']);
// // {a: 4, b: 3, c: 2, z: 1}