const myLibrary = []
const display = document.createElement('div')
display.classList.add('display')
document.body.appendChild(display)
const list = document.createElement('ul')
list.textContent = 'Books'
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

function addBookToLibrary(title, author, id, pages, read) {
    const input = new Book(title, author, id, pages, read)
    myLibrary.push(input)
}

for (let i = 0; i < myLibrary.length; i++) {
    const item = document.createElement('li')
    item.innerHTML = `
        Title: ${myLibrary[i].title}, 
        Author: ${myLibrary[i].author}, 
        ID: ${myLibrary[i].id}, 
        Pages: ${myLibrary[i].pages}, 
        Read: ${myLibrary[i].read}
        `
    list.appendChild(item)
}
    
