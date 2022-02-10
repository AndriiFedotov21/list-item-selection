const input = document.body.appendChild(document.createElement('input'))
const button = document.body.appendChild(document.createElement('button'))
const ul = document.body.appendChild(document.createElement('ul'))

ul.innerHTML = `
	<li>Alexander</li>
    <li>Denis</li>
    <li>Vitalii</li>
    <li>Vika</li>
    <li>Mark</li>
    <li>Dmitrii</li>
    <li>Olha</li>
    <li>Angelika</li>
    <li>Maria</li>
    
    
`
input.oninput = function () {
    listItems.map(item => item.style = `display: block`)
}

const listItems = Array.from(document.querySelectorAll('li'))
listItems.map(item => item.style = `list-style-type: none;`)
button.onclick = function () {
    console.log(listItems)
    const filtered = listItems.filter(item => !item.innerHTML.toLowerCase().includes(input.value.toLowerCase()))
    console.log(filtered)
    filtered.map(item => item.style = `display: none`)

}

button.style = `
	width: 50px;
  height: 20px;
  background: grey;
  border-radius: 6px;
  margin: 2px;
  color: white;
  box-shadow: 0 0 5px cyan;
`
button.innerHTML = 'Click'