Определения функций JavaScript
Функции JavaScript определяются с помощью functionключевого слова.

Вы можете использовать объявление функции или функциональное выражение .

Объявления функций
Ранее в этом руководстве вы узнали, что функции объявляются со следующим синтаксисом:

function functionName(parameters) {
// code to be executed
}
Заявленные функции выполняются не сразу. Они «сохраняются для последующего использования» и будут выполняться позже, когда они вызываются (вызываются).

Пример
function myFunction(a, b) {
return a \* b;
}
Точки с запятой используются для разделения исполняемых операторов JavaScript.
Поскольку объявление функции не является исполняемым оператором, его обычно не заканчивают точкой с запятой.

Функциональные выражения
Функцию JavaScript также можно определить с помощью выражения .

Выражение функции может быть сохранено в переменной:

Пример
const x = function (a, b) {return a \* b};
После того, как функциональное выражение было сохранено в переменной, эту переменную можно использовать как функцию:

Пример
const x = function (a, b) {return a \* b};
let z = x(4, 3);
Приведенная выше функция на самом деле является анонимной функцией (функция без имени).

Функции, хранящиеся в переменных, не нуждаются в именах функций. Они всегда вызываются (вызываются) с использованием имени переменной.

Приведенная выше функция заканчивается точкой с запятой, поскольку она является частью исполняемого оператора.

РЕКЛАМА

Конструктор Function()
Как вы видели в предыдущих примерах, функции JavaScript определяются с помощью functionключевого слова.

Функции также могут быть определены с помощью встроенного конструктора функций JavaScript с именем Function().

Пример
const myFunction = new Function("a", "b", "return a \* b");

let x = myFunction(4, 3);
На самом деле вам не нужно использовать конструктор функций. Пример выше аналогичен написанию:

Пример
const myFunction = function (a, b) {return a \* b};

let x = myFunction(4, 3);
В большинстве случаев вы можете избежать использования newключевого слова в JavaScript.

Функция подъема
Ранее в этом руководстве вы узнали о «подъеме» ( JavaScript Hoisting ).

Подъем — это стандартное поведение JavaScript для перемещения объявлений в верхнюю часть текущей области.

Подъем применяется к объявлениям переменных и к объявлениям функций.

Из-за этого функции JavaScript можно вызывать до того, как они будут объявлены:

myFunction(5);

function myFunction(y) {
return y \* y;
}
Функции, определенные с помощью выражения, не поднимаются.

Самовызов функций
Функциональные выражения можно сделать «самовызывающимися».

Самовызывающееся выражение вызывается (запускается) автоматически, без вызова.

Функциональные выражения будут выполняться автоматически, если за выражением следует символ ().

Вы не можете самостоятельно вызвать объявление функции.

Вы должны добавить круглые скобки вокруг функции, чтобы указать, что это функциональное выражение:

Пример
(function () {
let x = "Hello!!"; // I will invoke myself
})();
Приведенная выше функция на самом деле является анонимной функцией с самовызовом (функция без имени).

Функции могут использоваться как значения
В качестве значений можно использовать функции JavaScript:

Пример
function myFunction(a, b) {
return a \* b;
}

let x = myFunction(4, 3);
Функции JavaScript можно использовать в выражениях:

Пример
function myFunction(a, b) {
return a \* b;
}

let x = myFunction(4, 3) \* 2;
Функции — это объекты
Оператор typeofв JavaScript возвращает «функцию» для функций.

Но лучше всего функции JavaScript можно описать как объекты.

Функции JavaScript имеют как свойства , так и методы .

Свойство arguments.lengthвозвращает количество аргументов, полученных при вызове функции:

Пример
function myFunction(a, b) {
return arguments.length;
}
Метод toString()возвращает функцию в виде строки:

Пример
function myFunction(a, b) {
return a \* b;
}

let text = myFunction.toString();
Функция, определенная как свойство объекта, называется методом объекта.
Функция, предназначенная для создания новых объектов, называется конструктором объектов.

