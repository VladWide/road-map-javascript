// Композиция в JavaScript
// Правильный порядок аргументов
// Отладка функциональных композиций
// Композиция в JavaScript
// Создание не простой функциональности, путем композиции простых функции в JavaScript.

// Композиция - создание сложной функциональности за счет объединения более простых функций. В некотором смысле, композиция - это вложение функций, каждая из которых передает свой результат в качестве входных данных для другой функции. Но вместо того, чтобы создавать неразборчивое количество вложений, мы создадим функцию более высокого порядка - compose(), которая принимает все функции, которые мы хотим объединить, и возвращает нам новую функцию для использования.

// Композиция - это сердце и душа функционального программирования. Например, у нас есть функция a, которая принимает x и возвращает х + 2. Также есть функция b, которая также принимает x и возвращает х * 3:

// const a = x => x + 2;
// const b = x => x * 3;
// Композиция - это акт объединения этих функций, в следствии которого выходные данные одной функции становятся входными данными следующей. Мы можем увидеть это, вложив их вместе. Начнем с нашей функции a, вложим в неё нашу функцию b и передадим ей значение (аргумент) 5. В консоле мы увидим 17, что имеет смысл, так как 5 * 3 = 15, а 15 - входное значение для функции a, 15 + 2 = 17.

// const a = x => x + 2;
// const b = x => x * 3;

// console.log(a(b(5))); // 17
// Однако, в наших приложениях, обычно нет функций с однобуквенными именами. Это означает, что их объединение для создания композиций может быть очень громоздким. Так что мы создадим несколько новых функций карри, которые сможем использовать для создания композиции. Давай начнем с функции upperCase. Она возьмет строку и вернет её в верхнем регистре. Далее мы сделаем функцию exclaim, которая возьмет строку и добавит восклицательный знак. И функцию repeat, которая возьмет строку и утроит её, добавив пробел между ними. Теперь мы можем создать композицию, похожую на ту, которую мы сделали с помощью a и b. Чтобы создать эту композицию, мы должны думать изнутри.

// const upperCase = str => str.toUpperCase();
// const exclaim = str => `${str}!`;
// const repeat = str => `${str} `.repeat(3);
// .repeat() - это новый строковый метод который был представлен в es6.

// Первое, что мы хотим сделать со строкой, это возвести в верхний регистр, поэтому мы напишем функцию upperCase и передадим ей строку: «I love coding». Следующее - поставить восклицательный знак и повторить фразу 3 раза.

// const upperCase = str => str.toUpperCase();
// const exclaim = str => `${str}!`;
// const repeat = str => `${str} `.repeat(3);

// console.log(
//   repeat(exclaim(upperCase("I love coding"))) // I LOVE CODING! I LOVE CODING! I LOVE CODING!
// );
// Так как этот вызов становится очень длинным и трудным для чтения, мы создадим функцию высшего порядка, которая будет принимать любое количество функций в качестве аргументов, и создать из них композицию. Например, мы создадим функцию compose, которая получит любое количество функций в качестве аргументов. Для этого мы будем использовать оператор rest.

// const compose = (...fns) => x =>
//   fns.reduceRight(())
// Функция compose возвращает функцию, которая ожидает своего начального значения - назовем её x. Отсюда у нас есть массив функций fns. Важно обратить внимание на порядок, в котором мы хотим их вызвать: он идет справа налево. Сначала мы вызываем upperCase, exclaim, а потом repeat. Чтобы сделать это, мы используем reduceRight метод.

// const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
// Первым аргументом функции reduceRight являются аккумулятор и текущий элемент. Элемент является нашей функцией. С каждой итерацией мы возвращаем результат вызова накопленного значения текущей функции. Второй аргумент для reduceRight - это наше начальное значение, которым является наш x. Теперь мы можем использовать эту функцию, чтобы легко создавать новые композиции.

// Давай создадим функцию withСompose, которая будет составлять наши функции upperCase, exclaim, и repeat. Порядок аргументов нашей функции compose идет справа налево или снизу вверх.

// const upperCase = str => str.toUpperCase();
// const exclaim = str => `${str}!`;
// const repeat = str => `${str} `.repeat(3);

// const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

// const withСompose = compose(
//   repeat,
//   exclaim,
//   upperCase
// );

// console.log(withСompose("I love coding")); // I LOVE CODING! I LOVE CODING! I LOVE CODING!
// В консоле мы увидим то же самое.

// В заключение стоит добавить, что в некоторых библиотеках, можно найти другой способ создания композиций - pipe.

// Функция pipe, которая аналогична compose, но порядок аргументов обратный. pipe также принимает любое количество функций и начальное значение, но на этот раз вызывает reduce. Таким образом, чтобы сделать функцию withСompose с pipe, мы просто меняем порядок аргументов.

// const upperCase = str => str.toUpperCase();
// const exclaim = str => `${str}!`;
// const repeat = str => `${str} `.repeat(3);

// const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

