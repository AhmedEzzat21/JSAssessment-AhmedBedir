// Book object constructor
function Book(title, author, numOfPages, numOfCopies) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.numOfCopies = numOfCopies;
  Book.totalCreated = (Book.totalCreated || 0) + 1;
}

// Box object constructor
function Box(height, width, length, material) {
  this.height = height;
  this.width = width;
  this.length = length;
  this.material = material;
  this.content = [];

  // Method to add book to the box
  this.addBook = function (book) {
    this.content.push(book);
  };

  // Method to count number of books inside the box
  this.countBooks = function () {
    return this.content.length;
  };

  // Method to delete a book by title (single copy)
  this.deleteBookByTitle = function (title) {
    const index = this.content.findIndex((book) => book.title === title);
    if (index !== -1) {
      this.content.splice(index, 1);
    }
  };
}

// Class Property (static) to count number of created book objects
Book.getTotalCreated = function () {
  return Book.totalCreated || 0;
};

// Overriding toString() method for Box instance's dimensions
Box.prototype.toString = function () {
  return `Box dimensions: ${this.height} x ${this.width} x ${this.length}`;
};

// Implementing valueOf() for summing total books in multiple boxes
Box.prototype.valueOf = function () {
  return this.content.reduce((total, book) => total + book.numOfCopies, 0);
};

// Testing the functionality
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180, 2);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 281, 3);

const box = new Box(10, 8, 6, 'Cardboard');
box.addBook(book1);
box.addBook(book2);

console.log(box.countBooks()); // Output: 2
console.log(Book.getTotalCreated()); // Output: 2
console.log(box.toString()); // Output: Box dimensions: 10 x 8 x 6

const box2 = new Box(8, 6, 4, 'Wood');
box2.addBook(new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180, 1));

console.log(box + box2); // Output: 6 (2 + 4)
