const form = document.getElementById('form'); // Store html form element to variable
const allBooks = document.getElementById('bookList'); // store html ul element to var
const errorMessage = document.getElementById('error_message');

// section containers
const displayBooksContainer = document.getElementById('books');
const addBookContainer = document.getElementById('addBook');
const contactContainer = document.getElementById('contact');

// Nav menu clickable elements
const bookListNavLink = document.getElementById('nav-list');
const bookAddNavLink = document.getElementById('nav-add');
const contactNavLink = document.getElementById('nav-contact');

let booksList = JSON.parse(localStorage.getItem('BooksList')) || []; // get local storage of books saved and pass it to object or array if false

class Book {
  constructor() {
    this.bookTitle = document.getElementById('titleInput');
    this.bookAuthor = document.getElementById('authorInput');
  }

  removeBook(book) {
    booksList = booksList.filter((element) => element !== book);
    localStorage.setItem('BooksList', JSON.stringify(booksList));
    this.displayAllBooks();
  }

  displayAllBooks() {
    allBooks.innerHTML = '';
    booksList.forEach((book) => {
      const bookListItem = document.createElement('li');
      bookListItem.innerHTML = `"${book.bookTitle}" by ${book.bookAuthor}`;
      const btnRemove = document.createElement('button');
      btnRemove.innerHTML = 'Remove';
      btnRemove.className = 'removeButton';
      btnRemove.addEventListener('click', () => this.removeBook(book));
      bookListItem.appendChild(btnRemove);
      allBooks.appendChild(bookListItem);
      this.bookTitle.value = '';
      this.bookAuthor.value = '';
    });
  }

  addBook(bookTitle, bookAuthor) {
    const newBook = { bookTitle, bookAuthor };
    booksList.push(newBook);
    localStorage.setItem('BooksList', JSON.stringify(booksList));
    this.displayAllBooks();
    this.bookTitle.value = '';
    this.bookAuthor.value = '';
  }
}

const newBook = new Book();
newBook.displayAllBooks(); // display all books by default

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const bookTitle = document.getElementById('titleInput');
  const bookAuthor = document.getElementById('authorInput');

  if (bookTitle.value !== '' && bookAuthor.value !== '') {
    newBook.addBook(bookTitle.value, bookAuthor.value);
    booksList = JSON.parse(localStorage.getItem('BooksList')) || [];
    newBook.displayAllBooks();
    errorMessage.textContent = 'Book added succesfully';
  } else {
    errorMessage.textContent = 'Please enter a value!';
  }
});

// Display Books-List section
bookListNavLink.addEventListener('click', () => {
  displayBooksContainer.classList.remove('hidden');
  addBookContainer.classList.add('hidden');
  contactContainer.classList.add('hidden');
});

// Display Contact section
contactNavLink.addEventListener('click', () => {
  contactContainer.classList.remove('hidden');
  displayBooksContainer.classList.add('hidden');
  addBookContainer.classList.add('hidden');
});

// Display the Add-Book section
bookAddNavLink.addEventListener('click', () => {
  addBookContainer.classList.remove('hidden');
  displayBooksContainer.classList.add('hidden');
  contactContainer.classList.add('hidden');
  errorMessage.textContent = '';
});
