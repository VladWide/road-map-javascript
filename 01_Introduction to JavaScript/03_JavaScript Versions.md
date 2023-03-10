JavaScript — один из самых популярных и распространенных языков программирования в мире. С момента своего создания в 1995 году язык, который в конечном итоге стал известен как JavaScript, претерпел несколько итераций и версий.

JavaScript был изобретен Бренданом Эйхом и в 1997 году стал стандартом ECMA. ECMAScript — официальное название языка. Версии ECMAScript включают ES1, ES2, ES3, ES5 и ES6.

Поскольку год подходит к концу, давайте подумаем обо всех изменениях, которые претерпел JavaScript, чтобы лучше понять, как использовать этот язык.

Мы пройдем:

Веб-сайты до JavaScript
Начало JavaScript
Стандартизация JavaScript
версии JavaScript
ECMAScript 5 в деталях
Обновления ES6 в деталях
Что дальше для JavaScript?

Узнайте, как писать современный JavaScript
Это идеальное место, чтобы начать свой путь в качестве фронтенд-разработчика. Вы подробно изучите HTML, CSS и JavaScript.

Стать фронтенд-разработчиком

Веб-сайты до JavaScript
Веб-страницы до появления JavaScript были очень статичными. Списки, даты и ссылки были жестко закодированы в ваш HTML, а любая динамическая функциональность была закодирована в заголовке HTML-документа в виде заголовка.

Одним из наиболее известных примеров дизайна веб-страниц до JavaScript, который все еще существует, является туманная камера Сан-Франциско:

виджет
Сан-Франциско FogCam была создана почти 30 лет назад и известна как одна из старейших веб-камер в мире. Это самый ранний способ увидеть «живую» картинку в Интернете.

Поскольку времена изменились, веб-сайт не изменился. Он по-прежнему использовал статические HTML и CSS, созданные в 1990-х годах. Страница обновляется каждые 20 секунд, используя <meta>информацию в заголовке документа.

JavaScript еще не был официально выпущен, когда была создана FogCam, но мы уже видим потребность в чем-то, что могло бы динамически загружать изображения.

Другим примером того, как были спроектированы веб-страницы до JavaScript, является страница Dole/Kemp '96, созданная в конце девяностых годов для президентской заявки сенатора Боба Доула.

виджет
Этот сайт по-прежнему является статическим веб-сайтом, но он использует HTML-маршрутизацию для перехода от страницы к странице. На этом сайте все было жестко запрограммировано. Инженеры Netscape Communicator увидели эту проблему и решили создать язык сценариев, который позволял бы анимацию, создание форм и более динамичные взаимодействия.

Здесь начинается зарождение JavaScript.

Начало JavaScript
Первая версия JavaScript вообще не называлась JavaScript. Он назывался Мокко . Этот язык был создан как язык более высокого уровня как для дизайнеров, так и для непрограммистов.

Когда Mocha поставлялся с Netscape Navigator 2.0, его рабочее название стало LiveScript, а затем, в более поздних версиях, JavaScript.

Первая общедоступная версия JavaScript была интегрирована в Netscape Navigator 2.0 (1995 г.).
Первая общедоступная версия JavaScript была интегрирована в Netscape Navigator 2.0 (1995 г.).
Netscape, безусловно, опередила игру благодаря сотрудничеству с Sun Microsystems в создании JavaScript. По мере того, как Netscape захватывал все больше и больше браузеров, другим браузерам нужно было что-то придумывать, чтобы не отставать от успеха Netscape.

По юридическим причинам Microsoft создала собственную версию JavaScript под названием JScript. Основная задача этих «диалектов» заключалась в том, чтобы улучшить пользовательский опыт и взаимодействие пользователей с веб-сайтами.

Сначала Netscape выиграл эти войны, но с созданием JScript Microsoft Internet Explorer увеличил свою долю браузеров.

Это сильно усложняло стандартизацию. JavaScript продвинулся вперед в войнах языков сценариев из-за его сходства с синтаксисом Java. По мере того, как Java становился все более популярным, JavaScript также становился все более популярным.

Примечание: Java НЕ равно JavaScript. Java — это скомпилированный язык, который использует виртуальную машину или браузер для выполнения кода.

JavaScript — это скриптовый язык, который отлично работает в браузере в продакшене и используется в Node.js вне браузера.

