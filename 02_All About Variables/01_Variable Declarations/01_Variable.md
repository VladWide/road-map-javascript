Переменные
JavaScript-приложению обычно нужно работать с информацией. Например:

Интернет-магазин – информация может включать продаваемые товары и корзину покупок.
Чат – информация может включать пользователей, сообщения и многое другое.
Переменные используются для хранения этой информации.

Переменная
Переменная – это «именованное хранилище» для данных. Мы можем использовать переменные для хранения товаров, посетителей и других данных.

Для создания переменной в JavaScript используйте ключевое слово let.

Приведённая ниже инструкция создаёт (другими словами: объявляет или определяет) переменную с именем «message»:

let message;
Теперь можно поместить в неё данные, используя оператор присваивания =:

let message;

message = 'Hello'; // сохранить строку 'Hello' в переменной с именем message
Строка сохраняется в области памяти, связанной с переменной. Мы можем получить к ней доступ, используя имя переменной:

let message;
message = 'Hello!';

alert(message); // показывает содержимое переменной
Для краткости можно совместить объявление переменной и запись данных в одну строку:

let message = 'Hello!'; // определяем переменную и присваиваем ей значение

alert(message); // Hello!
Мы также можем объявить несколько переменных в одной строке:

let user = 'John', age = 25, message = 'Hello';
Такой способ может показаться короче, но мы не рекомендуем его. Для лучшей читаемости объявляйте каждую переменную на новой строке.

Многострочный вариант немного длиннее, но легче для чтения:

let user = 'John';
let age = 25;
let message = 'Hello';
Некоторые люди также определяют несколько переменных в таком вот многострочном стиле:

let user = 'John',
  age = 25,
  message = 'Hello';
…Или даже с запятой в начале строки:

let user = 'John'
  , age = 25
  , message = 'Hello';
В принципе, все эти варианты работают одинаково. Так что это вопрос личного вкуса и эстетики.

var вместо let
В старых скриптах вы также можете найти другое ключевое слово: var вместо let:

var message = 'Hello';
Ключевое слово var – почти то же самое, что и let. Оно объявляет переменную, но немного по-другому, «устаревшим» способом.

Есть тонкие различия между let и var, но они пока не имеют для нас значения. Мы подробно рассмотрим их в главе Устаревшее ключевое слово "var".

Аналогия из жизни
Мы легко поймём концепцию «переменной», если представим её в виде «коробки» для данных с уникальным названием на ней.

Например, переменную message можно представить как коробку с названием "message" и значением "Hello!" внутри:


Мы можем положить любое значение в коробку.

Мы также можем изменить его столько раз, сколько захотим:

let message;

message = 'Hello!';

message = 'World!'; // значение изменено

alert(message);
При изменении значения старые данные удаляются из переменной:


Мы также можем объявить две переменные и скопировать данные из одной в другую.

let hello = 'Hello world!';

let message;

// копируем значение 'Hello world' из переменной hello в переменную message
message = hello;

// теперь две переменные содержат одинаковые данные
alert(hello); // Hello world!
alert(message); // Hello world!
Повторное объявление вызывает ошибку
Переменная может быть объявлена только один раз.

Повторное объявление той же переменной является ошибкой:

let message = "Это";

// повторение ключевого слова 'let' приводит к ошибке
let message = "Другое"; // SyntaxError: 'message' has already been declared
Поэтому следует объявлять переменную только один раз и затем использовать её уже без let.

Функциональные языки программирования
Примечательно, что существуют функциональные языки программирования, такие как Scala или Erlang, которые запрещают изменять значение переменной.

В таких языках однажды сохранённое «в коробку» значение остаётся там навсегда. Если нам нужно сохранить что-то другое, язык заставляет нас создать новую коробку (объявить новую переменную). Мы не можем использовать старую переменную.

