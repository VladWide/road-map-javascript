// Типы данных // primitive

// const isProgramer = true
// const name = 'Vladislav'
// const age = 26
// let x
// const n = null

// console.log(typeof isProgramer) // boolean
// console.log(typeof name) // string
// console.log(typeof age) // number
// console.log(typeof x) // undefined
// console.log(typeof null) // object // !!! null
// console.log(typeof n) // object // !!! null

// Типы данных =>

//Boolean // true // false
//Number // 42
//String // 'text' //
//Undefined // переменая обявлена но не найдено его значение // или пременая не имеет значения // показывает сам движок браузера
//Null // обявленое значение переменной null //
//Sumbol //Символ (анг. Symbol) — это уникальный и неизменяемый тип данных, который может быть использован как идентификатор для свойств объектов. Символьный объект (анг. symbol object) — это объект-обёртка (англ. wrapper) для примитивного символьного типа. // function //
//BigInt// большие числа с приставкой n // 10n = bigInt// function

// Number //

// const num = 42 // integer
// const float = 42.42 // float
// const pow = 10e3 //

// console.log(num, float, pow)

// console.log('MAX_SAFE_INTEGER ', Number.MAX_SAFE_INTEGER)
// console.log('MIN_SAFE_INTEGER ', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE ', Number.MAX_VALUE)
// console.log('MIN_VALUE ', Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY ', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY ', Number.NEGATIVE_INFINITY)
// console.log('NaN ', Number.NaN)
// console.log('Math.pow 53 ', Math.pow(2, 53) - 1)
// const weird = 2 / undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(42))

// const stringInt = '40'
// const stringFloat = '40.42'

// console.log(new Number(stringInt) + 2)
// console.log(Number.parseInt(stringInt) + 2)
// console.log(+stringInt + 2)

// console.log(new Number(stringFloat) + 2)
// console.log(+stringFloat + 2)
// console.log(Number.parseFloat(stringFloat) + 2)

// Symbol
// Сводка
// Символ (анг. Symbol) — это уникальный и неизменяемый тип данных, который может быть использован как идентификатор для свойств объектов. Символьный объект (анг. symbol object) — это объект-обёртка (англ. wrapper) для примитивного символьного типа.

// Синтаксис
// Symbol([описание])
// Параметры
// описание Необязательный
// Необязательный, строка. Описание символа, которое может быть использовано во время отладки, но не для доступа к самому символу.

// Описание
// Чтобы создать новый символьный примитив, достаточно написать Symbol(), указав по желанию строку в качестве описания этого символа:

// var sym1 = Symbol();
// var sym2 = Symbol("foo");
// var sym3 = Symbol("foo");
// Copy to Clipboard
// Код выше создаёт три новых символа. Заметьте, что Symbol("foo") не выполняет приведение (англ. coercion) строки "foo" к символу. Это выражение создаёт каждый раз новый символ:

// Symbol("foo") === Symbol("foo"); // false
// Copy to Clipboard
// Код ниже с оператором new бросит исключение TypeError:

// var sym = new Symbol(); // TypeError
// Copy to Clipboard
// Это удерживает разработчиков от создания явного объекта-обёртки Symbol вместо нового символьного значения. Создание явных объектов-обёрток для примитивных типов доступно (например, new Boolean, new String, new Number).

// Если вам действительно необходимо обернуть символ в объект, вы можете использовать функцию Object():

// var sym = Symbol("foo");
// typeof sym;     // "symbol"
// var symObj = Object(sym);
// typeof symObj;  // "object"
// Copy to Clipboard
// Разделяемые символы в глобальном символьном реестре
// Приведённый выше синтаксис, использующий функцию Symbol(), не создаст глобальный символ, который был бы доступен в любом месте вашего кода. Для создания символов, доступных во всех файлах и в окружении (глобальной области), используйте методы Symbol.for() и Symbol.keyFor(), чтобы задать или получить символ из глобального символьного реестра.

