import books from './books.json';

export default class BooksService {

  static books = books;

  static getBooks = () => Promise.resolve(books);

}