Хотя на первый взгляд это может показаться немного странным, эти языки вполне подходят для серьёзной разработки. Более того, есть такая область, как параллельные вычисления, где это ограничение даёт определённые преимущества. Изучение такого языка (даже если вы не планируете использовать его в ближайшее время) рекомендуется для расширения кругозора.

Имена переменных
В JavaScript есть два ограничения, касающиеся имён переменных:

Имя переменной должно содержать только буквы, цифры или символы $ и _.
Первый символ не должен быть цифрой.
Примеры допустимых имён:

let userName;
let test123;
Если имя содержит несколько слов, обычно используется верблюжья нотация, то есть, слова следуют одно за другим, где каждое следующее слово начинается с заглавной буквы: myVeryLongName.

Самое интересное – знак доллара '$' и подчёркивание '_' также можно использовать в названиях. Это обычные символы, как и буквы, без какого-либо особого значения.

Эти имена являются допустимыми:

let $ = 1; // объявили переменную с именем "$"
let _ = 2; // а теперь переменную с именем "_"

alert($ + _); // 3
Примеры неправильных имён переменных:

let 1a; // не может начинаться с цифры

let my-name; // дефис '-' не разрешён в имени
Регистр имеет значение
Переменные с именами apple и APPLE – это две разные переменные.

Нелатинские буквы разрешены, но не рекомендуются
Можно использовать любой язык, включая кириллицу или даже иероглифы, например:

let имя = '...';
let 我 = '...';
Технически здесь нет ошибки, такие имена разрешены, но есть международная традиция использовать английский язык в именах переменных. Даже если мы пишем небольшой скрипт, у него может быть долгая жизнь впереди. Людям из других стран, возможно, придётся прочесть его не один раз.

Зарезервированные имена
Существует список зарезервированных слов, которые нельзя использовать в качестве имён переменных, потому что они используются самим языком.

Например: let, class, return и function зарезервированы.

Приведённый ниже код даёт синтаксическую ошибку:

let let = 5; // нельзя назвать переменную "let", ошибка!
let return = 5; // также нельзя назвать переменную "return", ошибка!
Создание переменной без использования use strict
Обычно нам нужно определить переменную перед её использованием. Но в старые времена было технически возможно создать переменную простым присвоением значения без использования let. Это все ещё работает, если мы не включаем use strict в наших файлах, чтобы обеспечить совместимость со старыми скриптами.

// заметка: "use strict" в этом примере не используется

num = 5; // если переменная "num" раньше не существовала, она создаётся

alert(num); // 5
Это плохая практика, которая приводит к ошибке в строгом режиме:

"use strict";

num = 5; // ошибка: num is not defined
Константы
Чтобы объявить константную, то есть, неизменяемую переменную, используйте const вместо let:

const myBirthday = '18.04.1982';
Переменные, объявленные с помощью const, называются «константами». Их нельзя изменить. Попытка сделать это приведёт к ошибке:

const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // ошибка, константу нельзя перезаписать!
Если программист уверен, что переменная никогда не будет меняться, он может гарантировать это и наглядно донести до каждого, объявив её через const.

Константы в верхнем регистре
Широко распространена практика использования констант в качестве псевдонимов для трудно запоминаемых значений, которые известны до начала исполнения скрипта.

Названия таких констант пишутся с использованием заглавных букв и подчёркивания.

Например, сделаем константы для различных цветов в «шестнадцатеричном формате»:

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...когда нам нужно выбрать цвет
let color = COLOR_ORANGE;
alert(color); // #FF7F00
Преимущества:

COLOR_ORANGE гораздо легче запомнить, чем "#FF7F00".
Гораздо легче допустить ошибку при вводе "#FF7F00", чем при вводе COLOR_ORANGE.
При чтении кода COLOR_ORANGE намного понятнее, чем #FF7F00.
Когда мы должны использовать для констант заглавные буквы, а когда называть их нормально? Давайте разберёмся и с этим.

Название «константа» просто означает, что значение переменной никогда не меняется. Но есть константы, которые известны до выполнения (например, шестнадцатеричное значение для красного цвета), а есть константы, которые вычисляются во время выполнения сценария, но не изменяются после их первоначального назначения.