версии JavaScript
Версия Официальное название Описание
ES1 ECMAScript 1 (1997) Первое издание
ЭС2 ECMAScript 2 (1998) Редакционные изменения
ES3 ECMAScript 3 (1999) Добавлены регулярные выражения и try/catch
ES4 ECMAScript 4 Не изданный
ES5 ECMAScript 5 (2009 г.) Добавлен «строгий режим», поддержка JSON, методы итерации String.trim(), Array.isArray() и Array.
ES6 ECMAScript 2015 Добавлены let и const, значения параметров по умолчанию, Array.find() и Array.findIndex().
ES6 ECMAScript 2016 Добавлен экспоненциальный оператор и Array.prototype.includes.
ES6 ECMAScript 2017 Добавлено заполнение строк, Object.entries, Object.values, асинхронные функции и общая память.
ES6 ECMAScript 2018 Добавлены свойства rest/spread, асинхронная итерация, Promise.finally() и RegExp.
ECMAScript
Netscape Communicator представил документы в ECMA International, компанию, занимающуюся стандартизацией информационных и коммуникационных систем, в 1997 году.

ECMA International использовала JavaScript Netscape и JScript Microsoft для создания стандартизации под названием ECMAScript, языковой спецификации, на которой основаны оба языка. ECMA нельзя было назвать JavaScript, потому что JavaScript был торговой маркой, принадлежащей Sun Microsystems (которая позже стала Oracle).

ECMAScript 1-4
ECMAScript 1 (ES1) был выпущен в 1997 году, а ES2 — в следующем году. Между двумя версиями мало что изменилось.

ES3
ES3 был выпущен в 1999 году и добавил поддержку многих новых вещей, которые сегодня стали стандартной частью языка:

Строгое равенство: Начиная с ES3, оператор строгого равенства ( ===) стал опцией для использования в дополнение к оператору равенства ( ==). Разница между ними заключается в сравнении типа и количества. Строгое равенство рассматривает значения, которые являются одинаковыми, но разного типа, неравными.
const compareTypeAndValue = (num, str) => {
return num === str;
}

console.log(compareTypeAndValue(8, '8')); //false
console.log(compareTypeAndValue(8, 8)); //true
Регулярные выражения: в ES3 стали доступны два типа регулярных выражений: литерал и конструктор.

Литеральные выражения: Литеральные регулярные выражения выражаются между двумя обратными косыми чертами. Фактическое выражение находится между косой чертой и глобальным, регистр игнорируется, а многострочные флаги могут быть включены или выключены после последней обратной косой черты.

/[^abc]/gim
Выражения конструктора. Регулярные выражения конструктора — это те выражения, которые создаются как экземпляр объекта RegExp. Фактическое регулярное выражение — это первый аргумент, который передается конструктору RegExp. Во-вторых, если необходимо, это флаги, которые вы хотели бы использовать.
const regex = new RegExp(‘[^abc]’, ‘gim’);
Оператор Switch: оператор switch — это оператор потока управления, который в основном объединяет множество условий if без необходимости использования операторов else if. Оператор switch использует параметр и сравнивает этот параметр с каждым оператором case. Если этот параметр соответствует случаю, он выполняет логику в этом блоке.
Обработка Try/Catch: обработчик try/catch выдаст ошибку, если блок try по какой-либо причине не работает. Ниже попытка терпит неудачу, потому что объект obj никогда не был определен. Выполняется блок catch и генерируется новое исключение объекта Error.

ES3 был последним крупным обновлением спецификации ECMAScript почти за десятилетие, до 2009 года с ES5.

ES4
TC39 — это безвозмездная рабочая группа в ECMA International, основной задачей которой является стандартизация ECMAScript. Когда пришло время обновить и выпустить стандарт для ES4, рабочая группа действительно не смогла согласовать спецификацию. В результате версия ES4 затерялась, но так и не была полностью выпущена в качестве фактического стандарта.

Обновления ECMAScript 5 в деталях
ES5 и ES6 — это последние выпущенные спецификации, в которые было внесено наибольшее количество изменений.

Через десять лет после выпуска ES3, в 2009 году, была выпущена новая версия ECMAScript. Этот стандарт был самым большим изменением в JavaScript с момента его основания. Некоторые из новых функций включают в себя:

«использовать строгий»
До ES5 было разрешено использовать необъявленные переменные (те переменные, которые не используют ключевое слово var при первоначальном введении). Когда включена функция «использовать строго», выдается ошибка ссылки.