Стрелочные функции
Стрелочные функции позволяют использовать короткий синтаксис для написания функциональных выражений.

Вам не нужны functionключевое слово, returnключевое слово и фигурные скобки .

Пример
// ES5
var x = function(x, y) {
return x \* y;
}

// ES6
const x = (x, y) => x \* y;
Стрелочные функции не имеют собственных this. Они плохо подходят для определения методов объекта .

Стрелочные функции не поднимаются. Они должны быть определены до их использования.

Использование const безопаснее, чем использование var, потому что выражение функции всегда имеет постоянное значение.

Вы можете опустить returnключевое слово и фигурные скобки только в том случае, если функция представляет собой один оператор. Из-за этого может быть хорошей привычкой всегда хранить их:

Пример
const x = (x, y) => { return x \* y };

Default Parameters

Параметры по умолчанию
Параметры по умолчанию позволяют задавать формальным параметрам функции значения по умолчанию в случае, если функция вызвана без аргументов, или если параметру явным образом передано значение undefined.

Интерактивный пример

Синтаксис
function [name]([param1[ = defaultValue1 ], ..., paramN[ = defaultValueN ]]]) {
statements
}
Описание
В JavaScript параметры функции, которым при её вызове не передаются значения, принимают по умолчанию значение undefined. Однако в некоторых случаях может быть полезно задать иное значение по умолчанию. Именно для таких случаев предназначены параметры по умолчанию.

В прошлом для проверки параметров и задания их значений по умолчанию использовался код в теле функции, в котором проверялось, не равны ли значения параметров undefined.

В приведённом ниже примере, в случае если при вызове функции значение для параметра b не передавалось, его значением становилось undefined, и результатом вычисления a \* b в функции multiply получалось значение NaN.

function multiply(a, b) {
return a \* b;
}

multiply(5, 2); // 10
multiply(5); // NaN !
Copy to Clipboard
Чтобы такого не происходило, в теле функции использовался код подобный тому, что находится во второй строчке, где в случае, если функция multiply вызывалась только c одним аргументом, параметру b присваивалось значение 1:

function multiply(a, b) {
b = typeof b !== 'undefined' ? b : 1;
return a\*b;
}

multiply(5, 2); // 10
multiply(5); // 5
Copy to Clipboard
С появлением в ES2015 параметров по умолчанию стало возможным обходиться без проверки параметров в теле функции. Так, в приведённом выше примере достаточно в заголовке функции указать 1 в качестве значения по умолчанию для параметра b:

function multiply(a, b = 1) {
return a\*b;
}

multiply(5, 2); // 10
multiply(5); // 5
multiply(5, undefined); // 5
Copy to Clipboard
Примеры
Передача значения undefined в сравнении с передачей других "ложных" значений
Значение по умолчанию присваивается формальному параметру только если при вызове функции значение для данного параметра не было передано или было явным образом передано undefined. Если формальному параметру при вызове передано любое значение, отличное от undefined, в том числе одно из "ложных" значений, таких как false, 0, "", '', ``, null, NaN, то в этом случае значение по умолчанию присвоено параметру не будет. Это иллюстрирует следующий пример:

function test(num = 1) {
console.log(typeof num);
}

// num не передано, или передано undefined:
test(); // 'number' (num получил значение 1)
test(undefined); // 'number' (и здесь num получил значение 1)

// num передано значение null или другое "ложное" значение:
test(''); // 'string' (num получил значение '')
test(null); // 'object' (num получил значение null)
Copy to Clipboard
Параметры по умолчанию вычисляются в момент вызова функции
В Javascript параметры по умолчанию вычисляются в момент вызова функции. В отличие от языка Python, при каждом вызове функции создаётся новое лексическое окружение функции.

function append(value, array = []) {
array.push(value);
return array;
}

append(1); // [1]
append(2); // [2], а не [1, 2]
Copy to Clipboard
Это верно и для функций, и для переменных:

function callSomething(thing = something()) {
return thing;
}

