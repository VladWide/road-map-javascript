// Введение
// Стрелочные функции
// Новая область this
// let и const
// Promises
// Generators
// Классы
// Конструктор
// super
// Getters and setters
// Модули
// Импорт модулей
// Экспорт модулей
// Шаблонные литералы (Template Literals)
// Параметры по умолчанию
// Оператор распространения spread
// Деструктуризация
// Расширенные литералов объекта
// Более простой синтаксис
// Прототип
// super()
// Динамические свойства
// Цикл for-of
// Map и Set
// Новые строковые методы
// Новые методы объекта
// Введение
// ECMAScript - это стандарт, на котором основан JavaScript, и его часто называют ES.

// ECMAScript 2015, также известный как ES6, является фундаментальной версией стандарта ECMAScript.

// Опубликованный через 4 года после последней версии стандарта ECMAScript 5.1, он также обозначил переход с номера издания на номер года.

// Поэтому его следует называть не ES6 (хотя все называют его таковым), а ES2015.

// ES5 разрабатывался 10 лет, с 1999 по 2009 год, и как таковой он также был фундаментальным и крайне важным пересмотром языка.

// Поскольку этот длинный промежуток времени прошел между ES5.1 и ES6, выпуск полон важных новых функций и существенных изменений в рекомендуемых лучших практиках разработки программ на JavaScript. Чтобы понять, насколько фундаментален ES2015, просто имей в виду, что в этой версии документ с техническими характеристиками увеличился с 250 страниц до 600.

// В этой статье описаны наиболее важные изменения 😉.

// Стрелочные функции
// С момента появления стрелочных функций, последние изменили то, как выглядит и работает большая часть JavaScript кода.

// Визуально, это простое и долгожданное изменение. Например функция:

// const name = function name() {
//   console.log("my name is Alex");
// };
// превращается в

// const name = () => {
//   console.log("my name is Alex");
// };
// Если тело функции является однострочным, то можно убрать фигурные скобки:

// const name = () => console.log("my name is Alex");
// Также, если у тебя только один параметр, то можно убрать круглые скобки:

// const name = (param) => console.log(`my name is ${param}`);
// Это не серьезное изменение, обычные функции продолжают работать так же, как и раньше.

// Более подробно о стрелочных функциях здесь.

// Новая область this
// Значение this определяется тем, каким образом вызвана функция. В JavaScript ключевое слово this относится к объекту, к которому оно принадлежит.

// Оно имеет разные значения в зависимости от того, где используется:

// в методе, this относится к объекту, по отношению к которому вызван метод;
// в глобальном контексте выполнения this ссылается к глобальному объекту;
// в функции, значение this зависит от того, каким образом вызвана функция;
// в обычной функции this относится к глобальному объекту;
// в стрелочных функциях, this привязан к окружению, в котором была создана функция;
// в строгом режиме функции, this не определен, если предварительно он не был установлен в контексте исполнения;
// в событии this относится к элементу, который получил событие;
// такие методы, как call() и apply() могут ссылать this на любой объект.
// let и const
// Есть несколько способов объявить переменные в ES6: объявить переменные с помощью var (который мы всегда использовали), плюс сейчас мы можем использовать let и const.

// Эти два способа имеют некоторые атрибуты, которые будут полезны для нас при создании переменных. Но давай сделаем краткий обзор, как отличаются var, let и const.

// Во-первых, переменные var могут быть переопределены или обновлены. Например:

// var width = 100;
// console.log(width); // 100
// width = 200;
// console.log(width); // 200
// Также они не будут “кричать” о создании одного и того же имени переменной дважды в одной и той же области видимости, так как переменные var могут быть обновлены или переопределены.

// Также важно помнить, как переменные var определены. По сути, scoping или область видимости означает «Где эти переменные доступны для меня?». В случае переменных var они являются областью действия функции, что означает, что они доступны только внутри функции, в которой они созданы. Однако, если они не объявлены в функции, то они имеют глобальную область видимости и доступны во всем окне.

// var - традиционно функциональная область.

// let - это новое объявление переменной, которая имеет ограниченую область видимости.

// Это означает, что объявление переменных let в цикле for, внутри блока if или в обычном блоке, не позволит этой переменной «покинуть» блок, в то время как var поднимется до определения функции.

// const похож на let, но он неизменный, константа (почти!). Если ты попытаешься обновить его то это не сработает, потому что ты не можешь обновить переменную const, так как let.

// Ты можешь решить что const - неизменен. Например, если у тебя есть объект:

// const person = {
//   name: "Alex",
//   age: 28,
// };
// и ты попытаешься обновить переменную const, набрав person = { name: 'Alexey' }, то у тебя не получится. Однако свойства переменной const могут измениться. Это потому, что весь объект не является неизменным. Его просто нельзя переназначить полностью. Например:

// const person = {
//   name: "Alex",
//   age: 28,
// };

// person.name = "Alexey";
// Это сработает, но ты не можешь перезаписать всю переменную.

// Promises
// Promises (далее по тексту - “промисы”) позволяют нам устранить известный «callback hell» или «ад обратных вызовов», хотя они внесли небольшие усложнения (которые были решены в ES2017 с помощью async- конструкции более высокого уровня).

// Промисы использовались разработчиками JavaScript задолго до ES2015, только с помощью множеств различных библиотек, а стандарт нашел общий язык между ними.

// Используя промис, ты можешь переписать этот код

// setTimeout(function () {
//   console.log("I promised to run after 1s");
//   setTimeout(function () {
//     console.log("I promised to run after 2s");
//   }, 1000);
// }, 1000);
// на этот.

// const wait = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000);
//   });

// wait()
//   .then(() => {
//     console.log("I promised to run after 1s");
//     return wait();
//   })
//   .then(() => console.log("I promised to run after 2s"));
// Промис может быть выполнен успешно - resolved или отклонен - rejected. Когда успешно выполняешь промис, запускается then(), а когда отклоняешь запускается catch(). Обычно, внутри твоего промиса, у тебя есть какая-то логика, которая решает, будете ли промис отклонен или выполнен. Он позволяет обрабатывать результаты асинхронных операций так, как если бы они были синхронными. Вместо конечного результата асинхронного метода возвращается промис (обещание) получить результат в какой-то момент в будущем.

// Generators
// Generators - это особый тип функций, который дает возможность приостановить свое выполнения, а потом позже возобновить. Это позволяет запускать другой код в момент приостановления функции. function со звёздочкой function* определяет функцию-генератор.

// function* strGenerator() {
//   // function* // функцию обозначаем звездочкой //
//   yield 'H'
//   yield 'e'
//   yield 'l'
//   yield 'l'
//   yield 'o'
// }
// const str = strGenerator()

// console.log(str.next()) // { value: 'H', done: false }
// console.log(str.next()) // { value: 'e', done: false }
// console.log(str.next()) // { value: 'l', done: false }
// console.log(str.next()) // { value: 'l', done: false }
// console.log(str.next()) // { value: 'o', done: false }
// console.log(str.next()) // { value: undefined, done: true } // когда закачиваются value генератор будет вызывать обект с такими значениями done: true//

// function* numberGen(n = 10) {
//   for (let i = 0; i < n; i++) {
//     yield i
//   }
// }
// const num = numberGen(7)
// console.log(num.next())
// console.log(num.next())
// console.log(num.next())
// console.log(num.next())
// console.log(num.next())
// console.log(num.next())
// console.log(num.next())
// console.log(num.next()) // done: true

// const iterator = {
//   gen(n = 10) {
//     let i = 0
//     return {
//       next() {
//         if (i < n) {
//           return { value: ++i, done: false }
//         }
//         return { value: undefined, done: true }
//       },
//     }
//   },
// }
// const itr = iterator.gen(3)
// console.log(itr.next())
// console.log(itr.next())
// console.log(itr.next())
// console.log(itr.next()) // done: true // мы поаторили логику генератора , без самого класса Generator //

// for (const k of iterator) {
//     console.log(k)
//   } // Error //

// Symbol.iterator // Array method //

// const iterator = {
//   [Symbol.iterator](n = 10) {
//     let i = 0
//     return {
//       next() {
//         if (i < n) {
//           return { value: ++i, done: false }
//         }
//         return { value: undefined, done: true }
//       },
//     }
//   },
// }
// for (const k of iterator) {
//   console.log(k)
// } // work with Symbol.iterator key

// function* iter(n = 10) {
//   for (let i = 0; i < n; i++) {
//     yield i
//   }
// }
// for (const k of iter(6)) {
//   console.log(k)
// } // Work with Generator and for/of//

// Классы
// Традиционно JavaScript - единственный основной язык с наследованием на основе прототипов. ES2015 представил классы, которые являются просто синтаксическим сахаром для внутренней работы, что сильно изменил то, как мы строим программы на JavaScript.

