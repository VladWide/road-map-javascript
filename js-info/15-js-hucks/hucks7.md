// Как получить уникальные значения массива
// Массив и Boolean
// Как создать пустой объект
// Объединение объектов
// Параметры функций
// Деструктуризация псевдонимов
// Получение параметров строк запроса
// Как получить уникальные значения массива
// Получить массив уникальных значений, вероятно, проще, чем ты можешь подумать. Ты можешь использовать новый оператор распространения spread с Set, чтобы получить массив уникальных значений:

// const unique = [...new Set([1, 2, 3, 3])];
// console.log(unique); //  [1, 2, 3]
// Массив и Boolean
// Иногда нам нужно отфильтровать массив не по его первоначальному значению, а по новому значению, поэтому мы используем map:

// myArray.map(item => {
//   // Делаем обработку ...

//   // Если нам всё равно на item, мы возвращаем false или null, или undefined
//   return false;
// });
// Несмотря на то, что мы получаем новые значения, иногда, итерация возвращает результат, который нам не нужен, и мы возвращаем null или false. Это здорово, но, затем в нашем массиве остается куча бесполезных элементов.

// Следующим шагом является использование фильтра. В этом случае мы могли бы сделать так:

// myArray
//   .map(item => {
//     // ...
//   })
//   // Избавиться от бесполезных элементов
//   .filter(item => item);
// Поскольку значения, которые нам не нужны, не соответствуют действительности, фильтр выше удаляет эти элементы. Но мы можем это сделать более понятным способом. Например:

// myArray
//   .map(item => {
//     // ...
//   })
//   // Избавиться от бесполезных элементов
//   .filter(Boolean);
// Если значение не соответствует действительности (isn’t truthy), элемент отфильтровывается, и у нас остаются только те элементы, которые нам нужны.

// [1, undefined, null, true, 0, 5, "string", false].filter(Boolean); // [1, true, 5, "string"]
// Как создать пустой объект
// Одно из самых забавных вещей JavaScript и любого другого языка программирования: - это то, что есть множество мелких хитростей, которые делают язык более интересным. Например: если в Object.create использовать null в качестве единственного аргумента, то создастся совершенно чистый объект.

// Object.create является отличной утилитой для создания прототипов. Объекты, созданные с помощью Object.create, имеют __proto__ и наследуют свойства объекта, которыми можно манипулировать. Что если мы хотим создать объект который не был подвержен манипуляциям извне? Мы можем сделать это с Object.create(null):

// Можно создать объект, который кажется пустым с помощью {}, но этот объект всё ещё имеет __proto__, hasOwnProperty и другие методы объекта. Однако, есть способ создать чистый объект:

// const dict = Object.create(null);

// console.log(dict.__proto__ === undefined); // true
// console.log(dict); // {} No properties

// // Свойства объекта не существуют, пока мы не добавим их
// На этом объекте нет абсолютно никаких ключей или методов, которые мы туда не поместим. Поскольку прототипа не существует, объектом нельзя манипулировать извне. Сравни это с Object.create({}):

// const obj = Object.create({});

// // obj.__proto__ === {}
// // obj.hasOwnProperty === function

// Object.prototype.someFunction = () => {};

// // obj.someFunction === () => {};
// // dict.someFunction === undefined
// Передача Object.create пустого объекта позволяет добавлять свойства через Object.prototype.customPropName. А подобное нам не всегда подходит.

// Объединение объектов
// Необходимость объединения нескольких объектов в JavaScript существовала всегда, особенно когда мы начали создавать классы и виджеты с параметрами:

// const person = { name: "Alex", gender: "Male" };
// const tools = { computer: "Mac", editor: "VSCode" };
// const attributes = { handsomeness: "Extreme", hair: "Brown", eyes: "Green" };

// const summary = { ...person, ...tools, ...attributes };

// console.log(summary);
// // { computer: "Mac", editor: "VSCode", eyes: "Green", gender: "Male", hair: "Brown", handsomeness: "Extreme", name: "Alex" }
// Таким образом создается новый объект, содержащий все свойства и значения объектов, предоставленных оператором spread. Мы можем предоставить любое количество объектов для слияния.

// Также мы можем использовать Object.assign для выполнения того же, но оператор распространения spread делает это немного короче.

// Параметры функций
// Возможность устанавливать значения по умолчанию для аргументов функции была отличным дополнением к JavaScript; но мы также можем “кидать” ошибки, когда данный параметр не передан функции:

// const isRequired = () => {
//   throw new Error("param is required");
// };

// const hello = (name = isRequired()) => {
//   console.log(`hello ${name}`);
// };

// // этот вызов выдаст ошибку, потому что имя не указано
// hello();

// // этот вызов также выдаст ошибку
// hello(undefined);

// // эти вызовы сработают
// hello(null); // hello null
// hello("Alexey"); // hello Alexey
// Деструктуризация псевдонимов
// Деструктуризация - это очень приятное дополнение к JavaScript, потому что иногда мы предпочитаем ссылаться на свойства под другим именем, поэтому мы можем использовать псевдонимы:

// const person = { fullName: "Alexey" };

// // Берём person.fullName как { fullName }
// const { fullName } = person;
// console.log(fullName); // Alexey

// // Берём person.fullName как { name }
// const { fullName: name } = person;
// console.log(name); // Alexey
// Получение параметров строк запроса
// Мы всегда можем получить полную строку запроса через свойство window.location.search:

// console.log(window.location.search);
// // "?post=1234&action=edit"
// но в мире сеттеров, геттеров и JSON должен быть лучший способ получения значений, чем парсить строки, верно? После многих лет уродливого анализа строк, есть лучший способ: URLSearchParams. Давай посмотрим, как мы можем использовать этот новый API для получения значений из location.

// // Например: "?post=1234&action=edit"
// const paramsString = '?post=1234&action=edit';
// const urlParams = new URLSearchParams(paramsString);

// console.log(urlParams.has('post')); // true
// console.log(urlParams.get('action')); // "edit"
// console.log(urlParams.getAll('action')); // ["edit"]
// console.log(urlParams.toString()); // "?post=1234&action=edit"
// console.log(urlParams.append('active', '1'));

// // После вызова append к запросу добавилось active=1
// console.log(urlParams.toString()); // "post=1234&action=edit&active=1"
// URLSearchParams также предоставляет знакомые методы объекта, такие как: keys(), values() и records():

// const paramsString = '?post=1234&action=edit';
// const urlParams = new URLSearchParams(paramsString);

// const keys = urlParams.keys();
// for(key of keys) {
//   console.log(key);
// }
// // post
// // action

// const entries = urlParams.entries();
// for(pair of entries) {
//   console.log(pair[0], pair[1]);
// }
// // post 1234
// // action edit
// С годами JavaScript сильно изменился, но моя любимая часть этих изменений - скорость улучшения языка, которую мы наблюдаем. Несмотря на изменяющуюся динамику JavaScript, нам всё ещё нужно использовать некоторые трюки.