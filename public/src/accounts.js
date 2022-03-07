// 1) should return the account object when given a particular ID
function findAccountById(accounts, id) {
  // seach through accounts to match id and return that account
  const accountRetrieved = accounts.find((account) => account.id === id);
  
  return accountRetrieved;
}

// 2) should return the list of accounts ordered by last name
function sortAccountsByLastName(accounts) {
  // retrieve last name of each account and run sort() to order alphabetically
  const orderedAccounts = accounts.sort((accountA, accountB) => 
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );

  return orderedAccounts;
}

// 3) should return the number of times an account has created a 'borrow' record
function getTotalNumberOfBorrows(account, books) {
  let booksBorrowed = []
  const { id } = account;

  // use account ID to find associated ID in each book borrows section
  books.forEach((book) => {
    // get array of borrows from inside book
    const borrowsList = book.borrows;
    // compare borrows ID with account ID and collect
    let borrowed = borrowsList.find((borrows) => borrows.id === id);
    if (borrowed) booksBorrowed.push(borrowed);
  });

  return booksBorrowed.length;
}

// 4) should return all of the books taken out by an account with the author embedded
function getBooksPossessedByAccount(account, books, authors) {
  let booksCheckedOut = []
  const { id } = account;

  // use account ID to find associated ID in each book borrows section
  books.forEach((book) => {
    // get array of borrows from inside book
    const borrowsList = book.borrows;
    // compare borrows ID with account ID and collect
    let checkedOut = borrowsList.find((borrows) => borrows.id === id && !borrows.returned);
    if (checkedOut) booksCheckedOut.push(book);
  });
  
  // iterate through booksCheckedOut to match authorId to authors id
  booksCheckedOut.forEach((book) => {
    let matchedAuthor = authors.find(author => author.id === book.authorId);
    if (matchedAuthor) book["author"] = matchedAuthor;
  })

  return booksCheckedOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
