Главная > Курсы > JavaScript > Foundation — Типы данных
Типы данных JavaScript
Что вы узнаете на этой странице?
Что такое типы данных
Что такое примитивы и объекты
Числа, строки, логические значения undefinedиnull
Массивы, функции и простые объекты
Оператор typeof\_
Слабая типизация JavaScript

Фундамент
Комментарии
Фундамент
Викторина по типам данных

Что такое типы данных?
Компьютерные программы обычно имеют дело с большим количеством данных. Эти данные могут быть нескольких типов. Каждый тип имеет свое предназначение, утилиты и базовый механизм реализации.

Некоторые из них являются примитивными типами , а некоторые являются объектными типами , также известными как ссылочные типы .

В этой главе мы познакомимся с типами данных, которыми JavaScript оснащен «из коробки». Мы рассмотрим шесть наиболее распространенных примитивных типов и три наиболее распространенных ссылочных типа. Кроме того, мы также рассмотрим typeofоператор, который используется для проверки типа заданного значения.

Базовое понимание является обязательным для вас, когда вы переходите к изучению множества дополнительных концепций в JavaScript. В следующих разделах мы рассмотрим каждый из этих типов один за другим в мельчайших деталях.

Так что, не теряя времени, приступим к делу.

Примитивы и объекты
JavaScript делит данные по существу на две основные категории: примитивы и объекты .

Начнем с определения того, что такое примитив:

Примитив — это значение без каких-либо свойств/методов, связанных с ним.
По сути, это самая простая форма данных в JavaScript. Он изображает реализацию фрагмента данных на самом низком уровне.

Самым простым примером могут быть числа.

Учитывайте значение 10. Это число, а главное, примитив. 10В JavaScript нет прикрепленных свойств или методов .

10непосредственно представляет число, хранящееся в памяти. В переменной, содержащей число, не хранится ничего другого — число хранится непосредственно внутри переменной.

Однако это не относится к объектам — когда объект хранится в переменной, внутри переменной хранится что-то еще , а не сам объект. Мы увидим подробности этого позже в этой главе.

Помните объекты documentи consoleиз предыдущих глав? Вспомните их write()и log()методы соответственно?

Так как documentи consoleоба имеют привязанный к ним метод (на самом деле, у них много методов), мы говорим, что они НЕ являются примитивами.

В JavaScript предусмотрено пять примитивных типов данных: числа , строки , логические значения undefinedи null.

Строго говоря, в JavaScript существует семь примитивных типов — 5 упомянутых выше и оставшиеся два: символы и bigint.
С другой стороны, объект является зеркальным отражением примитива:

Объект — это значение с прикрепленными к нему свойствами /методами .
Тип объекта также обычно называют ссылочным типом . Таким образом, объекты также называются ссылками .

Проще говоря, если значение не является примитивом, то это объект .

Помимо пяти примитивных типов данных, рассмотренных выше, все остальное является объектом.

Функции — это особая категория объектов, широко известная как вызываемые объекты . Мы узнаем больше о функциях в следующих разделах.

Самое интересное различие между примитивами и объектами заключается в том, что первые передаются по значению , а вторые — по ссылке . Примитивы копируются и затем передаются в переменные; тогда как объекты копируются не сами по себе, а их ссылки .

Вы узнаете больше о передаче по значению и передаче по ссылке в главе « Значения и ссылки » .
Давайте начнем с изучения каждого из пяти примитивных типов в JavaScript, прежде чем перейти к рассмотрению некоторых из наиболее распространенных типов объектов.

Примитивные типы данных
Мы рассмотрим каждый из примитивных типов один за другим, начиная с чисел.

Числа
Числа повсюду, когда дело доходит до вычислений — они используются в арифметических вычислениях, компьютерных алгоритмах, науке о данных, 3D-моделировании, преобразованиях и многом другом.

В программировании обычно числа делятся на две группы — целые числа и числа с плавающей запятой .

Целое число — это целое число без десятичной точки.
Примеры включают 0, 1, 100. Знак минус ( -) может быть включен перед числом для обозначения отрицательного целого числа. Примеры включают -30, -50, -100.

Целые числа иногда также называют числами с фиксированной точкой .

Сходным образом,

