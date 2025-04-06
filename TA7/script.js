const books = [
  {
    title: "Book",
    author: "Name"
  },
  {
    title: "Book2",
    author: "Name2"
  },
  {
    title: "Book3",
    author: "Name3"
  },
  {
    title: "Book4",
    author: "Name4"
  }
];

function getTheTitles(books) {
  if (books instanceof Array) {
    let titleBooks = [];
    for (const book of books) {
      titleBooks.push(book.title);
    }
    imprimirConsola(titleBooks);
    return titleBooks;
  } else {
    console.log("El parametro ingresado no es del tipo de dato correcto.");
  }
}

function imprimirConsola(titles) {
  if (titles instanceof Array) {
    for (const title of titles) console.log(title);
  } else {
    console.log("Tipo de dato ingresado incorrecto");
  }
}

getTheTitles(books);
