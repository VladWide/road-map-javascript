Генераторы JavaScript
Что вы узнаете на этой странице?
Предыстория генераторов
Что такое генератор
Как работают генераторы
Ключевое yieldслово

Итерация
Итерации
Итерация
Расширенные генераторы

Вступление
Несомненно, прохождение предопределенных итерируемых последовательностей, таких как строки, массивы, HTMLCollectionсписки, является удивительным и, по сути, общей задачей большинства приложений.

Но не было бы еще более удивительным, если бы мы могли каким -то образом генерировать итерируемые последовательности на ходу.

Нет, нет, мы не собирались делать заданные объекты итерируемыми, определяя для @@iterator()них метод или генерируя массив или строку. Скорее, мы имели в виду возможность генерировать последовательность без необходимости сохранять ее всю сразу, как это происходит в массиве.

Например, предположим, что мы хотим работать с последовательностью всех четных чисел до одного миллиона, или со всеми квадратными числами меньше семидесяти тысяч, или, если уж на то пошло, со всеми простыми числами меньше заданного числа N.

Во всех этих случаях мы не хотим создавать нужные последовательности сразу, а генерируем их одну за другой.

Итак, вы можете придумать какой-либо способ сделать это. Что ж, нам нужен генератор...

Что такое генератор?
Прежде чем мы начнем, знайте, что мы не ответим на этот вопрос, дав строгое определение генераторов. Скорее, мы начнем медленно и постепенно будем приближаться к строгому определению в конце этого раздела.

Для вас важно оценить каждый аспект генератора и быть в состоянии использовать это, чтобы формально определить, что такое генератор.

Итак, начнем...

По сути:

Все, что имеет возможность определять последовательность, является генератором.
Очевидно, что упомянутое здесь «все» может быть только функцией, поскольку все другие типы данных не могут определять последовательность.

Это связано с тем, что только функция может быть вызвана , передана в настраиваемых аргументах и, следовательно, выдаст некоторый результат. Ни один другой тип данных не может этого сделать.

В следующем коде показана простая функция генератора. Он принимает аргумент и генерирует последовательность положительных целых чисел до этого аргумента:

function positiveInts(n) {
var i = 1;
var max = (n < 1 || typeof n !== "number") ? 1 : n;
return {
next: function() {
if (i > max) return {value: undefined, done: true}
return {value: i++, done: false}
}
}
}
Чтобы быть очень точным, функция принимает аргумент и возвращает объект итератора, который будет соответствовать этому номеру аргумента.

Оператор в строке 5 проверяет, iне было ли выше max, и если да, то возвращает объект{value: undefined, done: true}

Если мы создадим seqитератор, используя приведенную выше функцию, он даст следующие результаты:

var seq = positiveInts(3);

seq.next(); // {value: 1, done: false}
seq.next(); // {value: 2, done: false}
seq.next(); // {value: 3, done: false}
seq.next(); // {value: undefined, done: true}
Обратите внимание, что сгенерированная последовательность не существует нигде одновременно. Вместо этого он определяется лениво , т. е. каждое значение существует в памяти по одному. Итератор, возвращаемый функцией, positiveInts()допускает такое поведение.

Всегда помните эту идею — генератор просто определяет последовательность с помощью объекта итератора; он НЕ создает последовательность сразу.

Если генератор не работает с итератором, то, по спецификации, это не генератор и, следовательно , не так уж круто!

Генераторы должны быть крутыми!

Помните, что слово «генератор» имеет особое значение в JavaScript, которое обсуждалось выше и будет обсуждаться в следующем разделе.

Если у вас есть функция, которая генерирует что-то вроде массива, HTML-разметки или чего-то еще, эту функцию, безусловно, можно назвать генератором (по определению этого слова); но имейте в виду, что этот генератор не будет генератором, который JavaScript определяет в своей спецификации.
Теперь генератор, который мы создали выше, просто позволил нам сгенерировать любой понравившийся объект итератора, который в конечном итоге может определить последовательность положительных целых чисел. Однако генератор не допускал прямого повторения последовательности, которую он определил.

Что это означает, подчеркивается следующим образом:

var seq = positiveInts(3);

// throws an error
for (var num of seq) {
console.log(num);
}
Посмотрите, как мы не можем перебрать seq, несмотря на то, что он косвенно определяет последовательность . Мы не можем этого сделать, потому что у него нет никакого @@iterator()метода.

По спецификации,

