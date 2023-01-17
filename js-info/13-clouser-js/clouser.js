// Частичное применение c замыканием (closure)
// Частичное применение c карринга
// Частичное применение с bind
// Частичное применение c замыканием (closure)
// Частичное применение - это применение к функции некоторых аргументов и возврат новой функции, в ожидании остальных аргументов. Примененные аргументы хранятся в замыкании (closure) и остаются доступными для любых из возвращенных функций в будущем которые частично примененны. Если ты не знаком с замыканиями, позволь рассказать тебе о них.

// В JavaScript мы можем использовать области видимости способом, который позволит нам предоставить состояние функции или объекту, не подвергая это состояние непосредственно внешнему миру. Вот этот процесс и называется замыканием. Например:

// function сallCount(fn) {
//   let count = 0

//   return (...args) => {
//     console.log(`This function has been called ${count++} times`)
//     fn(...args)
//   }
// }

// const add = (x, y) => x + y
// const addCount = сallCount(add)

// addCount(2, 4) // This function has been called 1 times
// addCount(7, 5) // This function has been called 2 times
// addCount(2, 4) // This function has been called 3 times
// Функция сallCount создает переменную count, которая ограничена областью действия тела функции. Мы не можем получить к ней доступ извне этой функции. Однако, анонимная функция, которую мы возвращаем, использует count; так что значение останется доступным для возвращенной функции, пока она существует. Таким образом, новая функция addCount способна выводить состояние count при каждом вызове.

// Частичное применение c карринга
// Для лучшего понимания частичного применения, советую ознакомится с карри-функциями.

// Аргументы, передаваемые функции карри, позволяют нам хранить данные в закрытом виде (closure) для их повторного использования в наших приложениях. Поскольку каждый аргумент, кроме последнего, возвращает новую функцию, мы можем легко создавать повторно-используемые функции, предварительно предоставив некоторые аргументы.

// Создаём карри-функцию для извлечения запросов из API, которая использует частичное применение (partial application) для создания функциональности многократного использования. Функция getFromAPI получит baseURL, endpoint и функцию обратного вызова cb, которая выполнится как только мы получим наши данные из запроса.

// Используем fetch для получения данных. Наш URL будет комбинацией baseURL и endpoint. Далее превратим наш ответ в JSON. После этого вызываем обратный вызов cb, передав наши данные data, и “ловим” через catch любые ошибки, если такие возникнут.

// const getFromAPI = baseURL => endpoint => cb;
// fetch(`${baseURL}${endpoint}`)
//   .then(res => res.json())
//   .then(data => cb(data))
//   .catch(err => console.error(err.message));
// А сейчас давай частично применим baseURL. Одним из общедоступных API, который мы можем использовать, является GitHub API. У нас есть частично-применённая функция getGitHub, в которую мы можем передавать разные endpoint. Создаем функции для запроса пользователей и репозиторий.

// const getFromAPI = baseURL => endpoint => cb;
// fetch(`${baseURL}${endpoint}`)
//   .then(res => res.json())
//   .then(data => cb(data))
//   .catch(err => {
//     console.error(err.message);
//   });

// const getGithub = getFromAPI("https://api.github.com");

// const getGithubUsers = getGithub("/users"); // https://api.github.com/users
// const getGithubRepos = getGithub("/repositories"); // https://api.github.com/repositories
// Теперь у нас есть две новые функции, каждая из которых частично применила один и тот же baseURL, но, так же частично применила и разные endpoint. Последнее, что мы можем передать - это обратный вызов cb, который вызовет fetch. Давай используем функцию getGithubUsers и передадим различные обратные вызовы для каждого из них.

// В первом вызове выведем в консоль user.login имена. Основным преимуществом частичного применения является наша способность откладывать оценку функции, в то же время предоставляя некоторые аргументы для хранения и повторного использования этой функции в нашем приложении. Во втором вызове выведем в консоль user.avatar_url.

// const getFromAPI = baseURL => endpoint => cb =>
//   fetch(`${baseURL}${endpoint}`)
//     .then(res => res.json())
//     .then(data => cb(data))
//     .catch(err => {
//       console.error(err.message);
//     });

// const getGithub = getFromAPI("https://api.github.com");

// const getGithubUsers = getGithub("/users"); // https://api.github.com/users
// const getGithubRepos = getGithub("/repositories"); // https://api.github.com/repositories

// getGithubUsers(data => {
//   console.log('login', data.map(user => user.login));
// });

// getGithubUsers(data => {
//   console.log('avatar_url', data.map(user => user.avatar_url));
// });
// В качестве результата мы получили 2 массива login и avatar_url, которые содержат запрашиваемые нами данные.

// Частичное применение с bind
// Частичное применение можно осуществить и без карри.

// Метод bind функции позволяет нам предоставлять аргументы функции, которые применяются к новой возвращаемой функции, документация здесь.

// Первый аргумент bind - это thisArg. Этот аргумент будет связан с this для новой функции. Мы передадим null, потому как не хотим, чтобы что-либо связывалось с this.

// Любой аргумент, передаваемый в bind после thisArg, частично применяется как аргумент к функции. Мы можем передать любое количество аргументов, и если передадим меньше, чем ожидает функция, получим частично-применённую функцию.

// const multiply = (x, y) => x * y

// const multiply2 = multiply.bind(null, 2)

// console.log(multiply2(3)) // 6
// console.log(multiply2(4)) // 8
// console.log(multiply2(5)) // 10
// Заключение
// Частичное применение - это просто естественная комбинация каррированных функций и замыканий. Ранее примененные аргументы сохраняются и доступны для возвращаемых новых функций. Этот процесс может существенно облегчить написание и понимание кода.