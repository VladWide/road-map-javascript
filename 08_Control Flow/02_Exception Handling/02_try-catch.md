Ошибки JavaScript
Брось и попробуй... поймай... наконец
Оператор tryопределяет блок кода для запуска (чтобы попробовать).

Оператор catchопределяет блок кода для обработки любой ошибки.

Оператор finallyопределяет блок кода, который будет выполняться независимо от результата.

Оператор throwопределяет пользовательскую ошибку.

Ошибки будут!
При выполнении кода JavaScript могут возникать различные ошибки.

Ошибки могут быть ошибками кодирования, сделанными программистом, ошибками из-за неправильного ввода и другими непредвиденными вещами.

Пример
В этом примере мы неправильно написали «alert» как «adddlert», чтобы намеренно вызвать ошибку:

<p id="demo"></p>

<script>
try {
  adddlert("Welcome guest!");
}
catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}
</script>

JavaScript перехватывает addlert как ошибку и выполняет код перехвата для ее обработки.

JavaScript попробуй и поймай
Оператор tryпозволяет определить блок кода, который будет проверяться на наличие ошибок во время его выполнения.

Оператор catchпозволяет вам определить блок кода, который будет выполняться, если в блоке try произойдет ошибка.

Операторы JavaScript tryи catch идут парами:

try {
Block of code to try
}
catch(err) {
Block of code to handle errors
}
РЕКЛАМА

JavaScript выдает ошибки
При возникновении ошибки JavaScript обычно останавливается и генерирует сообщение об ошибке.

Технический термин для этого: JavaScript выдаст исключение (выдаст ошибку) .

JavaScript фактически создаст объект Error с двумя свойствами: name и message .

Заявление о броске
Оператор throwпозволяет создать пользовательскую ошибку.

Технически вы можете выдать исключение (выдать ошибку) .

Исключением может быть JavaScript String, a Number, a Booleanили an Object:

throw "Too big"; // throw a text
throw 500; // throw a number
Если вы используете throwвместе с tryи catch, вы можете управлять ходом программы и создавать собственные сообщения об ошибках.

Пример проверки ввода
В этом примере проверяется ввод. Если значение неверно, генерируется исключение (ошибка).

Исключение (ошибка) перехватывается оператором catch, и отображается пользовательское сообщение об ошибке:

<!DOCTYPE html>
<html>
<body>

<p>Please input a number between 5 and 10:</p>

<input id="demo" type="text">
<button type="button" onclick="myFunction()">Test Input</button>
<p id="p01"></p>

<script>
function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if(x.trim() == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}
</script>

</body>
</html>
Проверка HTML
Приведенный выше код является просто примером.

Современные браузеры часто используют комбинацию JavaScript и встроенной проверки HTML, используя предопределенные правила проверки, определенные в атрибутах HTML:

<input id="demo" type="number" min="5" max="10" step="1">
Вы можете прочитать больше о проверке форм в следующей главе этого руководства.

Окончательное заявление
Оператор finallyпозволяет выполнять код после попытки и перехвата, независимо от результата:

Синтаксис
try {
Block of code to try
}
catch(err) {
Block of code to handle errors
}
finally {
Block of code to be executed regardless of the try / catch result
}
Пример
function myFunction() {
const message = document.getElementById("p01");
message.innerHTML = "";
let x = document.getElementById("demo").value;
try {
if(x.trim() == "") throw "is empty";
if(isNaN(x)) throw "is not a number";
x = Number(x);
if(x > 10) throw "is too high";
if(x < 5) throw "is too low";
}
catch(err) {
message.innerHTML = "Error: " + err + ".";
}
finally {
document.getElementById("demo").value = "";
}
}
Объект ошибки
JavaScript имеет встроенный объект ошибки, который предоставляет информацию об ошибке при возникновении ошибки.

Объект ошибки предоставляет два полезных свойства: имя и сообщение.

Свойства объекта ошибки
Имущество Описание
название Задает или возвращает имя ошибки
сообщение Задает или возвращает сообщение об ошибке (строка)
Значения имени ошибки
Свойство имени ошибки может возвращать шесть различных значений:

Название ошибки Описание
EvalError Произошла ошибка в функции eval()
RangeError Произошло число "вне диапазона"
ReferenceError Произошла недопустимая ссылка
Ошибка синтаксиса Произошла синтаксическая ошибка
Ошибка типа Произошла ошибка типа
URIError Произошла ошибка в encodeURI()
Шесть различных значений описаны ниже.

Ошибка оценки
указывает EvalErrorна ошибку в функции eval().

Более новые версии JavaScript не выдают EvalError. Вместо этого используйте SyntaxError.

Ошибка диапазона
RangeErrorЕсли вы используете число, выходящее за пределы диапазона допустимых значений, выдается A.

Например: Вы не можете установить количество значащих цифр числа равным 500.

Пример
let num = 1;
try {
num.toPrecision(500); // A number cannot have 500 significant digits
}
catch(err) {
document.getElementById("demo").innerHTML = err.name;
}
Ошибка ссылки
Выбрасывается ReferenceError, если вы используете (ссылку) переменную, которая не была объявлена:

Пример
let x = 5;
try {
x = y + 1; // y cannot be used (referenced)
}
catch(err) {
document.getElementById("demo").innerHTML = err.name;
}
Ошибка синтаксиса
Выдается A SyntaxError, если вы пытаетесь оценить код с синтаксической ошибкой.

Пример
try {
eval("alert('Hello)"); // Missing ' will produce an error
}
catch(err) {
document.getElementById("demo").innerHTML = err.name;
}
Ошибка типа
Выбрасывается TypeError, если вы используете значение, выходящее за пределы диапазона ожидаемых типов:

Пример
let num = 1;
try {
num.toUpperCase(); // You cannot convert a number to upper case
}
catch(err) {
document.getElementById("demo").innerHTML = err.name;
}
Ошибка URI (унифицированный идентификатор ресурса)
Выдается A URIError, если вы используете недопустимые символы в функции URI:

Пример
try {
decodeURI("%%%"); // You cannot URI decode percent signs
}
catch(err) {
document.getElementById("demo").innerHTML = err.name;
}
Нестандартные свойства объекта ошибки
Mozilla и Microsoft определяют некоторые нестандартные свойства объекта ошибки:

имя файла (Mozilla) номер строки
(Mozilla)
номер столбца (Mozilla)
стек (Mozilla)
описание (Microsoft)
номер (Microsoft)

Не используйте эти свойства на общедоступных веб-сайтах. Они не будут работать во всех браузерах.