let numberOfTimesCalled = 0;
function something() {
numberOfTimesCalled += 1;
return numberOfTimesCalled;
}

callSomething(); // 1
callSomething(); // 2
Copy to Clipboard
Параметры по умолчанию доступны в следующих параметрах по умолчанию
В параметрах по умолчанию можно использовать значения предыдущих (расположенных левее в списке) параметров:

function greet(name, greeting, message = greeting + ' ' + name) {
return [name, greeting, message];
}

greet('David', 'Hi'); // ["David", "Hi", "Hi David"]
greet('David', 'Hi', 'Happy Birthday!'); // ["David", "Hi", "Happy Birthday!"]
Copy to Clipboard
Следующий пример ещё раз иллюстрирует эту возможность, а также позволяет ещё раз сравнить два способа достижения одного и того же результата: с использованием инициализации параметров по умолчанию и без её использования:

function go() {
return ":P"
}

function withDefaults(a, b = 5, c = b, d = go(), e = this,
f = arguments, g = this.value) {
return [a,b,c,d,e,f,g];
}
function withoutDefaults(a, b, c, d, e, f, g){
switch(arguments.length){
case 0:
a
case 1:
b = 5
case 2:
c = b
case 3:
d = go();
case 4:
e = this
case 5:
f = arguments
case 6:
g = this.value;
default:
}
return [a,b,c,d,e,f,g];
}

withDefaults.call({value:"=^_^="});
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^\_^="]

withoutDefaults.call({value:"=^_^="});
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^\_^="]
Copy to Clipboard
Инициализация с помощью функций, определяемых в теле функции
Начиная с версии Gecko 33 (Firefox 33 / Thunderbird 33 / SeaMonkey 2.30) функции, определяемые в теле самой функции, не могут быть использованы для инициализации параметров по умолчанию; попытка это сделать приведёт к ошибке ReferenceError. Параметры по умолчанию всегда вычисляются до обработки описаний функций, определяемых в теле функции.

// Вызовет ошибку ReferenceError!
function f(a = go()) {
function go(){return ":P"}
}
f(); // ReferenceError: go is not defined
Copy to Clipboard
Параметры без инициализации, следующие после инициализируемых параметров
До появления версии Gecko 26 (Firefox 26 / Thunderbird 26 / SeaMonkey 2.23 / Firefox OS 1.2), следующий код приводил к SyntaxError. Это было исправлено в баг 777060 и с тех пор работает корректно. Аргументы, передаваемые при вызове функции, становятся значениями формальных параметров независимо от наличия у последних инициализации по умолчанию, а также независимо от присутствия у функции других параметров, находящихся правее в списке параметров и не имеющих инициализации.

function f(x=1, y) {
return [x, y];
}

f(); // [1, undefined];
f(2); // [2, undefined];
Copy to Clipboard
Инициализация по умолчанию деструктурированных параметров
При инициализации параметров по умолчанию можно использовать синтаксическую конструкцию деструктурирующего присваивания:

function f([x, y] = [1, 2], {z: z} = {z: 3}) {
return x + y + z;
}

f(); // 6

Rest

Остаточные параметры (rest parameters)
Синтаксис остаточных параметров функции позволяет представлять неограниченное множество аргументов в виде массива.

Интерактивный пример

Синтаксис
function(a, b, ...theArgs) {
// ...
}
Copy to Clipboard
Описание
Если последний именованный аргумент функции имеет префикс ..., он автоматически становится массивом с элементами от 0 до theArgs.length-1 в соответствии с актуальным количеством аргументов, переданных в функцию.

function myFun(a, b, ...manyMoreArgs) {
console.log("a", a);
console.log("b", b);
console.log("manyMoreArgs", manyMoreArgs);
}

myFun("один", "два", "три", "четыре", "пять", "шесть");

// Console Output:
// a, один
// b, два
// manyMoreArgs, [три, четыре, пять, шесть]
Copy to Clipboard
Отличия остаточных параметров от объекта arguments
Существует три основных отличия остаточных параметров от объекта arguments:

