// Chaining
// Point-free стиль
// Partial application
// Reduce
// Заключение
// Чистые функции легче читать и понимать. Все зависимости функции находятся в ее определении, и поэтому их легче увидеть. Также, они меньше и делать одну вещь. Они не используют this, который является постоянным источником путаницы.

// Chaining
// Chaining - это техника, используемая для упрощения кода, когда несколько методов применяются к объекту один за другим.

// Давай посмотрим и сравним два стиля: императивный и функциональный. В функциональном стиле для операций со списками я использую: filter() и map(). Затем я соединяю их вместе.

// Как пример я взял список задач. Задача имеет id, описание (desc) логическое значение completed и type.

// // Императивный стиль
// let filteredTasks = [];

// for (let i = 0; i < tasks.length; i++) {
//   let task = tasks[i];
//   if (task.type === "RE" && !task.completed) {
//     filteredTasks.push({ id: task.id, desc: task.desc });
//   }
// }

// // Функциональный стиль
// function isPriorityTask(task) {
//   return task.type === "RE" && !task.completed;
// }

// function toTaskView(task) {
//   return { id: task.id, desc: task.desc };
// }

// let filteredTasks = tasks.filter(isPriorityTask).map(toTaskView);

// Обрати внимание на обратные вызовы для filter() и map() как на чистые функции с понятными именами.

// map() преобразует список значений в другой новый список значений.

// Point-free стиль
// В предыдущем примере я использовал point-free стиль при составлении функций. Point-free - это метод, который улучшает читабельность, устраняя ненужные аргументы. Рассмотрим следующий код:

// tasks.filter((task) => isPriorityTask(task)).map((task) => toTaskView(task));
// В point-free стиле написано без аргументов:

// tasks.filter(isPriorityTask).map(toTaskView);
// Более подробно о том, как point-free стиль сделает вас лучшим функциональным программистом.

// Partial application
// Далее рассмотрим, как мы можем улучшить читабельность, а также повторно использовать существующую функцию. Прежде чем сделать это, нам нужна новая функция.

// Partial application относится к процессу фиксации ряда аргументов функции. Это путь от обобщения к специализации.

// Для partial application мы можем использовать функцию partial() из популярной библиотеки, такой как underscore.js или lodash.js. Метод bind() также может выполнять partial application.

// Допустим, мы хотим преобразовать следующий императивный код в функциональный, более удобный для чтения стиль:

// let filteredTasks = [];

// for (let i = 0; i < tasks.length; i++) {
//   let task = tasks[i];
//   if (task.type === "NC") {
//     filteredTasks.push(task);
//   }
// }
// Как я уже сказал, на этот раз мы хотим создать универсальную функцию, которую можно использовать для фильтрации по любому типу задачи. isTaskOfType() является универсальной функцией. Функция partial() используется для создания новой функции предиката isCreateNewContent(), которая фильтрует по определенному типу.

// Функция предиката - это функция, которая принимает одно значение в качестве входных данных и возвращает true / false в зависимости от того, удовлетворяет ли значение условию.

// function isTaskOfType(type, task) {
//   return task.type === type;
// }

// let isCreateNewContent = partial(isTaskOfType, "NC");
// let filteredTasks = tasks.filter(isCreateNewContent);

// Обратите внимание на функцию предиката. У него есть имя, выражающее его намерение. Когда я читаю tasks.filter(isCreateNewContent), я четко понимаю, какие tasks я выбираю.

// filter() выбирает значения из списка на основе функции предиката, которая решает, какие значения следует сохранить.

// Reduce
// Я начну новый пример, используя список покупок. Вот как может выглядеть список:

// let shoppingList = [
//   { name: "orange", units: 2, price: 10, type: "FRT" },
//   { name: "lemon", units: 1, price: 15, type: "FRT" },
//   { name: "fish", units: 0.5, price: 30, type: "MET" },
// ];
// Я вычислю общую стоимость и цену только на фрукты. Ниже приведен императивный стиль:

// let totalPrice = 0,
//   fruitsPrice = 0;

// for (let i = 0; i < shoppingList.length; i++) {
//   let line = shoppingList[i];
//   totalPrice += line.units * line.price;
//   if (line.type === "FRT") {
//     fruitsPrice += line.units * line.price;
//   }
// }
// В этом случае использование функционального подхода потребует использования метода reduce() для вычисления общей цены.

// reduce() уменьшает список значений до одного значения.

// Как и раньше, мы создаем новые функции для необходимых обратных вызовов и даем им понятные имена: addPrice() и areFruits().

// function addPrice(totalPrice, line) {
//   return totalPrice + line.units * line.price;
// }

// function areFruits(line) {
//   return line.type === "FRT";
// }

// let totalPrice = shoppingList.reduce(addPrice, 0);
// let fruitsPrice = shoppingList.filter(areFruits).reduce(addPrice, 0);

// Заключение
// Чистые функции легче читать и они более понятные.

// Функциональное программирование разбивает список операций на таких шаги, как: filter, map, reduce, sort. В то же время, для поддержки этих операций потребуется определить новые маленькие и чистые функции.

// Сочетание функционального программирования с практикой использования понятный и читаемых имен, значительно улучшает читабельность кода.

// Адаптивный перевод статьи Make your code easier to read with Functional Programming;