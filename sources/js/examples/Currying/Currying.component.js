import React, {Component} from 'react';

import BookLibraryConfiguration from '../../config/BookLibrary.configuration';
import BooksService from '../../services/Books.service';
import DataGrid from '../../components/DataGrid/DataGrid.component';

export default class Currying extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: BooksService.books
    };
  }

  changeStock = (id) => (event) => {
    const {books} = this.state;

    this.setState({
      books: books.map((book) => ({
        ...book,
        stock: id === book.id ? event.target.value : book.stock
      }))
    });
  };

  removeBook = (id) => () => {
    const {books} = this.state;

    this.setState({
      books: books.filter((book) => book.id !== id)
    });
  };


  render() {
    const {books} = this.state;

    const columns = [
      ...BookLibraryConfiguration.COLUMNS,
      {
        label: 'Stock',
        renderer: ({id, stock}) => (
          <input className="library__input"
                 onChange={this.changeStock(id)}
                 value={stock}
          />
        ),
        width: 100,
      },
      {
        renderer: ({id}) => (
          <div>
            <span className="fa fa-remove icon-button"
                  onClick={this.removeBook(id)}
            >
            </span>
          </div>
        ),
        width: 50
      }
    ];

    return (
      <div className="library__container">
        <div className="library">
          <DataGrid columns={columns}
                    rows={books}
                    width={800}/>
        </div>
      </div>
    );
  }
}
