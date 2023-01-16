Использование Fetch
Fetch API предоставляет интерфейс JavaScript для работы с запросами и ответами HTTP. Он также предоставляет глобальный метод fetch() (en-US), который позволяет легко и логично получать ресурсы по сети асинхронно.

Подобная функциональность ранее достигалась с помощью XMLHttpRequest. Fetch представляет собой лучшую альтернативу, которая может быть легко использована другими технологиями, такими как Service Workers (en-US). Fetch также обеспечивает единое логическое место для определения других связанных с HTTP понятий, такие как CORS и расширения для HTTP.

Обратите внимание, fetch спецификация отличается от jQuery.ajax() в основном в двух пунктах:

Promise возвращаемый вызовом fetch() не перейдёт в состояние "отклонено" из-за ответа HTTP, который считается ошибкой, даже если ответ HTTP 404 или 500. Вместо этого, он будет выполнен нормально (с значением false в статусе ok ) и будет отклонён только при сбое сети или если что-то помешало запросу выполниться.
По умолчанию, fetch не будет отправлять или получать cookie файлы с сервера, в результате чего запросы будут осуществляться без проверки подлинности, что приведёт к неаутентифицированным запросам, если сайт полагается на проверку пользовательской сессии (для отправки cookie файлов в аргументе init options должно быть задано значение свойства credentials отличное от значения по умолчанию omit).
Примечание: 25 августа 2017 г. в спецификации изменилось значение по умолчанию свойства credentials на same-origin. Firefox применяет это изменение с версии 61.0b13.

Базовый запрос на получение данных действительно прост в настройке. Взгляните на следующий код:

fetch('http://example.com/movies.json')
.then((response) => {
return response.json();
})
.then((data) => {
console.log(data);
});
Здесь мы забираем JSON файл по сети и выводим его содержимое в консоль. Самый простой способ использования fetch() заключается в вызове этой функции с одним аргументом — строкой, содержащей путь к ресурсу, который вы хотите получить — которая возвращает promise, содержащее ответ (объект Response).

Конечно, это просто HTTP-ответ, а не фактический JSON. Чтобы извлечь содержимое тела JSON из ответа, мы используем json() (en-US) метод (определён миксином Body, который реализован в объектах Request и Response.)

Примечание: Миксин Body имеет подобные методы для извлечения других типов контента; см. раздел Тело.

Fetch-запросы контролируются посредством директивы connect-src (Content Security Policy (en-US)), а не директивой извлекаемых ресурсов.

Установка параметров запроса
Метод fetch() может принимать второй параметр - объект init, который позволяет вам контролировать различные настройки:

// Пример отправки POST запроса:
async function postData(url = '', data = {}) {
// Default options are marked with *
const response = await fetch(url, {
method: 'POST', // *GET, POST, PUT, DELETE, etc.
mode: 'cors', // no-cors, *cors, same-origin
cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
credentials: 'same-origin', // include, *same-origin, omit
headers: {
'Content-Type': 'application/json'
// 'Content-Type': 'application/x-www-form-urlencoded',
},
redirect: 'follow', // manual, *follow, error
referrerPolicy: 'no-referrer', // no-referrer, \*client
body: JSON.stringify(data) // body data type must match "Content-Type" header
});
return await response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
.then((data) => {
console.log(data); // JSON data parsed by `response.json()` call
});
Copy to Clipboard
С подробным описанием функции и полным списком параметров вы можете ознакомиться на странице fetch() (en-US).

Отправка запроса с учётными данными
Чтобы браузеры могли отправлять запрос с учётными данными (даже для cross-origin запросов), добавьте credentials: 'include' в объект init, передаваемый вами в метод fetch():

fetch('https://example.com', {
credentials: 'include'
})
Copy to Clipboard
Если вы хотите отправлять запрос с учётными данными только если URL принадлежит одному источнику (origin) что и вызывающий его скрипт, добавьте credentials: 'same-origin'.

// Вызывающий скрипт принадлежит источнику 'https://example.com'

fetch('https://example.com', {
credentials: 'same-origin'
})
Copy to Clipboard
Напротив, чтобы быть уверенным, что учётные данные не передаются с запросом, используйте credentials: 'omit':

fetch('https://example.com', {
credentials: 'omit'
})
Copy to Clipboard
Отправка данных в формате JSON
При помощи fetch() (en-US) можно отправлять POST-запросы в формате JSON.

const url = 'https://example.com/profile';
const data = { username: 'example' };

try {
const response = await fetch(url, {
method: 'POST', // или 'PUT'
body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
headers: {
'Content-Type': 'application/json'
}
});
const json = await response.json();
console.log('Успех:', JSON.stringify(json));
} catch (error) {
console.error('Ошибка:', error);
}
Copy to Clipboard
Загрузка файла на сервер
На сервер можно загрузить файл, используя комбинацию HTML-элемента <input type="file" />, FormData() и fetch().

const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

try {
const response = await fetch('https://example.com/profile/avatar', {
method: 'PUT',
body: formData
});
const result = await response.json();
console.log('Успех:', JSON.stringify(result));
} catch (error) {
console.error('Ошибка:', error);
}
Copy to Clipboard
Загрузка нескольких файлов на сервер
На сервер можно загрузить несколько файлов, используя комбинацию HTML-элемента <input type="file" multiple />, FormData() и fetch().

const formData = new FormData();
const photos = document.querySelector('input[type="file"][multiple]');

formData.append('title', 'Мой отпуск в Вегасе');
for (let i = 0; i < photos.files.length; i++) {
formData.append('photos', photos.files[i]);
}

try {
const response = await fetch('https://example.com/posts', {
method: 'POST',
body: formData
});
const result = await response.json();
console.log('Успех:', JSON.stringify(result));
} catch (error) {
console.error('Ошибка:', error);
}
Copy to Clipboard
Обработка текстового файла построчно
Фрагменты данных, получаемые из ответа, не разбиваются на строки автоматически (по крайней мере с достаточной точностью) и представляют собой не строки, а объекты Uint8Array. Если вы хотите загрузить текстовый файл и обрабатывать его по мере загрузки построчно, то на вас самих ложится груз ответственности за обработку всех упомянутых моментов. Как пример, далее представлен один из способов подобной обработки с помощью создания построчного итератора (для простоты приняты следующие допущения: текст приходит в кодировке UTF-8 и ошибки получения не обрабатываются).

async function\* makeTextFileLineIterator(fileURL) {
const utf8Decoder = new TextDecoder("utf-8");
let response = await fetch(fileURL);
let reader = response.body.getReader();
let {value: chunk, done: readerDone} = await reader.read();
chunk = chunk ? utf8Decoder.decode(chunk) : "";

let re = /\n|\r|\r\n/gm;
let startIndex = 0;
let result;

for (;;) {
let result = re.exec(chunk);
if (!result) {
if (readerDone) {
break;
}
let remainder = chunk.substr(startIndex);
({value: chunk, done: readerDone} = await reader.read());
chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : "");
startIndex = re.lastIndex = 0;
continue;
}
yield chunk.substring(startIndex, result.index);
startIndex = re.lastIndex;
}
if (startIndex < chunk.length) {
//последняя строка не имеет символа перевода строки в конце
yield chunk.substr(startIndex);
}
}

for await (let line of makeTextFileLineIterator(urlOfFile)) {
processLine(line);
}
Copy to Clipboard
Проверка успешности запроса
В методе fetch() (en-US) promise будет отклонён (reject) с TypeError, когда случится ошибка сети или не будет сконфигурирован CORS на стороне запрашиваемого сервера, хотя обычно это означает проблемы доступа или аналогичные — для примера, 404 не является сетевой ошибкой. Для достоверной проверки успешности fetch() будет включать проверку того, что promise успешен (resolved), затем проверку того, что значение свойства Response.ok (en-US) является true. Код будет выглядеть примерно так:

try {
const response = await fetch('flowers.jpg');
if (!response.ok) {
throw new Error('Ответ сети был не ok.');
}
const myBlob = await response.blob();
const objectURL = URL.createObjectURL(myBlob);
myImage.src = objectURL;
} catch (error) {
console.log('Возникла проблема с вашим fetch запросом: ', error.message);
}
Copy to Clipboard
Составление своего объекта запроса
Вместо передачи пути ресурса, который вы хотите запросить вызовом fetch(), вы можете создать объект запроса, используя конструктор Request() (en-US), и передать его в fetch() аргументом:

const myHeaders = new Headers();

const myInit = {
method: 'GET',
headers: myHeaders,
mode: 'cors',
cache: 'default'
};

const myRequest = new Request('flowers.jpg', myInit);
const response = await fetch(myRequest);
const myBlob = await response.blob();
const objectURL = URL.createObjectURL(myBlob);
myImage.src = objectURL;
Copy to Clipboard
Конструктор Request() принимает точно такие же параметры, как и метод fetch(). Вы даже можете передать существующий объект запроса для создания его копии:

const anotherRequest = new Request(myRequest, myInit);
Copy to Clipboard
Довольно удобно, когда тела запроса и ответа используются единожды (прим.пер.: "are one use only"). Создание копии как показано позволяет вам использовать запрос/ответ повторно, при изменении опций init, при желании. Копия должна быть сделана до прочтения тела, а чтение тела в копии также пометит его прочитанным в исходном запросе.

Примечание: Также есть метод clone() (en-US), создающий копии. Оба метода создания копии прекратят работу с ошибкой если тело оригинального запроса или ответа уже было прочитано, но чтение тела клонированного ответа или запроса не приведёт к маркировке оригинального.

Заголовки
Интерфейс Headers (en-US) позволяет вам создать ваш собственный объект заголовков через конструктор Headers() (en-US). Объект заголовков - простая мультикарта имён-значений:

const content = 'Hello World';
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/plain');
myHeaders.append('Content-Length', content.length.toString());
myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');
Copy to Clipboard
То же может быть достигнуто путём передачи массива массивов или литерального объекта конструктору:

const myHeaders = new Headers({
'Content-Type': 'text/plain',
'Content-Length': content.length.toString(),
'X-Custom-Header': 'ProcessThisImmediately'
});
Copy to Clipboard
Содержимое может быть запрошено и извлечено:

console.log(myHeaders.has("Content-Type")); // true
console.log(myHeaders.has("Set-Cookie")); // false
myHeaders.set("Content-Type", "text/html");
myHeaders.append("X-Custom-Header", "AnotherValue");

console.log(myHeaders.get("Content-Length")); // 11
console.log(myHeaders.get("X-Custom-Header")); // ["ProcessThisImmediately", "AnotherValue"]

myHeaders.delete("X-Custom-Header");
console.log(myHeaders.get("X-Custom-Header")); // [ ]
Copy to Clipboard
Некоторые из этих операций могут быть использованы только в ServiceWorkers (en-US), но они предоставляют более удобный API для манипуляции заголовками.

Все методы Headers выбрасывают TypeError, если имя используемого заголовка не является валидным именем HTTP Header. Операции мутации выбросят TypeError если есть защита от мутации (смотрите ниже) (прим.пер.: "if there is an immutable guard"). В противном случае они прерываются молча. Например:

const myResponse = Response.error();
try {
myResponse.headers.set('Origin', 'http://mybank.com');
} catch (e) {
console.log('Не могу притвориться банком!');
}
Copy to Clipboard
Хорошим вариантом использования заголовков является проверка корректности типа контента перед его обработкой. Например:

try {
const response = await fetch(myRequest);
const contentType = response.headers.get('content-type');
if (!contentType || !contentType.includes('application/json')) {
throw new TypeError("Ой, мы не получили JSON!");
}
const json = await response.json();
/_ Дальнейшая обработка JSON _/
} catch (error) {
console.log(error);
}
Copy to Clipboard
Защита
С тех пор как заголовки могут передаваться в запросе, приниматься в ответе и имеют различные ограничения в отношении того, какая информация может и должна быть изменена, заголовки имеют свойство guard. Это не распространяется на Web, но влияет на то, какие операции мутации доступны для объекта заголовков.

Возможные значения:

none: по умолчанию.request: защита объекта заголовков, полученного по запросу (Request.headers (en-US)).request-no-cors: защита объекта заголовков, полученного по запросу созданного с Request.mode no-cors.response: защита Headers полученных от ответа (Response.headers (en-US)).immutable: в основном, используется в ServiceWorkers; делает объект заголовков read-only.

Примечание: вы не можете добавить или установить request защищаемые Headers’ заголовок Content-Length. Аналогично, вставка Set-Cookie в заголовок ответа недопустимо: ServiceWorkers не допускают установки cookies через синтезированные ответы.

Объекты ответа

Как вы видели выше, экземпляр Response будет возвращён когда fetch() промис будет исполнен.

Свойства объекта-ответа которые чаще всего используются:

Response.status (en-US) — Целочисленное (по умолчанию 200) содержит код статуса ответа.Response.statusText (en-US) — Строка (по умолчанию"OK"), которая соответствует HTTP коду статуса.Response.ok (en-US) — как сказано ранее, это короткое свойство для упрощения проверки на то что статус ответа находится где-то между 200-299 включительно. Это свойство типа Boolean (en-US).

Они так же могут быть созданы с помощью JavaScript, но реальная польза от этого есть только при использовании сервис-воркеров (en-US), когда вы предоставляете собственный ответ на запрос с помощью метода respondWith() (en-US):

const myBody = new Blob();

addEventListener('fetch', function(event) {
// ServiceWorker перехватывает fetch
event.respondWith(
new Response(myBody, {
headers: { 'Content-Type': 'text/plain' }
})
);
});
Copy to Clipboard
Конструктор Response() принимает два необязательных аргумента — тело для ответа и объект init (аналогичный тому, который принимает Request() (en-US))

Примечание: Метод error() (en-US) просто возвращает ответ об ошибке. Аналогично, redirect() (en-US) возвращает ответ, приводящий к перенаправлению на указанный URL. Они также относятся только к Service Workers.

Тело
Запрос и ответ могут содержать данные тела. Тело является экземпляром любого из следующих типов:

ArrayBufferArrayBufferView (en-US) (Uint8Array и подобные)Blob/FilestringURLSearchParamsFormData
Body примесь определяет следующие методы для извлечения тела (реализованы как для Request так и для Response). Все они возвращают promise, который в конечном итоге исполняется и выводит содержимое.

arrayBuffer() (en-US)blob() (en-US)json() (en-US)text() (en-US)formData() (en-US)
Это делает использование нетекстовых данных более лёгким, чем при XMR.

В запросе можно установить параметры для отправки тела запроса:

const form = new FormData(document.getElementById('login-form'));
fetch('/login', {
method: 'POST',
body: form
});
Copy to Clipboard
Параметры request и response (and by extension the fetch() function), по возможности возвращают корректные типы данных. Параметр request также автоматически установит Content-Type в заголовок, если он не был установлен из словаря.

Функция обнаружения
Поддержка Fetch API может быть обнаружена путём проверки наличия Headers (en-US), Request, Response или fetch() (en-US) в области видимости Window или Worker. Для примера:

if (self.fetch) {
// запустить мой fetch запрос здесь
} else {
// Сделать что-то с XMLHttpRequest?
}