Например:

const pageLoadTime = /* время, потраченное на загрузку веб-страницы */;
Значение pageLoadTime неизвестно до загрузки страницы, поэтому её имя записано обычными, а не прописными буквами. Но это всё ещё константа, потому что она не изменяется после назначения.

Другими словами, константы с именами, записанными заглавными буквами, используются только как псевдонимы для «жёстко закодированных» значений.

Придумывайте правильные имена
В разговоре о переменных необходимо упомянуть, что есть ещё одна чрезвычайно важная вещь.

Название переменной должно иметь ясный и понятный смысл, говорить о том, какие данные в ней хранятся.

Именование переменных – это один из самых важных и сложных навыков в программировании. Быстрый взгляд на имена переменных может показать, какой код был написан новичком, а какой – опытным разработчиком.

В реальном проекте большая часть времени тратится на изменение и расширение существующей кодовой базы, а не на написание чего-то совершенно нового с нуля. Когда мы возвращаемся к коду после какого-то промежутка времени, гораздо легче найти информацию, которая хорошо размечена. Или, другими словами, когда переменные имеют хорошие имена.

Пожалуйста, потратьте время на обдумывание правильного имени переменной перед её объявлением. Делайте так, и будете вознаграждены.

Несколько хороших правил:

Используйте легко читаемые имена, такие как userName или shoppingCart.
Избегайте использования аббревиатур или коротких имён, таких как a, b, c, за исключением тех случаев, когда вы точно знаете, что так нужно.
Делайте имена максимально описательными и лаконичными. Примеры плохих имён: data и value. Такие имена ничего не говорят. Их можно использовать только в том случае, если из контекста кода очевидно, какие данные хранит переменная.
Договоритесь с вашей командой об используемых терминах. Если посетитель сайта называется «user», тогда мы должны называть связанные с ним переменные currentUser или newUser, а не, к примеру, currentVisitor или newManInTown.
Звучит просто? Действительно, это так, но на практике для создания описательных и кратких имён переменных зачастую требуется подумать. Действуйте.

Повторно использовать или создавать новую переменную?
И последняя заметка. Есть ленивые программисты, которые вместо объявления новых переменных повторно используют существующие.

В результате их переменные похожи на коробки, в которые люди бросают разные предметы, не меняя на них этикетки. Что сейчас находится внутри коробки? Кто знает? Нам необходимо подойти поближе и проверить.

Такие программисты немного экономят на объявлении переменных, но теряют в десять раз больше при отладке.

Дополнительная переменная – это добро, а не зло.

Современные JavaScript-минификаторы и браузеры оптимизируют код достаточно хорошо, поэтому он не создаёт проблем с производительностью. Использование разных переменных для разных значений может даже помочь движку оптимизировать ваш код.

Итого
Мы можем объявить переменные для хранения данных с помощью ключевых слов var, let или const.

let – это современный способ объявления.
var – это устаревший способ объявления. Обычно мы вообще не используем его, но мы рассмотрим тонкие отличия от let в главе Устаревшее ключевое слово "var" на случай, если это всё-таки вам понадобится.
const – похоже на let, но значение переменной не может изменяться.
Переменные должны быть названы таким образом, чтобы мы могли легко понять, что у них внутри.

Переменные - место хранения необходимой информации
Назад
Обзор: Первые шаги
Далее
После прочтения последних двух статей вы знаете, что такое JavaScript, что он может сделать для вас, как использовать его вместе с другими веб-технологиями и какими он обладает функциями высокого уровня. В этой статье мы перейдём к реальным основам, рассмотрим, как работать с большинством базовых блоков JavaScript — Переменными.

