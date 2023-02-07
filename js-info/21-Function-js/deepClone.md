// Функция deepClone создаёт глубокий клон объекта. Для этого используем рекурсию.

// Сначала проверяем, является ли переданный объект null и, если так, возвращаем null. Затем используем Object.assign() и пустой объект {} для создания поверхностного клона оригинала. Далее, применяем Object.keys() и Array.prototype.forEach(), чтобы определить, какие пары ключ-значение необходимо глубоко клонировать.

// const deepClone = obj => {
//   if (obj === null) return null;
//   // Создаем поверхностный клона оригинала.
//   let clone = Object.assign({}, obj);

//   // Определяем, какие пары ключ-значение
//   // необходимо глубоко клонировать.
//   Object.keys(clone).forEach(
//     key =>
//       (clone[key] =
//         typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
//   );

//   // Проверяем является ли obj массивом и не пустой ли он.
//   return Array.isArray(obj) && obj.length
//     // Если obj массив и он не пуст, тогда
//     // указываем объекту clone длину исходного массива что бы
//     // конвертировать clone в массив и вернуть его.
//     ? (clone.length = obj.length) && Array.from(clone)
//     // Если obj пустой массив,
//     : Array.isArray(obj)
//     // то возвращаем его
//     ? Array.from(obj)
//     // в других случаях obj это объект и мы возвращаем копию clone.
//     : clone;
// };

// // Пример:

// const a = { foo: "bar", obj: { a: 1, b: 2 } };
// const b = deepClone(a);
// // a !== b true
// // a.obj !== b.obj true