const myLibrary = []
const dialog = document.querySelector('dialog')
const newButton = document.querySelector('dialog + button')
const addButton = document.querySelector('dialog button')
document.body.appendChild(newButton)
const display = document.createElement('div')
display.classList.add('display')
document.body.appendChild(display)
const list = document.createElement('ul')
// list.classList.add('list')
display.appendChild(list)

function Book(title, author, id, pages, read) {
    this.title = title;
    this.author = author;
    this.id = crypto.randomUUID();
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(title, author, id, pages, read) {
    title = document.getElementById('title').value
    author = document.getElementById('author').value
    pages = document.getElementById('pages').value
    read = document.getElementById('read').value
    const input = new Book(title, author, id, pages, read)
    myLibrary.push(input)
    title.value = ''
    author.value = ''
    pages.value = ''
    read.value = ''
  
}



newButton.addEventListener('click', () => {
    dialog.showModal()
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('pages').value = ''
    document.getElementById('read').value = ''
})

addButton.addEventListener('click', () => {
    dialog.close()
    event.preventDefault()
    addBookToLibrary()
    addToTable()
})

function addToTable() {
    const table = document.getElementById('table')
    let child = table.lastElementChild
    while (child) {
        table.removeChild(child)
        child = table.lastElementChild
    }
    myLibrary.forEach(item => {
        const row = document.createElement('tr')
        Object.values(item).forEach(value => {
        const td = document.createElement('td')
        td.classList.add('data')
        td.appendChild(document.createTextNode(value))
        row.appendChild(td)
        })
        table.appendChild(row)
    })
    display.appendChild(table)
}