Генераторная функция определяет не просто последовательность, а итерируемую последовательность .
Это означает, что все, что возвращает генератор, также может быть повторено.

Теперь эти итерируемые последовательности не похожи на строки, массивы или что-то еще, что существует все одновременно — вместо этого они создаются на ходу один за другим , они НЕ существуют все одновременно .

С технической точки зрения мы называем это ленивой оценкой .

Ленивая оценка означает, что значения создаются только тогда, когда они необходимы, а не все сразу. Этот аспект не должен вас удивлять — просто так работают итераторы! Вы вызываете next()метод, и только после этого оценивается следующий элемент последовательности.

Настоящий вопрос заключается в том, как сделать возвращаемое генератором значение итерируемым. Ну, это чертовски много думать и кодировать!

Теперь, когда мы рассмотрели всю теорию генератора, давайте сведем все к строгому определению, о котором мы говорили в начале этого раздела.

Генераторы — это функции, которые возвращают итераторы для ленивой генерации итерируемых последовательностей.
Итак, надеюсь, теперь вам ясно представление о том, что такое генератор.

Используя генераторы, мы можем генерировать сложные последовательности, такие как простые числа, числа Фибоначчи и так далее. Мы можем даже запросить эти последовательности в соответствии с нашими потребностями, например, получить только первые пять простых чисел или первую сотню вымышленных чисел.

Тем не менее, JavaScript несколько не любит этот сложный беспорядок генераторов кода по старинке. ES6 предоставляет простой набор инструментов и удобный синтаксис для создания функций-генераторов, которые привносят в язык новую модель выполнения.

Давайте погрузимся в это...

Генераторы в JavaScript
Как мы только что увидели, кодирование логики даже простого генератора может потребовать кофе , особенно для тех, кто плохо знаком с продвинутой стороной JavaScript.

Чтобы получить представление, просмотрите приведенный выше код. Мы только пытаемся определить последовательность положительных целых чисел до числа N, но тем не менее код выглядит так, как будто мы решаем в нем какую-то ракетостроительную науку следующего уровня.

Способ, которым JavaScript смягчает это, заключается в введении специального типа функции, предназначенной для создания итерируемых последовательностей.

И вы поняли — это называется генераторной функцией !

Функции-генераторы создаются точно так же, как мы создаем обычные функции, с одним небольшим дополнением: за functionключевым словом следует символ звездочки\* .

Это то, что отличает функцию генератора от нормальной функции.

Ниже показан общий вид генератора:

function\* functionName() {
// function body
}
Не обязательно ставить звездочку сразу после functionключевого слова. Мы также можем поставить его после добавления пробела.

Что необходимо, так это просто поставить символ звездочки где-то между functionключевым словом и именем функции — все зависит от вас, сколько пробелов вы хотите добавить между ними!
Однако только это не будет удивляться. В этой общей форме, лежащей в основе генераторов, отсутствует одна важная вещь, а именно yieldключевое слово .

Ключевое yieldслово в основном определяет значение в итерируемой последовательности, определенной генератором. Каждое yieldзначение ed фактически является значением последовательности в том порядке, в котором оно появляется в генераторе.

Что ж, о ключевом слове можно еще многое рассказать yield, особенно о его поведении при паузе. Но прежде всего давайте рассмотрим очень простой пример.

Далее мы создаем функцию-генератор для определения последовательности 1, 3, 5, используя yieldключевое слово:

function\* sequence() {
yield 1;
yield 3;
yield 5;
}
var seq = sequence();

seq.next(); // {value: 1, done: false}
seq.next(); // {value: 3, done: false}
seq.next(); // {value: 5, done: false}
seq.next(); // {value: undefined, done: true}
Согласитесь, не так уж сложно понять, что происходит в этом коде.

Каждое yieldключевое слово определяет следующее значение в последовательности, а поскольку у нас есть три yieldключевых слова, у нас есть три значения в последовательности: 1, 3и 5соответственно.

Давайте посмотрим, что происходит, когда мы используем эту последовательность в for...ofцикле:

var seq = sequence();

// works!
for (var num of seq) {
console.log(num);
}
1
3
5
Оно работает! Цикл for...ofможет перебирать вызванную функцию генератора.

Так что именно здесь происходит?

Пришло время отправиться к команде объяснений!

Как работают генераторы?
Давайте рассмотрим код, показанный выше:

function\* sequence() {
yield 1;
yield 3;
yield 5;
}

var seq = sequence();
А теперь разберем....

