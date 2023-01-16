Классы
Классы в JavaScript были введены в ECMAScript 2015 и представляют собой синтаксический сахар над существующим в JavaScript механизмом прототипного наследования. Синтаксис классов не вводит новую объектно-ориентированную модель, а предоставляет более простой и понятный способ создания объектов и организации наследования.

Определение классов
На самом деле классы — это "специальные функции", поэтому точно также, как вы определяете функции (function expressions и function declarations), вы можете определять и классы с помощью: class declarations и class expressions.

Объявление класса
Первый способ определения класса — class declaration (объявление класса). Для этого необходимо воспользоваться ключевым словом class и указать имя класса (в примере — «Rectangle»).

class Rectangle {
constructor(height, width) {
this.height = height;
this.width = width;
}
}
Copy to Clipboard
Подъём (hoisting)
Разница между объявлением функции (function declaration) и объявлением класса (class declaration) в том, что объявление функции совершает подъём (hoisting), в то время как объявление класса — нет. Поэтому вначале необходимо объявить ваш класс и только затем работать с ним, а код же вроде следующего сгенерирует исключение типа ReferenceError:

var p = new Rectangle(); // ReferenceError

class Rectangle {}
Copy to Clipboard
Выражение класса
Второй способ определения класса — class expression (выражение класса). Можно создавать именованные и безымянные выражения. В первом случае имя выражения класса находится в локальной области видимости класса и может быть получено через свойства самого класса, а не его экземпляра.

// безымянный
var Rectangle = class {
constructor(height, width) {
this.height = height;
this.width = width;
}
};
console.log(Rectangle.name);
// отобразится: "Rectangle"

// именованный
var Rectangle = class Rectangle2 {
constructor(height, width) {
this.height = height;
this.width = width;
}
};
console.log(Rectangle.name);
// отобразится: "Rectangle2"
Copy to Clipboard
Примечание: Обратите внимание: выражения класса подвержены тем же проблемам с подъёмом (hoisting), что и объявления класса.

Тело класса и задание методов
Тело класса — это часть кода, заключённая в фигурные скобки {}. Здесь вы можете объявлять члены класса, такие как методы и конструктор.

Строгий режим
Тела объявлений классов и выражений классов выполняются в строгом режиме (strict mode).

Constructor
Метод constructor — специальный метод, необходимый для создания и инициализации объектов, созданных, с помощью класса. В классе может быть только один метод с именем constructor. Исключение типа SyntaxError будет выброшено, если класс содержит более одного вхождения метода constructor.

Ключевое слово super можно использовать в методе constructor для вызова конструктора родительского класса.

Методы прототипа
Смотрите также определение методов.

