// String#matchAll
// Dynamic import
// BigInt
// Promise.allSettled
// globalThis
// for-in mechanics
// Optional chaining
// Nullish coalescing
// Module namespace exports
// Хорошие новости! Новые функции ES2020 - доработаны. А это означает, что теперь у нас есть полное представление об изменениях, происходящих в ES2020 и о новой улучшенной спецификации JavaScript.

// 11-я часть нашего любимого языка программирования - ECMAScript 2020 содержит несколько новых функций. Некоторые из них небольшие, но есть такие, которые могут навсегда изменить то, как мы пишем JavaScript.

// Данная статья является кратким обзором этих новых функций.

// String#matchAll
// matchAll - это новый метод, добавленный к прототипу String, который связан с регулярными выражениями. Он возвращает итератор, который в свою очередь возвращает все совпадающие группы одну за другой.

// const str = "abc";
// const regexp = /[a-c]/g;
// const iterator = str.matchAll(regexp);

// for (result of iterator) {
//   console.log(result);
// }
// // ["a", index: 0, input: "abc", groups: undefined]
// // ["b", index: 1, input: "abc", groups: undefined]
// // ["c", index: 2, input: "abc", groups: undefined]
// Или

// const str = "#JavaScript is full of #surprises.";
// const regexp = /(#\w+)/g;
// const iterator = str.matchAll(regexp);

// for (result of iterator) {
//   console.log(result);
// }
// // ["#JavaScript", "#JavaScript", index: 0, input: "#JavaScript is full of #surprises.", groups: undefined]
// // ["#surprises", "#surprises", index: 23, input: "#JavaScript is full of #surprises.", groups: undefined]
// Dynamic import
// “Динамический импорт” в JavaScript даёт возможность динамически импортировать файлы JS в виде модулей. Так же, как мы делаем это с помощью Webpack и Babel на данный момент.

// Эта функция поможет получить код по запросу (более известный как разделение кода - code splitting), без дополнительных затрат на webpack или другие пакеты модулей. Также ты можешь загрузить код в блоке if-else.

// Динамический import () возвращает обещание (Promise). Следовательно, импорт теперь может быть назначен переменной с помощью async / await.

// // utils.js
// export function add(a, b) {
//   return a + b;
// }
// // ---------
// // index.js
// // Вариант 1
// (async function () {
//   const module = await import("./utils");
//   const sum = module.add(2, 3);
//   console.log(sum); // 5
// })();

// // Вариант 2
// async function load() {
//   const module = await import("./utils");
//   const sum = module.add(2, 3);
//   console.log(sum); // 5
// }
// load();

// // Вариант 3
// function load() {
//   return import("./add").then((module) => {
//     const sum = module.add(2, 3);
//     console.log(sum); // 5
//   });
// }
// load();
// BigInt
// Одна из самых ожидаемых функций в JavaScript, и она наконец-то здесь. BigInt это встроенный объект, который предоставляет способ представлять целые числа больше pow(2, 53) - 1, наибольшего числа, которое JavaScript может надежно представить с Number примитивом.

// На данный момент максимальное число, которое можно хранить как целое число в JavaScript, равно pow(2, 53) - 1. BigInt позволяет пойти дальше.

// Тем не менее, нужно добавить n в конце числа. n означает, что это BigInt.

// let oldMax = Number.MAX_SAFE_INTEGER; // 9007199254740991
// ++oldMax; // 9007199254740992
// ++oldMax; // 9007199254740992 <- такое же значение

// let newMax = 9007199254740992n;
// ++newMax; // 9007199254740993n
// ++newMax; // 9007199254740994n

// const a = 9007199254740991n; // 9007199254740991n
// const b = BigInt(9007199254740991n); // 9007199254740991n
// a === b; // true

// typeof 10; // "number";
// typeof 10n; // "bigint";
// Promise.allSettled
// Помнишь функцию Promise.all? Он выполнялся успешно (resolves) только тогда, когда все переданные промисы были выполнены успешно. И выполнялся с ошибкой (rejects), если хотя бы один из промисов был отклонен, в то время как другие ещё могли быть в статусе ожидания (pending).

