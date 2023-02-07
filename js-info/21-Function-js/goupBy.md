// Функция groupBy группирует элементы массива на основе заданной функции.

// Мы используем Array.prototype.map() для перебора каждого значения массива и для его передачи функции или свойству. Затем, используем Array.prototype.reduce() для создания объекта, в котором ключи создаются на основе преобразованного массива результатов.

// const groupBy = (arr, fn) =>
//   arr
//     .map(typeof fn === 'function' ? fn : val => val[fn])
//     .reduce((acc, val, i) => {
//       acc[val] = (acc[val] || []).concat(arr[i]);
//       return acc;
//     }, {});

// // Пример:

// groupBy([1.1, 2.2, 2.3], Math.floor);
// // { 1: [1.1], 2: [2.2, 2.3]}

// groupBy(['one', 'two', 'three', 'four', 'five'], 'length');
// // { 3: ['one', 'two'], 4: ['four', 'five'], 5: ['three']}