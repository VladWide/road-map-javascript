WindowTimers.setTimeout()
Краткое изложение
Вызов функции или выполнение фрагмента кода после указанной задержки.

Синтаксис
var timeoutID = window.setTimeout(func, [, delay, param1, param2, ...]);
var timeoutID = window.setTimeout(code [, delay]);
где

timeoutID - это числовой ID, который может быть использован позже с window.clearTimeout() (en-US).
func - это функция (en-US), которую требуется вызвать после delay миллисекунд.
code - в альтернативном варианте применения это строка, содержащая код, который вы хотите выполнить после delay миллисекунд (использовать этот метод не рекомендуется по тем же причинам, что и eval() (en-US))
delay Необязательный - задержка в миллисекундах (тысячных долях секунды), после которой будет выполнен вызов функции. Реальная задержка может быть больше; см. Notes ниже.
Необходимо принять во внимание, что передача дополнительных параметров функции в первом варианте не работает в Internet Explorer 9 и ниже. Для использования этой функциональности в таких браузерах, необходимо использовать код для совместимости (см. раздел Аргументы колбэк-функции).

Предупреждение: Important: Prior to Gecko 13 (Firefox 13.0 / Thunderbird 13.0 / SeaMonkey 2.10), Gecko passed an extra parameter to the callback routine, indicating the "actual lateness" of the timeout in milliseconds. This non-standard parameter is no longer passed.

Пример
В следующем примере на веб странице создаются две простые кнопки, к которым привязываются действия setTimeout и clearTimeout. Нажатие на первую кнопку установит таймаут, который вызовет диалоговое окно через две секунды. Также будет сохранён id для clearTimeout. Таймаут также может быть отменён по нажатию на вторую кнопку.

HTML Content

<p>Live Example</p>
<button onclick="delayedAlert();">Show an alert box after two seconds</button>
<p></p>
<button onclick="clearAlert();">Cancel alert before it happens</button>
Copy to Clipboard
JavaScript Content
var timeoutID;

function delayedAlert() {
timeoutID = window.setTimeout(slowAlert, 2000);
}

function slowAlert() {
alert("That was really slow!");
}

function clearAlert() {
window.clearTimeout(timeoutID);
}
Copy to Clipboard

Смотрите также пример clearTimeout() (en-US).

Аргументы колбэк-функции
Если вам нужно передать аргумент в вашу callback функцию, но нужно, чтобы это работало в Internet Explorer 9 и ниже, который не поддерживает передачу дополнительных параметров (ни с setTimeout() или setInterval()), то вы можете прописать специальный код для совместимости с IE, вставив этот код в начало ваших скриптов, который включит функцию передачи стандартных параметров HTML5 в Internet Explorer для обоих таймеров.

/_\
|_|
|_| IE-specific polyfill which enables the passage of arbitrary arguments to the
|_| callback functions of JavaScript timers (HTML5 standard syntax).
|_|
|_| https://developer.mozilla.org/en-US/docs/DOM/window.setInterval
|_|
|_| Syntax:
|_| var timeoutID = window.setTimeout(func, delay, [param1, param2, ...]);
|_| var timeoutID = window.setTimeout(code, delay);
|_| var intervalID = window.setInterval(func, delay[, param1, param2, ...]);
|_| var intervalID = window.setInterval(code, delay);
|\*|
\*/

if (document.all && !window.setTimeout.isPolyfill) {
var **nativeST** = window.setTimeout;
window.setTimeout = function (vCallback, nDelay /_, argumentToPass1, argumentToPass2, etc. _/) {
var aArgs = Array.prototype.slice.call(arguments, 2);
return **nativeST**(vCallback instanceof Function ? function () {
vCallback.apply(null, aArgs);
} : vCallback, nDelay);
};
window.setTimeout.isPolyfill = true;
}

if (document.all && !window.setInterval.isPolyfill) {
var **nativeSI** = window.setInterval;
window.setInterval = function (vCallback, nDelay /_, argumentToPass1, argumentToPass2, etc. _/) {
var aArgs = Array.prototype.slice.call(arguments, 2);
return **nativeSI**(vCallback instanceof Function ? function () {
vCallback.apply(null, aArgs);
} : vCallback, nDelay);
};
window.setInterval.isPolyfill = true;
}
Copy to Clipboard
Правка только для IE
If you want a completely unobtrusive hack for every other mobile or desktop browser, including IE 9 and below, you can either use JavaScript conditional comments:

/_@cc_on
// conditional IE < 9 only fix
@if (@\_jscript_version <= 6)
(function(f){
window.setTimeout =f(window.setTimeout);
window.setInterval =f(window.setInterval);
})(function(f){return function(c,t){var a=[].slice.call(arguments,2);return f(function(){c.apply(this,a)},t)}});
@end
@_/
Copy to Clipboard
Или используйте очень чистый подход, основанный на условном свойстве IE HTML:

<!--[if lte IE 9]><script>
(function(f){
window.setTimeout =f(window.setTimeout);
window.setInterval =f(window.setInterval);
})(function(f){return function(c,t){
var a=[].slice.call(arguments,2);return f(function(){c.apply(this,a)},t)}
});
</script><![endif]-->

