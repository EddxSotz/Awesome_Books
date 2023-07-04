const form = document.getElementById('form'); //Store html form element to variable
const bookList = document.getElementById('bookList'); //store html ul element to var

let booksList = JSON.parse(localStorage.getItem('books')) || []; //get local storage of books saved and pass it to object or array if false

function addBook(title, author) { // Add Book function gets parameter and pushes book items to booksList array and saves to local storage
  const newBook = { title, author };
  booksList.push(newBook);
  localStorage.setItem('books', JSON.stringify(booksList));
  displayBooks(); //Call display books to update list 
}

function removeBook(book) {
  booksList = booksList.filter((a) => a !== book); //make filtered array and save to local storage
  localStorage.setItem('books', JSON.stringify(booksList));
  displayBooks();
}

function displayBooks() {
  bookList.innerHTML = ''; //clear out list 
  booksList.forEach((book) => {  // loop through each book array element 
    const li = document.createElement('li'); //create a list item each loop
    li.innerHTML = `${book.title} <br> ${book.author} <br>`; // insert the content to li item 
    const removeBtn = document.createElement('button'); // create remove btn
    const hr = document.createElement('hr');
    removeBtn.innerHTML = 'Remove';
    removeBtn.addEventListener('click', () => removeBook(book)); //when remove btn clicked call removeBook function and pass parameter
    li.appendChild(removeBtn); //append remove btn
    bookList.appendChild(li); // append li item
    bookList.appendChild(hr);
  });
}

displayBooks();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const bookTitle = document.getElementById('titleInput');
  const bookAuthor = document.getElementById('authorInput');
  addBook(bookTitle.value, bookAuthor.value);
  bookTitle.value = '';
  bookAuthor.value = '';
});