class Rectangle {
constructor(height, width) {
this.height = height;
this.width = width;
}

get area() {
return this.calcArea();
}

calcArea() {
return this.height \* this.width;
}
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
Copy to Clipboard
Статические методы и свойства
Ключевое слово static, определяет статический метод или свойства для класса. Статические методы и свойства вызываются без инстанцирования (en-US) их класса, и не могут быть вызваны у экземпляров (instance) класса. Статические методы, часто используются для создания служебных функций для приложения, в то время как статические свойства полезны для кеширования в рамках класса, фиксированной конфигурации или любых других целей, не связанных с реплецированием данных между экземплярами.

class Point {
constructor(x, y) {
this.x = x;
this.y = y;
}

static displayName = "Точка";
static distance(a, b) {
const dx = a.x - b.x;
const dy = a.y - b.y;

    return Math.hypot(dx, dy);

}
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; //undefined
p1.distance; //undefined
p2.displayName; //undefined
p2.distance; //undefined

console.log(Point.displayName); // "Точка"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
Copy to Clipboard
Привязка this в прототипных и статических методах
Когда статический или прототипный метод вызывается без привязки к this объекта (или когда this является типом boolean, string, number, undefined, null), тогда this будет иметь значение undefined внутри вызываемой функции. Поведение будет таким же даже без директивы "use strict", потому что код внутри тела класса всегда выполняется в строгом режиме.

class Animal {
speak() {
return this;
}
static eat() {
return this;
}
}

let obj = new Animal();
obj.speak(); // объект Animal
let speak = obj.speak;
speak(); // undefined

Animal.eat() // класс Animal
let eat = Animal.eat;
eat(); // undefined
Copy to Clipboard
Если мы напишем этот же код используя классы основанные на функциях, тогда произойдёт автоупаковка основанная на значении this, в течение которого функция была вызвана. В строгом режиме автоупаковка не произойдёт - значение this останется прежним.

function Animal() { }

Animal.prototype.speak = function(){
return this;
};

Animal.eat = function() {
return this;
};

let obj = new Animal();
let speak = obj.speak;
speak(); // глобальный объект (нестрогий режим)

let eat = Animal.eat;
eat(); // глобальный объект (нестрогий режим)
Copy to Clipboard
Свойства экземпляра
Свойства экземпляра должны быть определены в методе класса:

class Rectangle {
constructor(height, width) {
this.height = height;
this.width = width;
}
}
Статические (class-side) свойства и свойства прототипа должны быть определены за рамками тела класса:

Rectangle.staticWidth = 20;
Rectangle.prototype.prototypeWidth = 25;
Определение полей
Предупреждение: Публичные и приватные поля - это экспериментальная особенность (stage 3), предложенная комитетом TC39 по стандартам языка Javascript. Поддержка браузерами ограничена, но это нововведение может быть использовано на моменте сборки, используя к примеру Babel.

Публичные поля
Используя Javascript синтаксис определения полей, приведённый выше пример может быть изменён следующим образом:

class Rectangle {
height = 0;
width;
constructor(height, width) {
this.height = height;
this.width = width;
}
}
Как видно из примера, поля могут быть объявлены как со начальным значением, так и без него.

Более подробно об этом написано в публичные поля класса.

Приватные поля
Предыдущий пример может быть изменён следующим образом, используя приватные поля:

class Rectangle {
#height = 0;
#width;
constructor(height, width) {
this.#height = height;
this.#width = width;
}
}
Приватные поля могут быть изменены или прочитаны только в рамках класса и не могут быть вызваны извне. Определяя вещи, которые не видны за пределами класса, вы гарантируете, что пользователи ваших классов не могут зависеть от внутренних компонентов, которые могут изменить версию на версию.

Примечание: Приватные поля могут быть объявлены только заранее в объявлении поля.

Приватные поля не могут быть созданы позже путём присваивания им значения, в отличии от обычных свойств.

Более подробно об этом написано в Приватные поля класса.

Наследование классов с помощью extends
Ключевое слово extends используется в объявлениях классов и выражениях классов для создания класса, дочернего относительно другого класса.

class Animal {
constructor(name) {
this.name = name;
}

speak() {
console.log(`${this.name} издаёт звук.`);
}
}

class Dog extends Animal {
constructor(name) {
super(name); // вызывает конструктор super класса и передаёт параметр name
}

speak() {
console.log(`${this.name} лает.`);
}
}

let d = new Dog('Митци');
d.speak(); // Митци лает
Copy to Clipboard
Если в подклассе присутствует конструктор, он должен сначала вызвать super, прежде чем использовать this.

Аналогичным образом можно расширять традиционные, основанные на функциях "классы":

function Animal (name) {
this.name = name;
}
Animal.prototype.speak = function () {
console.log(`${this.name} издаёт звук.`);
}

class Dog extends Animal {
speak() {
console.log(`${this.name} лает.`);
}
}

let d = new Dog('Митци');
d.speak(); // Митци лает

// Для аналогичных методов дочерний метод имеет приоритет над родительским.
Copy to Clipboard
Обратите внимание, что классы не могут расширять обычные (non-constructible) объекты. Если вам необходимо создать наследование от обычного объекта, в качестве замены можно использовать Object.setPrototypeOf():

var Animal = {
speak() {
console.log(`${this.name} издаёт звук.`);
}
};

class Dog {
constructor(name) {
this.name = name;
}
}

// Если вы этого не сделаете, вы получите ошибку TypeError при вызове speak.
Object.setPrototypeOf(Dog.prototype, Animal);

let d = new Dog('Митци');
d.speak(); // Митци издаёт звук.
Copy to Clipboard
Species
Допустим, вам хотелось бы возвращать объекты типа Array в вашем производном от массива классе MyArray. Паттерн species позволяет вам переопределять конструкторы по умолчанию.

Например, при использовании таких методов, как map(), который возвращает конструктор по умолчанию, вам хотелось бы, чтобы они возвращали родительский объект Array вместо объекта MyArray. Символ Symbol.species позволяет это реализовать:

class MyArray extends Array {
// Изменить species на родительский конструктор Array
static get [Symbol.species]() { return Array; }
}
var a = new MyArray(1,2,3);
var mapped = a.map(x => x \* x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
Copy to Clipboard
Обращение к родительскому классу с помощью super
Ключевое слово super используется для вызова функций на родителе объекта.

class Cat {
constructor(name) {
this.name = name;
}

speak() {
console.log(`${this.name} издаёт звук.`);
}
}

class Lion extends Cat {
speak() {
super.speak();
console.log(`${this.name} рычит.`);
}
}

let l = new Lion('Фаззи');
l.speak();
// Фаззи издаёт звук.
// Фаззи рычит.
Copy to Clipboard
Mix-ins
Абстрактные подклассы, или mix-ins, — это шаблоны для классов. У класса в ECMAScript может быть только один родительский класс, поэтому множественное наследование (к примеру, от tooling classes) невозможно. Функциональность должен предоставлять родительский класс.

Для реализации mix-ins в ECMAScript можно использовать функцию, которая в качестве аргумента принимает родительский класс, а возвращает подкласс, его расширяющий:

var calculatorMixin = Base => class extends Base {
calc() { }
};

var randomizerMixin = Base => class extends Base {
randomize() { }
};
Copy to Clipboard
Класс, использующий такие mix-ins, можно описать следующим образом:

class Foo { }
class Bar extends calculatorMixin(randomizerMixin(Foo)) { }

constructor
constructor - это специальный метод, служащий для создания и инициализации объектов, созданных с использованием class.

Синтаксис
constructor([arguments]) { ... }
Описание
Конструктор позволяет произвести начальную инициализацию, которая должна быть выполнена до того, как остальные методы будут вызваны.

class Person {

  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }

}

const otto = new Person('Отто');

otto.introduce();
Если вы не определили метод constructor, то будет использован конструктор по умолчанию. Если ваш класс базовый, то конструктор по умолчанию пустой:

constructor() {}
Если ваш класс является производным классом, конструктор по умолчанию вызывает родительский конструктор, передавая любые аргументы, которые были предоставлены:

constructor(...args) {
  super(...args);
}
Это позволяет работать следующему коду:

class ValidationError extends Error {

