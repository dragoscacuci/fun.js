import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class NotAvailable extends Component{
  static propTypes = {

  };

  render(){
    return(
      <div className="not-available">
        <span>Page not available</span>
      </div>
    );
  }
}