Необходимые навыки:	Базовая компьютерная грамотность, базовое понимание HTML и CSS, понимание того, что такое JavaScript.
Цель:	Ознакомиться с основами переменных в JavaScript.
Инструменты, которые вам нужны
В этой статье вам будет предложено ввести строки кода, чтобы проверить ваше понимание материала. Если вы используете браузер для настольных компьютеров, лучшим примером для ввода кода примера является консоль JavaScript вашего браузера (см. What are browser developer tools для получения дополнительной информации о том, как получить доступ к этому инструменту).

Также мы предоставили простую консоль JavaScript, встроенную ниже в странице, для ввода кода, если вы не используете браузер с консолью JavaScript или консоль на странице окажется для вас более комфортной.

Что такое переменные?
Переменные — это контейнер для таких значений, как числа, используемые в сложении, или строка, которую мы могли бы использовать как часть предложения. Но одна из особенностей переменных — их значение может меняться. Давайте взглянем на простой пример:

<button>Нажми на меня</button>
Copy to Clipboard
const button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('Как вас зовут?');
  alert('Привет ' + name + ', рады видеть вас!');
}
Copy to Clipboard

В примере, по нажатию кнопки выполнится несколько строк кода. Первая строка в функции покажет пользователю окно, где попросит ввести его имя и сохранит значение в переменной. Вторая строка отобразит приветствие с включённым введённым именем, взятым из значения переменной.

Чтобы лучше понять действие переменной здесь, давайте подумаем о том, как мы будем писать этот пример без использования переменной. Это будет выглядеть примерно так:

var name = prompt('Как вас зовут?');

if (name === 'Адам') {
  alert('Привет, Адам, рады тебя видеть!');
} else if (name === 'Алан') {
  alert('Привет, Алан, рады тебя видеть!');
} else if (name === 'Белла') {
  alert('Привет, Белла, рады тебя видеть!');
} else if (name === 'Бьянка') {
  alert('Привет, Бьянка, рады тебя видеть!');
} else if (name === 'Крис') {
  alert('Привет, Крис, рады тебя видеть!');
}

// ... и так далее ...
Вам сейчас не обязательно понимать синтаксис, который мы используем (пока!), но вы должны понять идею: если бы у нас не было доступных переменных, нам пришлось бы реализовать гигантский блок кода, который проверял, какое имя было введено, а затем отображал соответствующее сообщение для этого имени. Очевидно, что это неэффективно (код намного больше, даже для четырёх вариантов), и он просто не сработает, так как вы не можете хранить все возможные варианты.

Переменные имеют смысл, и, когда вы узнаете больше о JavaScript, они начнут становиться второй натурой.

Ещё одна особенность переменных заключается в том, что они могут содержать практически все, а не только строки и числа. Переменные могут также содержать сложные данные и даже целые функции. Об этом вы узнаете больше при дальнейшем изучении курса..

Заметьте: мы говорим, что переменные содержат значения. Это важное различие. Переменные не являются самими значениями; они представляют собой контейнеры для значений. Представьте, что они похожи на маленькие картонные коробки, в которых вы можете хранить вещи.


Объявление переменной
Чтобы использовать переменную, вы сначала должны её создать, или, если быть точнее, объявить переменную. Чтобы сделать это, мы вводим ключевое слово var, за которым следует имя, которое вы хотите дать своей переменной:

var myName;
var myAge;
Copy to Clipboard
Здесь мы создаём две переменные myName и myAge. Попробуйте ввести эти строки сейчас в консоли вашего веб-браузера или в консоли ниже (можно открыть эту консоль в отдельной вкладке или в новом окне). После этого попробуйте создать переменную (или две) с вашими именами.


Примечание: в JavaScript все инструкции кода должны заканчиваться точкой с запятой (;) - ваш код может работать правильно для отдельных строк, но, вероятно, не будет, когда вы пишете несколько строк кода вместе. Попытайтесь превратить написание точки с запятой в привычку.

Теперь проверим, существуют ли эти значения в среде выполнения. Для этого введём только имя переменной.

myName;
myAge;
Copy to Clipboard
В настоящее время они не содержат значения, это пустые контейнеры. В этом случае, когда вы вводите имена переменных, вы должны получить значение undefined . Если они не существуют, вы получите сообщение об ошибке - попробуйте сейчас ввести в консоли имя переменной ниже:

scoobyDoo;
Copy to Clipboard
Примечание: Не путайте переменную, которая существует, но не имеет значения, с переменной, которая вообще не существует - это разные вещи.

Присвоение значения переменной
Как только переменная объявлена, ей можно присвоить значение. Для этого пишется имя переменной, затем следует знак равенства (=), а за ним значение, которое вы хотите присвоить. Например:

myName = 'Chris';
myAge = 37;
Copy to Clipboard
Попробуйте вернуться в консоль и ввести эти строки. Вы должны увидеть значение, которое вы назначили переменной, возвращаемой в консоли. Чтобы посмотреть значения переменных, нужно набрать их имя в консоли:

myName;
myAge;
Copy to Clipboard
Вы можете объявить переменную и задать ей значение одновременно:

var myName = 'Chris';
Copy to Clipboard
Скорее всего, так вы будете писать большую часть времени, так как запись и выполнения кода с одно строки происходит быстрее, чем выполнение двух действий на двух отдельных строках.

Примечание: Если вы пишете многострочную программу JavaScript, которая объявляет и инициализирует (задаёт значение) переменную, вы можете объявить её после её инициализации, и она всё равно будет работать. Это связано с тем, что объявления переменных обычно выполняются первыми, прежде чем остальная часть кода будет выполнена. Это называется hoisting - прочитайте var hoisting для более подробной информации по этому вопросу.

Обновление переменной
Когда переменной присваивается значение, вы можете изменить (обновить) это значение, просто указав другое значение. Попробуйте ввести следующие строки в консоль:

myName = 'Bob';
myAge = 40;
Copy to Clipboard
Правила именования переменных
Вы можете назвать переменную как угодно, но есть ограничения. Как правило, вы должны придерживаться только латинских символов (0-9, a-z, A-Z) и символа подчёркивания.

Не рекомендуется использование других символов, потому что они могут вызывать ошибки или быть непонятными для международной аудитории.
Не используйте символы подчёркивания в начале имён переменных - это используется в некоторых конструкциях JavaScript для обозначения конкретных вещей.
Не используйте числа в начале переменных. Это недопустимо и приведёт к ошибке.
Общепринято придерживаться так называемый "lower camel case", где вы склеиваете несколько слов, используя строчные буквы для всего первого слова, а затем заглавные буквы последующих слов. Мы использовали это для наших имён переменных в этой статье.
Делайте имена переменных такими, чтобы было интуитивно понятно, какие данные они содержат. Не используйте только отдельные буквы / цифры или большие длинные фразы.
Переменные чувствительны к регистру, так что myage и myAge - разные переменные.
И последнее - вам также нужно избегать использования зарезервированных слов JavaScript в качестве имён переменных - под этим мы подразумеваем слова, которые составляют фактический синтаксис JavaScript! Таким образом, вы не можете использовать слова типа var, function, let, и for для имён переменных. Браузеры распознают их как разные элементы кода, и поэтому возникают ошибки.
Примечание: По ссылке можно найти довольно полный список зарезервированных ключевых слов: Lexical grammar — keywords.

Примеры хороших имён переменных:

age
myAge
init
initialColor
finalOutputValue
audio1
audio2
Примеры плохих имён переменных:

1
a
_12
myage
MYAGE
var
Document
skjfndskjfnbdskjfb
thisisareallylongstupidvariablenameman
Примеры имён переменных, которые вызовут ошибки:

var
Document
Попытайтесь создать ещё несколько переменных прямо сейчас, используя знания, изложенные выше.

Типы переменных
Есть несколько различных типов данных, которые мы можем хранить в переменных. В этом разделе мы кратко опишем их, а затем в будущих статьях вы узнаете о них более подробно.