// Теперь наследование очень простое и напоминает другие языки объектно-ориентированного программирования:

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   hello() {
//     return "Hello, I am " + this.name + ".";
//   }
// }

// class Developer extends Person {
//   hello() {
//     return super.hello() + " I am a Frontend Developer.";
//   }
// }

// const me = new Developer("Alex");
// console.log(me.hello()); // Hello, I am Alex. I am a Frontend Developer.
// Классы не имеют явных объявлений переменных класса, но ты должен инициализировать любую переменную в конструкторе.

// Конструктор
// Классы имеют специальный метод с именем constructor, который вызывается, когда класс инициализируются с помощью new. Родительский constructor наследуется автоматически, если у потомка нет своего метода constructor. Если же потомок имеет свой constructor, то, чтобы унаследовать конструктор родителя нужно использовать super() с аргументами для родителя.

// super
// Слово super используется для вызова функций, принадлежащих родителю объекта.

// Getters and setters
// Геттеры могут быть объявлены как:

// class Person {
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// get связывает свойство объекта с функцией, которая вызывается при обращении к этому свойству.

// Сеттеры пишутся так же:

// class Person {
//   set age(years) {
//     this.theAge = years;
//   }
// }
// set связывает свойство объекта с функцией, он будет вызываться при попытке установить это свойство.

// Модули
// До ES2015 существовало не менее 3-х основных модулей, конкурирующих со стандартами, которые разделили сообщество:

// AMD
// RequireJS
// CommonJS
// ES2015 стандартизировал их в общий формат.

// Импорт модулей
// import используется для импорта ссылок на значения, экспортированные из внешнего модуля, и осуществляется через конструкцию import ... from ...:

// import defaultExport from "module-name";
// import * as name from "module-name";
// import * from 'module-name'
// import { namedExport } from 'module-name'
// import "module-name";
// Экспорт модулей
// Экспорт используется для экспорта функций, объектов. Ты можешь писать модули и экспортировать что угодно в другие модули, используя ключевое слово export:

// export { name1, name2, …, nameN };
// export default выражение;
// export * from …;
// export default function (…) { … };
// Шаблонные литералы (Template Literals)
// Шаблонные литералы - это новый синтаксис для создания строк:

// const aString = `A string`;
// Они обеспечивают способ встраивания выражений в строки, эффективно интерполируя значения, используя синтаксис ${имя_переменной}:

// const name = "Alex";
// const string = `Hey ${name}`; // Hey Alex
// Ты также можешь выполнять более сложные выражения:

// const string = `total count is: ${1 + 2 + 3}`;
// const string2 = `result is ${foo() ? "x" : "y"}`;
// также строки могут занимать несколько строк:

// const string3 = `Hey
// this

// string
// is awesome!`;
// Параметры по умолчанию
// Функции теперь поддерживают параметры по умолчанию:

// const sayMyName = function (name = "Alex") {
//   console.log(name);
// };
// sayMyName(); // Alex
// Если при вывозе функции name() мы не передали аргумент, то тогда она возьмет значение по умолчанию "Alex".

// Оператор распространения spread
// Ты можешь расширить или объединить массив, объект или строку, используя оператор распространения ...

// Начнем с массива.

// У нас есть один массив const a = [1, 2, 3] который мы хотим модифицировать, добавив несколько значений:

// const a = [1, 2, 3];
// const b = [...a, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]
// Теперь у нас новый массив b который содержит все значения a, плюс свои.

// Также можно создать копию массива:

// const c = [...a];
// spread также работает и для объектов. Клонировать объект можно так:

// const newObj = { ...oldObj };
// Используя строки, оператор распространения spread создает массив с каждым символом в строке:

// const hey = "hey";
// const arrayized = [...hey]; // ['h', 'e', 'y']
// У этого оператора есть несколько довольно полезных свойств. Наиболее важным из них является возможность очень просто использовать массив в качестве аргумента функции:

// const f = (one, two) => {
//   console.log(one, two); // 1, 2
// };
// const a = [1, 2];
// f(...a);
// Деструктуризация
// Деструктуризация - это выражение JavaScript, которое позволяет нам извлекать данные из массивов и объектов.

// Например, когда с данного объекта нам нужно извлечь только некоторые значения и поместить их в переменные, мы можем сделать это так:

// const person = {
//   firstName: "Alex",
//   dev: true,
//   age: 28,
// };

// const name = person.firstName;
// const age = person.age;

// console.log(name, age); // Alex, 28
// Но тогда у нас выходит код повторяющийся снова и снова, и нам нужно будет создать переменную для каждого значения, которое находится внутри объекта или массива. Вместо этого мы можем создать несколько переменных, и структурировать их в одну строку следующим образом:

// const { firstName, age } = person;
// Здесь мы создаем переменные с именами firstName, age и берем их значения из объекта person. Иными словами мы берем свойства firstName, age и помещаем их в две новые переменные, которые будут видны родительскому блоку (или window).

// Также, есть возможность переименовать переменную, если она вам не нравится или имеет непонятное имя, важно что бы имя было не занято в твоей области видимости. Например:

// const { firstName: name, age } = person;
// Таким образом, мы извлекли значение с firstName или person.firstName и дали ему новое имя name.

// Деструктуризация так же работает на массивах. Например, если тебе нужены только первый и второй элементы:

// const a = [1, 2, 3, 4, 5];
// const [first, second] = a;

// console.log(first, second); // 1, 2
// Еще один вариант как выбрать нужные элементы из массива:

// const [first, second, , , fifth] = a;

// console.log(first, second, fifth); // 1, 2, 5
// Этот синтаксис создает 3 новые переменные, получая элементы с индексами 0, 1, 4 из массива a:

// Расширенные литералов объекта
// Более простой синтаксис
// Стал более простым синтаксис для переменных, если они имеют одинаковые имена. Вместо этого:

// const name = "Alex";
// const x = {
//   name: name,
// };
// можно писать так:

// const name = "Alex";
// const x = {
//   name,
// };
// Прототип
// Прототип может быть указан таким образом:

// const person = { name: "Alex" };
// const developer = {
//   __proto__: person,
// };
// super()
// const person = { name: "Alex", say: () => "Hello " };
// const developer = {
//   __proto__: person,
//   say() {
//     return super.say() + this.name;
//   },
// };
// developer.say(); // Hello Alex
// Динамические свойства
// Имя свойства объекта может быть указано динамически.

// const x = {
//   ["a" + "_" + "b"]: "z",
// };
// x.a_b; // z
// Цикл for-of
// ES5 еще в 2009 году представил цикл forEach(). Единственное, что в этом цикле нет никакого способа сделать разрыв break, как в цикле for.

// ES2015 представил цикл for-of, который сочетает в себе краткость forEach с возможностью break разрыва:

// // перебирает значения массива и выводит в консоль
// for (const v of ["a", "b", "c"]) {
//   console.log(v);
// }

// // получает индекс и значение, используя `entries()`
// for (const [i, v] of ["a", "b", "c"].entries()) {
//   console.log(i, v);
//   if (i === 0) {
//     break;
//   }
// }
// entries() это метод который возвращает iterator позволяя пройтись по всем его ключам/значениям. В нашем случает мы используем деструктуризацию массива где i - это индекс элемента в массиве, а v - это его значение.

// Map и Set
// Map и Set (и их соответствующие сборщики мусора WeakMap и WeakSet) являются официальными реализациями двух очень популярных структур данных. Map содержит пары ключ-значение и сохраняет порядок вставки. Любое значение может быть использовано в качестве ключа. Set позволяет сохранять уникальные значения любого типа.

// Новые строковые методы
// Любое строковое значение получило несколько новых методов экземпляра:

// repeat() повторяет строки указанное количество раз: 'Ho'.repeat(3) // HoHoHo;
// codePointAt() возвращает не отрицательное целое число, которое является закодированным в UTF-16 значением кодовой точки.
// Новые методы объекта
// ES6 представил несколько статических методов в пространстве имен объекта:

// Object.is() метод определяет, являются ли два значения одинаковыми var isSame = Object.is(value1, value2);
// Object.assign() используется для поверхностного копирования всех свойств объекта в целевой объект Object.assign(target, ...sources);
// Object.setPrototypeOf устанавливает прототип объекта Object.setPrototypeOf(obj, prototype).

// ES6
//
// class Person {
//   constructor(options) {
//     this.firstName = options.firstName
//     this.lastName = options.lastName
//     this.birthYear = options.birthYear
//     this.job = options.job
//     this.gender = options.gender
//   }
//   setHoobies(value) {
//     console.log(`My hoobies ${value}`)
//   }
//   getAge() {
//     return new Date().getFullYear() - this.birthYear
//   }
//   myGirl(name) {
//     console.log(`My love ${name}`)
//   }
// }

// const vladWide = new Person({
//   firstName: 'Vladislav',
//   lastName: 'Shyrokiy',
//   birthYear: 1996,
//   job: 'Front-End',
//   gender: 'male',
// })