Поплавок — это число с десятичной точкой .
Пример включает 0.1, 3.878и -4589.4так далее.

Поплавки иногда также полностью называют числами с плавающей запятой .

Некоторые языки программирования, такие как Python , фактически делают это различие между числами, предоставляя для них отдельные типы.

Однако JavaScript не делает никакого различия между целыми числами и числами с плавающей запятой — у нас есть только один тип чисел в языке, и это Number.

В приведенном ниже фрагменте мы играем с парой чисел:

2 + 2
4
2 + 2.5
4.5
2.5 + 2.5
5
2.5 - 2
0.5
2 - 20
-18
Все показанные выше числа известны как числовые литералы .

Что такое литерал?

Литерал — это точное представление значения в коде.
Мы подробно рассмотрим числа в модуле JavaScript Numbers .
Струны
Другим чрезвычайно распространенным типом данных в JavaScript и почти во всех языках программирования является строковый тип.

Строка представляет собой последовательность текстовых символов.
Он может содержать буквенно-цифровые символы, символы, пробелы, символы новой строки, смайлики, символы других языков и т. д.

Строка может быть обозначена парой одинарных кавычек ( '') или парой двойных кавычек ( "").

Следующий код показывает две строки:

var lang = 'JavaScript'; // single quotes
var os = "Windows"; // double quotes
Первая строка хранится в переменной lang, а вторая — в os.

Есть еще третий способ обозначения переменных — использование пары обратных кавычек ( ``). Такие строки называются литералами шаблонов и могут содержать внутри себя выражения JavaScript. Подробнее о литералах шаблонов мы поговорим в статье Основы работы со строками в JavaScript .
Каждый символ в строке находится в заданной позиции, формально известной как его индекс . Индексы начинаются с 0. Это означает, что первый символ находится в индексе 0, второй — в 1и так далее и тому подобное.

Общее количество символов в строке называется ее длиной .

Чтобы получить доступ к заданному символу в строке, мы начинаем с написания строки, за которой следует пара квадратных скобок ( []), а внутри них указывается индекс символа в виде целого числа.

Рассмотрим фрагмент ниже:

lang[0]
'Дж'
os[2]
'н'
В первом операторе lang[0]мы получаем доступ к первому символу lang, помещая число 0в квадратные скобки. Точно так же во втором операторе os[2]мы получаем доступ к третьему символу строки os, записывая число 2в скобках.

Чтобы получить длину данной строки, мы обращаемся к ее lengthсвойству.

Синтаксис доступа к свойству прост: начните с написания значения, к свойству которого вы хотите получить доступ, за которым следует символ точки ( .), а затем имя свойства.

Рассмотрим фрагмент ниже, где мы получаем доступ к lengthсвойству строк langи osопределенному выше:

lang.length
10
os.length
7
Булевы значения
Третье место в этом списке — Booleans .

Логическое значение — это просто истинное или ложное значение.
Булевы значения широко используются в условном программировании для управления ходом программы путем принятия решений по результатам заданных оценок.

Название Boolean дано в честь известного британского математика Джорджа Буля , который внес важный вклад в современную булеву алгебру и логику. Его называют «отцом символической логики» .

В JavaScript логическое значение обозначается литеральными значениями trueи false.

Следующий код создает две логические переменные:

var proceed = true;
var stopNow = false;
Мы подробно рассмотрим логические значения и их применение в главе о логических значениях JavaScript .

Типы данных объекта
Давайте теперь рассмотрим некоторые из наиболее распространенных типов объектов в JavaScript.

Массивы
Первый тип данных для изучения — это массивы .

Массив — это упорядоченный набор данных , хранящихся в смежных позициях, известных как индексы.
Массив похож на список значений. Каждое значение в списке находится в заданной позиции, формально известной как его индекс .

Массив имеет возможность хранить несколько значений под одним капотом. Отдельные значения массива формально называются элементами .

Элементы массива могут иметь любой тип данных. Это могут быть числа, строки, логические значения — что угодно. Это могут быть даже массивы. Мы подробно рассмотрим такие случаи в главе Основы JavaScript-массивов .

Более того, не обязательно, чтобы элементы массива имели один и тот же тип данных. Например, массив может содержать числа и строки.

