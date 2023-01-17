// Функции высшего порядка (higher order functions) в JavaScript - необходимый строительный блок функционального программирования на любом языке.

// Функция более высокого порядка выполняет по крайней мере одну (чаще обе) из следующих вещей:

// принимает функцию в качестве аргумента;
// возвращает новую функцию.
// Чтобы продемонстрировать это, мы создадим функцию более высокого порядка, withCount(), которая модифицирует любую переданную ей функцию, и выводит в консоль информацию о том, сколько раз она была вызвана, а также аргументы args с которыми она была вызвана.

// const withCount = fn => {
//   let count = 0;

//   return (...args) => {
//     console.log("calling with", args);
//     console.log(`Call count: ${++count}`);
//     const result = fn(...args);
//     console.log("called with", args, ", returned", result);
//     return result;
//   };
// };
// withCount принимает любую переданную ей функцию fn в качестве аргумента. Она будет, выводить в консоль информацию о том, сколько раз мы вызывали нашу новую переданную ей функцию, а также аргументы args. Для этого мы создаем переменную count с изначальным значением 0. Далее мы возвращаем новую функцию, которая использует оператор rest для сбора, переданных ей аргументов. Внутри тела нашей функции возврата, мы выводим в консоль значение count, перед этим увеличивая его. И возвращаем результат функции, которая была вызвана с оператор spread переданных ей аргументов.

// Теперь, когда у нас есть функция высшего порядка - withCount, давай создадим простую функцию add для использования и передадим эту функцию ей. Функция add получит x и y в качестве аргументов и вернет их суммирование. Теперь мы можем создать функцию countedAdd, используя нашу функцию withCount, передав ей add.

// const withCount = fn => {
//   let count = 0;

//   return (...args) => {
//     console.log("calling with", args);
//     console.log(`Call count: ${++count}`);
//     const result = fn(...args);
//     console.log("called with", args, ", returned", result);
//     return result;
//   };
// };

// const add = (x, y) => x + y;

// const countedAdd = withCount(add);
// Теперь давай выйдем в консоль нескольких вариантов использования countedAdd, с разными аргументами.

// const withCount = fn => {
//   let count = 0;

//   return (...args) => {
//     console.log("calling with", args);
//     console.log(`Call count: ${++count}`);
//     const result = fn(...args);
//     console.log("called with", args, ", returned", result);
//     return result;
//   };
// };
// const add = (x, y) => x + y;

// const countedAdd = withCount(add);

// console.log(countedAdd(1, 2));
// console.log(countedAdd(2, 2));
// console.log(countedAdd(3, 2));
// Если мы запустим это, то увидим в консоле количество вызовов для каждого из них, а также аргументы args с которыми они были вызваны и результат.

// calling with [1, 2]
// Call count: 1
// called with [1, 2] , returned 3
// 3

// calling with [2, 2]
// Call count: 2
// called with [2, 2] , returned 4
// 4

// calling with [3, 2]
// Call count: 3
// called with [3, 2] , returned 5
// 5

// замыкание //

// function createCalcFunction(n) {
//   return function () {
//     console.log(1000 * n)
//   }
// }
// const calc = createCalcFunction(42)

// calc()

// function createIncrementor(n) {
//   return function (num) {
//     return n + num
//   }
// }
// const addOne = createIncrementor(1)

// console.log(addOne(10))
// console.log(addOne(42))

// function urlGenerator(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`
//   }
// }
// const comUrl = urlGenerator('com')

// console.log(comUrl('google'))

// function bind(context, fn) {
//   return function (...args) {
//     fn.apply(context, args)
//   }
// }
// function logPerson() {
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }
// const person1 = { name: 'Vlad', age: 26, job: 'Front-End' }
// const person2 = { name: 'Elena', age: 33, job: 'SMM' }

// bind(person1, logPerson)()
// bind(person2, logPerson)()

// const withCount = (fn) => {
//   let count = 0
//   return (...args) => {
//     console.log(`calling with:`, args)
//     console.log(`Call count: ${++count}`)
//     const result = fn(...args)
//     console.log(`called with: ${args}, result: ${result}`)
//     return result
//   }
// }
// const add = (x, y) => x + y
// const countedAdd = withCount(add)

// console.log(countedAdd(1, 2))
// console.log(countedAdd(2, 2))
// console.log(countedAdd(3, 2))