Когда sequence()вызывается в строке 7, интерпретатор понимает, что это вызов функции-генератора, и точно так же сразу возвращает итератор — тело функции не выполняется даже на один процент .

Как мы можем это подтвердить? Ну не сложно...

function\* sequence() {
console.log("Started!");
yield 1;
yield 3;
yield 5;
}

var seq = sequence(); // nothing logged
sequence()вызывается в строке 8, но журнал консоли в строке 2 не создается. Это подтверждает, что функция генератора не выполняется немедленно.

Скорее итератор возвращается вызовом генератора.

Этот возвращаемый итератор последовательно перебирает yieldзначения, определенные в генераторе, каждый раз, когда next()вызывается его метод.

В разделе выше мы использовали этот итератор вручную, многократно вызывая его seq.next()четыре раза. Как и ожидалось, мы получили три объекта, оборачивающих три значения 1и 3соответственно 5в первых трех seq.next()вызовах. В последнем вызове мы явно получили объект {value: undefined, done: true}.

Когда next()метод вызывается в первый раз на итераторе seq, выполнение начинается внутри генератора и доходит до первого yieldключевого слова, после чего оно приостанавливается.
Рассмотрим код ниже:

function\* sequence() {
console.log("First!");
yield 1;

console.log("Second!");
yield 3;

console.log("Third!");
yield 5;

console.log("Done!");
}

var seq = sequence();
В тот момент, когда мы вызываем seq.next(), вот что происходит:

console.log(seq.next());
См. код выше ↑

Первый!
{значение: 1, выполнено: ложь}
Выполнение возобновляется внутри генератора, начиная со строки 2. Сначала console.log("First!")выполняется, а затем выполнение переходит на вторую строку, где у нас есть yieldключевое слово.

Момент yieldвстречается, выполнение приостанавливается, эта точка сохраняется внутри функции-генератора, и, наконец, значение 1, присвоенное valueсвойству объекта, которое должно быть возвращено seq.next()вызовом.

Поскольку мы не пошли дальше, чтобы подтвердить, вышли ли мы из yield, doneустановлено значение false.

Наконец, мы {value: 1, done: false}регистрируем объект.

Двигаемся дальше, когда мы звоним seq.next()во второй раз, вот что происходит.

console.log(seq.next());
См. код выше ↑

Второй!
{значение: 3, выполнено: ложь}
Выполнение возобновляется со строки 2 — прямо с того места, где оно было приостановлено ранее.

Вскоре мы увидим, как это определяет поведение другого генератора, в разделе ниже.
Он продолжается, сталкивается с оператором журнала, создает соответствующий журнал "Second!"и затем переходит к строке 6, где у нас есть еще один файл yield.

Момент yieldвстречается, выполнение приостанавливается, эта точка снова сохраняется внутри функции-генератора, и, наконец, значение 3, присвоенное valueсвойству объекта, которое должно быть возвращено seq.next()вызовом.

Опять же, поскольку мы не знаем, действительно ли мы вышли из этого состояния, yieldмы предполагаем, что еще не закончили, и поэтому устанавливаем doneзначение false.

Наконец, мы {value: 3, done: false}регистрируем объект.

Вызов seq.next()в третий раз дает нам следующий результат:

console.log(seq.next());
См. код выше ↑

В третьих!
{значение: 5, готово: ложь}
Выполнение возобновляется со строки 6 — прямо с того места, где оно было приостановлено ранее.

Он продолжается, сталкивается с третьим оператором журнала, создает соответствующий журнал "Third!"и затем переходит к строке 9, где у нас есть еще один yield.

Как и раньше, момент yieldвстречается, выполнение приостанавливается, эта точка сохраняется внутри функции-генератора и, наконец, значение 5, присвоенное valueсвойству объекта, которое должно быть возвращено seq.next()вызовом.

Поскольку мы еще даже не знаем, действительно ли мы вышли из yield, мы предполагаем, что еще не закончили, и поэтому устанавливаем doneзначение false.

Наконец, мы {value: 5, done: false}регистрируем объект.

Чтобы покончить со всем этим, когда мы звоним seq.next()в четвертый (и последний) раз, вот что происходит:

console.log(seq.next());
См. код выше ↑

Сделанный!
{значение: не определено, выполнено: правда}
Выполнение возобновляется со строки 9 — прямо с того места, где оно было приостановлено ранее.

Он продолжает, натыкается на оператор журнала, делает соответствующий журнал "Done!", а затем, понимая, что функция завершилась, выходит из функции после выполнения следующего действия.

