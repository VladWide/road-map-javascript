// Функция isEmpty возвращает true, если значение является пустым объектом, коллекцией, не имеет перечисляемых свойств или является любым типом, который не считается коллекцией.

// Проверяем, является ли предоставленное значение val нулевым null или его длина равна 0.

// const isEmpty = val => val === null || !(Object.keys(val) || val).length;

// // Пример:

// isEmpty({}); // true
// isEmpty({ a: 1, b: 2 }); // false

// isEmpty([]); // true
// isEmpty([1, 2]); // false

// isEmpty(''); // true
// isEmpty('string'); // false

// isEmpty(12); // true - так как тип не считается коллекцией
// isEmpty(true); // true - так как тип не считается коллекцией