const getTheTitles = function (books) {
  let final = [];

  books.forEach((book) => final.push(book.title));

  return final
};

// Do not edit below this line
module.exports = getTheTitles;