// Новый allSettled ведет себя иначе. Он выполняется всякий раз, когда все промисы заканчиваются, то есть выполнились успешно или выполнились с ошибкой. Он возвращает массив, который содержит как статус промиса, так и значение (или ошибку).

// Таким образом, allSettled никогда не отклоняется. Он либо в состоянии ожидания, либо выполнился успешно.

// const promiseArray = [
//   Promise.resolve(200),
//   Promise.reject(""),
//   Promise.reject(new Error("Error")),
// ];

// Promise.allSettled(promiseArray).then((result) => {
//   console.log("All Promises Settled", result);
// });

// // All Promises Settled
// // [
// //   {status: "fulfilled", value: 200},
// //   {status: "rejected", reason: ""},
// //   {status: "rejected", reason: Error: Error at <anonymous>:4:18}
// // ]
// globalThis
// В JavaScript всегда есть один большой объект контекста, который содержит всё. Традиционно в браузерах это window. Но если попытаешься получить к нему доступ в Node, то получишь ошибку. В Node нет глобального объекта window; вместо этого есть объект global. С другой стороны, в WebWorkers нет доступа к window, но вместо этого есть self.

// ES2020 приносит globalThis, который всегда ссылается на глобальный объект, независимо от того, где мы выполняем свой код:

// // Прежде, решение было таким:

// const getGlobal = function () {
//   if (typeof self !== undefined) {
//     return self;
//   }
//   if (typeof window !== undefined) {
//     return window;
//   }
//   if (typeof global !== undefined) {
//     return global;
//   }
//   throw new Error("unable to locate global object");
// };

// const globals = getGlobal();

// // Сейчас есть `globalThis`
// globalThis === window; // true
// for-in mechanics
// Спецификация ECMA не указывала, в каком порядке for (x in y) должно выполняться. Несмотря на то, что браузеры реализовали согласованный порядок самостоятельно, это официально стандартизировано в ES2020.

// Optional chaining
// Новый оператор опциональной последовательности призван сделать код короче, при работе со вложенными объектами и проверкой на undefined.

// const car = {};
// const color = car?.color;
// const colorName = car?.color?.name;
// Более подробно здесь

// Nullish coalescing
// Nullish coalescing - добавляет возможность действительно проверять нулевые (nullish) значения вместо ложных (falsey). В чем разница между значениями nullish и falsey?

// В JavaScript многие значения ложные falsey. Например: пустые строки, число 0, undefined, null, false, NaN и т. Д.

// Тем не менее, во многих случаях нам нужно проверить, является ли переменная нулевой то есть - undefined или null; например, когда переменная может иметь пустую строку или даже значение false.

// В этом случае мы можем использовать новый оператор ??

// const initialValue = 0;

// // Старый способ
// const myVar1 = initialValue || 10; // 10

// // Новый способ
// const myVar2 = initialValue ?? 10; // 0
// Ниже можем увидеть, как оператор ИЛИ || всегда возвращает истинное значение, тогда как нулевой оператор ?? возвращает не нулевое значение.

// false ?? "truthy value"; // => false
// undefined ?? "truthy value"; // => "truthy value"
// null ?? "truthy value"; // => "truthy value"
// NaN ?? "truthy value"; // => NaN

// false || "truthy value"; // => "truthy value"
// undefined || "truthy value"; // => "truthy value"
// null || "truthy value"; // => "truthy value"
// NaN || "truthy value"; // => "truthy value"
// Module namespace exports
// В JavaScript модулях уже можно было использовать следующий синтаксис:

// import * as utils from "./utils.mjs";
// Тем не менее до сих пор, не было никакого синтаксиса экспорта:

// export * as utils from "./utils.mjs";
// Он эквивалентен следующему:

// import * as utils from "./utils.mjs";
// export { utils };