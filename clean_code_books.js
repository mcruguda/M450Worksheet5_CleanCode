// Not Poorly written JavaScript file for handling book transactions

let books = [
  { id: 1, name: "Der alte Mann und das Meer", price: 10.5 },
  { id: 2, nname: "Moby Dick", price: 12.3 },
  { id: 3, name: "1984", price: 8.5 },
];

function getBook(id, books) {
  return books.find((book) => book.id === id);
}

function addBook(name, price) {
  let maxId = 0;
  for (let book of books) {
    if (book.id > maxId) maxId = book.id;
  }
  books.push({ id: maxId + 1, name: name, price: price });
}

function listBooks() {
  for (let book of books) {
    console.log(book.name + " - " + book.price + "€");
  }
}

let myBook = getBook(2, books);
console.log(myBook);
addBook("Fahrenheit 451", 9.2);
listBooks();
