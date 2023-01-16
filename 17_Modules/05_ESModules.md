Модули JavaScript
« Предыдущая статья
Это руководство содержит всю необходимую информацию для начала работы с модулями JavaScript.
Модули: история вопроса
Сначала программы на JavaScript были небольшими — в прежние времена они использовались для изолированных задач, добавляя при необходимости немного интерактивности веб-страницам, так что большие скрипты в основном не требовались. Прошло несколько лет, и вот мы уже видим полномасштабные приложения, работающие в браузерах и содержащие массу кода на JavaScript; кроме того, язык стал использоваться и в других контекстах (например, Node.js).

Таким образом, в последние годы появились причины на то, чтобы подумать о механизмах деления программ на JavaScript на отдельные модули, которые можно импортировать по мере необходимости. Node.js включал такую возможность уже давно, кроме того, некоторые библиотеки и фреймворки JavaScript разрешали использование модулей (например, CommonJS и основанные на AMD системы модулей типа RequireJS, а позднее также Webpack и Babel).

К счастью, современные браузеры стали сами поддерживать функциональность модулей, о чем и рассказывает эта статья. Этому можно только порадоваться — браузеры могут оптимизировать загрузку модулей, что было бы гораздо эффективнее использования библиотеки, и взять на себя обработку на стороне клиента и прочие накладные расходы.

Поддержка в браузерах
Встроенная обработка модулей JavaScript связана с функциями import и export, которые поддерживаются браузерами следующим образом:

import
Report problems with this compatibility data on GitHub
desktop mobile server
Chrome
Edge
Firefox
Opera
Safari
Chrome Android
Firefox for Android
Opera Android
Safari on iOS
Samsung Internet
WebView Android
Deno
Node.js
import

61
Toggle history
16
Toggle history
60
Toggle history
48
Toggle history
10.1
Toggle history
61
Toggle history
60
Toggle history
45
Toggle history
10.3
Toggle history
8.0
Toggle history
61
Toggle history
1.0
Toggle history
13.2.0
footnotemore
Toggle history
Import assertions
Non-standard

91
Toggle history
91
Toggle history
No
footnote
Toggle history
No
Toggle history
15
Toggle history
91
Toggle history
No
footnote
Toggle history
No
Toggle history
15
Toggle history
16.0
Toggle history
91
Toggle history
1.17
Toggle history
16.14.0
more
Toggle history
import assert {type: json}
Non-standard

91
Toggle history
91
Toggle history
No
footnote
Toggle history
No
Toggle history
15
Toggle history
91
Toggle history
No
footnote
Toggle history
No
Toggle history
15
Toggle history
16.0
Toggle history
91
Toggle history
1.17
Toggle history
17.5.0
more
Toggle history
Available in workers

80
Toggle history
80
Toggle history
No
footnote
Toggle history
No
Toggle history
15
Toggle history
80
Toggle history
No
footnote
Toggle history
No
Toggle history
15
Toggle history
13.0
Toggle history
80
Toggle history
1.0
Toggle history
No
Toggle history
Legend
Tip: you can click/tap on a cell for more information.

Full support
Full support
No support
No support
Non-standard. Check cross-browser support before using.
See implementation notes.
User must explicitly enable this feature.
Has more compatibility info.
export
Report problems with this compatibility data on GitHub
desktop mobile server
Chrome
Edge
Firefox
Opera
Safari
Chrome Android
Firefox for Android
Opera Android
Safari on iOS
Samsung Internet
WebView Android
Deno
Node.js
export

61
Toggle history
16
Toggle history
60
Toggle history
48
Toggle history
10.1
Toggle history
61
Toggle history
60
Toggle history
45
Toggle history
10.3
Toggle history
8.0
Toggle history
61
Toggle history
1.0
Toggle history
13.2.0
footnotemore
Toggle history
default keyword with export

61
Toggle history
16
Toggle history
60
Toggle history
48
Toggle history
10.1
Toggle history
61
Toggle history
60
Toggle history
45
Toggle history
10.3
Toggle history
8.0
Toggle history
No
Toggle history
1.0
Toggle history
13.2.0
footnotemore
Toggle history
export \* as namespace

72
Toggle history
79
Toggle history
80
Toggle history
60
Toggle history
14.1
Toggle history
72
Toggle history
80
Toggle history
51
Toggle history
14.5
Toggle history
11.0
Toggle history
No
Toggle history
1.0
Toggle history
13.2.0
footnotemore
Toggle history
Legend
Tip: you can click/tap on a cell for more information.

