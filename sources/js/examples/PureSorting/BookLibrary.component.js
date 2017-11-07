import React, {Component} from 'react';

import BooksService from '../../services/Books.service';
import DataGrid from '../../components/DataGrid/DataGrid.component';
import Menu from '../../components/Menu/Menu.component';

const dataGridWidth = 800;

const sortingOptions = [
  {
    compareFunction: (firstBook, secondBook) => firstBook.author >= secondBook.author ? 1 : -1,
    key: 'byAuthor',
    label: 'Author'
  },
  {
    compareFunction: (firstBook, secondBook) => firstBook.title >= secondBook.title ? 1 : -1,
    key: 'byTitle',
    label: 'Title'
  },
  {
    compareFunction: (firstBook, secondBook) => secondBook.year - firstBook.year,
    key: 'newestFirst',
    label: 'Newest first'
  }
];

const columns = [
  {
    key: 'author',
    label: 'Author',
    width: 300
  },
  {
    key: 'title',
    label: 'Book Title'
  },
  {
    key: 'year',
    label: 'Release Date',
    width: 200
  }
];

export default class PureSortingExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: BooksService.books,
      sortingRule: null
    };
  }

  changeSorting = ({key: sortingRule}) => {
    const {books} = this.state;
    const {compareFunction} = sortingOptions.find(({key}) => key === sortingRule);

    const sortedBooks = this.sortBooks(books, compareFunction);

    this.setState({
      books: sortedBooks,
      sortingRule: sortingRule
    });
  };

  sortBooks = (unsortedBooks, compareFunction) => {
    const books = [...unsortedBooks];

    const length = books.length;
    for (let i = length - 1; i >= 0; i--) {
      for (let j = 1; j <= i; j++) {
        if (compareFunction(books[j - 1], books[j]) >= 0) {
          const temp = books[j - 1];
          books[j - 1] = books[j];
          books[j] = temp;
        }
      }
    }

    return books.sort(compareFunction);
  };

  render() {
    const {books, sortingRule} = this.state;

    return (
      <div className="library__container">
        <div className="library">
          <div className="library__menu">
            <Menu onSelect={this.changeSorting}
                  options={sortingOptions}
                  value={sortingRule}
            >
              <button className="button">Order by</button>
            </Menu>
          </div>
          <DataGrid columns={columns}
                    rows={books}
                    width={dataGridWidth}/>
        </div>
      </div>
    );
  }
}