"use strict"

x = 5; // ReferenceError: x is not defined

Новые методы массива
В ES5 появилось несколько новых методов работы с массивами, которые значительно упростили жизнь при работе с массивами. Новые методы массива показаны здесь в алфавитном порядке:

every()
Метод every()массива проверяет, удовлетворяет ли каждый отдельный элемент массива заданному вами условию.

var arr = [6, 4, 5, 6, 7, 7];

arr.every(function(element) {
return element % 2 === 0; //checks to see if even
}); // false
filter()
Думайте о методе filter как о цикле for с оператором if. Если элемент проходит тест, вы помещаете этот элемент в новый массив. Вот как filter()работает под капотом.

Например map(), другой метод массива, упомянутый в этом разделе, filter()возвращает новый массив со значениями, прошедшими проверку.

var arr = [6, 4, 5, 6, 7, 7];

arr.filter(function(element) {
return element/2 > 3;
})
forEach()
Метод, очень похожий на цикл for. Для каждого элемента, найденного в массиве, forEach()метод выполняет для него функцию обратного вызова.

var arr = [6, 4, 5, 6, 7, 7];

arr.forEach(function(element) {
console.log(element \* 2);
})
indexOf()иlastIndexOf()
Если вам нужно найти определенный элемент в массиве, вы можете сделать это с помощью indexOf()и lastIndexOf(). indexOf()возвращает первый индекс параметра поиска, если он найден, в противном случае он возвращает файл -1.

В lastIndexOf(), это дает нам последний индекс элемента поиска в массиве. Опять же, если не найдено, оно вернется -1.

var arr = [6, 4, 5, 6, 7, 7];

console.log(arr.indexOf(4)); // 1
console.log(arr.indexOf(2)); // -1
console.log(arr.indexOf(7)); // 4

console.log(arr.lastIndexOf(7)); // 5
isArray()
Этот метод проверяет, является ли переданный ему объект массивом или нет. Возвращает логическое значение.

var arr = [6, 4, 5, 6, 7, 7];

var str = "Hello Educative.io";

console.log(Array.isArray(arr));
console.log(Array.isArray(str));
map()
Метод map()очень похож на forEach()метод, за исключением того, что он возвращает совершенно новый массив. Это позволяет манипулировать данными без ущерба для исходного массива.

Функция обратного вызова должна иметь оператор возврата. Это новое значение, которое будет входить в этот конкретный индекс нового массива.

var arr = [6, 4, 5, 6, 7, 7];

arr.map(function(element) {
return element \* 2;
})
reduce()иreduceRight()
Каждый из этих методов сокращения применяет функцию обратного вызова к каждому элементу массива. Что особенного в методах reduce()and reduceRight(), так это то, что они сводят массив к одному элементу.

Метод reduceRight()такой же, reduce()за исключением того, что он повторяется справа налево, а не слева направо.

var arr = [6, 4, 5, 6, 7, 7];

var reduced = arr.reduce(function(curr, next) {
return curr + next;
}, 0);

var reducedRight = arr.reduceRight(function(curr, next) {
return curr + next;
}, 0)

console.log(reduced);

console.log(reducedRight);
some()
Метод some()почти такой же, как every()метод, за исключением того, что он проверяет, удовлетворяет ли хотя бы один элемент заданному для него условию.

var arr = [6, 4, 5, 6, 7, 7];

arr.some(function(element) {
return element % 2 === 0; //checks to see if even
}); //true

JSON
Возможность анализировать и упорядочивать нотацию объектов JavaScript (JSON) стала возможной в стандарте ES5. Формат JSON используется в основном для передачи структурированных данных по сетевому соединению, обычно через веб-приложение и API.

Когда мы передаем данные из одного приложения, они должны быть в виде строки. Мы используем JSON.stringify()для преобразования объектов JavaScript в строки.

Затем мы используем JSON.parse()с другой стороны, чтобы преобразовать данные после передачи обратно в объект JavaScript, чтобы мы могли их использовать.

Новые методы дат
В ES5 появились два новых метода объекта Date, которые функционально эквивалентны. Оба они возвращают текущее время в миллисекундах с 1 января 1970 года. Они Date.now()и новые Date().valueOf().

console.log(Date.now());