  printCustomerMessage() {
    return `Проверка не удалась :-( (подробности: ${this.message})`;
  }

}

try {
  throw new ValidationError("Неправильный номер телефона");
} catch (error) {
   if (error instanceof ValidationError) {
    console.log(error.name); // Это Error вместо ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log('Неизвестная ошибка', error);
    throw error;
  }
}
ValidationError классу не нужен явный (explicit) конструктор, потому что не требуется инициализация. Затем, конструктор по умолчанию позаботится об инициализации родительского класса Error, переданным ему аргументом.

Однако, если определён ваш собственный конструктор и класс является производным от какого-либо родительского класса, то вы должны явно объявить конструктор родительского класса, используя super. К примеру:

class ValidationError extends Error {

  constructor(message) {
    super(message);  // вызов конструктора родительского класса
    this.name = 'ValidationError';
    this.code = '42';
  }

  printCustomerMessage() {
     return `Проверка не удалась :-( (подробности: ${this.message}, code: ${this.code})`;
  }

}

try {
  throw new ValidationError("Неправильный номер телефона");
} catch (error) {
   if (error instanceof ValidationError) {
    console.log(error.name); // Теперь это ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log('Неизвестная ошибка', error);
    throw error;
  }
}
В классе может быть только один метод с именем "constructor". Если класс содержит более одного constructor, будет сгенерировано исключение SyntaxError.

Примеры
Использование метода constructor
Данный фрагмент кода взят из classes sample (live demo).

class Square extends Polygon {
  constructor(length) {
    // Здесь вызывается конструктор родительского класса,
    // в который передаётся length в качестве аргументов,
    // соответствующим полям width и height класса Polygon
    super(length, length);
    // Примечание: В производном классе, super() должен вызываться перед тем, как
    // вы сможете использовать 'this'. Иначе будет сгенерировано исключение reference error.
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  }
}
Copy to Clipboard
Другой пример
Посмотрите на этот отрывок кода.

class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}

class Square extends Polygon {
  constructor() {
    super();
  }
}

class Rectangle {}

Object.setPrototypeOf(Square.prototype, Rectangle.prototype);

console.log(Object.getPrototypeOf(Square.prototype) === Polygon.prototype); //false
console.log(Object.getPrototypeOf(Square.prototype) === Rectangle.prototype); //true

let newInstance = new Square();
console.log(newInstance.name); //Polygon
Copy to Clipboard
Здесь прототип Square класса изменён, но в то же время constructor предыдущего базового класса Polygon вызывается при создании нового экземпляра Square.

Constructors по умолчанию.
Если вы не определите метод constructor, будет использован constructor по умолчанию. Для базовых классов, constructor по умолчанию:

constructor() {}
Copy to Clipboard
Для производных классов, constructor по умолчанию:

constructor(...args) {
  super(...args);
}

extends
Ключевое слово extends используется в объявлении класса или в выражениях класса для создания дочернего класса.

Синтаксис
class ChildClass extends ParentClass { ... }
Описание
Ключевое слово extends может быть использовано для создания дочернего класса для уже существующего класса или встроенного объекта.

Свойство .prototype родительского класса или объекта должно быть Object или null.

Примеры
Использование extends
В первом примере создаётся дочерний класс с именем Square от класса с именем Polygon. Этот пример был взят из live demo (source).

class Square extends Polygon {
  constructor(length) {
    // Здесь вызывается конструктор родительского класса,
    // в который передаётся свойство length в качестве
    // аргументов, соответствующих полям width и height,
    // класса Polygon
    super(length, length);
    // Примечание:
    // В конструкторе класса, метод super() должен быть вызван
    // перед использованием this. В противном случае, будет
    // выброшена ошибка.
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }
}
Copy to Clipboard
Расширение встроенных объектов с помощью extends
Этот пример расширяет встроенный объект Date. Пример взят из live demo (source).

class myDate extends Date {
  constructor() {
    super();
  }

