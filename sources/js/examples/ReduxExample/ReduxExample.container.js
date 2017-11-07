import {connect} from 'react-redux';

import ReduxExample from './ReduxExample.component';
import ReduxExampleActions from './ReduxExample.actions';

const mapStateToProps = (state) => ({
  books: state.library.books
});

const mapDispatchToProps = (dispatch) => ({
  initializeBookLibrary: (books) => ReduxExampleActions.initializeBookLibrary(books)(dispatch),
  removeBook: (bookId) => ReduxExampleActions.removeBook(bookId)(dispatch),
  updateStock: (bookId, stock) => ReduxExampleActions.updateStock(bookId, stock)(dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample);
