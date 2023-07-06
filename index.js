const form = document.getElementById('form'); // Store html form element to variable
const bookList = document.getElementById('bookList'); // store html ul element to var

let booksList = JSON.parse(localStorage.getItem('books')) || []; // get local storage of books saved and pass it to object or array if false

class Book {
  constructor() {
    this.bookTitle = document.getElementById('titleInput');
    this.bookAuthor = document.getElementById('authorInput');
  }

}