  getFormattedDate() {
    var months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return this.getDate() + '-' +
      months[this.getMonth()] + '-' +
      this.getFullYear();
  }
}
Copy to Clipboard
Расширение null
Расширение null работает как и с обычным классом, за исключением того, что прототип объекта не наследует Object.prototype (en-US).

class nullExtends extends null {
  constructor() {}
}

Object.getPrototypeOf(nullExtends); // Function.prototype
Object.getPrototypeOf(nullExtends.prototype) // null

new nullExtends(); //ReferenceError: this is not defined
Copy to Clipboard


Приватные поля класса
Свойства класса по умолчанию являются общедоступными и могут быть рассмотрены или изменены вне класса. Тем не менее, есть экспериментальное предложение, позволяющее определить приватные поля класса, используя префикс хэша #.

Синтаксис
class ClassWithPrivateField {
  #privateField
}

class ClassWithPrivateMethod {
  #privateMethod() {
    return 'hello world'
 }
}

class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD
}
Примеры
Приватные статические поля
Приватные поля доступны в конструкторе класса изнутри самой декларации класса.

Ограничение статических переменных, вызываемых только статическими методами, все ещё сохраняется.

class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD

  static publicStaticMethod() {
    ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42
    return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD
  }
}

console.assert(ClassWithPrivateStaticField.publicStaticMethod() === 42)
Copy to Clipboard
Приватные статические поля добавляются в конструктор класса во время обработки класса.

Существует ограничение по происхождению частных статических полей. Только класс, который определяет приватное статическое поле, может получить доступ к этому полю.

Это может привести к неожиданному поведению при использовании this.

class BaseClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD

  static basePublicStaticMethod() {
    this.#PRIVATE_STATIC_FIELD = 42
    return this.#PRIVATE_STATIC_FIELD
  }
}

class SubClass extends BaseClassWithPrivateStaticField { }

let error = null

try {
  SubClass.basePublicStaticMethod()
} catch(e) { error = e}

