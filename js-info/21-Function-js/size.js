// Функция size получает размер массива, объекта или строки.

// Получив тип val (array, object или string) используем свойство length для массивов. Далее, значение length или size (если доступно), или количество ключей для объектов. Затем size объекта Blob, созданного из val для строк. С помощью split('') он разбивает строки на массив символов и возвращает его длину. Во всех других случаях функция возвращает 0.

// const size = (val) =>
//   // Если val массив
//   Array.isArray(val)
//     ? val.length
//     : // Если val объект
//     val && typeof val === "object"
//     ? val.size || val.length || Object.keys(val).length
//     : // Если val строка
//     typeof val === "string"
//     ? new Blob([val]).size
//     : 0;

// // Пример:

// size([1, 2, 3]); // 3
// size('some text'); // 9
// size({ one: 1, two: 2, three: 3 }); // 3