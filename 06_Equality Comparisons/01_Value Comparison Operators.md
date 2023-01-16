Обзор
Оператор равенства в javascript используется для сравнения двух значений. Сравнение производится операторами == и === в javascript. Основное различие между операторами == и === в javascript заключается в том, что оператор == выполняет преобразование типов операндов перед сравнением, тогда как оператор === сравнивает значения, а также типы данных операндов.

Сфера
В этой статье мы обсудим операторы равенства и неравенства в javascript , которые представляют собой нечеткое равенство ( == ) и операторы строгого равенства ( === ).
Мы также узнаем разницу между операторами == и === в javascript.
Вступление
В повседневной жизни мы сталкиваемся с множеством ситуаций, когда нам нужно сравнить две вещи. Например, представьте, что вы входите в свой Instagram. При посещении сайта вы увидите страницу входа, запрашивающую ваше имя пользователя и пароль. После того, как вы отправите данные, веб-сайт просматривает свою базу данных и сравнивает предоставленные данные с доступными. Если данные совпадают , это позволяет вам войти в систему; в противном случае это не так.

Это один из многих случаев, когда сравниваются два объекта, и решение о дальнейших действиях принимается в зависимости от результата.

В Javascript для сравнения двух значений мы используем операторы сравнения. Существует особый случай сравнения, когда сравниваются два значения и решается, являются ли значения равными (или неравными). В этом случае мы можем использовать следующие два оператора в javascript:

== оператор.
=== оператор.
Примечание. Чтобы проверить, не равны ли два значения, мы заменяем первый знак равенства ( = ) восклицательным знаком ( ! ). Таким образом , операторы != и !== соответственно используются для проверки неравенства двух значений.

Прежде чем перейти к разнице между == и === в Javascript, давайте посмотрим, что такое операторы == и !== в javascript.

Что такое == и != в JavaScript?
Операторы == и != в javascript используются для сравнения двух значений. Оператор == проверяет, равны ли два значения . Оператор != проверяет, не равны ли два значения . Он также известен как оператор нечеткого равенства , потому что он проверяет абстрактное равенство , т. е. имеет тенденцию преобразовывать типы данных операндов, чтобы выполнять сравнение, когда два операнда имеют разные типы данных.

Синтаксис:

Для равенства:

x == y
Для неравенства:

x != y
Где x и y — операнды, а средняя часть — оператор. В случае сравнения равенства мы используем оператор ==, а в случае сравнения неравенства мы используем оператор !=.

Тип возвращаемого значения: логический

Он либо возвращает true , либо false .

Оператор == возвращает значение true , если оба операнда относятся к одному типу данных и имеют одинаковое значение, или если оба имеют разные типы данных, но любой из них может быть преобразован в тип данных другого операнда и имеет одинаковое значение. Если оба операнда имеют разные значения, возвращается false .

Оператор != возвращает значение true , если оба операнда имеют одинаковый тип данных и разные значения или если оба имеют разные типы данных и ни один из них не может быть сравнен с типом другого операнда. Он возвращает false , если оба операнда относятся к одному типу данных и имеют одинаковое значение, или если оба имеют разные типы данных, но любой из них может быть преобразован в тип данных другого операнда и имеет одинаковое значение.

Примечание. Оператор == или != выполняет преобразование типов элементов перед их сравнением.

Что такое преобразование типов?

Операторы == и != неточно сравнивают два операнда , т. е. при сравнении двух операндов, если оба операнда относятся к разным типам данных, оператор стремится преобразовать любой из них в тип другого операнда, а затем сравнивает их значения.

Это одно из самых важных различий между == и === в Javascript.

Пример:

Если мы собираемся сравнить два значения, одну строку и другое число, тогда оно преобразует строковое значение в числовой тип, а затем сравнит значения.

let a = 10;
let b = '10';

console.log(a == b);
//output: true
В приведенном выше примере b преобразуется оператором в числовой тип , а затем сравнивается с a. Поскольку числовые значения a и b одинаковы, выводится true.

Поведение операторов == и !=, когда оба операнда одного типа:

Если оба сравниваемых операнда относятся к одному типу, то операторы == и != ведут себя следующим образом:

Если оба имеют числовой тип данных, то оператор == вернет true, если оба содержат одно и то же значение; в противном случае ложно. Оператор != сделает наоборот.

Пример:

let a = 10;
let b = 10;
let c = -10;

console.log(a==b);
//output: true

console.log(a==c);
//output: false

console.log(b!=c);
//output: true

console.log(a!=b);
//output: false
В приведенном выше примере первый вывод верен, так как значения a и b одинаковы, а второй результат ложен , так как a и c имеют разные знаки. Точно так же третий вывод верен , поскольку b и c не совпадают, а четвертый верен , поскольку a и b совпадают.

Если число сравнивается с NaN, оно все равно выводит false для оператора == .

Если оба операнда строкового типа, то оператор == вернет true, только если каждый элемент первого операнда совпадает с каждым элементом второго операнда. Оператор != сделает наоборот.

Пример:

    let str1 = 'Javascript';
    let str2 = 'Javascript';
    let str3 = 'JavaScript';

    console.log(str1 == str2);
    //output: true

    console.log(str1 == str3);
    //output: false

    console.log(str1 != str3);
    // output: true

В приведенном выше примере первый вывод верен, так как строки str1 и str2 абсолютно одинаковы, а второй вывод ложен, поскольку строки str1 и str3 не совсем совпадают. Третий вывод верен, так как str1 и str3 не совпадают.

Таким образом, мы можем сделать вывод, что сравнение также чувствительно к регистру.

Если оба операнда имеют логический тип, то оператор == вернет true, только если оба операнда имеют значение true , в противном случае он вернет false. Оператор != сделает наоборот.
Пример:

    bool a = false;
    bool b = true;
    bool c = true;
    bool d = false;

    console.log(b == c);
    //output: true

    console.log(b == a);
    //output: false

    console.log(a == d);
    //output: true

    console.log(b != d);
    //output: true

    console.log(b != c);
    //output: false

Поведение операторов == и !=, когда оба операнда не одного типа:

Когда типы операндов не совпадают, операторы == и != используют абстрактный алгоритм сравнения на равенство для сравнения двух операндов. Этот алгоритм ослабляет проверку и пытается преобразовать операнды в один и тот же тип перед выполнением какой-либо операции.

Ниже приведены основные моменты поведения == и != , когда типы операндов не совпадают:

Если мы сравниваем строку и число , то перед сравнением строка преобразуется в число.
Если мы сравниваем логическое значение и число (0 или 1) , то 0 воспринимается как ложное, а 1 — как истинное .
Если мы сравниваем два объекта , то оператор проверит, относятся ли оба объекта к одному и тому же объекту . Если да, то оператор == вернет true, а != вернет false, иначе == вернет false, а != вернет true.
Если мы сравниваем null и undefined , то оператор == вернет true, а оператор != вернет false.
Примеры
Пример 1: сравнение строки и числа

10 == '10' //true
10 == '99' //false
10 != '99' //true
10 != '10' //true
Объяснение:

В этом примере первый операнд имеет числовой тип, а второй операнд — строковый . Оператор == выполняет преобразование типа строки в число.

Первый вывод истинен , так как 10 и 10 равны, поэтому выведите истину для оператора == , второй вывод ложен, так как 10 и 99 не равны.

Третий вывод верен, так как 10 и 99 не равны, поэтому вывод верен для оператора != , четвертый вывод ложен, так как 10 и 10 равны.

Пример 2: сравнение логического значения и числа

true == 1 //true
true == 0 //false
false != 1 //true
false != 0 //false
Объяснение:

В этом примере первый операнд имеет логический тип, а второй операнд имеет числовой тип (0 или 1). Оператор == выполняет преобразование типа числа в логическое значение.

Первый вывод истинен как истина, а 1 равны (поскольку 1 считается истинным, а 0 считается ложным), поэтому вывод верен для оператора == , второй вывод ложен как истина, а 0 не равны.

Пример 3: сравнение null и undefined

let a = null;
let b;

console.log(a == b);
//output: true
Объяснение:

Он выводит true , так как для оператора == сравнение null и undefined верно.

Пример 4: сравнение объектов

let car1 = {
name: "Maruti"
}

let car2 = {
name: "Maruti"
}