console.log(new Date().valueOf());
Самая большая разница между этими двумя методами заключается в том, что valueOf()это метод экземпляра объекта Date и Date.now()статическая функция объекта Date.

Примечание. Internet Explorer может не поддерживать Date.now(), поэтому, если вас это беспокоит, вам может потребоваться решить эту проблему в своем коде.

геттеры и сеттеры
В ES5 мы познакомились с идеей свойств доступа. Это функции, единственной целью которых является получение или установка значения. Они выглядят как стандартные свойства, когда вы их вызываете:

Стандарт ES5 действительно начал прокладывать путь к тому, чтобы сделать код JavaScript более читабельным. Благодаря внедрению новых методов массивов , возможности парсить и преобразовывать JSON в строки, а также сделать процесс создания кода более строгим, это действительно помогло упростить понимание JavaScript.

Продолжайте обучение.
Изучайте современный JavaScript, не просматривая видео или документацию. Текстовые схемы обучения Educative легко просматриваются и включают живую среду кодирования, что делает обучение быстрым и эффективным.

Стать фронтенд-разработчиком

виджет

Обновления ES6 в деталях
Между готовой версией ES5 и выпуском ES6 прошло семь лет . Он стал стандартом в июне 2015 года.

Вавилон
Одним из самых больших изменений по сравнению с ES5 является то, что JavaScript ES6 нельзя компилировать непосредственно в браузерах . Нам нужно использовать транспилятор, вызываемый Babel.jsдля создания совместимого JavaScript, который могут читать старые браузеры.

Babel позволяет вам использовать функции и синтаксис ES6 в вашем проекте, а затем переводит их в ES5, чтобы вы могли использовать их в производстве.

Чтобы использовать Babel при сборке вашего проекта, вам нужно добавить в проект файл package.json. Здесь будут храниться все ваши зависимости для вашего проекта.

Убедитесь, что у вас установлены Node и npm (или Node и Yarn, если вы предпочитаете использовать Yarn), а затем введите команду npm initили yarn initв терминале. Ответьте на возникающие вопросы, и package.jsonони будут предварительно заполнены этими значениями.

Используйте npm/yarn, чтобы добавить babel к вашим зависимостям с помощью команды:

npm install --save-dev babel-cli
// or
yarn add babel-cli --dev
Вы будете использовать поле scripts в вашем файле package.jsonдля установки команды сборки с помощью Babel. Фактическая команда будет отличаться в зависимости от папки, из которой вы строите, и места, в которое вы хотите строить.

Наконец, в корневой папке вашего проекта (там, где package.jsonон находится) создайте .babelrcфайл. Это файл конфигурации Babel, который скажет Babel преобразовать ваш код в ES5. Установите пресет с помощью:

npm install --save-dev babel-preset-env
// or
yarn add babel-preset-env --dev
А затем определите его в своем .babelrcфайле:

{
“presets”: [“env”]
}
Теперь вы можете запустить Babel, выполнив команду сборки. Ваша папка назначения теперь должна выглядеть точно так же, как исходная папка, за исключением того, что содержимое папки назначения представляет собой код ES5, а не ES6.

Если вам случится использовать JavaScript-библиотеку или фреймворк, например create-react-app, , более чем вероятно, что Babel уже настроен для вас, и вам не нужно об этом беспокоиться. Это для проектов, которые создаются с нуля.

Большая стрелка (жирная стрелка) Функции
До этого нового стандарта JavaScript использовал ключевое слово function для создания функций. Теперь мы можем использовать большую стрелку =>для записи функций. Это может сделать код более элегантным, поскольку мы можем создавать однострочные толстые стрелочные функции.

//pre ES-6

function add(num1, num2) {
return num1 + num2;
}

//ES6 (implicit return)
const addImplicit = (num1, num2) => num1 + num2;

console.log(add(3, 4));
console.log(addImplicit(3, 4));
Однострочник ES6 имеет неявный возврат. Нам не нужно ключевое слово return, если функция состоит только из одной строки. Это также означает, что нет необходимости в фигурных скобках. Если функция состоит из более чем одной строки, нам понадобятся фигурные скобки и оператор return:

//ES6 (explicit return)

const addExplicitReturn = (num1, num2) => {
let sum = num1 + num2;
return sum;
};

console.log(addExplicitReturn(3, 4));
Также важно отметить, что когда вы используете классы, функция стрелки привязывается к ключевому слову «this», поэтому нет необходимости фактически использовать bind()метод для привязки функции к классу.

