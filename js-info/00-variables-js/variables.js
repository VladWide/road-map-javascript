// Перменые //

// variable
// var name = 'Vlad' // переизменяемая переменая //
// name = 'igor'
// console.log(name) // стараться не использовать var // только в старом синтаксисе до ES6 или старых проэктах //

// constanta
// const namef = 'Wide' // только для чтения переменые // не изменяеться // предпочтительно использовань const//
// console.log(namef)
// const isProgrammer = true // boolean
// console.log(isProgrammer)
// let
// let п1 = 26 // изменяемая переменая //
// console.log(n1)

// В JS нет строгой типизации мы можем взаимодесвовать с разными типами данных и изменять пременые которые возможно изменять на другие типы данных //

// const firstName = 'Vladislav' // camelCase // phyton // PHP // JS //
// const lastName = 'Shyrokiy'
// const age = 26 // можно изменять значения // потому что это let//
// const isProgramer = true // boolean

// const _private = 'private'
// const _ = 'private'
// const $ = 'some value'

// // const if = 'mkfd' // Error // нельзя создавать переменые которые имеют зарезервированые именна //
// const withNum5 = '5' // fine
// const 5withNum = '5' // error // начинать с цыфри нельзя имя переменой //

// Мутирование // переменых

// console.log(
//   'Name man: ' + firstName + ' ' + lastName + ', age: ' + age.toString()
// )

// const lastName = prompt('Your Last Name')
// console.log(frirstName + ' ' + lastName)

// Операторы //

// let currentYear = 2022
// const birthYear = 1996

// const age = currentYear - birthYear
// console.log(age)

// const a = 10
// const b = 3
// let c = 32
// c += a
// c -= a
// c *= a
// c /= a

// console.log(c)
// console.log(a - b)
// console.log(a + b)
// console.log(a * b)
// console.log(a / b)

// console.log(currentYear++)
// console.log(currentYear)

//Объявление переменных (как и любые другие объявления) обрабатываются до выполнения кода. Где бы не находилось объявление, это равнозначно тому, что переменную объявили в самом начале кода. Это значит, что переменная становится доступной до того, как она объявлена. Такое поведение называется "поднятием" (в некоторых источниках "всплытием").
// Поэтому объявление переменных рекомендовано выносить в начало их области видимости (в начало глобального кода или в начало функции). Это даёт понять какие переменные принадлежат функции (т.е. являются локальными), а какие обрабатываются в цепи областей видимости (т.е. являются глобальными).

// bla = 2
// var bla

// // console.log(bla)
// //
// //
// // v = 42
// const v = 34 // Значение констант не может быть изменено новым присваиванием, а также не может быть переопределено. Константы (const) подчиняются области видимости уровня блока так же, как переменные, объявленные с использованием ключевого слова let.

// console.log(v)

// const obj = {
//   name: 'Vlad',
//   age: 26,
//   isProgramer: true,
//   gret() {
//     console.log('Hello ' + this.name)
//   },
// }

// console.log(obj)
// obj.name = 'Vladislav'
// console.log(obj)

// const arr = ['a', 1, true, 4]
// console.log(arr)

// arr.push('vlad', 54)

// console.log(arr)

// lastName = 'Shyrokij'
// const firstName = 'vlad'

// console.log(firstName)

// lastName = 'Wide'
// firstName = 'Vladislav'
// console.log(lastName)
// firstName = 'Vlad'
// lastName = 'Shyrokij'

// var firstName
// var lastName

// // function Name() {
// //   firstName = 'Igor'
// //   lastName = 'Motin'
// //   return `Name: ${firstName} ${lastName}`
// // }
// // console.log(Name())
// console.log(firstName)
// console.log(lastName)

// const person = {
//   name: 'Vald',
//   age: 26,
//   isProgramer: true,
//   gret: function () {
//     console.log('hello its greet!')
//   },
//   'key for live': '42',
//   ['key_' + (4 + 2)]: 'live',
// }

// console.log(person['key for live'])
// console.log(person.age)
// person.gret()

// Var // переменная которая являеться страым синтаксисом ES3 ES5 , у нее много возможностей и обладает областю видимости глобального скоупа и функционального , блочного // эту переменную используют для поднятия скоупа , поднятие переменых имеет такие же свойсва как function declaretion //
// var number // можем обявить переменную не вписывая ей значение // для нее сохраниться в памяти JS место где в дальнейшем мы можем ее обявить
// console.log(num(2)) // и плюс мы можем вызвать функцию до ее назначения и в ней дать number = 2 значение и использовать эту переменную //
// function num(a) {
//   number = 2
//   return number + a
// }

// Let // переизменяемая переменая имеющая область видимости функции и блока , чаще всего испоьзуеться в блочом скоупе , это место внутри любых скобок , в цыклах например или условиях

// let age = 13
// console.log(age)
// age = 19 // переизменили значение
// console.log(age)

// function name1(name2) {
//   let name = 'Vlad'
//   if (name2 === name) {
//     return `My name ${name2}`
//   } else {
//     return `It's not ${name}`
//   }
// }
// console.log(name1('Vlad'))
// console.log(name1('Vika'))
// console.log(name1('Vld'))

// Const // Констата , являеться неизменяемой переменной , и ее нужно обявлять всегда , потому что если оставить константу без обявленной переменной будет ошибка и код не будет дальше работать // единсвенное где можно изменять днные в переменной константы это обекты и масивы , мы можем добавлять значения и методы , или удалять , или менять значение ключа //

// const age = 27
// age = 28

// const obj = {
//   name: 'Vlad',
//   age: 27,
// }

// console.log((obj.age = 28))
// console.log(obj)