// const withСompose2 = pipe(
//   upperCase,
//   exclaim,
//   repeat
// );

// console.log(withСompose2("I love coding")); // I LOVE CODING! I LOVE CODING! I LOVE CODING!
// Хоть функция pipe и существует, всё же чаще используется функция compose, применяемая в функциональных языках, поскольку она следует математической модели композиции.

// Правильный порядок аргументов
// Упорядочивая аргументы функций особым образом, мы позволяем нашим функциям:

// извлечь выгоду из частичного применения;
// улучшить возможность повторного использования и использовать их в композиции.
// В частности, мы сосредоточимся на том, чтобы всегда предоставлять данные в качестве последнего аргумента нашим функциям, чтобы результат одной функции мог быть передан в качестве аргумента в другую функцию.

// Порядок аргументов в не карри-функциях является несколько тривиальным и предпочтительным. Например, если у нас есть функция map, которая получает array и callback (обратный вызов), то не имеет значения порядок аргументов, так как мы получаем все аргументы одновременно.

// const map = (cb, array) => array.map(cb);

// // или

// const map = (array, cb) => array.map(cb);
// Чтобы функция работала, нам нужна оба аргумента, и мы не можем создавать функции частичного применения. Однако, если это карри-функция, порядок аргументов имеет огромное значение.

// Давай создадим карри-функцию map, похожую на функцию map в Lodash. Сначала мы получим array, а затем callback и вернем array.map, передав ему callback. Хоть мы и можем передать функции withArr различные обратные вызовы, но мы заблокировали (ограничили) данные.

// const map = array => cb => array.map(cb);

// const arr = [1, 2, 3, 4, 5];
// const double = n => n * 2;

// const withArr = map(arr);

// console.log(withArr(double)); // [ 2, 4, 6, 8, 10 ]
// console.log(withArr(n => n * 3)); // [ 3, 6, 9, 12, 15 ]
// Это не дает нам никакой дополнительной пользы, кроме как вызова метода map непосредственно на массиве.

// Если мы изменим порядок аргументов, чтобы сначала получить обратный вызов, а затем массив, мы получим гораздо больше пользы от этой карри-функции.

// Мы можем создать функцию withDouble, которая использует функцию map и передает callback, ожидая любой массив чисел для удвоения.

// const map = cb => array => array.map(cb);

// const arr = [1, 2, 3, 4, 5];
// const double = n => n * 2;

// const withDouble = map(double);

// console.log(withDouble(arr)); // [2, 4, 6, 8, 10]
// console.log(withDouble([2, 4, 6, 8, 10])); // [4, 8, 12, 16, 20]
// Карри-функции помогают упорядочить аргументы от наиболее конкретного до наименее конкретного. Наименее конкретным аргументом в каждом случае всегда будут данные, которые могут быть логическим значением, числом, строкой, объектом, массивом и т.д.

// Например, у нас есть функция prop, которая будет использоваться для получения значения из объекта путем получения key, а затем obj и возврата значения, хранящегося в объекте по этому key. Мы можем создавать функции частичного применения, которые предназначены для извлечения значений из любого объекта.

// const prop = key => obj => obj[key];
// Мы создадим функцию getName с определенным аргументом name и список people - массив с объектами и свойствами name:

// const prop = key => obj => obj[key];

// const getName = prop("name");

// const people = [
//   { name: "Alex" },
//   { name: "Julia" },
//   { name: "Leo" },
//   { name: "Den" }
// ];
// Теперь мы можем использовать функцию getName, которая ожидает, что её данные будут последними, в сочетании с функцией map, которая ожидает в свою очередь, что её данные будут переданы последними.

// const map = cb => array => array.map(cb);

// const prop = key => obj => obj[key];

// const getName = prop("name");

// const people = [
//   { name: "Alex" },
//   { name: "Julia" },
//   { name: "Leo" },
//   { name: "Den" }
// ];

// console.log(map(getName)(people)); // ["Alex", "Julia", "Leo", "Den"]
// При вызове map(getName)(people): cb это наша функция getName, которая ожидает данные obj в качестве последнего аргумента, а array это массив people. Когда мы вызываем array.map(cb) - мы передаем по очереди каждый объект из people в нашу функцию getName в качестве последнего аргумента. Поэтому в консоле мы увидим ["Alex", "Julia", "Leo", "Den"]

// Отладка функциональных композиций
// Функциональные композиции преднамеренно непрозрачны, - без очевидного способа «визуализировать» данные при их преобразовании. Это замечательно тогда, когда наша функция работает, но сложно, когда наши композиции некорректны. Мы будем использовать функцию trace() для вывода наших значений по мере их преобразования. Это позволит нам продолжить использовать pointfree программирование, а также даст представление о наших композициях.

// Композиции чистых pointfree функций часто могут быть непрозрачными и трудными для отладки. Например: у нас есть функция slugify, которая возьмет строки из bookTitles и превратит их в URL-слагов (поставит между словами дефисы и приведет все в нижний регистр). Мы целенаправленно сделаем ошибку в коде. Давай выведем результат в консоль.