Свойство valueобъекта, который должен быть возвращен seq.next()вызовом, устанавливается равным , undefinedа поскольку функция sequence()завершена, т. е. мы вышли из yield, doneустанавливается равной true.

Наконец, мы {value: undefined, done: true}регистрируем объект.

Простой фрагмент кода, но огромное количество пояснений к нему!

В этом и прелесть генераторов — они просты по синтаксису, но очень сложны в работе.

Что следует отметить
Теперь есть пара вещей, которые мы должны принять к сведению и извлечь из длинного объяснения выше:

Метод next()служит для возобновления выполнения внутри генератора.
Ключевое yieldслово служит для приостановки выполнения внутри генератора.

Ключевое yieldслово
Конечно, как мы видели до сих пор, yieldимеет какое-то экстраординарное поведение при работе с интерпретатором. Самое главное, он приостанавливает выполнение и помещает следующее выражение в valueсвойство соответствующего next()итератора.

В разделе выше мы очень точно разобрали это ключевое слово, показав, как именно циклы выполнения приостанавливаются и возобновляются внутри генератора.

Однако пример, на котором мы основывали все наше обсуждение, был очень простым, недостаточным, чтобы прояснить многие странные вещи о yield.

Далее мы продемонстрируем еще пару примеров, прежде чем, наконец, перейти к изучению другого поведения yield, тесно связанного с next()методом, вызываемым с аргументом.

Итак, давайте погрузимся в примеры....

Бесконечные последовательности
Предположим, у нас есть генератор, определяющий последовательность всех натуральных чисел — от 1 до бесконечности. Один из способов определить генератор — использовать forцикл, как показано ниже.

function\* positiveInts() {
for (var i = 0; true; i++) {
yield i;
}
}

var seq = positiveInts();
Поскольку последовательность идет до бесконечности, на самом деле нет никакой границы, на которой мы должны остановиться; аналогично контрольная часть forцикла устанавливается на true. Цикл никогда не должен заканчиваться, поэтому у него должно быть условие, которое всегда оценивается как true.

Такой тип цикла обычно известен как бесконечный цикл .
Теперь, когда мы вызываем seq.next()в первый раз, в генераторе официально начинается выполнение; идет до forпетли; объявляется iкак 1, выполняет проверку (которая тривиально всегда true) и затем переходит к телу цикла.

Здесь он встречает yieldключевое слово и, следовательно, оценивает следующее за ним выражение, т.е. i, которое разрешается в 1.

После оценки выполнение приостанавливается, и это число 1устанавливается как номер valueобъекта, представленного seq.next()вызовом, который мы сделали выше.

console.log(seq.next()); // first time
{значение: 1, выполнено: ложь}
Обратите внимание, что хотя forцикл был бесконечным, yieldвыполнение прерывается, что предотвращает сбой программы.

Цикл повторяется только один раз (на самом деле даже первая итерация не была завершена) после того, как мы вызываем seq.next()- выполнение входит в цикл и доходит только до строки 3, прежде чем, в конце концов, будет приостановлено и выведено из него.

Несмотря на это, такое прерывание не окажет никакого влияния на цикл в целом. Вызов seq.next()в последующих случаях возобновит выполнение прямо с того места, где оно было приостановлено до этого , и, таким образом, сохранит итерацию в нормальном потоке .

Например, если мы позвоним seq.next()во второй раз,

console.log(seq.next()); // second time
выполнение возобновится прямо с ранее приостановленной точки (выделенная строка ниже) и продолжится до завершения первой отложенной итерации.

function\* positiveInts() {
for (var i = 0; true; i++) {
yield i; // execution resumes right from here
}
}
После завершения первой итерации i++выполняется перед тем, как снова включить тело цикла в процесс выполнения.

И, как и раньше, первое слово в теле цикла встречается с yieldключевым словом; который вычисляет выражение, следующее за ним, устанавливает valueсоответствующий next()объект равным ему и, наконец, приостанавливает выполнение.

Таким образом, мы получаем следующий лог:

{значение: 2, выполнено: ложь}
И так можно до бесконечности!

Ну, очевидно, значения начнут становиться, Infinityкак только число Number.MAX_VALUEбудет превышено. Фактически, они начнут становиться бессмысленными задолго до этого, т.е. когда будет превышено максимальное безопасное целое число, представленное Number.MAX_SAFE_INTEGER