Строки и массивы — это последовательности данных. Всякий раз, когда вы имеете дело с последовательностью в JavaScript, помните, что каждый элемент последовательности находится в заданной позиции в последовательности, известной как его индекс.
Давайте теперь посмотрим, как создать массив.

Массив можно обозначить буквально с помощью пары квадратных скобок ( []). Каждый элемент массива заключен в скобки и отделяется от другого элемента запятой ( ,).

В следующем коде показан массив, numsсозданный с использованием литеральной записи:

var nums = [1, 5, 10];
Доступ к данному элементу из массива следует тому же синтаксису, что и доступ к символу из строки.

То есть мы начинаем с записи значения массива, за которым следует пара квадратных скобок ( []), а затем помещаем в эти скобки индекс элемента, к которому мы хотим получить доступ.

Ниже мы получаем доступ к первому и последнему числам в numsмассиве:

nums[0]
1
nums[2]
10
Как и в случае со строками, мы можем получить общее количество элементов в массиве, используя его lengthсвойство.

Давайте посмотрим, что возвращается при доступе к свойству нашего numsмассива:

nums.length
3
Как и ожидалось, мы получаем 3, что соответствует общему количеству элементов в nums.

Хранение и простое извлечение значений из массива не представляет интереса, и обычно это не то, что происходит в приложениях, где используются массивы.

Когда используются массивы, они часто обрабатываются.

Одной из распространенных операций, выполняемых над массивами, является сортировка. Это достигается с помощью метода массива sort().

Метод sort()сортирует элементы массива в алфавитном порядке.

Он преобразует каждый элемент в строку, а затем выполняет сравнение полученных значений, чтобы определить, какой из них будет первым, какой вторым и так далее.

Обратите внимание, что sort()данный массив сортируется на месте . Это означает, что фактический массив изменяется в операции сортировки. Это один из примеров, показывающий, что массив является изменяемым типом данных.

Рассмотрим следующий код:

var langs = ['Python', 'JavaScript', 'C++', 'C', 'Java'];

langs.sort();

console.log(langs);
Сначала мы определяем переменную langsи присваиваем ей значение массива. Затем мы вызываем sort()метод для этого langsмассива. Это сортирует элементы в нем в алфавитном порядке. Наконец, мы регистрируем массив.

["C", "C++", "Java", "JavaScript", "Python"]
Посмотрите, как каждое последующее значение в этом отсортированном списке в алфавитном порядке больше, чем предыдущее значение.

Из-за того, что sort()по умолчанию каждое значение в соответствующем массиве преобразуется в строку перед процедурой сортировки, мы не могли правильно сортировать числа, используя этот метод, как есть.

Рассмотрим следующий фрагмент. Посмотрите, как расположены числа в отсортированном списке:

[100, 9, 80, 2, 0, -1, -50].sort()
[-1, -50, 0, 100, 2, 80, 9]
-1появляется раньше, -50даже если оно больше, чем -50. Точно так же 100появляется до 2, а 80появляется до 9и после 100. Это просто полный бардак!

Чтобы правильно отсортировать числа с помощью sort(), мы должны передать ему аргумент, указывающий способ сортировки элементов. Этот аргумент должен быть функцией.

Рассмотрим следующий фрагмент:

[100, 9, 80, 2, 0, -1, -50].sort(function(a, b) { return a - b; })
[-50, -1, 0, 2, 9, 80, 100]
На этот раз в отсортированном массиве заданные элементы расположены правильно благодаря функции, предоставленной в качестве аргумента.

Мы объясним, как работает эта функция-аргумент, в разделе ниже, когда будем рассматривать тип данных функции.

Функции
Ни один программист не может отрицать важность функций в программировании — они играют неотъемлемую роль. Некоторые языки программирования в значительной степени построены на идее функций. Некоторые рассматривают функции на тех же линиях, что и другие значения.

JavaScript — это экземпляр. Такие языки называются функциональными языками.

По сути, идея функции элементарна, но чрезвычайно мощна.

Давайте определим, что такое функция:

Функция определяет фрагмент кода , который выполняется при вызове функции .
В терминологии программирования мы используем слово « вызов» вместо «вызов» .

Функции могут быть именованными или анонимными . Пока нас интересует первое.

