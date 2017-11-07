import React, {Component} from 'react';
import PropTypes from 'prop-types';

import BookLibraryConfiguration from '../../config/BookLibrary.configuration';
import BooksService from '../../services/Books.service';
import DataGrid from '../../components/DataGrid/DataGrid.component';

export default class Currying extends Component {
  static props = {
    books: PropTypes.array.isRequired,
    initializeBookLibrary: PropTypes.func.isRequired,
    removeBook: PropTypes.func.isRequired,
    updateStock: PropTypes.func.isRequired
  };

  componentDidMount(){
    this.props.initializeBookLibrary(BooksService.books);
  }

  removeBook = (id) => () => this.props.removeBook(id);

  updateStock = (id) => (event) => this.props.updateStock(id, event.target.value);

  render() {
    const {books} = this.props;

    const columns = [
      ...BookLibraryConfiguration.COLUMNS,
      {
        label: 'Stock',
        renderer: ({id, stock}) => (
          <input className="library__input"
                 onChange={this.updateStock(id)}
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
