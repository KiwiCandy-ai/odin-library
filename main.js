const container = document.createElement('div')
container.classList.add('container')
document.body.appendChild(container)

const myLibrary = [
    {title: 'The Hobbit',
    author: 'JRR Tolkien', 
    id: crypto.randomUUID(),
    pages: '256 pages',
    read: 'Not read'
    },
    {title: 'War & Peace',
    author: 'Leo Tolstoy',
    id: crypto.randomUUID(),
    pages: '900 pages',
    read: 'Not read'
    }]

function Book(title, author, id, pages, read) {
    this.title = title;
    this.author = author;
    this.id = crypto.randomUUID();
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, id, pages, read) {
    title = document.getElementById('Title').value
    author = document.getElementById('Author').value
    pages = document.getElementById('Pages').value
    read = document.getElementById('Read?').innerHTML
   const newBook = new Book(title, author, id, pages, read)
   myLibrary.push(newBook)
   title.value = ''
    author.value = ''
    pages.value = ''
    read.value = ''
}

function displayBooks(item) {
    let child = container.lastElementChild
    while (child) {
        container.removeChild(child)
        child = container.lastElementChild
    }
    myLibrary.forEach(book => {
        const card = document.createElement('div')
        const img = document.createElement('img')
        img.src = 'https://www.pngarts.com/files/8/Blank-Book-Cover-PNG-Download-Image.png'
        card.appendChild(img)
        card.classList.add('card')
        container.appendChild(card)
        const list = document.createElement('ul')
        card.appendChild(list)
        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete')
        deleteBtn.textContent = 'Delete'
        deleteBtn.addEventListener('click', (e) => {
             myLibrary.splice(myLibrary.indexOf(item,1))
               const parentElement = e.target.parentElement
                parentElement.remove()
        })
        for (let value in book) {
             const item = document.createElement('li')
            if (value === 'read') {
                const read = document.createElement('button')
                read.classList.add('read')
                read.textContent = `${book[value]}`
                item.appendChild(read)
                list.appendChild(item)
                read.addEventListener('click', (e) => {
                    if (read.textContent === 'Not read') {
                        read.textContent = 'Read'
                        book.read = 'Read'
                    } else {
                        read.textContent = 'Not read'
                        book.read = 'Not read'
                    }
                })
            } else {
        const item = document.createElement('li')
        item.innerHTML += `${book[value]}`
        list.appendChild(item)
            }
    } 
    card.appendChild(deleteBtn)
})
        const newBook = document.createElement('div')
         const img = document.createElement('img')
        img.src = 'https://www.pngarts.com/files/8/Blank-Book-Cover-PNG-Download-Image.png'
        newBook.appendChild(img)
        newBook.classList.add('card', 'new')
        container.appendChild(newBook)
        const newButton = document.createElement('button')
        newButton.classList.add('newBtn')
        newButton.textContent = '+'
        newBook.appendChild(newButton)
        newButton.addEventListener('click', createForm)
};

displayBooks()

const placeholders = ['Title', 'Author', 'Pages', 'Read?']

function createForm() {
const dialog = document.createElement('dialog')
const form = document.createElement('form')
const legend = document.createElement('legend')
legend.textContent = 'New Book'
const submitBtn = document.createElement('button')
submitBtn.addEventListener('click', () => {
    dialog.close()
    event.preventDefault()
    addBookToLibrary()
    displayBooks()
})
submitBtn.textContent = 'Confirm'
submitBtn.classList.add('submit')
form.appendChild(legend)
    placeholders.forEach(element => {
        if (element === 'Read?') {
             const label = document.createElement('label')
            label.textContent = element 
            form.appendChild(label)
            const read = document.createElement('button')
            read.textContent = 'Not Read'
            read.classList.add('read', 'formnew')
            read.setAttribute('id', `${element}`)
            read.addEventListener('click', () => {
                if (read.textContent === 'Not Read') {
                    read.textContent = 'Read' 
                } else {
                    read.textContent = 'Not Read' 
                }
            })
            form.appendChild(read)
        } else {
     const label = document.createElement('label')
     label.textContent = element   
     form.appendChild(label)
    const input = document.createElement('input')
    input.setAttribute('id', `${element}`)
    input.required = true
    form.appendChild(input)
}});
dialog.appendChild(form)
form.appendChild(submitBtn)
document.body.appendChild(dialog)
dialog.showModal()
}