Full support
Full support
No support
No support
See implementation notes.
User must explicitly enable this feature.
Has more compatibility info.
Пример использования модулей
Для того, чтобы продемонстрировать использование модулей, мы создали простой набор примеров, который вы можете найти на GitHub. В этих примерах мы создаём элемент <canvas> на веб-странице и затем рисуем различные фигуры на нём (и выводим информацию об этом).

Примеры довольно тривиальны, но они намеренно сделаны простыми для ясной демонстрации модулей.

Примечание: Если вы хотите скачать примеры и запустить их локально, вам нужно будет запустить их через локальный веб-сервер.

Базовая структура примера
В первом примере (см. директорию basic-modules) у нас следующая структура файлов:

index.html
main.js
modules/
canvas.js
square.js
Примечание: Все примеры в этом руководстве в основном имеют одинаковую структуру.

Давайте разберём два модуля из директории modules:

canvas.js — содержит функции, связанные с настройкой canvas:
create() — создаёт холст заданной ширины width и высоты height внутри <div>-обертки с указанным id и помещённой в родителя parent. Результатом выполнения функции будет объект, содержащий 2D-контекст холста и id обертки.
createReportList() — создаёт неупорядоченный список, добавленный внутри указанного элемента-обёртки, который можно использовать для вывода данных отчёта. Возвращает id списка.
square.js — содержит:
name — переменная со строковым значением 'square'.
draw() — функция, рисующая квадрат на указанном холсте с заданными размером, положением и цветом. Возвращает объект, содержащий размер, положение и цвет квадрата.
reportArea() — функция, которая выводит посчитанную площадь квадрата в указанный список отчета.
reportPerimeter() — функция, которая выводи посчитанный периметр квадрата в указанный список отчета.
Взгляд со стороны — .mjs против .js
В этой статье мы используем расширение .js для файлов наших модулей, но в других источниках вы можете встретить расширение .mjs. Например, в документации движка V8 используется .mjs. Причины следующие:

Это полезно для ясности, то есть дает понять, какие файлы являются модулями, а какие — обычными JavaScript-файлами.
Это гарантирует, что файлы вашего модуля будут проанализированы как модуль средами выполнения, такими как Node.js, и инструментами сборки, такими как Babel.
Тем не менее, мы решили продолжать использовать .js, по крайней мере на данным момент. Чтобы модули корректно работали в браузере, вам нужно убедиться, что ваш сервер отдаёт их с заголовком Content-Type, который содержит JavaScript MIME type такой как text/javascript. В противном случае вы получете ошибку проверки MIME type — "The server responded with a non-JavaScript MIME type", и браузер не сможет запустить ваш JavaScript. Большинство серверов уже имеют правильный тип для .js-файлов, но ещё не имеют нужного MIME type для .mjs-файлов. Серверы, которые уже отдают .mjs файлы корректно, включают в себя GitHub Pagesи http-сервер для Node.js.

Это нормально, если вы уже используете такую среду или ещё нет, но знаете, что делать, и имеете нужные доступы (то есть вы можете настроить свой сервер, чтобы он устанавливал корректный Content-Type-заголовок для .mjs-файлов). Однако это может вызвать путаницу, если вы не контролируете сервер, с которого отдаются файлы, или публикуете файлы для общего пользования, как мы здесь.

В целях обучения и переносимости на разные платформы мы решили остановится на .js.

Если вы действительно видите ценность и ясность использования .mjs для модулей по сравнению с использованием .js для обычных JavaScript-файлов, но не хотите столкнуться с проблемой описанной выше, вы должны всегда использовать .mjs во время разработки и конвертировать их в .js во время сборки.

Также стоит отметить, что:

Некоторые инструменты могут никогда не добавить поддержку .mjs, например, TypeScript.

<script type="module"> атрибут используется для обозначения того, что файл является модулем. Вы увидите примеры использования данного атрибута ниже.
Экспорт функционала модуля
Первое, что нужно сделать, чтобы получить доступ к функционалу модуля, — экспортировать его. Это делается с помощью инструкции export.

Самый простой способ использовать экспорт — поместить конструкцию export перед любыми элементами, которые вы хотите экспортировать из модуля, например:

