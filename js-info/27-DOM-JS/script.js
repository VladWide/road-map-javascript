const container = document.getElementById('container')
const head = document.getElementById('header')
const h1 = document.getElementById('h1')
const text = document.getElementById('text')
const h2 = document.getElementById('h2')

setTimeout(() => {
  addStyleToWindow(container)
  addStyleToWindow(head)
}, 5000)

function addStyleToWindow(node) {
  node.style.transition = '5s'
  node.style.backgroundColor = 'grey'
  node.style.borderRadius = '20px'
  node.style.textAlign = 'center'
  node.style.padding = '1rem'
  node.style.cursor = 'pointer'
  node.style.fontSize = '20px'
  node.style.color = 'black'
}