Чтобы создать функцию в JavaScript, мы используем functionключевое слово . Ниже показан синтаксис создания функции:

function functionName(parameterList) statement;
Мы начинаем с functionключевого слова, за которым следует имя функции. Это имя определяет идентификатор и также должно соответствовать правилам именования переменных JavaScript.

После этого идет пара скобок ( ()) и внутри них параметры функции. Мы увидим, что такое параметры позже в этом разделе.

Наконец приходит оператор для функции. Этот оператор формально известен как тело функции .

В целом код, определяющий функцию, называется определением функции .

Тело функции выполняется, как только функция вызывается .

Чтобы вызвать функцию, мы просто пишем ее имя, за которым следует пара круглых скобок. Эта пара скобок служит для вызова и выполнения функции. Без круглых скобок мы просто ссылаемся на определение функции.

Хорошо, много теории было обсуждено — пришло время для примера.

В приведенном ниже коде мы создаем функцию sayHello()для приветствия пользователя:

function sayHello() {
var name = prompt('Enter your name:');
document.write('Hello, ' + name + '.');
}
Внутри функции сначала мы запрашиваем имя пользователя через, prompt()а затем выводим приветственное сообщение через document.write()с включенным входным именем.

Давайте вызовем эту функцию.

function sayHello() {
var name = prompt('Enter your name:');
document.write('Hello, ' + name + '.');
}

sayHello();
Последний оператор здесь вызывает, sayHello()т.е. выполняет код, определенный внутри sayHello.

Двигаясь дальше, функция может принимать дополнительные данные для выполнения своей задачи.

Например, функция, созданная для сложения двух чисел, может принять эти числа в качестве дополнительных данных при вызове функции.

Такие дополнительные фрагменты данных называются arguments или просто args. Аргументы функции заключаются в пару круглых скобок при вызове функции.

Имя, с которым мы обращаемся к каждому аргументу внутри функции, называется параметром . Параметры указываются внутри пары круглых скобок при определении функции.

Тем самым,

Параметр — это имя , с помощью которого мы обращаемся к значению, переданному функции, а аргумент — это фактическое значение .
Вы увидите, что термины «аргументы» и «параметры» используются взаимозаменяемо, что не совсем неправильно. Однако полезно знать об этом формальном различии между этими терминами.

Давайте определим функцию sum(), которая принимает два числа и выводит их сумму в документе:

function (a, b) {
console.log(a + b);
}
Эта функция имеет два параметра aи b. Традиционно в этом курсе, когда бы мы ни ссылались на параметры, мы будем выделять их курсивом, чтобы сразу указать, что они являются параметрами.

В любом случае, давайте вызовем эту функцию с парой аргументов:

function sum(a, b) {
console.log(a + b);
}

sum(10, 20);
sum(10, -5);
sum(10, 30.5);
sum(0, 0);
30
5
40.5
0
Живой пример ↗

Простой! Не так ли?

Обычно при настройке функций желательно, чтобы функция возвращала результат вычисления, а не отображала его на каком-либо носителе, например в документе HTML.

Таким образом, мы могли бы делать множество вещей с функцией. Например, мы можем передать его document.write()или console.log()отобразить результат в соответствующем месте, или присвоить его переменной, или даже передать его какой-либо другой функции в качестве аргумента.

Возможности безграничны!

Это достигается с помощью returnключевого слова .

Ключевое returnслово возвращает значение из функции при ее вызове.
Возвращаемое выражение упоминается после returnключевого слова внутри тела функции.

Вот синтаксис для return:

function functionName(parameterList) {
// some code
return expression;
}
Рассмотрим пример.

Мы переопределим sum()созданную выше функцию, заменив логику для вывода суммы aи bлогику для ее возврата.

function sum(a, b) {
return a + b;
}
Теперь вместо вывода суммы функция возвращает ее обратно.

Вот как использовать возвращаемое значение:

sum(10, 20)
30
sum(10, 20) + 50
80
sum(10, -11) _ 10
-10
console.log(sum(10, 20))
30
неопределенный
sum(10, 10) _ sum(5, 5)
200
Как видно из этого кода, возвращаемое значение просто заменяет выражение вызова функции. Мы могли бы использовать выражение вызова так же, как обычно использовали бы возвращаемое значение.