// const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
// const lowerCase = str => str.toLowerCase();
// const join = separator => xs => xs.join(separator);
// const map = fn => xs => xs.map(fn);
// const split = pattern => str => str.split(pattern);

// const bookTitles = [
//   "JavaScript The Good Parts",
//   "You Don’t Know JS",
//   "Eloquent JavaScript"
// ];

// const slugify = compose(
//   join("-"),
//   map(lowerCase),
//   map(split(" "))
// );

// const slugs = slugify(bookTitles);

// console.log(slugs);
// Получаем ошибку str.toLowerCase is not a function.

// Видим, что строка toLowerCase не является функцией, что, вероятно, означает, что когда мы запускаем toLowerCase, передаваемое ей значение не является строкой. Нам нужна функция, которая делает побочный эффект и выводит в консоль текущее значение.

// Мы можем сделать это, создав функцию trace. В качестве первого аргумента trace получает сообщение msg, а затем ему передается значение x. Мы используем оператор запятой для вывода в консоль нашего сообщения со значением и возврата значения обратно функции.

// const trace = msg => x => (console.log(msg, x), x);
// Теперь мы можем поместить trace до и после функций в нашей композиции, чтобы шаг за шагом видеть преобразование значения. Помните, что с композициями мы работаем или справа налево или снизу вверх.

// const trace = msg => x => (console.log(msg, x), x);

// const slugify = compose(
//   join("-"),
//   trace("after lowercase"),
//   map(lowerCase),
//   trace("after split"), // after split (3) [Array(4), Array(4), Array(2)]
//   map(split(" ")),
//   trace("before split") // before split (3) ["JavaScript The Good Parts", "You Don’t Know JS", "Eloquent JavaScript"]
// );

// const slugs = slugify(bookTitles);

// console.log(slugs);
// Мы все ещё получили нашу ошибку, но теперь мы можем увидеть немного больше информации о том, что произошло.

// До split у нас есть массив bookTitles, а после split у нас, фактически, есть двумерный массив. split разделил наши строки на пробелы и сделал их массивами. Наша map(lowerCase) не работает, потому что lowerCase ожидает строку, а получает массив.

// Что мы можем сделать, так это поменять местами имеющиеся у нас аргументы map(split(" ")) и map(lowerCase). Осталось только переименовать сообщение в trace и снова запустить функцию.

// const slugify = compose(
//   join("-"),
//   trace("after split"), // after split (3) [Array(4), Array(4), Array(2)]
//   map(split(" ")),
//   trace("after lowercase"), // after lowercase (3) ["javascript the good parts", "you don’t know js", "eloquent javascript"]
//   map(lowerCase),
//   trace("before lowercase") // before lowercase (3) ["JavaScript The Good Parts", "You Don’t Know JS", "Eloquent JavaScript"]
// );

// console.log(slugs); // javascript,the,good,parts-you,don’t,know,js-eloquent,javascript
// Теперь у нас нет ошибки, но также нет и URL-слагов.

// Давай посмотрим на наш trace ещё раз. before lowercase мы имеем массив заголовков. after lowercase у нас все ещё есть одномерный массив строчных букв. Похоже, что после split у нас снова двумерный массив, каждый из которых был разбит по их пространству, и теперь у нас есть каждая строка отдельно.

// Что произошло? Когда мы вызвали join для этого массива - мы фактически поставили дефис между последним и первым значениями каждого массива. Следующее что нам нужно сделать - вызвать map на join также.

// const slugify = compose(
//   map(join("-")),
//   trace("after split"),
//   map(split(" ")),
//   trace("after lowercase"),
//   map(lowerCase),
//   trace("before lowercase")
// );

// console.log(slugs); // ["javascript-the-good-parts", "you-don’t-know-js", "eloquent-javascript"]
// Как мы и ожидали, теперь в консоле у нас есть массив слагов [“javascript-the-good-parts”, “you-don’t-know-js”, “eloquent-javascript”].

// Теперь можно убрать функции trace, зная, что наша функция работает так, как нам нужно.

// const slugify = compose(
//   map(join("-")),
//   map(split(" ")),
//   map(lowerCase)
// );
// Так как мы вызываем map на всех функциях, то вместо этого можем обернуть один раз композицию в map.

// const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
// const lowerCase = str => str.toLowerCase();
// const join = separator => xs => xs.join(separator);
// const map = fn => xs => xs.map(fn);
// const split = pattern => str => str.split(pattern);

// const bookTitles = [
//   "JavaScript The Good Parts",
//   "You Don’t Know JS",
//   "Eloquent JavaScript"
// ];

// const slugify = map(
//   compose(
//     join("-"),
//     split(" "),
//     lowerCase
//   )
// );

// const slugs = slugify(bookTitles);

// console.log(slugs); // ["javascript-the-good-parts", "you-don’t-know-js", "eloquent-javascript"]
// Результат получился таким же, но композиция выглядит уже более лаконично и понятно.