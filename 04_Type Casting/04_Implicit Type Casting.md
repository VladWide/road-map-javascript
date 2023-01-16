JavaScript — это свободно типизированный язык, и в большинстве случаев операторы автоматически преобразуют значение в правильный тип, но также бывают случаи, когда нам нужно явно выполнять преобразования типов.
Хотя JavaScript предоставляет множество способов преобразования данных из одного типа в другой, есть два наиболее распространенных преобразования данных:

Преобразование значений в строку
Преобразование значений в числа

Неявное преобразование:
в JavaScript есть различные операторы и функции, которые автоматически преобразуют значение в правильный тип, например, функция alert() в JavaScript принимает любое значение и преобразует его в строку. Но другой оператор создает проблему, такую ​​​​как оператор «+».
Пример:

Вход: "2" + "3"
Выход: "23"
здесь + оператор означает конкатенацию строк в этом случае.
Но «3» — «1» дает результат 2 при использовании неявного преобразования.
Код № 1:
этот код показывает неявное преобразование типов в JavaScript.

document.write('("3" - "1") = ' + ("3" - "1") + "<br>");
document.write('("3" - 1) = ' + ("3" - 1) + "<br>");
document.write('("3" _ "2") = ' + ("3" _ "2") + "<br>");
document.write('("3" % "2") = ' + ("3" % "2") + "<br>");
document.write('("3" + null) = ' + ("3" + null) + "<br>");

Вывод:

("3" - "1") = 2
("3" - 1) = 2
(«3» \* «2») = 6
("3"% "2") = 1
("3" + нуль) = 3нуль
Преобразование значений в строки: функция
String() или toString() может использоваться в JavaScript для преобразования значения в строку.
Синтаксис функции String():

Строковое значение)
Пример:

Вход:
вар v = 1555;
переменная с = строка (v);
Вывод:
теперь s содержит «1555».
Синтаксис функции toString():

имя_переменной.toString(база)
Пример:

Вход:
вар v = 1555;
var s = v.toString();
Вывод:
теперь s содержит «1555».
Дополнительные сведения о функции toString() см. в этой статье JavaScript | Функция toString() .
Код № 2:
приведенный ниже код преобразует число в строку, логическое значение в строку и даты в строку.

// Number and date has been assigned
// to variable v and d respectively
var v = 123;
var d = new Date('1995-12-17T03:24:00');

// Conversion of number to string
document.write(" String(v) = " + String(v) + "<br>");

// Conversion of number to string
document.write(" String(v + 11) = " + String(v + 11) + "<br>");
document.write(" String( 10 + 10) = " + String(10 + 10) + "<br>");

// Conversion of boolean value to string
document.write(" String(false) = " + String(false) + "<br>");

// Conversion of Date to string
document.write(" String(d) = " + String(d) + "<br>");

Вывод:

Строка (v) = 123
Строка (v + 11) = 134
Строка (10 + 10) = 20
Строка (ложь) = ложь
Строка (d) = воскресенье, 17 декабря 1995 г., 03:24:00 GMT+0530 (стандартное время Индии)
Преобразование значений в числа:
мы можем использовать функцию Number() в JavaScript для преобразования значения в число. Он может преобразовать любой числовой текст и логическое значение в число. В случае строк, отличных от чисел, он преобразует их в NaN (не число).
Синтаксис:

Число (значение для преобразования)
Пример:

Вход:
вар с = "144";
var n = число(а);
Вывод:
теперь n содержит 144 (число).
Код № 3:
приведенный ниже код преобразует числовой текст, даты и логические значения в число.

// Number and date has been assigned
// to variable v and d respectively
var v = "144";
var d = new Date('1995-12-17T03:24:00');

// Conversion of string to number
document.write(" Number(v) = " + Number(v) + "<br>");

//Conversion of boolean value to number
document.write(" Number(false) = " + Number(false) + "<br>");
document.write(" Number(true) = " + Number(true) + "<br>");

// Conversion of date to number
document.write(" Number(d) = " + Number(d) + "<br>");

Вывод:

Число (v) = 144
Число (ложь) = 0
Число (истина) = 1
Число (д) = 819150840000
код № 4:
если строка не является числом, она преобразует ее в NaN , а строки с пробелами или пустые строки будут преобразованы в 0.

    // Empty string assigned
    var v = "";

    // White space assigned
    var d = " ";

    // Non-number string assigned
    var s = "GeeksforGeeks";

    // Printing converted values of number
    document.write(" Number(v) = " + Number(v) + "<br>");
    document.write(" Number(d) = " + Number(d) + "<br>");
    document.write(" Number(s) = " + Number(s) + "<br>");


Вывод:

Число (v) = 0
Число (г) = 0
Число (числа) = NaN
