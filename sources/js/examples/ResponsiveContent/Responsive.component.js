import React, {Component} from 'react';

import BookLibraryConfiguration from '../../config/BookLibrary.configuration';
import BookService from '../../services/Books.service';
import DataGrid from '../../components/DataGrid/DataGrid.component';
import WidthProvider from '../../components/WidthProvider/WidthProvider.hoc'

const ResponsiveDataGrid = WidthProvider(DataGrid);

export default class SortingExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: BookService.books
    };
  }
  ResponsiveLibrary
  render() {
    const {books} = this.state;
    const columns = BookLibraryConfiguration.COLUMNS;
    console.log(columns);

    return (
      <div className="responsive-library__container">
        <div className="responsive-library">
          <ResponsiveDataGrid columns={columns}
                              rows={books}
          />
        </div>
      </div>
    );
  }
}
