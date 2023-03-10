for...in
Цикл for...in проходит через перечисляемые свойства объекта. Он пройдёт по каждому отдельному элементу.

Синтаксис
for (variable in object) {...
}
variable
Другое (очередное) имя свойства назначается переменной на каждой итерации.

object
Объект, по чьим свойствам мы проходим

Описание
Цикл for...in проходит только по перечисляемым свойствам. Объекты, созданные встроенными конструкторами, такими как Array и Object имеют неперечисляемые свойства от Object.prototype и String.prototype, например, от String-это indexOf(), а от Object - метод toString(). Цикл пройдёт по всем перечисляемым свойствам объекта, а также тем, что он унаследует от конструктора прототипа (свойства объекта в цепи прототипа).

Удаление, добавление и модификация свойств
Цикл for...in проходит по свойствам в произвольном порядке (см. оператор delete для того, чтобы узнать почему порядок прохода может отличаться в зависимости от браузера). Если свойство изменяется за одну итерацию, а затем изменяется снова, его значением в цикле является его последнее значение. Свойство, удалённое до того, как до него дошёл цикл, не будет участвовать в нём. Свойства добавленные в объекты в цикле могут быть пропущены. В общем, лучше не добавлять, изменять или удалять свойство из объекта во время итерации, если по нему ещё не прошли. Нет гарантии, что добавленное свойство будет посещено циклом, низменное после проведения изменений, а удалённое после удаления.

Проход по массиву и for...in
Примечание: Замечание: for...in не следует использовать для Array, где важен порядок индексов.

Индексы массива - это перечисляемые свойства с целочисленными именами, в остальном они аналогичны свойствам объектов. Нет гарантии, что for...in будет возвращать индексы в конкретном порядке. Цикл for...in возвращает все перечисляемые свойства, включая имеющие нецелочислиненные имена и наследуемые.

Так как порядок прохода зависит от реализации, проход по массиву может не произойти в правильном порядке. Следовательно лучше с числовыми индексами использовать циклы for, Array.prototype.forEach() или for...of, когда проходим по массивам, где важен порядок доступа к свойствам.

Проход только через собственные свойства.
Если вы хотите рассматривать только свойства самого объекта, а не его прототипов, используйте getOwnPropertyNames(), hasOwnProperty() или propertyIsEnumerable. Кроме того, если вы знаете, что не будет вмешательства в код извне, вы можете расширить встроенные прототипы методом проверки.

Примеры
Следующее выражение берёт аргументом объект. Затем проходит по всем перечислимым свойствам объекта и возвращает строку содержащую имена свойств и их значения.

var obj = {a:1, b:2, c:3};

for (var prop in obj) {
console.log("obj." + prop + " = " + obj[prop]);
}

// Выведет:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
Copy to Clipboard
Следующая функция иллюстрирует использование hasOwnProperty(): наследуемые свойства не отображаются

var triangle = {a:1, b:2, c:3};

function ColoredTriangle() {
this.color = "red";
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (var prop in obj) {
if( obj.hasOwnProperty( prop ) ) {
console.log("obj." + prop + " = " + obj[prop]);
}
}

// Выведет:
// "obj.color = red"
