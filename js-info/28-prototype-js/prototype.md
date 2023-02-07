// Prototype //

// const person = new Object({
//   name: 'Vladislav',
//   age: 26,
//   greet: function () {
//     console.log('Greet!')
//   },
// })

// Object.prototype.sayHello = function () {
//   console.log('Hello!')
// }

// // person.sayHello() // Инстанс родительского класса от которого мы наследуем прототип и его функции и можем использовать вышем уровне //

// const lena = Object.create(person)
// lena.name = 'Elena'

// // console.log(lena)

// const work = Object.create(lena)
// work.work = 'Front-End'
// work.programer = true
// work.worker = 23

// console.log(work.sayHello())
// Прототипы - это механизм, с помощью которого объекты JavaScript наследуют свойства друг от друга. В этой статье мы объясним, как работают цепочки прототипов, и рассмотрим, как свойство prototype можно использовать для добавления методов к существующим конструкторам.
// JavaScript часто описывают как язык прототипного наследования — каждый объект, имеет объект-прототип, который выступает как шаблон, от которого объект наследует методы и свойства. Объект-прототип так же может иметь свой прототип и наследовать его свойства и методы и так далее. Это часто называется цепочкой прототипов и объясняет почему одним объектам доступны свойства и методы которые определены в других объектах.

// Точнее, свойства и методы определяются в свойстве prototype функции-конструктора объектов, а не в самих объектах.

// В JavaScript создаётся связь между экземпляром объекта и его прототипом (свойство __proto__, которое является производным от свойства prototype конструктора), а свойства и методы обнаруживаются при переходе по цепочке прототипов.
// Этот метод — Object.valueOf()наследуется person1, потому что его конструктором является Person(), а прототипом Person() является Object(). valueOf() возвращает значение вызываемого объекта — попробуйте и убедитесь! В этом случае происходит следующее:

// Сначала браузер проверяет, имеет ли объект person1 доступный в нем метод valueOf(), как определено в его конструкторе Person().
// Это не так, поэтому следующим шагом браузер проверяет, имеет ли прототип объекта (Object()) конструктора Person() доступный в нем метод valueOf(). Так оно и есть, поэтому он вызывается, и все хорошо!

// function Person(first, last, age, work, gender, greet) {
//   this.name = {
//     first: first,
//     last: last,
//   }
//   this.age = age
//   this.work = work
//   this.gender = gender
//   function greet() {
//     console.log('Hello Greet!')
//   }
// }
// const person1 = new Person('Vlad', 'Shyrokij', 26, 'Front-end', 'man')
// // console.log(person1.age)

// function Worker(job, name, age) {
//   this.job = job
//   this.name = {
//     name: name,
//   }
//   this.age = age
// }
// const jon = new Worker('Fron-end', 'Jon', 26)

// jon.age = 30
// console.log(jon)

// function Human(first, last, age, gender) {
//   this.name = {
//     first: first,
//     last: last,
//   }
//   this.age = age
//   this.gender = gender
// }
// Human.prototype.getWork = function (work) {
//   console.log(`My work ${work}`)
// }
// Human.prototype.getHooby = function (hooby) {
//   console.log(`My Hooby ${hooby}`)
// }

// var vlad = new Human('Vlad', 'Shyrokij', 26, 'male')

// // vlad.getHooby('Photograhy')
// // vlad.getWork('Coding')

// console.log(vlad.name.first)

// function Person(name, age, gender, liveCities) {
//   this.name = name
//   this.age = age
//   this.gender = gender
//   this.liveCities = liveCities
// }
// Person.prototype.man = function () {
//   console.log(`This ${this.name} work in this Cities ${this.liveCities}`)
// }
// Person.prototype.job = function (job) {
//   console.log(`${this.name} have a job ${job}`)
// }
// Person.prototype.hasCalc = function (a, b) {
//   return (a += b)
// }
// const vlad = new Person('Vlad', 26, 'male', 'Milano')

// // console.log(vlad.hasCalc(10, 3))

// function Work(ageWork, BeckEnd, FrontEnd, DataSienc, salary, cvalification) {
//   this.ageWork = ageWork
//   this.special = {
//     BeckEnd: BeckEnd,
//     FrontEnd: FrontEnd,
//     DataSienc: DataSienc,
//   }
//   this.salary = salary
//   this.cvalification = {
//     cvalification: cvalification,
//   }
// }
// Work.prototype.hasClock = function (clock) {
//   console.log(`Work Day has ${clock}`)
// }
// Work.prototype.watchWorker = function (watch) {
//   console.log(`Have many people watch TV ${watch}`)
// }

// var person = new Work(23, true, false, false, 1000000000, true)
// console.log(person)