// Поиск символьных свойств у объектов
// Метод Object.getOwnPropertySymbols() возвращает массив символов и позволяет получить символьные свойства конкретного объекта. Следует заметить, что при инициализации объекты не получают символьных свойств, так что этот массив будет пуст, пока вы не зададите ему какое-либо символьное свойство.

// Свойства
// Symbol.length
// Содержит длину, всегда равную 0 (нулю).

// Symbol.prototype (en-US)
// Содержит прототип конструктора Symbol.

// Известные символы
// В добавок к вашим собственным символам, JavaScript имеет несколько встроенных символов, представляющих внутренние механизмы языка, которые не были доступны разработчикам в версиях ECMAScript 5 и более ранних. Эти символы доступны посредством следующих свойств:

// Итерационные символы
// Symbol.iterator
// Метод, возвращающий итератор по умолчанию для объекта. Используется конструкцией for...of.

// Символы регулярных выражений
// Symbol.match
// Метод для сопоставления объекта со строкой, также используемый для определения возможности объекта выступать в качестве регулярного выражения. Используется функцией String.prototype.match().

// Symbol.replace
// Метод, заменяющий совпавшие подстроки в строке. Используется функцией String.prototype.replace().

// Symbol.search
// Метод, возвращающий индекс вхождения подстроки, соответствующей регулярному выражению. Используется функцией String.prototype.search().

// Symbol.split
// Метод, разбивающий строку на части в местах, соответствующих регулярному выражению. Используется функцией String.prototype.split().

// Другие символы
// Symbol.hasInstance
// Метод, определяющий, распознает ли конструктор некоторый объект как свой экземпляр. Используется оператором instanceof.

// Symbol.isConcatSpreadable
// Булево значение, показывающее, должен ли объект быть сведён к плоскому представлению (англ. flatten) в виде массива его элементов функцией Array.prototype.concat().

// Symbol.unscopables
// Массив строковых имён свойств. Позволяет скрыть свойства от инструкции with (прежде всего для обратной совместимости).

// Symbol.species
// Метод, определяющий конструктор для порождённых объектов.

// Symbol.toPrimitive
// Метод, преобразующий объект в примитив (примитивное значение).

// Symbol.toStringTag
// Строковое значение, используемое в качестве описания объекта по умолчанию. Используется функцией Object.prototype.toString()

// Методы
// Symbol.for(key)
// Ищет существующие символы по заданному ключу и возвращает его, если он найден. В противном случае создаётся новый символ для данного ключа в глобальном реестре символов.

// Symbol.keyFor(sym)
// Получает по разделяемому символу его ключ из глобального реестра символов.

// Прототип Symbol
// Все символы наследуют от Symbol.prototype (en-US).

// Свойства
// {{page('en-US/Web/JavaScript/Reference/Global_Objects/Symbol/prototype','Properties')}}
// Методы
// {{page('en-US/Web/JavaScript/Reference/Global_Objects/Symbol/prototype','Methods')}}
// Примеры
// Использование оператора typeof с символами
// Оператор typeof позволяет идентифицировать символ.

// typeof Symbol() === 'symbol'
// typeof Symbol('foo') === 'symbol'
// typeof Symbol.iterator === 'symbol'
// Copy to Clipboard
// Преобразование типов с символами
// Следующее необходимо помнить при преобразовании типа символов.

// При попытке конвертировать символ в число, будет брошено исключение TypeError (напр., +sym или sym | 0).
// Результатом нестрогого сравнения, Object(sym) == sym, будет true.
// Symbol("foo") + "bar" бросает исключение TypeError (невозможно преобразовать символ в строку). Это удерживает разработчика от, к примеру, случайного создания строгого поля у объекта из символа.
// Более "безопасный" вызов String(sym) работает с символами как вызов Symbol.prototype.toString() (en-US). Заметьте, что в то же время new String(sym) бросит исключение.
// Символы и конструкция for...in
// Символы не перечисляются при итерации for...in. В дополнение к этому, Object.getOwnPropertyNames() не вернёт символьные свойства объекта. Тем не менее, их можно получить с помощью Object.getOwnPropertySymbols().

