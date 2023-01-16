Стандартные встроенные объекты
Сводка
Эта глава описывает все стандартные встроенные объекты JavaScript, вместе с их методами и свойствами.

Термин «глобальные объекты» (или стандартные встроенные объекты) здесь не следует путать с самим глобальным объектом. Далее в главе под этим обозначением понимаются объекты в глобальном пространстве имён (но только, если не используется строгий режим ECMAScript 5! В противном случае они возвращают undefined). Сам же глобальный объект в глобальном пространстве имён доступен через оператор this. На самом деле, глобальное пространство имён состоит из свойств глобального объекта (в том числе включая унаследованные свойства, если они есть).

Другие объекты в глобальном пространстве имён создаются либо с помощью пользовательских скриптов, либо предоставляются приложением хоста. Объекты хоста, доступные в контекстах браузера, задокументированы в справке по API (en-US). Для получения дополнительной информации о различии между DOM и ядром JavaScript, смотрите обзор технологии JavaScript.

Стандартные объекты (по категориям)
Значения
Глобальные свойства, возвращающие простое значение.

Infinity
NaN
undefined
литерал null
Функции
Глобальные функции, возвращающие результат определённой подпрограммы.

eval()
uneval() Non-standard
isFinite()
isNaN()
parseFloat()
parseInt()
decodeURI()
decodeURIComponent()
encodeURI()
encodeURIComponent()
escape() Deprecated
unescape() Deprecated
Фундаментальные объекты
Общие языковые объекты, функции и ошибки.

Object
Function
Boolean
Symbol
Error
EvalError
InternalError
RangeError
ReferenceError
SyntaxError
TypeError
URIError
Числа и даты
Объекты, имеющие дело с числами, датами и математическими вычислениями.

Number
Math
Date
Обработка текста
Объекты для манипулирования текстом.

String
RegExp
Индексированные коллекции
Коллекции, упорядоченные по индексам. Массивоподобные объекты.

Array
Int8Array
Uint8Array
Uint8ClampedArray
Int16Array
Uint16Array
Int32Array
Uint32Array
Float32Array
Float64Array
Коллекции по ключу
Коллекции объектов по ключу. Элементы обходятся в порядке вставки.

Map (en-US)
Set
WeakMap
WeakSet
Структурированные данные
Буферы данных и Объектная нотация JavaScript (JavaScript Object Notation).

ArrayBuffer (en-US)
DataView (en-US)
JSON
Объекты управляющих абстракций
Promise
Рефлексия
Reflect Экспериментальная возможность
Proxy Экспериментальная возможность
Интернационализация
Дополнения к ядру ECMAScript, отвечающие за функциональность, чувствительную к языку.

Intl
Intl.Collator
Intl.DateTimeFormat
Intl.NumberFormat
Нестандартные объекты
Generator Non-standard
Iterator Non-standard
ParallelArray Non-standard
StopIteration Non-standard
Прочее
Аргументы функции (arguments)
