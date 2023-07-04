const form = document.getElementById('form'); //Store html form element to variable
const bookList = document.getElementById('bookList'); //store html ul element to var

let booksList = JSON.parse(localStorage.getItem('books')) || []; //get local storage of books saved and pass it to object or array if false

function addBook(title, author) {
  const newBook = { title, author };
  booksList.push(newBook);
  localStorage.setItem('books', JSON.stringify(booksList));
  displayBooks();
}
