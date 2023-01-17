// Функция composeAsyncFunctions выполняет композицию для асинхронных функций слева направо.

// Мы используем Array.prototype.reduce() с оператором распространения ..., чтобы выполнить композицию функций слева направо с помощью Promise.then(). Функции могут возвращать комбинацию из: простых значений, значений Promise или их можно определить как асинхронные async, возвращаемые через await. Все функции должны быть одинарными (унарными).

// const composeAsyncFunctions = (...fns) => arg =>
//   fns.reduce((p, fn) => p.then(fn), Promise.resolve(arg));

// // Пример:

// const sum = composeAsyncFunctions(
//   x => x + 1,
//   x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
//   x => x + 3,
//   async x => (await x) + 4
// );

// (async () => {
//   console.log(await sum(2)); // 12 (Через одну секунду)
// })();