export const name = 'square';

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color
  };
}
Copy to Clipboard
Вы можете экспортировать var-, let-, const-переменные, и — как мы увидим позже — классы. Они должны быть в верхней области видимости, вы не можете использовать export внутри функции, например.

Более удобный способ экспорта всех элементов, которые вы хотите экспортировать,— использовать одну конструкцию export в конце файла модуля, где указать переменные, функции, классы, который вы хотите экспортировать, через запятую в фигурных скобках. Например:

export { name, draw, reportArea, reportPerimeter };
Copy to Clipboard
Импорт функционала в ваш скрипт
После того, как вы экспортировали некоторые функции из своего модуля, вам необходимо импортировать их в свой скрипт, чтобы иметь возможность использовать их. Самый простой способ сделать это:

import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
Copy to Clipboard
Используйте конструкцию import, за которой следует разделенный запятыми список функций, которые вы хотите импортировать, заключённый в фигурные скобки, за которым следует ключевое слово from, за которым следует путь к файлу модуля — путь относительно корня сайта, который для нашего примера basic-modules будет равен /js-examples/modules/basic-modules.

Однако, мы написали путь немного иначе — мы используем (.) синтаксис, означающий "текущую директорию", за которым следует путь к файлу, который мы пытаемся найти. Это намного лучше, чем каждый раз записывать весь относительный путь, поскольку он короче и делает URL-адрес переносимым - пример все равно будет работать, если вы переместите его в другое место в иерархии сайта.

Так например:

/js-examples/modules/basic-modules/modules/square.js
становится

./modules/square.js
Вы можете найти подобные строки кода в файле main.js.

Примечание: В некоторых модульных системах вы можете опустить расширение файла и начальные /, ./, or ../ (например 'modules/square'). Это не работает в нативных JavaScript-модулях.

После того, как вы импортировали функции в свой скрипт, вы можете использовать их так же, как если бы они были определены в этом же файле. Следующий пример можно найти в main.js, сразу за строками импорта:

let myCanvas = create('myCanvas', document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
Copy to Clipboard
**Примечание:**Хотя импортированные функции доступны в файле, они доступны только для чтения. Вы не можете изменить импортированную переменную, но вы всё равно можете изменять свойства у const-переменных. Кроме того, переменные импортируется как "live bindings" - это означает, что они могут меняться по значению, даже если вы не можете изменить привязку, в отличие от const.

Добавление модуля на HTML-страницу
Далее нам необходимо подключить модуль main.js на нашу HTML-страницу. Это очень похоже на то, как мы подключаем обычный скрипт на страницу, с некоторыми заметными отличиями.

Прежде всего, вам нужно добавить type="module" в <script>-элемент, чтобы объявить, что скрипт является модулем. Чтобы подключить модуль main.js, нужно написать следующее:

<script type="module" src="main.js"></script>

Copy to Clipboard
Вы также можете встроить скрипт модуля непосредственно в HTML-файл, поместив JavaScript-код внутрь <script>-элемента:

<script type="module">
  /* код JavaScript модуля */
</script>

Copy to Clipboard
Скрипт, в который вы импортируете функционал модуля, в основном действует как модуль верхнего уровня. Если вы упустите это, то Firefox, например, выдаст ошибку "SyntaxError: import declarations may only appear at top level of a module".

Вы можете использовать import и export инструкции только внутри модулей, внутри обычных скриптов они работать не будут.

Другие отличия модулей от обычных скриптов
Вы должны быть осторожны во время локального тестирование — если вы попытаетесь загрузить файл HTML локально (то есть по file:// URL), вы столкнётесь с ошибками CORS из-за требований безопасности JavaScript-модулей. Вам нужно проводить тестирование через сервер.
Также обратите внимание, что вы можете столкнуться с отличным от обычных файлов поведением кода в модулях. Это происходит из-за того, что модули используют strict mode автоматически.
Нет необходимости использовать атрибут defer (см. атрибуты <script> элемента) при загрузке модуля, модули являются deferred по умолчанию.
Модули выполняются только один раз, даже если на них есть ссылки в нескольких <script> тэгах.
И последнее, но не менее важное: давайте проясним это — функции модуля импортируются в область видимости одного скрипта, они недоступны в глобальной области видимости. Следовательно, вы сможете получить доступ к импортированному функционалу только в скрипте, в который он импортирован, и, например, вы не сможете получить к нему доступ из консоли JavaScript в DevTools. Вы по-прежнему будете получать синтаксические ошибки в DevTools, но вы не сможете использовать некоторые методы отладки, которые, возможно, ожидали использовать.
Экпорт по умолчанию против именнованого экспорта
Экспорты функций и переменных, которые мы использовали в примерах выше являются именованными экспортами — каждый элемент (будь то функция или const-переменная, например) упоминается по имени при экспорте, и это имя также используется для ссылки на него при импорте.

Существует также тип экспорта, который называется экспорт по умолчанию — это сделано для того, чтобы упростить использование экпортируемого функционала сторонним модулем, а также помогает модулям JavaScript взаимодействовать с существующими модульными системами CommonJS и AMD (это хорошо объясняется в статье ES6 в деталях: Модули от Джейсон Орендорфа — ищите по ключевому слову «Default exports»).

Давайте посмотрим на пример, и мы объясним, как это работает. В модуле square.js из нашего примера вы можете найти функцию randomSquare(), которая создаёт квардрат случайного цвета и размера со случайными координатами. Мы хотим экпортировать эту функции по умолчанию, поэтому в конце файла пишем следующее:

export default randomSquare;
Copy to Clipboard
Обратите внимание на отсутствие фигурных скобок.

Кстати, можно было бы определить функцию как анонимную и добавить к ней export default:

export default function(ctx) {
...
}
Copy to Clipboard
В нашем файле main.js мы импортируем функцию по умолчанию, используя эту строку:

import randomSquare from './modules/square.js';
Copy to Clipboard
Снова обратите внимание на отсутствие фигурных скобок. Такой синтакис допустим, поскольку для каждого модуля разрешен только один экспорт по умолчанию, и мы знаем, что это randomSquare. Вышеупомянутая строка является сокращением для:

import {default as randomSquare} from './modules/square.js';
Copy to Clipboard
Примечание: «as» синтаксис для переименования экспортируемых элементов поясняется ниже в разделе Переименование импорта и экcпорта.

Как избежать конфликтов имён
Пока что наши модули для рисования фигур на холсте работают нормально. Но что произойдёт, если мы попытаемся добавить модуль, который занимается рисованием другой фигуры, например круга или треугольника? С этими фигурами, вероятно, тоже будут связаны такие функции, как draw(), reportArea() и т.д.; если бы мы попытались импортировать разные функции с одним и тем же именем в один и тот же файл модуля верхнего уровня, мы бы столкнулись с конфликтами и ошибками.

К счастью, есть несколько способов обойти это. Мы рассмотрим их в следующих разделах.

Переименование импорта и экспорта
Внутри фигурных скобок инструкций import и export вы можете использовать ключевое слово as вместе с новым именем функционала, чтобы задать ему новое имя, которое вы будете использовать для него внутри модуля верхнего уровня.

Так, например, оба следующих элемента будут выполнять одну и ту же работу, хотя и немного по-разному:

// внутри module.js
export {
function1 as newFunctionName,
function2 as anotherNewFunctionName
};

// внутри main.js
import { newFunctionName, anotherNewFunctionName } from './modules/module.js';
Copy to Clipboard
// внутри module.js
export { function1, function2 };

// внутри main.js
import { function1 as newFunctionName,
function2 as anotherNewFunctionName } from './modules/module.js';
Copy to Clipboard
Давайте посмотрим на реальный пример. В нашей renaming директории вы увидите ту же модульную систему, что и в предыдущем примере, за исключением того, что мы добавили модули circle.js и triangle.js для рисования кругов и треугольников и создания отчетов по ним.

Внутри каждого из этих модулей у нас есть функции с одинаковыми именами, которые экспортируются, и поэтому у каждого из них есть один и тот же оператор export внизу файла:

export { name, draw, reportArea, reportPerimeter };
Copy to Clipboard
Если бы в main.js при их импорте мы попытались использовать

import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
import { name, draw, reportArea, reportPerimeter } from './modules/circle.js';
import { name, draw, reportArea, reportPerimeter } from './modules/triangle.js';
Copy to Clipboard
то браузер выдал бы ошибку — "SyntaxError: redeclaration of import name" (Firefox).

Вместо этого нам нужно переименовать импорт, чтобы он был уникальным:

import { name as squareName,
draw as drawSquare,
reportArea as reportSquareArea,
reportPerimeter as reportSquarePerimeter } from './modules/square.js';

import { name as circleName,
draw as drawCircle,
reportArea as reportCircleArea,
reportPerimeter as reportCirclePerimeter } from './modules/circle.js';

import { name as triangleName,
draw as drawTriangle,
reportArea as reportTriangleArea,
reportPerimeter as reportTrianglePerimeter } from './modules/triangle.js';
Copy to Clipboard
Обратите внимание, что вместо этого вы можете решить проблему в файлах модуля, например.

// внутри square.js
export { name as squareName,
draw as drawSquare,
reportArea as reportSquareArea,
reportPerimeter as reportSquarePerimeter };
Copy to Clipboard
// внутри main.js
import { squareName, drawSquare, reportSquareArea, reportSquarePerimeter } from './modules/square.js';
Copy to Clipboard
И это сработало бы точно так же. Какой способ вы будете использовать, зависит от вас, однако, возможно, имеет смысл оставить код модуля в покое и внести изменения в импорт. Это особенно важно, когда вы импортируете из сторонних модулей, над которыми у вас нет никакого контроля.

Создание объекта модуля
Вышеупомянутый способ работает нормально, но он немного запутан и многословен. Существует решение получше — импортировать функции каждого модуля внутри объекта модуля. Для этого используется следующая синтаксическая форма:

import \* as Module from './modules/module.js';
Copy to Clipboard
Эта конструкция берёт все экспорты, доступные внутри module.js и делает их доступными в качестве свойств объекта Module, фактически давая ему собственное пространство имен. Так например:

Module.function1()
Module.function2()
Copy to Clipboard
и т.д.

Опять же, давайте посмотрим на реальный пример. Если вы посмотрите на нашу директорию module-objects, вы снова увидите тот же самый пример, но переписанный с учётом преимуществ этого нового синтаксиса. В модулях все экспорты представлены в следующей простой форме:

export { name, draw, reportArea, reportPerimeter };
Copy to Clipboard
С другой стороны, импорт выглядит так:

import \* as Canvas from './modules/canvas.js';

import _ as Square from './modules/square.js';
import _ as Circle from './modules/circle.js';
import \* as Triangle from './modules/triangle.js';
Copy to Clipboard
В каждом случае теперь вы можете получить доступ к импорту модуля под указанным свойством объекта, например:

let square1 = Square.draw(myCanvas.ctx, 50, 50, 100, 'blue');
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
Copy to Clipboard
Таким образом, теперь вы можете написать код точно так же, как и раньше (при условии, что вы включаете имена объектов там, где это необходимо), и импорт будет намного более аккуратным.

Модули и классы
Как мы намекали ранее, вы также можете экспортировать и импортировать классы — это ещё один способ избежать конфликтов в вашем коде, и он особенно полезен, если у вас уже есть код модуля, написанный в объектно-ориентированном стиле.

Вы можете увидеть пример нашего модуля для рисования фигур, переписанного с помощью классов ES в нашей classes директории. В качестве примера, файл square.js теперь содержит всю свою функциональность в одном классе:

class Square {
constructor(ctx, listId, length, x, y, color) {
...
}

draw() {
...
}

...
}
Copy to Clipboard
который мы затем экспортируем:

export { Square };
Copy to Clipboard
Далее в main.js, мы импортируем его так:

import { Square } from './modules/square.js';
Copy to Clipboard
А затем используем импортированный класс, чтобы нарисовать наш квадрат:

let square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, 'blue');
square1.draw();
square1.reportArea();
square1.reportPerimeter();
Copy to Clipboard
Агрегирующие модули
Возможны случаи, когда вы захотите объединить модули вместе. У вас может быть несколько уровней зависимостей, где вы хотите упростить вещи, объединив несколько подмодулей в один родительский модуль. Это возможно с использованием следующего синтаксиса экспорта в родительском модуле:

export \* from 'x.js'
export { name } from 'x.js'
Copy to Clipboard
Для примера посмотрите на нашу директорию module-aggregation. В этом примере (на основе нашего предыдущего примера с классами) у нас есть дополнительный модуль с именем shapes.js, который собирает функциональность circle.js, square.js и triangle.js вместе. Мы также переместили наши подмодули в дочернюю директорию внутри директории modules под названием shape. Итак, структура модуля в этом примере:

modules/
canvas.js
shapes.js
shapes/
circle.js
square.js
triangle.js
В каждом из подмодулей экспорт имеет одинаковую форму, например:

export { Square };
Copy to Clipboard
Далее идет агрегирование. Внутри shapes.js, мы добавляем следующие строки:

export { Square } from './shapes/square.js';
export { Triangle } from './shapes/triangle.js';
export { Circle } from './shapes/circle.js';
Copy to Clipboard
Они берут экспорт из отдельных подмодулей и фактически делают их доступными из модуля shape.js.

Примечание: Экспорты, указанные в shape.js, по сути перенаправляются через файл и на самом деле там не существуют, поэтому вы не сможете написать какой-либо полезный связанный код внутри того же файла.

Итак, теперь в файле main.js мы можем получить доступ ко всем трём классам модулей, заменив:

import { Square } from './modules/square.js';
import { Circle } from './modules/circle.js';
import { Triangle } from './modules/triangle.js';
Copy to Clipboard
на единственную строку кода:

import { Square, Circle, Triangle } from './modules/shapes.js';
Copy to Clipboard
Динамическая загрузка модулей
Самая свежая возмжность JavaScript-модулей доступная в браузерах,— это динамическая загрузка модулей. Это позволяет вам динамически загружать модули только тогда, когда они необходимы, вместо того, чтобы загружать всё заранее. Это даёт очевидные преимущества в производительности — давайте продолжим читать и посмотрим, как это работает.

Поддержка динамической загрузки модулей позволяет вызывать import() в качестве функции, передав ей аргументом путь к модулю. Данный вызов возвращает Promise, который резолвится объектом модуля (см. Создание объекта модуля), предоставляя вам доступ к экспорту указанного модуля, например:

import('./modules/myModule.js')
.then((module) => {
// делаем что-то с функционалом из импортированного модуля
});
Copy to Clipboard
Давайте посмотрим на пример. В директории dynamic-module-imports у нас есть ещё один пример, основанный на примере наших классов. Однако на этот раз мы ничего не рисуем на холсте при загрузке страницы. Вместо этого мы добавляем на страницу три кнопки — «Circle», «Square» и «Triangle», которые при нажатии динамически загружают требуемый модуль, а затем используют его для рисования указанной фигуры.

В этом примере мы внесли изменения только в наши index.html и main.js — экспорт модуля остается таким же, как и раньше.

Далее в main.js мы взяли ссылку на каждую кнопку, используя вызов document.querySelector():

let squareBtn = document.querySelector('.square');
Copy to Clipboard
Затем мы добавляем обработчик событий на каждую кнопку, чтобы при нажатии соответствующий модуль динамически загружался и использовался для рисования фигуры:

squareBtn.addEventListener('click', () => {
import('./modules/square.js').then((Module) => {
let square1 = new Module.Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, 'blue');
square1.draw();
square1.reportArea();
square1.reportPerimeter();
})
});
Copy to Clipboard
Обратите внимание: поскольку выполнение Promise возвращает объект модуля, класс затем становится подкомпонентом объекта, поэтому теперь для получения доступа к конструктору нам нужно добавить к нему Module., например Module.Square(...).

Устранение проблем
Вот несколько советов, которые могут помочь вам, если вам не удаётся заставить ваши модули работать. Не стесняйтесь дополнять список, если найдете что-то ещё!

Мы упоминали об этом раньше, но повторяем:.js-файлы должны быть загружены с MIME-type равным text/javascript (или любым другим JavaScript-совместимым MIME-type, но text/javascript является рекомендованным), в противном случае вы получите ошибку проверки MIME-type, например — "The server responded with a non-JavaScript MIME type".
Если вы попытаетесь загрузить HTML-файл локально (то есть по ссылке file://), вы столкнетесь с ошибками CORS из-за требований безопасности JavaScript-модулей. Вам нужно проводить тестирование через сервер. GitHub pages идеально для этого подходят, так как отдают .js-файлы с нужным MIME-type.
Поскольку .mjs — нестандартное расширение файла, некоторые операционные системы могут его не распознать или попытаться заменить на что-то другое. Например, мы обнаружили, что macOS незаметно добавляла .js в конец файлов .mjs, а затем автоматически скрывала расширение файла. Таким образом, все наши файлы на самом деле имели название типа x.mjs.js. Когда мы отключили автоматическое скрытие расширений файлов и научили macOS принимать .mjs, всё стало в порядке.
