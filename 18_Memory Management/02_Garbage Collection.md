Сборка мусора
Управление памятью в JavaScript выполняется автоматически и незаметно. Мы создаём примитивы, объекты, функции… Всё это занимает память.

Но что происходит, когда что-то больше не нужно? Как движок JavaScript обнаруживает, что пора очищать память?

Достижимость
Основной концепцией управления памятью в JavaScript является принцип достижимости.

Если упростить, то «достижимые» значения – это те, которые доступны или используются. Они гарантированно находятся в памяти.

Существует базовое множество достижимых значений, которые не могут быть удалены.

Например:

Выполняемая в данный момент функция, её локальные переменные и параметры.
Другие функции в текущей цепочке вложенных вызовов, их локальные переменные и параметры.
Глобальные переменные.
(некоторые другие внутренние значения)
Эти значения мы будем называть корнями.

Любое другое значение считается достижимым, если оно доступно из корня по ссылке или по цепочке ссылок.

Например, если в глобальной переменной есть объект, и он имеет свойство, в котором хранится ссылка на другой объект, то этот объект считается достижимым. И те, на которые он ссылается, тоже достижимы. Далее вы познакомитесь с подробными примерами на эту тему.

В движке JavaScript есть фоновый процесс, который называется сборщиком мусора. Он отслеживает все объекты и удаляет те, которые стали недоступными.

Простой пример
Вот самый простой пример:

// в user находится ссылка на объект
let user = {
name: "John"
};

Здесь стрелка обозначает ссылку на объект. Глобальная переменная user ссылается на объект {name: "John"} (мы будем называть его просто «John» для краткости). В свойстве "name" объекта John хранится примитив, поэтому оно нарисовано внутри объекта.

Если перезаписать значение user, то ссылка потеряется:

user = null;

Теперь объект John становится недостижимым. К нему нет доступа, на него нет ссылок. Сборщик мусора удалит эти данные и освободит память.

Две ссылки
Представим, что мы скопировали ссылку из user в admin:

// в user находится ссылка на объект
let user = {
name: "John"
};

let admin = user;

Теперь, если мы сделаем то же самое:

user = null;
…то объект John всё ещё достижим через глобальную переменную admin, поэтому он находится в памяти. Если бы мы также перезаписали admin, то John был бы удалён.

Взаимосвязанные объекты
Теперь более сложный пример. Семья:

function marry(man, woman) {
woman.husband = man;
man.wife = woman;

return {
father: man,
mother: woman
}
}

let family = marry({
name: "John"
}, {
name: "Ann"
});
Функция marry «женит» два объекта, давая им ссылки друг на друга, и возвращает новый объект, содержащий ссылки на два предыдущих.

В результате получаем такую структуру памяти:

На данный момент все объекты достижимы.

Теперь удалим две ссылки:

delete family.father;
delete family.mother.husband;

Недостаточно удалить только одну из этих двух ссылок, потому что все объекты останутся достижимыми.

Но если мы удалим обе, то увидим, что у объекта John больше нет входящих ссылок:

Исходящие ссылки не имеют значения. Только входящие ссылки могут сделать объект достижимым. Объект John теперь недостижим и будет удалён из памяти со всеми своими данными, которые также стали недоступны.

После сборки мусора:

Недостижимый «остров»
Вполне возможна ситуация, при которой целый «остров» взаимосвязанных объектов может стать недостижимым и удалиться из памяти.

Возьмём объект family из примера выше. А затем:

family = null;
Структура в памяти теперь станет такой:

Этот пример демонстрирует, насколько важна концепция достижимости.

Объекты John и Ann всё ещё связаны, оба имеют входящие ссылки, но этого недостаточно.

Бывший объект family был отсоединён от корня, на него больше нет ссылки, поэтому весь «остров» становится недостижимым и будет удалён.

Внутренние алгоритмы
Основной алгоритм сборки мусора называется «алгоритм пометок» (от англ. «mark-and-sweep»).

Согласно этому алгоритму, сборщик мусора регулярно выполняет следующие шаги:

Сборщик мусора «помечает» (запоминает) все корневые объекты.
Затем он идёт по ним и «помечает» все ссылки из них.
Затем он идёт по отмеченным объектам и отмечает их ссылки. Все посещённые объекты запоминаются, чтобы в будущем не посещать один и тот же объект дважды.
…И так далее, пока не будут посещены все достижимые (из корней) ссылки.
Все непомеченные объекты удаляются.
Например, пусть наша структура объектов выглядит так:

Мы ясно видим «недостижимый остров» справа. Теперь давайте посмотрим, как будет работать «алгоритм пометок» сборщика мусора.

На первом шаге помечаются корни:

Затем помечаются объекты по их ссылкам:

…А затем объекты по их ссылкам и так далее, пока это возможно:

Теперь объекты, которые не удалось посетить в процессе, считаются недостижимыми и будут удалены:

Мы также можем представить себе этот процесс как выливание огромного ведра краски из корней, которая течёт по всем ссылкам и отмечает все достижимые объекты. Затем непомеченные удаляются.

Это концепция того, как работает сборка мусора. Движки JavaScript применяют множество оптимизаций, чтобы она работала быстрее и не задерживала выполнение кода.

Вот некоторые из оптимизаций:

Сборка по поколениям (Generational collection) – объекты делятся на два набора: «новые» и «старые». В типичном коде многие объекты имеют короткую жизнь: они появляются, выполняют свою работу и быстро умирают, так что имеет смысл отслеживать новые объекты и, если это так, быстро очищать от них память. Те, которые выживают достаточно долго, становятся «старыми» и проверяются реже.
Инкрементальная сборка (Incremental collection) – если объектов много, и мы пытаемся обойти и пометить весь набор объектов сразу, это может занять некоторое время и привести к видимым задержкам в выполнения скрипта. Так что движок делит всё множество объектов на части, и далее очищает их одну за другой. Получается несколько небольших сборок мусора вместо одной всеобщей. Это требует дополнительного учёта для отслеживания изменений между частями, но зато получается много крошечных задержек вместо одной большой.
Сборка в свободное время (Idle-time collection) – чтобы уменьшить возможное влияние на производительность, сборщик мусора старается работать только во время простоя процессора.
Существуют и другие способы оптимизации и разновидности алгоритмов сборки мусора. Но как бы мне ни хотелось описать их здесь, я должен воздержаться, потому что разные движки реализуют разные хитрости и методы. И, что ещё более важно, все меняется по мере развития движков, поэтому изучать тему глубоко «заранее», без реальной необходимости, вероятно, не стоит. Если, конечно, это не вопрос чистого интереса, тогда для вас будет несколько ссылок ниже.

Итого
Главное, что нужно знать:

Сборка мусора выполняется автоматически. Мы не можем ускорить или предотвратить её.
Объекты сохраняются в памяти, пока они достижимы.
Если на объект есть ссылка – вовсе не факт, что он является достижимым (из корня): набор взаимосвязанных объектов может стать недоступен в целом, как мы видели в примере выше.
Современные движки реализуют разные продвинутые алгоритмы сборки мусора.

О многих из них рассказано в прекрасной книге о сборке мусора «The Garbage Collection Handbook: The Art of Automatic Memory Management» (R. Jones и др.).

Если вы знакомы с низкоуровневым программированием, то более подробная информация о сборщике мусора V8 находится в статье A tour of V8: Garbage Collection.

Также в блоге V8 время от времени публикуются статьи об изменениях в управлении памятью. Разумеется, чтобы изучить сборку мусора, вам лучше подготовиться, узнав о том как устроен движок V8 внутри в целом и почитав блог Вячеслава Егорова, одного из инженеров, разрабатывавших V8. Я говорю про «V8», потому что он лучше всего освещается в статьях в Интернете. Для других движков многие подходы схожи, но сборка мусора отличается во многих аспектах.

Глубокое понимание работы движков полезно, когда вам нужна низкоуровневая оптимизация. Было бы разумно запланировать их изучение как следующий шаг после того, как вы познакомитесь с языком.