остаточные параметры включают только те, которым не задано отдельное имя, в то время как объект arguments содержит все аргументы, передаваемые в функцию;
объект arguments не является массивом, в то время как остаточные параметры являются экземпляром Array и методы sort, map, forEach или pop могут непосредственно у них использоваться;
объект arguments имеет дополнительную функциональность, специфичную только для него (например, свойство callee).
Из аргументов в массив
Остаточные параметры были введены для уменьшения количества шаблонного кода:

// До появления остаточных параметров "arguments" конвертировали в обычный массив используя:

function f(a, b) {

var normalArray = Array.prototype.slice.call(arguments);
// -- или --
var normalArray = [].slice.call(arguments);
// -- или --
var normalArray = Array.from(arguments);

var first = normalArray.shift(); // OK, даёт первый аргумент
var first = arguments.shift(); // ERROR (arguments не является обычным массивом)

}

// Теперь мы можем легко получить остаточные параметры как обычный массив

function f(...args) {
var normalArray = args;
var first = normalArray.shift(); // OK, даёт первый аргумент
}
Copy to Clipboard
Деструктуризация остаточных параметров
Остаточные параметры могут быть деструктурированы (только массивы). Это означает, что их данные могут быть заданы как отдельные значения. Смотрите Деструктурирующее присваивание.

function f(...[a, b, c]) {
return a + b + c;
}

f(1) // NaN (b и c равны undefined)
f(1, 2, 3) // 6
f(1, 2, 3, 4) // 6 (четвёртый параметр не деструктурирован)
Примеры
В этом примере первый аргумент задан как "a", второй как "b", так что эти аргументы используются как обычно. Однако третий аргумент "manyMoreArgs" будет массивом, который содержит 3-й, 4-й, 5-й, 6-й ... n-й аргументы, которые передаст пользователь.

function myFun(a, b, ...manyMoreArgs) {
console.log("a", a);
console.log("b", b);
console.log("manyMoreArgs", manyMoreArgs);
}

myFun("один", "два", "три", "четыре", "пять", "шесть");

// a, один
// b, два
// manyMoreArgs, [три, четыре, пять, шесть]
Copy to Clipboard
Ниже... даже если передано одно значение последним аргументом, оно всё равно помещается в массив.

// использование той же функции, что и в примере выше

myFun("один", "два", "три");

// a, один
// b, два
// manyMoreArgs, [три]
Copy to Clipboard
Ниже... третий аргумент не был передан, но "manyMoreArgs" всё ещё массив (хотя и пустой).

// использование той же функции, что и в примере выше

myFun("один", "два");

// a, один
// b, два
// manyMoreArgs, []
Copy to Clipboard
Поскольку theArgs является массивом, количество элементов в нём определяется свойством length:

function fun1(...theArgs) {
console.log(theArgs.length);
}

fun1(); // 0
fun1(5); // 1
fun1(5, 6, 7); // 3
Copy to Clipboard
В следующем примере, остаточные параметры используются для сбора всех аргументов после первого в массив. Каждый из них умножается на первый параметр и возвращается массив:

function multiply(multiplier, ...theArgs) {
return theArgs.map(function(element) {
return multiplier \* element;
});
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
Copy to Clipboard
Методы Array могут быть использованы на остаточных параметрах, но не на объекте arguments:

function sortRestArgs(...theArgs) {
var sortedArgs = theArgs.sort();
return sortedArgs;
}

console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7

function sortArguments() {
var sortedArgs = arguments.sort();
return sortedArgs; // это никогда не выполнится
}

console.log(sortArguments(5, 3, 7, 1)); // TypeError (arguments.sort is not a function)
Copy to Clipboard
Чтобы использовать методы Array на объекте arguments, нужно преобразовать его в настоящий массив.

function sortArguments() {
var args = Array.from(arguments);
var sortedArgs = args.sort();
return sortedArgs;
}
console.log(sortArguments(5, 3, 7, 1)); // 1, 3, 5, 7