Числа (Numbers)
Вы можете хранить числа в переменных (целые числа, такие как 30, или десятичные числа, такие как 2.456, также называемые числами с плавающей точкой или с плавающей запятой). Вам не нужно объявлять типы переменных в JavaScript, в отличие от некоторых других языков программирования Если давать переменной значение числа,кавычки не используются:

var myAge = 17;
Copy to Clipboard
Строки ('Strings')
Строки - это фрагменты текста. Когда вы даёте переменной значение строки, вам нужно обернуть её в одиночные или двойные кавычки, в противном случае JavaScript попытается проиндексировать её как другое имя переменной.

var dolphinGoodbye = 'So long and thanks for all the fish';
Copy to Clipboard
Логические (Booleans)
Booleans - истинные / ложные значения - они могут иметь два значения: true или false. Они обычно используются для проверки состояния, после чего код запускается соответствующим образом. Вот простой пример:

var iAmAlive = true;
Copy to Clipboard
В действительности вы чаще будете использовать этот тип переменных так:

var test = 6 < 3;
Copy to Clipboard
Здесь используется оператор «меньше» (<), чтобы проверить, является ли 6 меньше 3. В данном примере, он вернёт false, потому что 6 не меньше 3! В дальнейшем вы узнаете больше о таких операторах.

Массивы (Arrays)
Массив - это один объект, который содержит несколько значений, заключённых в квадратные скобки и разделённых запятыми. Попробуйте ввести следующие строки в консоль:

var myNameArray = ['Chris', 'Bob', 'Jim'];
var myNumberArray = [10,15,40];
Copy to Clipboard
Как только эти массивы определены, можно получить доступ к каждому значению по их местоположению в массиве. Наберите следующие строки:

myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40
Copy to Clipboard
Квадратные скобки указывают значение индекса, соответствующее позиции возвращаемого значения. Возможно, вы заметили, что массивы в JavaScript индексируются с нулевой отметкой: первый элемент имеет индекс 0.

В следующей статье вы узнаете больше о массивах.

Объекты (Objects)
В программировании объект представляет собой структуру кода, который моделирует объект реальной жизни. У вас может быть простой объект, представляющий автостоянку, и содержит информацию о её ширине и длине; или вы можете иметь объект, который представляет человека, и содержит данные о его имени, росте, весе, на каком языке он говорит, как сказать ему привет и многое другое.

Попробуйте ввести следующую строку в консоль:

var dog = { name : 'Spot', breed : 'Dalmatian' };
Copy to Clipboard
Чтобы получить информацию, хранящуюся в объекте, вы можете использовать следующий синтаксис:

dog.name
Copy to Clipboard
Мы больше не будем рассматривать объекты в данном курсе - вы можете больше узнать о них в будущем модуле.

Динамическая типизация
JavaScript - это «динамически типизируемый язык», что означает, что в отличие от некоторых других языков вам не нужно указывать, какой тип данных будет содержать переменная (например, числа, строки, массивы и т. д.).

Например, если вы объявите переменную и присвоите ей значение, заключённое в кавычки, браузер будет обрабатывать переменную как строку:

var myString = 'Привет';
Copy to Clipboard
Он всё равно будет строкой, даже если он содержит числа, поэтому будьте осторожны:

var myNumber = '500'; // упс, это все ещё строка (string)
typeof(myNumber);
myNumber = 500; // так-то лучше, теперь это число (number)
typeof(myNumber);
Copy to Clipboard
Попробуйте ввести четыре строки выше в консоль одну за другой и посмотреть результаты. Вы заметите, что мы используем специальную функцию typeof() - она возвращает тип данных переменной, которую вы передаёте в неё. В первый раз, когда она вызывается, она должа возвращать строку, так как переменная myNumber содержит строку '500'. Посмотрите, что она вернёт во второй раз, когда вы её вызовите.

Подведение итогов
К настоящему времени вы должны знать достаточно о переменных JavaScript и о том, как их создавать. В следующей статье мы остановимся на числах более подробно, рассмотрев, как сделать базовую математику в JavaScript.