При использовании ключевого слова function метод должен быть привязан к классу с bind()методом.

Классы
Классы действуют как синтаксический сахар поверх прототипов JavaScript. Вместо Prototypal Inheritance они используют Classical Inheritance с extendsключевым словом. В целом, это просто сокращает количество кода и немного украшает его.

Разрушение
Деструктуризация объектов — отличный способ уменьшить беспорядок в коде и сделать его более привлекательным. Это позволяет нам «распаковать» объект и использовать это распакованное значение в качестве переменной, на которую мы ссылаемся позже в коде.

В разделе «перед деструктурированием» мы должны использовать имя объекта в дополнение к свойству, к которому мы хотим получить доступ. Мы можем деструктурировать его, вытащив свойства, поместив его в набор фигурных скобок и установив его на имя объекта.

Обязательно используйте ключевое слово const перед фигурными скобками. Это позволяет нам обращаться к этим свойствам как к переменным вместо использования записи через точку для самого фактического объекта.

Деструктуризация массива выполняется очень похожим образом, но вместо фигурных скобок используются квадратные скобки.

letиconst
В ES6 у нас есть несколько новых переменных ключевых слов, которые по существу заменили ключевое слово var. До ES6 у JavaScript была только функциональная и глобальная область видимости. С добавлением letи constтеперь у нас есть блочная область.

Ключевое letслово можно переназначить по мере необходимости. При использовании в той же области повторное объявление одной и той же переменной вызовет синтаксическую ошибку.

Это улучшение varключевого слова, позволяющее повторно объявлять переменные с другим значением. Это оказалось проблематичным, когда у нас было одно и то же имя переменной с разными значениями, что приводило к непреднамеренным ошибкам.

// pre-ES6:
var x = 5;
var x = 120; //produces no errors

// ES6:
let x = 5;
let x = 120; // produces a syntax error
Ключевое constслово полезно, когда у вас есть переменная, которую вы не собираетесь переназначать. Это выдаст ошибку, если вы попытаетесь переназначить константную переменную на другое значение.

Обещания
Промисы — это способ лучше обрабатывать асинхронное программирование на JavaScript. Раньше асинхронные вызовы выполнялись с использованием функций обратного вызова, что могло очень быстро сделать код запутанным и запутанным.

Примечание. Обещания заключают асинхронную логику в сетевой пакет, чтобы сделать код более читабельным.

остальные и спред операторы
Остальные операторы и операторы расширения по существу имеют один и тот же синтаксис, но служат другой цели. Оператор rest используется перед параметром функции, чтобы указать, что этому параметру следует назначить несколько аргументов.

function restExample(a, ...b) {
console.log(a); // 1
console.log(b); // [2, 3, 4, 5, 6]
}

restExample(1, 2, 3, 4, 5, 6);
Оператор распространения использует тот же синтаксис, но вместо этого используется массивами. По сути, он берет содержимое массива, копирует его, чтобы его можно было распространить на новую структуру. Мы можем использовать оператор распространения как способ добавить что-то в массив без использования push()или unshift().

Оператор распространения отлично работает, когда вам нужно работать с массивом, но вы не хотите манипулировать фактическим содержимым массива. Вы можете использовать оператор распространения, чтобы создать по существу копию для работы.

Литералы шаблонов
В ES6 нам больше не нужно объединять строки, пробелы и переменные вместе, чтобы сформировать большую строку. Мы используем литералы шаблонов для создания выражений, которые позволяют нам встраивать переменные в наши строки.

Что дальше для JavaScript?
С момента выхода ES6 стандартизация ежегодно обновляется. Вы можете следить за стандартами ECMA International ECMA-262, чтобы узнать, что нового в JavaScript. У них есть стандарт, доступный для бесплатного чтения онлайн в формате PDF.

Чтобы продолжить изучение JavaScript, вам следует проверить:

карта
Поставил
Генераторы
асинхронно/ожидание
Чтобы начать свое путешествие по JavaScript, ознакомьтесь с тщательно подобранным курсом обучения Educative « Стать фронтенд-разработчиком » . Без каких-либо предварительных знаний вы овладеете HTML, CSS и JavaScript, что позволит вам самостоятельно создавать красивые, функциональные веб-сайты и веб-приложения.