// var obj = {};

// obj[Symbol("a")] = "a";
// obj[Symbol.for("b")] = "b";
// obj["c"] = "c";
// obj.d = "d";

// for (var i in obj) {
//    console.log(i); // выведет "c" и "d"
// }
// Copy to Clipboard
// Символы и JSON.stringify()
// JSON.stringify() игнорирует свойства с ключами Symbol:

// JSON.stringify({[Symbol("foo")]: "foo"});
// // '{}'
// Copy to Clipboard
// Подробности см. JSON.stringify().

// Объекты-обёртки для Symbol в качестве имён свойств
// Когда объект-обёртка символа используется в качестве имени свойства, этот объект сводится к символу, который он оборачивает:

// var sym = Symbol("foo");
// var obj = {[sym]: 1};
// obj[sym];            // 1
// obj[Object(sym)];    // снова 1
// var person

// if (!person) { // boolean true // Логический оператор НЕ (!) (логическое отрицание) меняет логическое значение операнда с истины в ложь и наоборот. Обычно он используется с булевыми (логическими) значениями. При использовании с любыми другими значениями, если операнд может быть преобразован в true, то вернёт false; в противном случае он возвращается true.
//   console.log('Hello Wide!')
// } else {
//   console.log('How are you?')
// }

// var person

// if (!!person) {
//   // boolean flase // Двойное НЕ (!!)
//   // Можно один за другим использовать пару операторов НЕ, чтобы явным образом принудительно преобразовать любое значение в соответствующий булевый примитив. Преобразование основано на "истинноподобности" или "ложноподобности" значения (см. truthy и falsy)).
//   console.log('Hello Wide!')
// } else {
//   console.log('How are you?')
// }

// var person // undefined // undefined является свойством глобального объекта, то есть, это переменная в глобальной области видимости. Начальным значением undefined является примитивное значение undefined.

// console.log(person)

// var num

// num = null
// console.log(num)

// num = 43
// console.log(typeof num)

// num = '42'
// console.log(typeof num)

// num = true
// console.log(typeof num)

// num = 10n
// console.log(typeof num)

// num = {
//   number: 42,
//   score: 24,
// }
// console.log(num)

// num = [1, 2, 3, 4, 5, {}, [], 'wide']
// console.log(num)
// num.push('vlad')
// console.log(num)

// const num = 42
// console.log(typeof num)

// var sum = Symbol('42') // Symbol
// console.log(typeof sum)

// var sum2 = Object(sum) // Object
// console.log(typeof sum2)

// // BigInt //

// BigInt это встроенный объект, который предоставляет способ представлять целые числа больше 253 - 1, наибольшего числа, которое JavaScript может надёжно представить с Number примитивом. Это максимальное значение можно получить, обратившись к Number.MAX_SAFE_INTEGER.

// Описание
// BigInt создаётся путём добавления n в конец целочисленного литерала — 10n — или вызовом функции BigInt().

// const theBiggestInt = 9007199254740991n;

// const alsoHuge = BigInt(9007199254740991);
// // ↪ 9007199254740991n

// const hugeString = BigInt("9007199254740991");
// // ↪ 9007199254740991n

// const hugeHex = BigInt("0x1fffffffffffff");
// // ↪ 9007199254740991n

// const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111");
// // ↪ 9007199254740991n
// Copy to Clipboard
// В некотором смысле он похож на Number, но отличается в некоторых ключевых моментах — его нельзя использовать с методами во встроенном объекте Math и нельзя смешивать в операциях с любыми экземплярами Number.

// Предупреждение: Number и BigInt нельзя смешивать в операциях — они должны быть приведены к тому же типу.

// Будьте осторожны приводя значения туда и обратно, так как точность BigInt может быть потеряна при приведении к числу (Number).

// Тип
// При проверке с использованием оператора typeof, BigInt выдаёт тип "bigint":

// typeof 1n === 'bigint'; // true
// typeof BigInt('1') === 'bigint'; // true
// Copy to Clipboard
// При оборачивании в объект, BigInt будет представлен как обычный объект:

// typeof Object(1n) === 'object'; // true
// Copy to Clipboard
// Операторы
// Следующие операторы могут использоваться с BigInt (или объектом-обёрткой BigInt): +, *, -, **, %.

// Побитовые операции (en-US) также поддерживаются, кроме >>> (сдвиг вправо с заполнением нулями).

// Не поддерживаемый унарный оператор (+) больше не ломает asm.js.

// const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER);
// // ↪ 9007199254740991n

// const maxPlusOne = previousMaxSafe + 1n;
// // ↪ 9007199254740992n

// const theFuture = previousMaxSafe + 2n;
// // ↪ 9007199254740993n, это работает!

// const multi = previousMaxSafe * 2n;
// // ↪ 18014398509481982n

// const subtr = multi – 10n;
// // ↪ 18014398509481972n

// const mod = multi % 10n;
// // ↪ 2n

// const bigN = 2n ** 54n;
// // ↪ 18014398509481984n

// bigN * -1n
// // ↪ –18014398509481984n
// Copy to Clipboard
// Оператор / также работает, как и ожидалось, с целыми числами. Однако, поскольку это BigInt, эта операция будет округляться в меньшую сторону, то есть она не будет возвращать какие-либо дробные цифры.

// Предупреждение: Результат операции с дробным результатом будет округлён в меньшую сторону при использовании BigInt.

// const expected = 4n / 2n;
// // ↪ 2n

// const rounded = 5n / 2n;
// // ↪ 2n, not 2.5n
// Copy to Clipboard
// Сравнения
// BigInt равен Number только при нестрогом сравнении.

// 0n === 0
// // ↪ false

// 0n == 0
// // ↪ true
// Copy to Clipboard
// Обычные числа и BigInt можно сравнивать как обычно.

// 1n < 2
// // ↪ true

// 2n > 1
// // ↪ true

// 2 > 2
// // ↪ false

// 2n > 2
// // ↪ false

// 2n >= 2
// // ↪ true
// Copy to Clipboard
// Они могут быть смешаны в массивах и отсортированы:

// const mixed = [4n, 6, -12n, 10, 4, 0, 0n];
// // ↪  [4n, 6, -12n, 10, 4, 0, 0n]

// mixed.sort();
// // ↪ [-12n, 0, 0n, 10, 4n, 4, 6]
// Copy to Clipboard
// Обратите внимание, что сравнения с обьектом-обёрткой BigInt действуют как с другими объектами, указывая на равенство только когда сравнивается идентичный экземпляр объекта:

// 0n === Object(0n); // false
// Object(0n) === Object(0n); // false

// const o = Object(0n);
// o === o // true
// Copy to Clipboard
// Условные выражения
// BigInt ведёт себя как обычное число в следующих случаях:

// Преобразуется в Boolean через функцию Boolean
// Используется с логическими операторами Logical Operators (en-US) ||, && и !
// В условном тесте, таком как if statement.
// if (0n) {
//   console.log('Привет из if!');
// } else {
//   console.log('Привет из else!');
// }

// // ↪ "Привет из else!"

// 0n || 12n
// // ↪ 12n

// 0n && 12n
// // ↪ 0n

// Boolean(0n)
// // ↪ false

// Boolean(12n)
// // ↪ true

// !12n
// // ↪ false

// !0n
// // ↪ true
// Copy to Clipboard
// Конструктор
// BigInt()
// Создаёт объект BigInt.

// Статические методы
// BigInt.asIntN()
// Оборачивает BigInt в пределах от -2width-1 до 2width-1-1

// BigInt.asUintN()
// Оборачивает a BigInt в пределах от 0 до 2width-1

// Методы экземпляра
// BigInt.prototype.toLocaleString() (en-US)
// Возвращает строку с языкозависимым представлением числа. Переопределяет метод Object.prototype.toLocaleString().

