import ReduxExampleActions from './ReduxExample.actions';

const init = {
  books: []
};

export const libraryReducer = (state = init, action) => {
  switch (action.type) {
    case ReduxExampleActions.TYPE.INITIALIZE_BOOK_LIBRARY: {
      const {books} = action;

      const mappedBooks = books.map(({author, id, stock, title, year}) => ({author, id, stock, title, year}));

      return {
        ...state,
        books: mappedBooks
      };
    }
    case ReduxExampleActions.TYPE.REMOVE_BOOK: {
      const {bookId} = action;

      const books = state.books.filter(({id}) => id !== bookId);

      return {
        ...state,
        books: books
      };
    }
    case ReduxExampleActions.TYPE.UPDATE_STOCK: {
      const {bookId, stock} = action;

      const books = state.books.map((book) => {
        if(book.id === bookId){
          return {...book, stock: stock};
        }
        return book;
      });

      return {
        ...state,
        books: books
      };
    }
    default:
      return state;
  }
};
