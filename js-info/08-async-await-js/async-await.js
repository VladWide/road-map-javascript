// Вступление
// Почему был введен async/await
// Как он устроен
// Быстрый пример
// Асинхронные функции возвращают промис
// Более читабельный код
// Несколько асинхронных функций в серии
// Более простая отладка
// Используй try catch внутри функции
// Использовать catch для каждого await
// Использовать catch для всей асинхронной функции
// Вступление
// JavaScript за очень короткое время превратился из обратных вызовов в promises (ES2015), а после выхода ES2017 асинхронный JavaScript стал еще проще с синтаксисом async/await.

// Асинхронные функции представляют собой комбинацию промисов и генераторов, и в основном являются абстракцией более высокого уровня (по сравнению с промисами). Позволь напомнить что: async/await построен на промисах.

// Почему был введен async/await
// async/await сокращают шаблон промисов.

// Когда Promises были введены в ES2015, они предназначались для решения проблемы с асинхронным кодом, и им это удалось, но за 2 года, в течение которых ES2015 и ES2017 были разделены, стало ясно, что промисы не могут быть окончательным решением.

// Промисы были введены для решения известной проблемы “ад обратных вызовов”, но в то же время они же ввели сложность сами по себе и сложность синтаксиса.

// Это были хорошие примитивы, вокруг которых разработчикам был представлен лучший синтаксис, поэтому, когда настало время, мы получили асинхронные функции.

// async/await делают код похожим на синхронный, но он асинхронный и не блокирующий.

// Как он устроен
// Любая функция, которая возвращает промис, имеет API, основанный на промисах, и может использоваться взаимозаменяемо либо с then, then, catch, либо с async/await.

// В JavaScript мы часто слышим асинхронный и синхронный, так давай кратко рассмотрим, что они на самом деле означают. Когда мы выполняешь что-то синхронно, мы ждем, пока задача будет выполнена, прежде чем перейти к другой и продолжить работу с остальной частью кода. Когда мы делаем что-то асинхронно, мы запускаем задачу, но затем сразу переходим к следующему фактическому значению. Вот почему мы не можем сделать что-то подобное:

// const res = fetch("https://api.github.com/users/oleksiimyzgin");
// console.log(res); // Promise {<pending>}
// Причина, по которой ответ будет равен промису, а не фактическому значению, заключается в том, что большинство вещей в JavaScript ничего не ждут. Это означает что он выполнит fetch(), однако не будет приостанавливать весь JavaScript и ждать пока промис вернется. Это то, что называется блокировкой в ​​JavaScript: когда мы блокируем выполнение остальной части JavaScript, пока ждем выполнения начавшейся задачи. Почти всё в JavaScript является асинхронным. Это здорово, но это становится проблемой, когда нужно контролировать поток. Например когда мы хотим, чтобы сначала что-то произошло, затем разобраться с первым ответом, а затем со вторым ответом. Точно так же, как мы сделали с промисами, где нам нужно было ждать. В итоге мы получили цепочку с then(), then(), then(), then(), один за другим.

// Вот тут и появляется async/await, и поэтому он называется async/await, потому что нам нужно сначала создать асинхронную async функцию, а затем внутри этой функции мы ожидаем await значения. async/await просто построен на основе промисов. Это не альтернатива промисам и это не совсем другой способ. Чтобы использовать async/await у нас должна быть функция, основанная на промисах. Важно знать, что await доступен только в асинхронной функции - await нельзя выполнить в открытом виде (вне асинхронной функции). Это нужно сделать в функции, помеченной как асинхронная async. Что бы сделать функцию асинхронной, нужно просто добавить слово async перед словом function.

// Асинхронная функция возвращает промис, как в этом примере:

// const doSomethingAsync = () => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("I did something"), 3000);
//   });
// };
// Перед тем как вызвать функцию doSomethingAsync, тебе нужно добавить await перед ее вызовом: таким образом вызывающий код останавливается, пока промис не будет resolved или rejected. Важно: клиентская функция должна быть определена как асинхронная async. Например:

// const doSomething = async () => {
//   console.log(await doSomethingAsync());
// };
// Быстрый пример
// Это простой пример использования async/await для асинхронного запуска функции:

// const doSomethingAsync = () => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("I did something"), 3000);
//   });
// };

// const doSomething = async () => {
//   console.log(await doSomethingAsync());
// };

// console.log("Before");
// doSomething();
// console.log("After");
// Приведенный выше код выведет на консоль браузера следующее:

// Before
// After
// I did something // через 3s
// Так происходит потому, что мы делаем resolve и выводим его значение 'I did something' в консоль только через 3 секунды.

// Асинхронные функции возвращают промис
// Добавление ключевого слова async к любой функции означает, что функция вернет промис, даже если она не делает этого явно.

