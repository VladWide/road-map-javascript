// Array.flat()
// Array.flatMap()
// String.trimStart() & String.trimEnd()
// Необязательная привязка catch
// Object.fromEntries()
// Symbol.description
// Хорошо сформированный JSON.stringify()
// Function.prototype.toString()
// ECMAScript (ES для краткости) - это спецификация языка сценариев, стандартизированная ECMA International в ECMA-262 и ISO / IEC 16262. Она была создана для стандартизации языка JavaScript, чтобы способствовать множеству независимых реализаций стандартов от поставщиков браузеров.

// Мне лично нравится, как javaScript постоянно развивается и совершенствуется. В редакции спецификации ECMAScript 2019 года появилось много новых функций, и здесь я расскажу о некоторых из них.

// Array.flat()
// Array.flat() возвращает новый массив, в котором все подмассивы были рекурсивно “подняты” на указанный уровень глубины. Вызов Array.flat() без каких-либо аргументов сглаживает только первый уровень глубины. Можно указать необязательный аргумент глубины или вызвать функцию последовательно.

// Например:

// const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];

// arr.flat(); // [1, 2, 3, 4, 5, 6, Array(4)];

// arr.flat().flat(); // [1, 2, 3, 4, 5, 6, 7, 8, 9, Array(3)];

// arr.flat(3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// // Или, если ты не уверен в глубине массива:
// arr.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// Array.flatMap()
// Метод flatMap() идентичен методу map ES6, но в то же время сглаживает первый уровень глубины массива. Метод flatMap() сначала перебирает каждый элемент с помощью функции map(), а затем выравнивает результат через flat() в новый массив. flatMap() весьма полезен, так как объединение обоих методов в один - более эффективно.

// Например:

// const arr = [1, 2, 3, 4, 5];

// arr.map((x) => [x, x * 2]);
// // [Array(2), Array(2), Array(2), Array(2), Array(2)]
// // 0: (2)[1, 2]
// // 1: (2)[2, 4]
// // 2: (2)[3, 6]
// // 3: (2)[4, 8]
// // 4: (2)[5, 10]

// arr.flatMap((v) => [v, v * 2]);
// // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
// const sandwich = ["bread", "peanut butter and jelly", "bread"];

// // Помни String.split() возвращает массив строк:
// const ingredientArrays = sandwich.map((item) => item.split(" and "));
// // [["bread"], ["peanut butter","jelly"], ["bread"]]

// const ingredientsList = sandwich.flatMap((item) => item.split(" and "));
// // ['bread', 'peanut butter', 'jelly', 'bread']
// String.trimStart() & String.trimEnd()
// String.trimStart() и String.trimEnd() могут быть использованы для обрезки пробелов в начале или в конце строки.

// Например:

// const greeting = "    Hello everyone";

// console.log(greeting.trimStart());
// // "Hello everyone"
// const greeting = "Hello world    ";

// console.log(greeting.trimEnd());
// // "Hello world"
// Необязательная привязка catch
// Необязательная привязка catch позволяет разработчикам использовать try/catch без параметра error внутри блока catch.

// Например:

// До ES2019 используем:

// try {
//   // some code
// } catch (err) {
//   // error handling code
// }
// Теперь можем использовать try/catch следующим образом с ES2019:

// try {
//   // some code
// } catch {
//   // error handling code
// }
// Object.fromEntries()
// Object.fromEntries() создает объект или преобразует пары ключ-значение в объект. Он принимает только итерации: Object.fromEntries(someIterable).

// Например:

// const students = new Map([
//   ["name", "john"],
//   ["age", 22],
// ]);

// console.log(Object.fromEntries(students));
// // { name: 'john', age: 22 }
// Сценарий, который приводит к потери данных:

// const students = [
//   ["john", 22],
//   ["alex", 22],
//   ["julia", 21],
//   ["alex", 20],
// ];

// const studentObj = Object.fromEntries(students);
// // { john: 22, alex: 20, julia: 21 }
// // первый alex был перезаписан
// Symbol.description
// Свойство description только для чтения - это строка, возвращающая необязательное описание объектов Symbol.

// const mySymbol = `My Symbol`;

// const symObj = Symbol(mySymbol);

// console.log(symObj); // Symbol(mySymbol);

// console.log(String(symObj) === `Symbol(${mySymbol})`); // true

// console.log(symObj.description); // "My Symbol"
// Хорошо сформированный JSON.stringify()
// Исправленный вывод JSON.stringify() при обработке суррогатных кодовых точек UTF-8 (от U+D800 до U+DFFF).

// Перед этим изменением вызов JSON.stringify() возвращал некорректный символ Unicode («�»).

// Теперь эти суррогатные кодовые точки можно безопасно представить в виде строк, используя JSON.stringify(), и преобразовать обратно в их исходное представление, используя JSON.parse().

// JSON.stringify('\uD800');
// > '"�"'

// JSON.stringify('\uD800');
// > '"\\ud800"'
// toString()
// Function.prototype.toString(). Функции всегда имели метод экземпляра toString(), который возвращает строку, содержащую код функции.

// ES2019 ввел изменение в возвращаемое значение, чтобы избежать удаления комментариев и других символов, таких как пробел, точно представляющих функцию в том виде, как она была определена.

// Например, у нас есть функция:

// function /* a comment */ name() {}
// Поведение было таким:

// name.toString();

// // "function name() {}"
// Теперь поведение стало:

// name.toString();

// // "function /* a comment */ name () {}"