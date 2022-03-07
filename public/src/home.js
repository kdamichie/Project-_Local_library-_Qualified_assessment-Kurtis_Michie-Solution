// Helper counting function
function arrayCounter(items = []) {
  const total = items.length;
  
  return total;
}

// 10) should return the total number of books in the array
// 11) should return zero if the array is empty
function getTotalBooksCount(books) {
  //use arrayCounter as helper function to get total books count
  return arrayCounter(books);
}

// 12) should return the total number of accounts in the array
// 13) should return zero if the array is empty
function getTotalAccountsCount(accounts) {
  //use arrayCounter as helper function to get total accounts count
  return arrayCounter(accounts);
}

// 14) should return the total number of books that are currently borrowed
function getBooksBorrowedCount(books) {
  // Create borrowedBooks array of books with "returned === false" for counting
  const borrowedBooks = books.filter((book) => book.borrows[0].returned === false)

  //use arrayCounter as helper function to get total accounts count
  return arrayCounter(borrowedBooks);
}

// 15) should return an ordered list of most common genres
// 16) should limit the list to the top five
function getMostCommonGenres(books) {
    // Create mostCommonGenres array to collect most common genres
    const mostCommonGenres = []
    // Create genres object to collect book genres
    const genres = {}
    // Collect genres from book into genre object and count each genre
    books.forEach((book) => {
      if (genres[book.genre]) {
        genres[book.genre]++
      } else {
        // If genre not already added, add and set value to 1
        genres[book.genre] = 1;
      }
    })
    // Collect genre and count into mostCommenGenres
    for (let genre in genres){
      mostCommonGenres.push({name: genre, count: genres[genre]});
    }
    // Sort top 5 genres
    return mostCommonGenres.sort((genreA, genreB) => (genreA.count > genreB.count ? -1 : 1)).slice(0,5);
}

// 17) should return an ordered list of most popular books
// 18) should limit the list to the top five
function getMostPopularBooks(books) {
    // Map book title and borrowed count to mostPopulatBooks array
    mostPopularBooks = books.map((book) => {
      return { name: book.title, count: book.borrows.length }
    });

    // Sort top 5 most borrowed books
    return mostPopularBooks.sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1)).slice(0, 5);
}

// 19) should return an ordered list of most popular authors
// 20) should limit the list to the top five
function getMostPopularAuthors(books, authors) {
    // Create mostPopularArray to collect most popular authors
    let mostPopularAuthors = []
    // Collect authors and how many of their books are borrowed
      authors.forEach((author) => {
        // Match book author to provided author
        let bookAuthor = books.filter((book) => book.authorId === author.id);
        // Count how many borrows given author has
        let bookAuthorBorrowCount = bookAuthor.reduce((total, book) => total + book.borrows.length, 0);

        mostPopularAuthors.push({name: author.name.first + " " + author.name.last, count: bookAuthorBorrowCount});
      })
      // Sort top 5 authors
      return mostPopularAuthors.sort((authorA, authorB) => (authorA.count < authorB.count ? 1 : -1)).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