// Вот почему этот код действителен:

// const aFunction = async () => {
//   return "test";
// };

// aFunction().then(alert); // выведет alert 'test'
// И этот так же:

// const aFunction = async () => {
//   return Promise.resolve("test");
// };

// aFunction().then(alert); // выведет alert 'test'
// Более читабельный код
// Как мы можем видеть в приведенном выше примере, наш код выглядит очень просто. Так как это очень простой пример, то основные преимущества станут видимы, когда код будет намного сложнее.

// Например, вот как мы можем получить JSON и разпарсить его, используя промис:

// const getFirstUserData = () => {
//   return fetch("/users.json") // get users list
//     .then(response => response.json()) // parse JSON
//     .then(users => users[0]) // pick first user
//     .then(user => fetch(`/users/${user.name}`)) // get user data
//     .then(userResponse => userResponse.json()); // parse JSON
// };

// getFirstUserData();
// И вот та же функциональность, предоставляемая с помощью async/await:

// const getFirstUserData = async () => {
//   const response = await fetch("/users.json"); // get users list
//   const users = await response.json(); // parse JSON
//   const user = users[0]; // pick first user
//   const userResponse = await fetch(`/users/${user.name}`); // get user data
//   const userData = await userResponse.json(); // parse JSON
//   return userData;
// };

// getFirstUserData();
// Как мы можем увидеть код с async/await выглядит намного читабельнее.

// Несколько асинхронных функций в серии
// Асинхронные функции могут быть легко соединены в цепочку, а синтаксис гораздо более читабелен, чем у промисов:

// async function go() {
//   const p1 = await fetch("https://api.github.com/users/oleksiimyzgin");
//   const p2 = await fetch("https://api.github.com/users/leoyats");
// }

// go();
// В приведенном выше примере, мы сначала ждем пока выполнится p1, а потом уже p2. Что бы не терять время мы можем запустить их одновременно и подождать пока они все вернутся. Например:

// async function go() {
//   const p1 = fetch("https://api.github.com/users/oleksiimyzgin");
//   const p2 = fetch("https://api.github.com/users/leoyats");
//   // Ждем пока они оба вернуться
//   const res = await Promise.all([p1, p2]);
//   console.log("res", res); // res (2) [Response, Response]
// }

// go();
// Более простая отладка
// Отладка промисов сложна, так как отладчик не перешагнет асинхронный код.

// В async/await сделать это легко, потому что для компилятора он похож на синхронный код.

// Используй try catch внутри функции
// Обработка ошибок в async/await на самом деле проста, хотя в коде она выглядит не так красиво. Первый способ заключается в том, что бы обвернуть все или одну из await функций, которые нужно подождать, в блок try-catch. Например:

// const getFirstUserData = async () => {
//   try {
//     const response = await fetch("/users.json"); // get users list
//     const users = await response.json(); // parse JSON
//     const user = users[0]; // pick first user
//     const userResponse = await fetch(`/users/${user.name}`); // get user data
//     const userData = await userResponse.json(); // parse JSON
//     return userData;
//   } catch (err) {
//     console.error("Something went wrong");
//     console.error(err);
//   }
// };

// getFirstUserData();
// Итак, по сути, мы говорим: попробуй, сделай весь этот код внутри фигурных скобок, и если что-то случится не так, то мы поймаем ошибку в catch(err) и выведем ее в консоль через console.error.

// Использовать catch для каждого await
// Поскольку каждое выражение await возвращает promise, мы можем добавить к каждой строке catch, как показано ниже.

// const getFirstUserData = async () => {
//   const response = await fetch("/users.json").catch(err =>
//     console.error("Something went wrong when fetching data")
//   );
//   const users = await response
//     .json()
//     .catch(err => console.error("Something went wrong when parsing data"));
//   //...
// };

// getFirstUserData();
// Использовать catch для всей асинхронной функции
// Еще один вариант - использовать catch(err) для всей асинхронной функции. Например:

// const getFirstUserData = async () => {
//   const response = await fetch('/users.json'); // get users list
//   const users = await response.json(); // parse JSON
//   const user = users[0] // pick first user
//   const userResponse = await fetch(`/users/${user.name}`); // get user data
//   const userData = await userResponse.json(); // parse JSON
//   return userData;
// }

// getFirstUserData()
//   .catch(err) {
//     console.error('Something went wrong');
//     console.error(err);
//   };
// Этот вариант отлично подходит для случаев, когда нужно обработать все ошибки одинаково - не нужно писать catch для каждой await функции.

// const newData = function (ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log(`Work`))
//     }, ms)
//   })
// }

// const dataCenter = async () => {
//   const data = await newData(3000)
//   return data
// }
// dataCenter()
//   .catch((e) => console.error(e))
//   .finally(() => console.log(`Finally`))
