// Set //

const set = new Set([1, 1, 2, 3, 4, 5, 6, 5, 5, 6, 7, 8, 9])
// console.log(set) // убирает дубликаты значений// только уникальные экземпляры

set.add(10).add(12).add(20)

// console.log(set.has(11))
// console.log(set.size)
// console.log(set.delete(1));
// console.log(set.vlaues());
// console.log(set.keys());
// console.log(set.entries());

// for (const key of set) {
//   console.log(key)
// }

//====================
function uniqValues(arr) {
  return [...new Set(arr)]
}
console.log(uniqValues([1, 1, 2, 3, 4, 5, 6, 5, 5, 6, 7, 8, 9]))