Copy to Clipboard
Another possibility is to use an anonymous function to call your callback, but this solution is a bit more expensive. Example:

var intervalID = setTimeout(function() { myFunc("one", "two", "three"); }, 1000);
Copy to Clipboard
Yet another possibility is to use function's bind (en-US). Example:

setTimeout(function(arg1){}.bind(undefined, 10));
Copy to Clipboard
Проблема с "this"
Когда вы передаёте метод в setTimeout() (или в любую другую функцию, если на то пошло), то вызов будет осуществлён с неправильным значением this. Эта проблема разъясняется детально в JavaScript reference (en-US).

Объяснение
Code executed by setTimeout() is run in a separate execution context to the function from which it was called. As a consequence, the this keyword for the called function will be set to the window (or global) object; it will not be the same as the this value for the function that called setTimeout. See the following example:

myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
alert(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"
setTimeout(myArray.myMethod, 1000); // prints "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1500, "1"); // prints "undefined" after 1.5 seconds
// let's try to pass the 'this' object
setTimeout.call(myArray, myArray.myMethod, 2000); // error: "NS_ERROR_XPC_BAD_OP_ON_WN_PROTO: Illegal operation on WrappedNative prototype object"
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // same error
Copy to Clipboard
Как видите, нет способов передать объект this в колбэк-функцию..

Возможное решение
A possible way to solve the "this" problem is to replace the two native setTimeout() or setInterval() global functions with two non-native ones which will enable their invocation through the Function.prototype.call method. The following example shows a possible replacement:

// Enable the passage of the 'this' object through the JavaScript timers

var **nativeST** = window.setTimeout, **nativeSI** = window.setInterval;

window.setTimeout = function (vCallback, nDelay /_, argumentToPass1, argumentToPass2, etc. _/) {
var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
return **nativeST**(vCallback instanceof Function ? function () {
vCallback.apply(oThis, aArgs);
} : vCallback, nDelay);
};

window.setInterval = function (vCallback, nDelay /_, argumentToPass1, argumentToPass2, etc. _/) {
var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
return **nativeSI**(vCallback instanceof Function ? function () {
vCallback.apply(oThis, aArgs);
} : vCallback, nDelay);
};
Copy to Clipboard
Примечание: These two replacements will also enable the HTML5 standard passage of arbitrary arguments to the callback functions of timers in IE. So they can be used as polyfills also. See the Callback arguments paragraph.

Новая тестируемая особенность:

myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
alert(arguments.length > 0 ? this[sProperty] : this);
};

setTimeout(alert, 1500, "Hello world!"); // the standard use of setTimeout and setInterval is preserved, but...
setTimeout.call(myArray, myArray.myMethod, 2000); // prints "zero,one,two" after 2 seconds
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // prints "two" after 2.5 seconds
Copy to Clipboard
Это не нативные решения ad hoc для этой проблемы.

Примечание: JavaScript 1.8.5 introduces the Function.prototype.bind() method, which lets you specify the value that should be used as this for all calls to a given function. This lets you easily bypass problems where it's unclear what this will be, depending on the context from which your function was called.

Замечания
Отложенное выполнение кода можно отменить, используя window.clearTimeout(). Если функция должна вызываться неоднократно (например, каждые N миллисекунд), необходимо использовать window.setInterval().

Важно заметить, что функция или код не могут быть выполнены, пока не завершится поток, вызвавший setTimeout().

Passing string literals
Передача строки вместо функции в setTimeout() сопряжена с теми же опасностями, что и использование eval.

// Правильно
window.setTimeout(function() {
alert("Hello World!");
}, 500);

// Неправильно
window.setTimeout("alert(\"Hello World!\");", 500);
Copy to Clipboard
String literals are evaluated in the global context, so local symbols in the context where setTimeout() was called will not be available when the string is evaluated as code.

Минимальная/ максимальная задержка и вложенность таймаута
Historically browsers implement setTimeout() "clamping": successive setTimeout() calls with delay smaller than the "minimum delay" limit are forced to use at least the minimum delay. The minimum delay, DOM_MIN_TIMEOUT_VALUE, is 4 ms (stored in a preference in Firefox: dom.min_timeout_value), with a DOM_CLAMP_TIMEOUT_NESTING_LEVEL of 5ms.

In fact, 4ms is specified by the HTML5 spec and is consistent across browsers released in 2010 and onward. Prior to (Firefox 5.0 / Thunderbird 5.0 / SeaMonkey 2.2), the minimum timeout value for nested timeouts was 10 ms.

In addition to "clamping", the timeout can also fire later when the page (or the OS/browser itself) is busy with other tasks.

To implement a 0 ms timeout in a modern browser, you can use window.postMessage() as described here.

Browsers including Internet Explorer, Chrome, Safari, and Firefox store the delay as a 32-bit signed Integer internally. This causes an Integer overflow when using delays larger than 2147483647, resulting in the timeout being executed immediately.

Неактивные вкладки
In (Firefox 5.0 / Thunderbird 5.0 / SeaMonkey 2.2) and Chrome 11, timeouts are clamped to firing no more often than once per second (1000ms) in inactive tabs; see баг 633421 for more information about this in Mozilla or crbug.com/66078 for details about this in Chrome.
