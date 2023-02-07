// ECMAScript - это стандарт, на котором основан JavaScript, и его часто называют ES.

// ES2016, официально известный как ECMAScript 2016, был завершен в июне 2016 года.

// По сравнению с ES2015, ES2016 - это крошечный релиз для JavaScript, содержащий всего две функции:

// Array.prototype.includes()
// Оператор возведения в степень
// Array.prototype.includes()
// Функция includes() вводит более читаемый синтаксис для проверки, содержит ли массив элемент, возвращая в зависимости от этого true или false.

// Ранее, чтобы проверить, содержит ли массив элемент, ты должен был использовать indexOf, который проверял индексы в массиве и возвращал -1, если элемента там нет.

// Поскольку -1 оценивается как истинное значение, мы не можем сделать, например так:

// if (![1, 2].indexOf(3)) {
//   console.log("Not found");
// }
// С помощью функции includes(), представленной в ES2016, мы можем сделать так:

// if (![1, 2].includes(3)) {
//   console.log("Not found");
// }
// Оператор возведения в степень
// Оператор возведения в степень ** является эквивалентом Math.pow(), но добавлен в язык, вместо того чтобы быть функцией библиотеки.

// Math.pow(4, 2) === 4 ** 2;
// Эта функция является хорошим дополнением для математических приложений JS.