Вы можете использовать BigInt()в качестве альтернативы, но имейте в виду его подводные камни!
Теперь из-за того, что эта последовательность нигде не заканчивается, использование оператора Generator seqв for...ofцикле или в расширении - там, где ожидается итерация - в конечном итоге приведет к сбою браузера.

Это связано с тем, что for...ofцикл повторяется до тех пор, пока итератор не выдаст объект с doneравным true. Поскольку в приведенном выше примере с генератором такая точка не наступает, внутренний цикл, выполняемый by for...of, никогда не закончится и станет причиной окончательного сбоя браузера!

Это продвинутый JavaScript!

Аргументы для next()принятия yieldзначений
Двигаясь дальше, есть еще один чрезвычайно важный аспект yieldleft, который вы должны знать, чтобы понять, что происходит в следующем коде:

function\* gen() {
yield yield 10;
}

var seq = gen();

seq.next(); // {value: 10, done: false}
seq.next(30); // {value: 30, done: false}
seq.next(); // {value: undefined, done: true}
Посмотрим в чем дело....

Каждый раз, когда next()методу передается аргумент, он заменяет все соответствующее yield выражение этим аргументом.
Обратите внимание на слово «соответствует» здесь — оно говорит нам, что замена происходит только в том случае, если next()вызов возобновляет выполнение внутри генератора с точки, в yieldкоторой он был ранее приостановлен.

Это означает, что, поскольку первыйnext() вызов не возобновляет выполнение с ранее заданной точки (скорее он возобновляет выполнение с начала генератора), он не будет выполнять никаких замен .

Поистине, понимание yieldозначает понимание очень утомительных подробностей!

Рассмотрим следующий код, чтобы понять, что мы имеем в виду:

var x;

function\* gen() {
x = yield 30;
}

var seq = gen();
Прежде чем мы объясним это, попробуйте вывести последовательность, определяемую здесь функцией-генератором gen().

Это просто одно значение - 30, что означает, что итератор, возвращаемый вызовом gen(), завершится сразу после первого next()вызова.

В любом случае, давайте теперь вернемся к пояснительной части...

Когда мы звоним seq.next()(в первый раз), вот что происходит (теперь вы должны быть в состоянии сказать это сами!):

Выполнение начинается в генераторе.
Встречается выражение присваивания, и, таким образом, вычисление начинается с правой стороны =знака.
A yieldвстречается, и поэтому вычисляется выражение, следующее за ним. (Поднимитесь выше и посмотрите, что это за выражение!)
Результат этой оценки, который тривиально 30, передается в next()свойство , valueи, наконец, выполнение приостанавливается.
Первый seq.next()вызов возвращает объект, показанный ниже:

{значение: 30, готово: ложь}
После этого звонить seq.next()второй раз, с аргументом, вот о чем весь сыр-бор!

seq.next(10); // second time
Как мы можем судить, этот вызов вернет объект {value: undefined, done: true}, так как мы вышли из yield; фактически в конце gen()функции.

Тем не менее, это суждение здесь не является реальным - настоящее дело - это значение переменной x, которое оказывается 10после завершения этого второго seq.next(10)вызова.

Как это стало 10? Ну интересная история...

Момент seq.next(10)вызывается во второй раз, выполнение возобновляется с выделенной ниже части:

function\* gen() {
x = yield 30;
}
Поскольку эта часть обозначает a yield, все выделенное выражение заменяется значением 10и, следовательно, присваивается глобальной переменной x.

Вы можете думать об этом так:

function\* gen() {
x = yield 30 10;
}
После присваивания функция gen()завершается, и поэтому мы получаем объект {value: undefined, done: true}, возвращаемый вторым seq.next()вызовом.
Таким образом, после второго seq.next()вызова xравно 10.

В этом силаyield — он может использовать аргумент, переданный next()методу, для определения следующего значения в последовательности.

Разве это не великолепно?

В устаревших реализациях эта идея передачи значения next()осуществлялась с помощью метода send(). Он вел себя именно так, как работает современный next()метод. Однако на данный момент он устарел!
Попробуйте решить следующую задачу, чтобы закрепить свое понимание yieldключевого слова.

Четко укажите объекты, которые будут возвращены первым, вторым, третьим и четвертым seq.next()вызовами, показанными ниже.

function\* gen() {
var a = yield 10;
var b = yield a + 5;
yield b;
}

var seq = gen();
// what will each of these return?
seq.next(15);
seq.next(60);
seq.next(32);
seq.next(4);
Вы должны дать ответ на каждый звонок в форме .{value: someValue, done: isDone}