Мы узнаем гораздо больше о функциях в модуле « Функции JavaScript» .
Объекты
Почти каждое значение, с которым мы столкнемся в JavaScript, будет объектом. Массивы, как мы видели выше, являются объектами. Функции также являются объектами.

В этом разделе нас интересует фактический объектный тип данных в JavaScript, обозначающий самый простой из всех объектов.

Вот как буквально создать простой объект:

{name1: value1, name2: value2, ..., nameN: valueN}
Начнем с пары фигурных скобок ( {}). При использовании для создания объекта {}они называются объектными литералами . Объект, созданный с их помощью, считается созданным с использованием синтаксиса литерала объекта .

Внутри этих фигурных скобок мы помещаем отдельные пары имя-значение для объекта, разделенные запятыми ( ,). В каждой паре имя-значение имя свойства стоит первым и отделяется от значения двоеточием ( :).

Более читабельно этот синтаксический код можно было бы представить следующим образом:

{
name1: value1,
name2: value2,
...,
nameN: valueN
}
Рассмотрим пример.

Мы создадим объект с двумя свойствами xи yсо значениями 10и 20соответственно:

var obj = {x: 10, y: 20};
Вот objэто объект.

Но подождите... Технически и массивы, и функции, и многие другие значения также являются объектами в JavaScript. Так в чем же разница между простым объектом и этими другими объектами?

Что ж, то, что мы здесь создали, называется, в частности, простым объектом. Простой объект, как следует из названия, также является объектом. Но это самый простой из всех объектов в JavaScript.

« Объект» — это общий термин, используемый для обозначения любого значения, не являющегося примитивом. Простой объект — это более конкретный термин, который относится к простейшим объектам в JavaScript.
Простые объекты удобны, когда мы хотим хранить несколько фрагментов информации под одним именем.

Хорошим примером может быть моделирование URL-адреса с использованием простого объекта. Каждая характеристика URL-адреса будет использоваться как свойство объекта, например, его протокол, доменное имя, путь и т. д.

Рассмотрим следующий код, в котором мы моделируем URL-адрес https://www.codeguage.com/ , используя простой объект с именем url:

var url = {
protocol: 'https',
domain: 'www.codeguage.com',
path: '/'
};
Объект имеет три свойства:

protocol— указывает протокол URL-адреса, то есть обслуживается ли он через httpили https.
domainуказывает доменное имя URL.
pathуказывает путь после имени домена.
Давайте теперь получим доступ к ним.

Мы могли бы получить доступ к свойству объекта, используя любой из двух способов: скобочную нотацию или точечную нотацию .

В прежней нотации т.е. в квадратных скобках мы записываем имя свойства в виде строки в паре квадратных скобок ( []), следующих за значением объекта. В последнем мы пишем имя свойства после символа точки ( .), следующего за значением объекта.

Ниже мы получаем доступ к protocolсвойству нашего urlобъекта обоими способами:

url.протокол
'https'
url['protocol']
'https'
Как вы, возможно, знаете, в этой модели мы не учитываем некоторые характеристики URL. К ним относятся строка запроса и хэш. Давайте добавим их к нашему urlобъекту.

Мы могли бы добавить новое свойство к существующему объекту, используя любой из двух упомянутых выше вариантов доступа к свойству, т.е. запись в квадратных скобках или запись через точку . Единственное дополнение, которое требуется здесь, это то, что мы присваиваем значение свойству, используя знак равенства ( =), точно так же, как мы делаем это для переменных.

Рассмотрим следующий код:

var url = {
protocol: 'https',
domain: 'www.codeguage.com',
path: '/'
};

// add two new properties
url.queryString = null;
url['hash'] = null;
Здесь мы добавляем два свойства urlпосле того, как оно было создано и сохранено в памяти с использованием обеих данных нотаций.