console.log(car1 == car1);
//output: true

console.log(car1 == car2);
//output: false

console.log(car1 != car1);
//output: false

console.log(car1 != car2);
//output: true
Объяснение:

В последнем примере первый вывод верен , потому что car1 и car1 относятся к одному и тому же экземпляру, тогда как второй вывод ложен , поскольку car1 и car2 относятся к разным экземплярам.

Примечание. Никогда не сравнивайте объекты с операторами == .

Это работает, только если это один и тот же объект. Разные объекты с одинаковым значением не равны . Таким образом , оператор == возвращает false , когда мы сравниваем два разных объекта с одинаковым значением.

Что такое === и !== в JavaScript?
Оператор === называется оператором строгого равенства (а !== называется оператором строгого неравенства). Операторы === следуют строгому алгоритму сравнения на равенство , т. е. не выполняют преобразование типов операндов перед сравнением их значений и возвращают false, даже если типы данных операндов не совпадают.

Синтаксис:

Для равенства:

x === y
Для неравенства:

x !== y
Где x и y — операнды, а средняя часть — оператор. В случае сравнения на равенство мы используем оператор ===, а в случае сравнения на равенство используем оператор !==.

Тип возвращаемого значения: логический

Он возвращает либо true , либо false .

Оператор === сравнивает операнды и возвращает true , если оба операнда относятся к одному типу данных и имеют какое-то значение, в противном случае возвращает false .

Оператор !== сравнивает операнды и возвращает значение true , если оба операнда относятся к разным типам данных или относятся к одному типу данных, но имеют разные значения. Если оба операнда относятся к одному типу данных и имеют одинаковое значение, то возвращается false.

Примечание. В отличие от оператора == , === не выполняет преобразование типов.

Пример:

let a = 10;
let b = '10';
let c = 10;

console.log(a===b);
//output: false;

console.log(a===c);
//output: true;
Здесь первый вывод ложен , так как a является числовым типом, тогда как b является строковым типом, второй вывод верен , так как и a, и c имеют одинаковый тип данных и значение.

Операторы === и !== следуют строгому алгоритму сравнения на равенство для сравнения двух операндов.

Ниже приведены некоторые основные моменты алгоритма сравнения строгого равенства:
Если операнды, которые мы сравниваем, имеют разные типы данных , то возвращается false .
Если какой-либо из двух операндов, которые мы сравниваем, имеет значение NaN , то он вернет false .
Если операнды, которые мы сравниваем, имеют значение null или undefined , то он вернет true .
Если операнды, которые мы сравниваем, являются объектами, то он вернет true , если оба ссылаются на один и тот же объект, иначе он вернет false .
Примеры
Пример 1: когда оба операнда имеют разные типы данных

34 === '34' //false
34 !== '34' //true
Объяснение:

Здесь первый операнд имеет числовой тип данных, а второй операнд имеет строковый тип данных, поэтому оператор === возвращает false , а оператор !== возвращает true.

Пример 2. Когда любой из операндов равен NaN

let a = NaN;
let b = 10;

a === b //false
a !== b //true
Объяснение:

Поскольку первый операнд имеет форму NaN , оператор === возвращает false , а оператор !== возвращает true.

Пример 3: когда оба операнда пусты или не определены

null === null //true
undefined === undefined //true
null === undefined //false
Объяснение:

Здесь первые два сравнения выводят true , так как оба операнда имеют одинаковый тип и имеют одинаковое значение, но последний вывод — false , так как один операнд имеет значение null, а другой не определен.

Пример 4: Когда оба операнда являются объектами

let car1 = {
name: "Audi"
}

let car2 = {
name: "Audi"
}

console.log(car1 === car1);
//output: true

console.log(car1 === car2);
//output: false

console.log(car1 !== car1);
//output: false

console.log(car1 !== car2);
//output: true
Объяснение:

В этом примере первый вывод верен , потому что car1 и car1 ссылаются на один и тот же экземпляр, тогда как второй вывод ложен , так как car1 и car2 относятся к разным экземплярам.

Использование операндов == и === в JavaScript
Несмотря на разницу между == и === в Javascript, операторы == и === используются для сравнения операндов .

