break
Оператор break прерывает выполнение текущего цикла, оператора множественного выбора switch или блочного выражения с меткой. Выполнение кода продолжается с конструкции, следующей за прерванной.

Интерактивный пример

Синтаксис
break [label];
Copy to Clipboard
label Необязательный
Идентификатор связанной метки. Если прерываемое выражение не цикл или switch, указание метки обязательно.

Описание
С помощью оператора break можно прервать выполнение блочного выражения с меткой. В таком случае break должен находиться внутри блока кода с указанной меткой. Само блочное выражение может быть любым, а не только циклом.

Использование break, с меткой или без, невозможно внутри функции, которая вложена в прерываемые цикл, конструкцию switch или блочное выражение с меткой.

Примеры
break в цикле while
Следующая функция использует оператор break для выхода из цикла while, когда i станет равно 3, и возвращает значение 3 \* x.

function testBreak(x) {
var i = 0;

while (i < 6) {
if (i == 3) {
break;
}
i += 1;
}

return i \* x;
}
Copy to Clipboard
break в конструкции switch
В примере оператор break прервёт выполнение switch сразу после выполнения кода в совпавшем case.

const food = "sushi";

switch (food) {
case "sushi":
console.log("Sushi is originally from Japan.");
break;
case "pizza":
console.log("Pizza is originally from Italy.");
break;
default:
console.log("I have never heard of that dish.");
break;
}
Copy to Clipboard
break в блочном выражении с указанной меткой
В примере используется оператор break с меткой. В таком случае break обязательно должен быть вложен в блок кода с той же меткой. Обратите внимание, что inner_block вложен в outer_block.

outer_block: {
inner_block: {
console.log('1');
break outer_block; // break прервёт выполнение кода как в inner_block, так и в outer_block
console.log(':-('); // не будет выполнено
}
console.log('2'); // не будет выполнено
}
Copy to Clipboard
break вне блочного выражения с указанной меткой
В примере также используется break с меткой, но код будет выполнен с ошибкой SyntaxError, потому что break находится в блоке с меткой block_1, а прерывается выполнение блока кода с меткой block_2. Ещё раз, в таком случае break обязательно должен быть вложен в блок кода с меткой, выполнение которого требуется прервать.

block_1: {
console.log('1');
break block_2; // SyntaxError: label not found
}

block_2: {
console.log('2');
}
Copy to Clipboard
break внутри функций
Код в примерах также будет выполнен с ошибкой SyntaxError, потому что в обоих случаях break находится в теле функции, вложенной в прерываемый цикл или прерываемое блочное выражение с меткой.

function testBreak(x) {
var i = 0;

while (i < 6) {
if (i == 3) {
(function() {
break;
})();
}
i += 1;
}

return i \* x;
}

testBreak(1); // SyntaxError: Illegal break statement
Copy to Clipboard
block_1: {
console.log('1');
( function() {
break block_1; // SyntaxError: Undefined label 'block_1'
})();
}
