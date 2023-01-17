// Функция bind создаёт функцию, которая вызывает fn с заданным контекстом, опционально добавляя любые дополнительные предоставленные параметры в начало аргументов.

// Она возвращает функцию, которая использует Function.prototype.apply(), чтобы применить данный ей context к fn, затем с помощью оператора распространения spred добавляет любые дополнительные предоставленные параметры к аргументам.

// const bind = (fn, context, ...boundArgs) => (...args) =>
//   fn.apply(context, [...boundArgs, ...args]);

// // Пример:

// function greeting(greeting, punctuation) {
//   return `${greeting} ${this.userName}${punctuation}`;
// }

// const alex = { userName: "Alex" };
// const alexBound = bind(greeting, alex);

// console.log(alexBound("Hello", "!")); // 'Hello Alex!'