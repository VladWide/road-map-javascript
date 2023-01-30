typeof
Оператор typeof возвращает строку, указывающую тип операнда.

Интерактивный пример

Синтаксис
Операнд следует за оператором typeof:

typeof operand
Параметры
operand является выражением, представляющим объект или примитив, тип которого должен быть возвращён.

Описание
В следующей таблице приведены возможные возвращаемые значения typeof. Дополнительная информация о типах и примитивах находится на странице структуры данных JavaScript.

Type Result
Undefined "undefined"
Null "object" (смотрите ниже)
Boolean "boolean"
Number "number"
String "string"
Symbol (новый тип из ECMAScript 2015) "symbol"
Host object (определено JS окружением) Зависит от реализации
Function object (реализует [[Call]] в терминах ECMA-262) "function"
Любой другой тип "object"
Примеры
// Числа
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof(42) === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // несмотря на то, что это "Not-A-Number" (не число)
typeof Number(1) === 'number'; // никогда не используйте эту запись!

// Строки
typeof '' === 'string';
typeof 'bla' === 'string';
typeof '1' === 'string'; // обратите внимание, что число внутри строки всё равно имеет тип строки
typeof (typeof 1) === 'string'; // typeof всегда вернёт в этом случае строку
typeof String('abc') === 'string'; // никогда не используйте эту запись!

// Booleans
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(true) === 'boolean'; // никогда не используйте эту запись!

// Символы
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'

// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';

// Объекты
typeof {a: 1} === 'object';

// используйте Array.isArray или Object.prototype.toString.call
// чтобы различить обычные объекты и массивы
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';

// То что ниже приводит к ошибкам и проблемам. Не используйте!
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String('abc') === 'object';

// Функции
typeof function() {} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';
Copy to Clipboard
null
// Это было определено с рождения JavaScript
typeof null === 'object';
Copy to Clipboard
В первой реализации JavaScript значения были представлены парой тип тега и значение. Тип тега для объектов равнялся 0. null был представлен как нулевой указатель (0x00 в большинстве платформ). Следовательно, тип тега для null равнялся нулю, поэтому возвращаемое значение typeof является фиктивным. (подробнее)

Исправление было предложено в ECMAScript (через отключение), но было отклонено. Это привело бы к тому, что typeof null === 'null'.

Использование оператора new
// Все функции-конструкторы, созданные с помощью 'new', будут иметь тип 'object'
var str = new String('String');
var num = new Number(100);

typeof str; // Вернёт 'object'
typeof num; // Вернёт 'object'

// Но существует исключение для конструктора Function

var func = new Function();

typeof func; // Вернёт 'function'
Регулярные выражения
Вызываемые регулярные выражения были нестандартным дополнением в некоторых браузерах.

typeof /s/ === 'function'; // Chrome 1-12 Не соответствует ECMAScript 5.1
typeof /s/ === 'object'; // Firefox 5+ Соответствует ECMAScript 5.1
Ошибки, связанные с временными мёртвыми зонами
До ECMAScript 2015, гарантировалось, что оператор typeof вернёт строку для любого операнда, с которым он был вызван. Это изменилось после добавления не поднимающихся объявлений let and const с блочной областью видимости. Теперь, если переменные объявлены с помощью let и const, и для них вызывается typeof в блоке объявления переменных, но до объявления, то выбрасывается ReferenceError. Поведение отличается от необъявленных переменных, для которых typeof вернёт 'undefined'. Переменные с блочной областью видимости находятся в "временной мёртвой зоне", которая длится от начала блока до момента объявления переменных. В этой зоне попытка доступа к переменным выбрасывает исключение.

typeof undeclaredVariable === 'undefined';
typeof newLetVariable; let newLetVariable; // ReferenceError
typeof newConstVariable; const newConstVariable = 'hello'; // ReferenceError
Исключения
Во всех текущих браузерах существует нестандартный host-объект document.all, который имеет тип Undefined.

typeof document.all === 'undefined';
Хотя спецификация разрешает собственные имена типов для нестандартных экзотических объектов, требуется чтобы эти имена отличались от предопределённых. Ситуация, когда document.all имеет тип undefined должна рассматриваться как исключительное нарушение правил.