Операнды == и === используются для сравнения двух значений.

Операнд == неточно сравнивает два значения, поэтому его можно использовать в случаях, когда тип данных операнда не важен. Например, представьте себе запись в форме, в которой вы спрашиваете учащихся, какой у них номер списка. Возможно, что кто-то введет его в виде строки , а кто-то в виде числа . В таких случаях мы можем использовать оператор == для проверки данных без базы данных.

Операнд === строго сравнивает два значения, поэтому он используется там, где важен тип данных операнда . Представьте себе онлайн-соревнование по программированию, где ответом является число в строковом формате. В этом случае мы будем использовать оператор === для сравнения и проверки ответов.

Сравнение и разница между == и === в Javascript
S.no == ===
1 Сравнивает два операнда Сравнивает два операнда
2 возвращает true , если операнды имеют одинаковый тип данных и одно и то же значение, возвращает false , если значения различаются. возвращает true , только если операнды имеют одинаковый тип данных и одно и то же значение, в противном случае возвращает false
3 В случае, если оба операнда имеют разные типы данных, он выполняет преобразование типов одного операнда, чтобы сделать типы данных операндов одинаковыми. Если оба операнда относятся к разным типам данных, преобразование типов операндов не выполняется.
4 Также известно как свободное равенство Также известно как строгое равенство
5 Следует абстрактному алгоритму сравнения равенства Следует строгому алгоритму сравнения равенства
Примеры
Ниже приведены некоторые примеры поведения оператора == :
console.log(2 == 2);
//output: true, because 2 and 2 are the same.

console.log(2 == '2');
//output: true, because the string '2' gets converted into a number before comparison.

console.log(false == false);
//output: true, as the operands are the same.

console.log( false == 0 );
//output: true, as the == operator does the type conversion, and then the '0' entity is treated as false.

let student1 = {
name: 'John',
class: 10
}

let student2 = {
name: 'John',
class: 10
}

let student3 = {
name: 'Peter',
class: 10
}

console.log(student1 == student1);
//output: true, as both the operands refer to the same object.

console.log(student1 == student2);
//output: false, as student1 and student2 refer to different objects.

console.log(student1 == student3);
//output: false, as student1 and student3 refer to different objects.
Ниже приведены некоторые примеры поведения оператора === :
console.log(2 === 2);
//output: true, because 2 and 2 have the same data type and value

console.log(2 === '2');
//output: false, because the === operator doesn't do the type conversion and the data types of both operands are different.

console.log(false === false);
//output: true, as the operands have the same data type and value.

console.log( false === 0 );
//output: false, as the === operator doesn't do the type conversion and the data types of both operands are different.

let student1 = {
name: 'John',
class: 10
}

let student2 = {
name: 'John',
class: 10
}

let student3 = {
name: 'Peter',
class: 10
}

console.log(student1 === student1);
//output: true, as both the operands refer to the same object.

console.log(student1 === student2);
//output: false, as student1 and student2 refer to different objects.

console.log(student1 === student3);
//output: false, as student1 and student3 refer to different objects.
Заключение
Операторы == и === используются для проверки равенства двух операндов.

Операторы != и !== используются для проверки неравенства двух операндов.

== и != — это нестрогие операторы равенства , т. е. они выполняют преобразование типов операндов перед сравнением.

=== и !== являются операторами строгого равенства , т. е. они сравнивают операнды без преобразования типов и возвращают false (в случае оператора === ), даже если типы данных не совпадают.

Операторы == и != используются в ситуациях, когда тип данных операндов не является основным фактором при сравнении, и его можно изменить, чтобы разрешить сравнение двух операндов. Например, оператор == может использоваться для сверки номера допуска студента (полученного через форму и может быть строковым или числовым типом) с номерами допуска, хранящимися в базе данных (в числовом типе данных).

Операторы === и !== используются в ситуациях, когда тип данных операндов важен для сравнения, и его нельзя изменить, чтобы сравнение произошло. например, в соревновании по кодированию ответ может быть либо числовым, либо строковым, но согласно правилам баллы присуждаются только за ответы строкового типа. В этом случае мы будем использовать оператор === для сравнения ответов пользователя с ответом, хранящимся в нашей базе данных.