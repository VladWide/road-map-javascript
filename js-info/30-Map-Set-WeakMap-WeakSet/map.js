// Map //
const obj = {
  name: 'Vlad',
  age: 27,
  work: 'Front-End',
}

const entries = [
  ['name', 'Vlad'],
  ['age', 27],
  ['job', 'Front-End'],
]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

const map = new Map(entries)
// console.log(map.get('job'))
map.set('newField', 42).set(obj, 'Value of Object').set(NaN, 'NaN')
// map.delete('job')
// map.clear()
// console.log(map)

//===============
// for (const [key, value] of map.entries()) {
//   console.log(key, value)
// }

// for (const val of map.values()) {
//   console.log(val)
// }
// for (const key of map.keys()) {
//   console.log(key)
// }

// map.forEach((val, key) => console.log(key, val))

// const array = [...map]
// console.log(array)

// const array = Array.from(map)
// const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj)

// ==============================

// const users = [{ name: 'Elena' }, { name: 'Alex' }, { name: 'Irina' }]

// const visits = new Map()
// visits
//   .set(users[0], new Date())
//   .set(users[1], new Date(new Date().getTime() + 1000 * 60))
//   .set(users[2], new Date(new Date().getTime() + 5000 * 60))

// function lastVisit(user) {
//   return visits.get(user)
// }
// console.log(lastVisit(users[2]))
// console.log(lastVisit(users[0]))

