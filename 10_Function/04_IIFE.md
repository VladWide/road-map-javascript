IIFE
IIFE (Immediately Invoked Function Expression) это JavaScript функция, которая выполняется сразу же после того, как она была определена.

(function () {
statements
})();
Это тип выражений, также известный как Self-Executing Anonymous Function, который состоит из двух основных частей. Первая - это сама анонимная функция с лексической областью видимости, заключённым внутри Оператора группировки (). Благодаря этому переменные IIFE замыкаются в его пределах, и глобальная область видимости ими не засоряется.

Вторая часть создаёт мгновенно выполняющееся функциональное выражение () , благодаря которому JavaScript-движок выполняет функцию напрямую.

Примеры
Функция становится мгновенно выполняющимся функциональным выражением. Переменные внутри функции не могут быть использованы за пределами её области видимости.

(function () {
var aName = "Barry";
})();
// Variable name is not accessible from the outside scope
aName // throws "Uncaught ReferenceError: aName is not defined"
Переменная, которой присвоено IIFE, хранит в себе результат выполнения функции, но не саму функцию.

var result = (function () {
var name = "Barry";
return name;
})();
// Immediately creates the output:
result; // "Barry"