Встроенные методы в Javascript 🤓

#

JavaScript
Привет! Программирование может быть ошеломляющим 😫, но как только вы освоитесь с некоторыми базовыми понятиями, вы начнете чувствовать себя суперсилой 🦸‍♀️, а Javascript — один из самых крутых языков для изучения! 💯
В этом документе вы можете найти сводку по использованию встроенных методов в Javascript. Мы рассмотрим:
Что такое встроенные методы?
Использование Документов
Полезные встроенные методы
Дата
Математика
Струны
Массивы
Объекты
Если вам нужна помощь с настройкой, вы можете найти помощь ниже 👇

Базовая настройка

Что такое встроенные методы?
Метод JavaScript — это свойство, содержащее определение функции . Другими словами, когда данные, хранящиеся в объекте, представляют собой функцию, мы называем это методом.

Чтобы различать свойства и методы, мы можем думать об этом так: свойство — это то, что есть у объекта, а метод — это то, что объект делает.

Поскольку методы JavaScript — это действия, которые можно выполнять над объектами, для начала нам нужны объекты. В JavaScript встроено несколько объектов, которые мы можем использовать.

Стандартные встроенные объекты

Как получить доступ к методам объекта?
Мы вызываем или используем методы, добавляя экземпляр с помощью:

период (оператор точки)
название метода
открывающие и закрывающие скобки
Вы получаете доступ к объектному методу со следующим синтаксисом:
objectName.methodName()
Свойство methodName будет выполняться (как функция), когда оно вызывается с помощью ().

Если вы получите доступ к свойству methodName без (), оно вернет определение функции вместо выполнения действия.

Использование документов
Я не могу не подчеркнуть, насколько важным может быть знакомство с официальной документацией. Вам не нужно запоминать все наизусть, но вы должны знать, где или как найти то, что вам нужно.

Вот почему использование документации является частью повседневной жизни разработчиков. Разработчики используют документацию как справочный инструмент. Он описывает ключевые слова, методы и синтаксис JavaScript.

Найдите минутку, чтобы просмотреть документацию по javascript от MDN Web Docs и поэкспериментировать со ссылками. На этих страницах есть масса очень полезной информации о javascript.

JavaScript | МДН

Ничего страшного, если вы не все сразу поймете. Все проходят разные пути обучения ¡Просто продолжайте практиковаться!

Полезные встроенные методы
Конкретные встроенные объекты имеют разные встроенные методы, которые мы можем использовать. Ниже вы можете найти несколько полезных методов для объектов Date, Math, String, Array и Object. 👇

Дата
Объекты JavaScript Date представляют один момент времени в независимом от платформы формате. Объекты даты содержат число, представляющее миллисекунды с 1 января 1970 года по всемирному координированному времени.

Полезные встроенные методы для объектов Date

Дата()

При вызове в качестве функции возвращает строковое представление текущей даты и времени точно так new Date().toString() же.

новая дата()

При вызове в качестве конструктора возвращает новый Date объект.

Date.now()

Возвращает числовое значение, соответствующее текущему времени — количество миллисекунд, прошедших с 00:00:00 UTC 1 января 1970 года, без учета дополнительных секунд.

Дата.parse()

Анализирует строковое представление даты и возвращает количество миллисекунд с 1 января 1970 года, 00:00:00 UTC, при этом дополнительные секунды игнорируются. Примечание. Разбор строк с помощью Date.parse категорически не рекомендуется из-за различий и несоответствий браузеров.

Вы можете найти гораздо больше информации о встроенных методах для объектов Date в документации:

Дата - JavaScript | МДН

Математика
Math — это встроенный объект, который имеет свойства и методы для математических констант и функций.

Полезные встроенные методы для объектов Math

Math.round(число)

Возвращает предоставленное число, округленное до ближайшего целого числа (целого числа).

Math.floor (число)

Округляет в меньшую сторону до предыдущего целого числа.

Math.ceil(число)

Округляет до следующего целого числа.

Math.sqrt(x) и Math.cbrt(x)

Возвращает квадратный корень из x и кубический корень из x соответственно.

Math.PI

Технически не метод, а свойство! Удобно, если вам нужен Пи.

Вы можете найти гораздо больше информации о встроенных методах для объектов Math в документации:

Математика — JavaScript | МДН

Нить
Объект String используется для представления последовательности символов и управления ею. Строки полезны для хранения данных, которые могут быть представлены в текстовой форме, а JavaScript предоставляет ряд полезных встроенных методов строк.

например 'example string'.methodName()\_
console.log('hello'.toUpperCase()); // Prints 'HELLO'
Полезные встроенные методы для объектов String

строка.длина()

Возвращает длину строки.

строка.toUpperCase()

Преобразование всех символов строки в заглавные. Неразрушающий — возвращает новую строку, не изменяет исходную строку.

строка.toLowerCase()

Как и в случае с toUpperCase. Преобразует все символы в нижний регистр. Неразрушающий.

string.split(разделитель, предел)

Разбивает строку на массив, разделенный предоставленным разделителем. Если указана пустая строка (""), она разделит каждый символ на новый элемент в массиве. Например. ("JavaScript великолепен").split(" ") вернет ["JavaScript", "is", "отлично"] .
'Javascript is great'.split("") // returns ['Javascript', 'is', 'great']
string.replace (искать, заменить с)

Находит каждый экземпляр искомой подстроки и заменяет его данной новой подстрокой. Неразрушающий.

Вы можете найти гораздо больше информации о встроенных методах для объектов String в документации:

Строка - JavaScript | МДН

