import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class DataGrid extends Component {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    heigh: PropTypes.number,
    rows: PropTypes.array.isRequired,
    width: PropTypes.number
  };

  render() {
    const {columns, height, rows, width} = this.props;
    const style = {maxHeight: height, width: width};

    return (
      <div className="data-grid" style={style}>
        <div className="data-grid__header">
          {
            <div className="data-grid__row">
              {
                columns.map(({key, label, renderer, width}, index) => (
                  <div className="data-grid__cell"
                       key={index}
                       style={{maxWidth: width, minWidth: width}}
                  >
                    {label}
                  </div>
                ))
              }
            </div>
          }
        </div>
        <div className="data-grid__body">
          {
            rows.map((row, index) => (
              <div className={`data-grid__row${index % 2 ? '' : ' data-grid__row--odd'}`}
                   key={index}
              >
                {
                  columns.map(({key, renderer, width}, index) => (
                    <div className="data-grid__cell"
                         key={index}
                         style={{maxWidth: width, minWidth: width}}
                    >
                      {
                        renderer
                          ?
                          renderer(row)
                          :
                          row[key]
                      }
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
