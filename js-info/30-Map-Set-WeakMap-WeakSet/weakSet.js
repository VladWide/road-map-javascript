const users = [{ name: 'Vlad' }, { name: 'Elena' }, { name: 'Dima' }]
const visits = new WeakSet()
visits.add(users[0]).add(users[1])
// console.log(visits.has(users[0]))
// console.log(visits.has(users[1]))