Множество
Самый простой способ описать массивы — это то, что они похожи на списки объектов. Что-то очень важное в массивах заключается в том, что они индексируются, а это означает, что вы можете получить доступ к определенным значениям по индексу или местоположению, которое они содержат в списке.
let fruits = ['Apple', 'Banana']
Полезные встроенные методы для объектов Array

массив.длина

Не метод, а суперполезное встроенное свойство массива — длина. Возвращает количество элементов в массиве.
const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];

console.log(newYearsResolutions.length);
// Output: 2
массив.push()

Позволяет нам добавлять элементы в конец массива. Обратите внимание, что .push() изменяет или мутирует массив. Вы также можете увидеть, что .push() упоминается как метод разрушения массива, поскольку он изменяет исходный массив.
const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker);
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];
массив.поп()

Удаляет последний элемент массива. Он не принимает никаких аргументов, он просто удаляет последний элемент массива и возвращает значение последнего элемента. Это метод, который изменяет исходный массив.
const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker);
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2
Итераторы

Встроенные методы массива JavaScript, которые помогают нам выполнять итерацию, называются методами итерации, иногда называемыми итераторами. Итераторы — это методы, вызываемые для массивов для управления элементами и возврата значений.

массив.для каждого()

Выполняет один и тот же код для каждого элемента массива.
groceries.forEach(groceryItem =>
console.log(' - ' + groceryItem)
);
Зацикливание — очень важная концепция, поэтому давайте изучим синтаксис вызова .forEach().

groceries.forEach() вызывает forEachметод groceries массива.
.forEach() принимает аргумент функции обратного вызова. Помните, что функция обратного вызова — это функция, которая передается в качестве аргумента в другую функцию.
.forEach() перебирает массив и выполняет функцию обратного вызова для каждого элемента. Во время каждого выполнения текущий элемент передается в качестве аргумента функции обратного вызова.
Возвращаемое значение .forEach() всегда будет undefined.
Мы также можем заранее определить функцию, которая будет использоваться в качестве функции обратного вызова.
function printGrocery(element){
console.log(element);
}

groceries.forEach(printGrocery);
Полезно знать о различных способах передачи функций обратного вызова в качестве аргументов в итераторах, поскольку у разработчиков разные стилистические предпочтения.

array.map()

Когда .map() вызывается для массива, он принимает аргумент функции обратного вызова и возвращает новый массив. Взгляните на пример вызова .map():
const numbers = [1, 2, 3, 4, 5];

const bigNumbers = numbers.map(number => {
return number \* 10;
});
.map() работает аналогично .forEach() — основное отличие состоит в том, что .map() возвращает новый массив.

массив.фильтр()

Как и .map(), .filter() возвращает новый массив. Однако .filter() возвращает массив элементов после фильтрации определенных элементов из исходного массива. Функция обратного вызова для метода .filter() должна возвращать значение true или false в зависимости от переданного ей элемента. Элементы, из-за которых функция обратного вызова возвращает значение true, добавляются в новый массив.
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];

const shortWords = words.filter(word => {
return word.length < 6;
});
Вы можете найти гораздо больше информации о встроенных методах для объектов Array в документации:

Массив — JavaScript | МДН

Объекты
Немного забавно говорить, что мы можем использовать встроенные методы для объектов Object, но, эй, не я устанавливал правила. Мы также можем воспользоваться встроенными методами для объектов. Объекты используются для хранения различных коллекций с ключами или пар ключ-значение.

Полезные встроенные методы для объектов Array

Object.keys(obj)

Возвращает массив ключей, которые содержит объект.

Объект.значения(объект)

Возвращает массив значений каждого из элементов объекта.

Object.entries(obj)

Возвращает массив, содержащий вложенные массивы для каждой пары ключ-значение. Первый элемент в каждом вложенном массиве — это ключ, а второй — значение. Например:
obj = { a: 1, b: "b", c: [3,4,5] }Object.entries(obj)

> > [["a",1], ["b","b"], ["c",[3,4,5]]
> > Объект.fromEntries(обр)

Создает новый объект из массива пар ключ-значение, переданного в качестве аргумента. Возвращает новый объект.

Перебор объектов

То же, что и повторение полных массивов с помощью .forEach(), for...inбудет выполнять заданный блок кода для каждого свойства в объекте.
let spaceship = {
crew: {
captain: {
name: 'Lily',
degree: 'Computer Engineering',
cheerTeam() { console.log('You got this!') }
},
'chief officer': {
name: 'Dan',
degree: 'Aerospace Engineering',
agree() { console.log('I agree, captain!') }
},
medic: {
name: 'Clementine',
degree: 'Physics',
announce() { console.log(`Jets on!`) } },
translator: {
name: 'Shauna',
degree: 'Conservation Science',
powerFuel() { console.log('The tank is full!') }
}
}
};

// for...in
for (let crewMember in spaceship.crew) {
console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}
для ... в

Вы можете найти гораздо больше информации о встроенных методах для объектов в документации:

Объект - JavaScript | МДН

Бонус
Добавление метода к объекту
Мы могли бы создавать свои собственные объекты и методы для моделирования реальных жизненных ситуаций и действий,

Добавить новый метод к объекту очень просто:

Мы можем включать методы в литералы наших объектов, создавая обычные пары ключ-значение, разделенные запятыми. Ключ служит именем нашего метода, а значение — выражением анонимной функции.
const alienShip = {
invade: function () {
console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
}
};
С новым синтаксисом метода, представленным в ES6, мы можем опустить двоеточие и ключевое слово function.
const alienShip = {
invade () {
console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
}
};
Методы объекта вызываются путем добавления к имени объекта оператора точки, за которым следует имя метода и круглые скобки:
alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.
person.name = function () {
return this.firstName + " " + this.lastName;
};