// BigInt.prototype.toString() (en-US)
// Возвращает строку, представляющую указанный объект по указанному основанию системы счисления. Переопределяет метод Object.prototype.toString().

// BigInt.prototype.valueOf() (en-US)
// Возвращает примитивное значение указанного объекта. Переопределяет метод Object.prototype.valueOf().

// Рекомендации по использованию
// Приведение
// Поскольку приведение между Number и BigInt может привести к потере точности, рекомендуется использовать BigInt только тогда, когда разумно ожидаются значения, превышающие 253 и не приводить между двумя типами.

// Криптография
// Операции поддерживаемые BigInt не постоянны во времени. BigInt следовательно не пригоден для использования в криптографии.

// Использование вместе с JSON
// Использование JSON.stringify() с любым значением типа BigInt приведёт к TypeError, поскольку значения BigInt не преобразуется в JSON по умолчанию, однако вы можете реализовать свой собственный метод toJSON, если вам необходимо:

// BigInt.prototype.toJSON = function() { return this.toString() }
// Copy to Clipboard
// Теперь вместо ошибки, JSON.stringify будет создавать строку:

// JSON.stringify(BigInt(1))
// // '"1"'
// Copy to Clipboard
// Примеры
// Расчёт простых чисел
// // Возвращает true, если BigInt — простое число
// function isPrime(p) {
//   for (let i = 2n; i * i <= p; i++) {
//     if (p % i === 0n) return false;
//   }
//   return true;
// }

// // Берет BigInt в качестве аргумента и возвращает BigInt
// function nthPrime(nth) {
//   let maybePrime = 2n;
//   let prime = 0n;

//   while (nth >= 0n) {
//     if (isPrime(maybePrime)) {
//       nth--;
//       prime = maybePrime;
//     }
//     maybePrime++;
//   }

//   return prime;
// }

// nthPrime(20n)
// // ↪ 73n

// Number type //
// Number главный класс типа данны числа , которым можно пользоваться для создания или вычисления , он имеет свои функции , методы , родительский класс Number  являеться Object
// var number = 123456 // var переизменяемый тип данных//
// const num = 123
// let numb = 4567 // let переизменяемый тип данных //

// String //
//String главный класс типа данных строки , у которого есть функции и методы , присузиее Строкам , родительский класс Строки есть Обьект.

// var str1 = 'Vlad' // можно использовать одинарыне кавычки
// let str2 = `"vlad"` // можно использовать двойные кавычки
// const str3 = `Vladislav "${str1}"` // Или можно использовать наклонные кавычки для того что бы писать более сложные строковые и интерактивные свойсва внутри строковых типов данных //

// Boolean // Логическое true/false

//Можно явно дать знать наша переменная true / false  или узнать у самого движка с помощью Boolean класса функий и  методом //

// var vlad = true
// const Vlad = true
// let Vladislav = false

// Null //

//Null можно только указать , в прямом смысле этого понимания , null указывает переменной сам разработчик в этом и есть отличие от undefined //

// var n = null
// const v = null
// let g = null

// console.log(n)

// Undefined //

// Undefined это значение выносит нам сам движок JS тогда когда он не может найти обяленые переменные или значение которое мы от него требуем ///

// var num
// console.log(num) // undefined
// let number
// console.log(number) // undefined
// const numm // Error

// Symbol //  это уникальный и неизменяемый тип данных, который может быть использован как идентификатор для свойств объектов. Символьный объект (анг. symbol object) — это объект-обёртка (англ. wrapper) для примитивного символьного типа.

// var N = Symbol()
// console.log(N) // переменая N стала символом котоую мы можем использовать как неизменный тип данных в Функции //
// var N = 3 // N не изменная переменная !
// function num(a, b) {
//   return a + b + N
// }

// console.log(num(3, 3))

// BigInt //
//Большие числа с приставкой в конце чила буквы n //BigInt создаётся путём добавления n в конец целочисленного литерала — 10n — или вызовом функции BigInt().

// var num = 18014398509481972n
// // console.log(typeof num) // bigint

// console.log(BigInt(10n)) // bigint
