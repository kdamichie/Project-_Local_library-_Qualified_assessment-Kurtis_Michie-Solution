// 5) should return the author object when given a particular ID
function findAuthorById(authors, id) {
  // Search for provided ID in authors
  const foundAuthor = authors.find((author) => author.id === id);

  // Return author
  return foundAuthor;
}

// 6) should return the book object when given a particular ID
function findBookById(books, id) {
  // Search for book with provided ID
  const foundBook = books.find((book) => book.id === id);

  //Return book
  return foundBook;
}

// 7) should return an array with two arrays: borrowed books and returned books
function partitionBooksByBorrowedStatus(books) {
  // Create arrays checkedOutBooks, availableBooks
  const checkedOutBooks = [];
  const availableBooks = [];

  books.forEach((book) => {
    const borrowsList = book.borrows;
    
    // Populate availableBooks with books that are returned
    if (borrowsList[0].returned) availableBooks.push(book)
   // Populate partitionedBooks with arrays checkedOutBooks and availableBooks
    else checkedOutBooks.push(book)
  });

  // Return array of arrays checkedOutBooks and availableBooks
  return [checkedOutBooks, availableBooks];
}

// 8) should return an array for a book of all borrowers with their information and return status
// 9) should limit the list to ten borrowers
function getBorrowersForBook(book, accounts) {
  // Create array of borrowers info and return status, of provided book. Limit to 10
  const borrowers = book.borrows.slice(0, 10).map((borrow) => {
    // Create borrower, match borrower ID to acocunt ID 
    const borrower = accounts.find((account) => account.id === borrow.id);
    // Populate "returned" status field borrower
    borrower["returned"] = borrow.returned;
    return borrower;
  })

  return borrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
