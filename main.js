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

addBookToLibrary('The Hobbit', 'JRR Tolkien', 'id', '265 pages', 'read')
addBookToLibrary('War & Peace', 'Leo Tolstoy', 'id', '900 pages', 'read')
addBookToLibrary('The Hobbit', 'JRR Tolkien', 'id', '265 pages', 'read')
addBookToLibrary('War & Peace', 'Leo Tolstoy', 'id', '900 pages', 'read')
addBookToLibrary('The Hobbit', 'JRR Tolkien', 'id', '265 pages', 'read')
addBookToLibrary('War & Peace', 'Leo Tolstoy', 'id', '900 pages', 'read')
addBookToLibrary('The Hobbit', 'JRR Tolkien', 'id', '265 pages', 'read')
addBookToLibrary('War & Peace', 'Leo Tolstoy', 'id', '900 pages', 'read')


function addBookToLibrary(title, author, id, pages, read) {
    const input = new Book(title, author, id, pages, read)
    myLibrary.push(input)
}

newButton.addEventListener('click', () => {
    dialog.showModal()
})

addButton.addEventListener('click', () => {
    dialog.close()
    event.preventDefault()
})

     

function createTable() {
    const table = document.createElement('table')
    table.classList.add('table')
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
createTable();