console.assert(error instanceof TypeError)
Copy to Clipboard
Приватные поля экземпляров
Приватные поля экземпляров объявляются #имя (произносится как "хэш нэймс"), которые идентифицируются префиксом #. # является частью имени, а также используется для объявления и доступа.

Инкапсуляция обеспечивается языком. Обращение к # именам вне области видимости является синтаксической ошибкой.

class ClassWithPrivateField {
  #privateField

  constructor() {
    this.#privateField = 42
    this.#randomField = 666 // Syntax error
  }
}

const instance = new ClassWithPrivateField()
instance.#privateField === 42 // Syntax error
Copy to Clipboard
Приватные методы
Приватные статические методы
Приватные статические методы

Как и их публичный эквивалент, приватные статические методы вызываются на самом классе, а не на экземплярах класса. Как и приватные статические поля, они доступны только изнутри объявления класса.

Приватные статические методы могут быть генераторами, асинхронными функциями и асинхронными функциями-генераторами.

class ClassWithPrivateStaticMethod {
    static #privateStaticMethod() {
        return 42
    }

    static publicStaticMethod1() {
        return ClassWithPrivateStaticMethod.#privateStaticMethod();
    }

    static publicStaticMethod2() {
        return this.#privateStaticMethod();
    }
}

console.assert(ClassWithPrivateStaticMethod.publicStaticMethod1() === 42);
console.assert(ClassWithPrivateStaticMethod.publicStaticMethod2() === 42);
Copy to Clipboard
Это может привести к неожиданному поведению при его использовании this. В следующем примере this относится к классу Derived (а не к классу Base), когда мы пытаемся вызвать Derived.publicStaticMethod2(), и, таким образом, имеет такое же "ограничение по происхождению", как упоминалось выше:

class Base {
    static #privateStaticMethod() {
        return 42;
    }
    static publicStaticMethod1() {
        return Base.#privateStaticMethod();
    }
    static publicStaticMethod2() {
        return this.#privateStaticMethod();
    }
}

class Derived extends Base {}

console.log(Derived.publicStaticMethod1()); // 42
console.log(Derived.publicStaticMethod2()); // TypeError
Copy to Clipboard
Приватные методы экземпляров(instance)
Приватные методы экземпляров это методы, доступные у экземпляров класса, доступ к которым запрещён также, как у приватных полей класса.

class ClassWithPrivateMethod {
  #privateMethod() {
    return 'hello world'
  }

  getPrivateMessage() {
      return this.#privateMethod()
  }
}

const instance = new ClassWithPrivateMethod()
console.log(instance.getPrivateMessage())
// expected output: "hello worl​d"
Copy to Clipboard
Приватные методы экземпляров могут быть генератором, async, или функциями async генератора. Приватные геттеры и сеттеры также возможны:

class ClassWithPrivateAccessor {
  #message

  get #decoratedMessage() {
    return `✨${this.#message}✨`
  }
  set #decoratedMessage(msg) {
    this.#message = msg
  }

  constructor() {
    this.#decoratedMessage = 'hello world'
    console.log(this.#decoratedMessage)
  }
}

new ClassWithPrivateAccessor();
// expected output: "✨hello worl​d✨"

Публичные поля классов
Примечание: Эта страница описывает экспериментальные возможности.

Публичные и приватные поля — это экспериментальная функция (stage 3), предложенная комитетом по стандарту JavaScript TC39.

Поддержка этой возможности в браузерах ограничена, но ее можно использовать посредством транспилирования с такими системами как Babel. Смотрите информацию о совместимости ниже.

И статические, и публичные поля являются изменяемыми, перечисляемыми, настраиваемыми свойствами. Таким образом, в отличие от приватных полей, они участвуют в прототипном наследовании.

Синтаксис
class ClassWithInstanceField {
  instanceField = 'instance field'
}

class ClassWithStaticField {
  static staticField = 'static field'
}

class ClassWithPublicInstanceMethod {
  publicMethod() {
    return 'hello world'
  }
}
Copy to Clipboard
Примеры
Публичные статические поля
Публичные статические поля полезны тогда, когда необходимо существование одного единственного поля для всего класса, а не для каждого созданного экземпляра по отдельности. Это полезно для кеша, конфигураций или любых прочих данных, которые одинаковы для всех экземпляров.