Поскольку моделируемый URL-адрес (например , https://www.codeguage.com/ ) не содержит строки запроса или хэша, мы устанавливаем соответствующие свойства queryStringи hashна null.
Давайте проверим значения этих недавно добавленных свойств:

url.queryString
нулевой
url.хэш
нулевой
Идеально! Так же, как мы их написали.

Помимо этих простых свойств, объект также может иметь методы. Методы — это частные случаи свойств.

Метод — это свойство объекта, значением которого является функция .
В создании методов нет ничего особенного. Мы создаем их точно так же, как мы создаем свойства объектов. В конце концов, методы — это тоже свойства !

Единственная разница между ними заключается в том, что вместо того, чтобы присваивать методу строку, число, логическое значение или любое другое значение, мы присваиваем ему функцию. Это делает свойство вызываемым и, следовательно, методом.

Давайте определим метод для urlобъекта, который мы создали выше. Мы позвоним getURL. Этот метод вернет полный URL-адрес, сформированный путем объединения свойств, заданных в urlобъекте:

var url = {
protocol: 'https',
domain: 'www.codeguage.com',
path: '/',

// return the full URL, as a string
getURL: function() {
return url.protocol + '://' + url.domain + url.path;
}
};
Теперь, когда метод готов, назовем его:

url.получитьURL()
'https://www.codeguage.com/'
Поскольку метод технически является функцией, мы вызываем его, используя тот же синтаксис, что и при вызове функции, т. е. пара скобок ( ()) в конце выражения.

Как и в случае с простыми свойствами объекта, мы также можем вызвать getURL()метод, используя скобки:

url['getURL']()
'https://www.codeguage.com/'
И это все для объектов!

Мы погрузимся в сложный мир объектов и объектно-ориентированного программирования (сокращенно ООП) в модуле « Объекты JavaScript» , где мы изучим множество концепций, связанных с объектами.

Оператор typeof\_
До сих пор мы только создавали переменные заданных типов данных, не обнаруживая никакого способа программно получить тип этих переменных.

Теперь обратимся к этой самой идее и разберемся с typeofоператором.

Оператор typeofвозвращает тип данных данного выражения в виде строкового значения.
Выражение следует за оператором, как показано ниже:

typeof expression
Далее мы тестируем его на разных значениях, чтобы увидеть, что он возвращает в каждом случае:

typeof 10; // 'number'
typeof 3.142; // 'number'

typeof "Hello"; // 'string'
typeof 'Hello'; // 'string'

typeof true; // 'boolean'

typeof undefined; // 'undefined'
Как вы можете ясно видеть здесь, для всех первых четырех примитивных типов typeofвозвращаются точно такие же имена, как и для примитивных типов данных в JavaScript.

У нас есть 'number'для чисел, 'string'для строк, 'boolean'для логических значений и "undefined"для undefined.

Теперь вам может быть интересно, что мы забыли упомянуть null.

Ну, мы не сделали!

При использовании для проверки nullзначения typeofвозвращает неожиданный результат, который требует отдельного обсуждения.

Давайте станем свидетелями неожиданности проверки nullс помощью typeof:

typeof null; // 'object'
Вопреки ожиданию typeof nullвозврата 'null', мы 'object'возвращаемся.

Это утверждение оказалось одним из самых запутанных аспектов JavaScript для начинающих разработчиков.

Как ? null\_'object'
Что, nullобъект? Как так?

Что ж, typeofвозврат 'object'значения null— это официальная ошибка в JavaScript, представленная его предыдущими реализациями .
К сожалению, это невозможно исправить, потому что, вероятно, многие программы уже использовали это поведение в своих программах - также оно присутствует на сегодняшний день просто для обратной совместимости .

Тем не менее, можно попытаться сделать некоторую интуицию, думая, что nullэто пустой указатель , и когда мы говорим об указателях, мы знаем, что имеем дело с объектами.

Имеет ли это смысл или нет, это зависит от ваших рассуждений об этом; это не зависит от унаследованной ошибки в JavaScript от предыдущих реализаций и не должно иметь смысла, если вообще есть!
Двигаясь дальше, давайте теперь углубимся в изучение typeofтого, как используются типы данных объекта.

Сюрпризы заканчиваются не только поведением null, typeofоператор также возвращает некоторые неожиданные результаты при использовании с массивами.

Ниже приведена иллюстрация:

typeof [1, 2, 3]; // 'object'
Для объектов массива typeofпросто возвращает 'object'; и НЕ очень ожидаемое значение "array".

К счастью, в отличие от 'object'значений null, в этом есть какой-то смысл, и это определенно не очередной баг!

Как массив 'object'?
Как мы знаем, массивы попадают в категорию объектов типов данных JavaScript, т.е. они хранятся по ссылкам , а НЕ по их фактическим значениям.

JavaScript упрощает работу typeof, возвращая 'object'всякий раз, когда данное выражение является ссылкой на некоторые данные в памяти.
Массив действительно является ссылкой на упорядоченный набор данных в памяти и также преобразуется в 'object'при проверке typeofоператором.

В этом есть смысл — все в языке, за исключением примитивных типов, является объектом и, следовательно, должно возвращаться 'object'при проверке с помощью typeof.

Единственным исключением является тип данных функции, где typeofвозвращается "function". Ниже мы увидим более подробную информацию.

Но теперь вы можете подумать, как мы можем выяснить, является ли заданное значение массивом или нет?

Что ж, в JavaScript наверняка есть методы для решения этой проблемы обнаружения чистых массивов, и они будут подробно обсуждаться в главе « Основы JavaScript-массивов ».

Продолжая это обсуждение, если у нас есть чистые объекты, то, как мы ожидаем и уже подробно описали выше, typeofвернемся 'object'еще раз.

typeof {}; // 'object'
typeof {x: 10}; // 'object'
Чтобы закончить обсуждение, давайте, наконец, посмотрим, что происходит, когда мы работаем с функциями.

Тип, возвращаемый typeofдля функциональных значений, равен "function", как видно из следующего примера:

typeof function() {}; // "function"
Итак, теперь у нас есть еще одно дело! Функции являются исключением для ссылок на типы при оценке с помощью typeof.

Как функция не является 'object'?
Причина typeofвозврата 'function'при использовании для проверки функции описана следующим образом:

Проверить функциональное значение довольно легко по сравнению с любым другим типом ссылки — [[Call]]нужно искать только внутреннее свойство для данного значения, и если оно существует, мы знаем, что имеем дело с функцией.
Даже если бы кто-то утверждал, что проверить массивы также несложно, как нетрудно проверить функции; все еще есть веская причина вернуться 'function'к функциям.

Вся идея в том, что функции — это особые виды объектов в JavaScript — они являются вызываемыми объектами.

Из-за этого отличия от всех других объектов имеет смысл относиться к ним немного по-другому — особенно по сравнению со всеми остальными!

Подводя итог,

Для каждого примитива, кроме null, typeofвозвращает характерную строку.
Для каждого объекта, кроме функции, typeofвозвращается 'object'.
Для null, typeofвозвращает 'object'.
Для функции typeofвозвращает 'function'.

Javascript свободно типизирован
Если вы когда-либо программировали раньше на таких языках, как Java, C++ и т. д., вы наверняка заметили одну разницу в типизации переменных в этих языках и в JavaScript.

Рассмотрим следующий фрагмент кода из программы на Java:

public class Example {
public static void main(String args[]) {
// declare num as an integer
int num = 10;

      // change num to a Boolean value
      num = true; // throws an error

}
}
Этот код вызовет ошибку, поскольку переменная num, которая инициализируется как целое число, изменяется на логическое значение. Поскольку Java является строго типизированным языком, он не позволяет присваивать переменной значение, не соответствующее ее типу данных.

То же самое НЕ относится к JavaScript.

В Javascript мы можем легко изменить тип данных переменной после того, как ей было присвоено значение, и интерпретатор не выдаст ошибку.

Такое поведение языка является причиной того, что он называется свободно типизированным .

В отличие от строго типизированного языка, свободно типизированный язык позволяет переменным изменять свои типы данных без возникновения ошибок.
Рассмотрим код ниже:

// x is a number
var x = 10;

// x is now a string
x = "Hello";

// x is now a Boolean
x = false;
Сначала мы присваиваем числовое значение переменной x, но затем меняем его на строку и, наконец, на логическое значение. Это возможно только потому, что язык не ограничивает переменные теми типами данных, которыми они были инициализированы.

Это также объясняет тот факт, почему в JavaScript нет никаких ключевых слов объявления, таких как int, float, doubleдля объявления переменных определенных типов данных - язык не нуждается в них и может автоматически обрабатывать изменения типа.