export default class ReduxExampleActions {
  static TYPE = {
    INITIALIZE_BOOK_LIBRARY: 'INITIALIZE_BOOK_LIBRARY',
    REMOVE_BOOK: 'REMOVE_BOOK',
    UPDATE_STOCK: 'UPDATE_STOCK'
  };

  static initializeBookLibrary = (books) => (dispatch) => {
    dispatch({
      type: ReduxExampleActions.TYPE.INITIALIZE_BOOK_LIBRARY,
      books: books
    });
  };

  static removeBook = (bookId) => (dispatch) => {
    dispatch({
      type: ReduxExampleActions.TYPE.REMOVE_BOOK,
      bookId: bookId
    });
  };

  static updateStock = (bookId, newStock) => (dispatch) => {
    dispatch({
      type: ReduxExampleActions.TYPE.UPDATE_STOCK,
      bookId: bookId,
      stock: newStock
    });
  };
}