Публичные статические поля объявляются при помощи ключевого слова static. Они добавляются в конструктор класса во время его создания с помощью Object.defineProperty(). Доступ также осуществляется через конструктор класса.

class ClassWithStaticField {
  static staticField = 'static field';
}

console.log(ClassWithStaticField.staticField);
// Ожидаемый вывод: "static field"
Copy to Clipboard
Поля без инициализации имеют значение ("javascript.classes").

class ClassWithStaticField {
  static staticField;
}

console.assert(ClassWithStaticField.hasOwnProperty('staticField'));
console.log(ClassWithStaticField.staticField);
// Ожидаемый вывод: "undefined"
Copy to Clipboard
Публичные статические поля не переопределяются в наследниках класса, а могут быть доступны через иерархию прототипов.

class ClassWithStaticField {
  static baseStaticField = 'base field';
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = 'sub class field';
}

console.log(SubClassWithStaticField.subStaticField);
// Ожидаемый вывод: "sub class field"

console.log(SubClassWithStaticField.baseStaticField);
// Ожидаемый вывод: "base field"
Copy to Clipboard
При определении полей this ссылается на конструктор класса. Также можно обратиться к нему по имени и использовать super для получения конструктора базового класса, если он существует.

class ClassWithStaticField {
  static baseStaticField = 'base static field';
  static anotherBaseStaticField = this.baseStaticField;

  static baseStaticMethod() { return 'base static method output'; }
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = super.baseStaticMethod();
}

console.log(ClassWithStaticField.anotherBaseStaticField);
// Ожидаемый вывод: "base static field"

console.log(SubClassWithStaticField.subStaticField);
// Ожидаемый вывод: "base static method output"
Copy to Clipboard
Публичные поля экземпляра
Такие публичные поля имеются у каждого экземпляра данного класса. Объявляя публичные поля, мы можем гарантировать, что поле всегда присутствует, а объявление класса является более самодокументированным.

Публичные поля экземпляра добавляются через Object.defineProperty() либо перед тем, как будет исполнено тело конструктора в базовом классе, либо после того, как завершится super() в классе наследнике.

class ClassWithInstanceField {
  instanceField = 'instance field';
}

const instance = new ClassWithInstanceField();
console.log(instance.instanceField);
// Ожидаемый вывод: "instance field"
Copy to Clipboard
Поля без инициализации имеют значение undefined.

class ClassWithInstanceField {
  instanceField;
}

const instance = new ClassWithInstanceField();
console.assert(instance.hasOwnProperty('instanceField'));
console.log(instance.instanceField);
// Ожидаемый вывод: "undefined"
Copy to Clipboard
Как и свойства, названия полей могут вычисляться.

const PREFIX = 'prefix';

class ClassWithComputedFieldName {
    [`${PREFIX}Field`] = 'prefixed field';
}

const instance = new ClassWithComputedFieldName();
console.log(instance.prefixField);
// Ожидаемый вывод: "prefixed field"
Copy to Clipboard
При определении полей this ссылается на создающийся экземпляр класса. Как и в публичных методах экземпляра, получить доступ к прототипу базового класса можно с помощью super.

class ClassWithInstanceField {
  baseInstanceField = 'base field';
  anotherBaseInstanceField = this.baseInstanceField;
  baseInstanceMethod() { return 'base method output'; }
}

class SubClassWithInstanceField extends ClassWithInstanceField {
  subInstanceField = super.baseInstanceMethod();
}

const base = new ClassWithInstanceField();
const sub = new SubClassWithInstanceField();

console.log(base.anotherBaseInstanceField);
// Ожидаемый вывод: "base field"

console.log(sub.subInstanceField);
// Ожидаемый вывод: "base method output"
Copy to Clipboard
Публичные методы
Публичные статические методы
Ключевое слово static объявляет статический метод класса. Статические методы не вызываются из экземпляра, вместо этого они вызывается из самого класса. Чаще всего это какие-либо служебные функции, такие как функции создания или копирования объектов.

class ClassWithStaticMethod {
  static staticMethod() {
    return 'static method has been called.';
  }
}

console.log(ClassWithStaticMethod.staticMethod());
// expected output: "static method has been called."
Copy to Clipboard
Статические методы добавляются в конструктор класса с помощью Object.defineProperty() во время его создания. Эти методы - изменяемые, неперечисляемые и настраиваемые свойства объекта.

Публичные методы экземпляра
Как и следует из названия, публичные методы экземпляра это методы, доступные для вызова из экземпляров.

class ClassWithPublicInstanceMethod {
  publicMethod() {
    return 'hello world';
  }
}

const instance = new ClassWithPublicInstanceMethod();
console.log(instance.publicMethod());
// Ожидаемый вывод: "hello worl​d"
Copy to Clipboard
Публичные методы добавляются в прототип класса во время его создания с помощью Object.defineProperty(). Они изменяемы, неперечисляемы и настраиваемы.

Вы можете использовать генераторы, асинхронные функции и асинхронные генераторы.

class ClassWithFancyMethods {
  *generatorMethod() { }
  async asyncMethod() { }
  async *asyncGeneratorMethod() { }
}
Copy to Clipboard
Внутри методов экземпляра, this ссылается на сам экземпляр. В классах наследниках, super даёт доступ к прототипу базового класса, позволяя вызывать его методы.

class BaseClass {
  msg = 'hello world';
  basePublicMethod() {
    return this.msg;
  }
}

class SubClass extends BaseClass {
  subPublicMethod() {
    return super.basePublicMethod();
  }
}

const instance = new SubClass();
console.log(instance.subPublicMethod());
// Ожидаемый вывод: "hello worl​d"
Copy to Clipboard
Геттеры и сеттеры это специальные методы, которые привязаны к свойствам класса и которые вызываются, когда к свойству обращаются или записывают. Используйте get и set для объявления публичных геттеров и сеттеров экземпляра.

class ClassWithGetSet {
  #msg = 'hello world';
  get msg() {
    return this.#msg;
  }
  set msg(x) {
    this.#msg = `hello ${x}`;
  }
}

const instance = new ClassWithGetSet();
console.log(instance.msg);
// Ожидаемый вывод: "hello worl​d"

instance.msg = 'cake';
console.log(instance.msg);
// Ожидаемый вывод: "hello cake"
Copy to Clipboard


static
Для того, чтобы объявить статический метод класса, необходимо использовать ключевое слово static.

Синтаксис
static methodName() { ... }
Описание
Статические методы вызываются через имя класса. Вызывать статические методы через имя объекта запрещено. Статические методы часто используются для создания вспомогательных функций приложения.

Вызов статических методов
Вызов из другого статического метода
Чтобы вызвать статический метод в другом статическом методе того же класса, вы можете использовать ключевое слово this.

class StaticMethodCall {
  static staticMethod() {
    return 'Вызван статический метод';
  }
  static anotherStaticMethod() {
    return this.staticMethod() + ' из другого статического метода';
  }
}
StaticMethodCall.staticMethod();
// 'Вызван статический метод'

StaticMethodCall.anotherStaticMethod();
// 'Вызван статический метод из другого статического метода'
Copy to Clipboard
Вызов из конструктора класса и других методов
Статические методы недоступны напрямую, используя ключевое слово this из нестатических методов. Вам нужно вызвать их с помощью имени класса: CLASSNAME.STATIC_METHOD_NAME() или вызовом метода как свойства конструктора: this.constructor.STATIC_METHOD_NAME().

class StaticMethodCall {
  constructor() {
    console.log(StaticMethodCall.staticMethod());
    // 'вызван статический метод.'

    console.log(this.constructor.staticMethod());
    // 'вызван статический метод.'
  }

  static staticMethod() {
    return 'вызван статический метод.';
  }
}
Copy to Clipboard
Примеры
Следующий пример демонстрирует:

Как статический метод реализуется в классе.
Как переопределить статический метод при наследовании.
Как можно и как нельзя вызывать статические методы.
class Triple {
  static triple(n) {
    if (n === undefined) {
      n = 1;
    }
    return n * 3;
  }
}

class BiggerTriple extends Triple {
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}

console.log(Triple.triple());        // 3
console.log(Triple.triple(6));       // 18

var tp = new Triple();

console.log(BiggerTriple.triple(3));
// 81 (не затрагивается экземпляром родителя)

console.log(tp.triple());
// Выведет сообщение, что "tripple" не является
// функцией ('tp.tripple is not a function').

