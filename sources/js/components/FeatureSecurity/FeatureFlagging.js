import React, {Component} from 'react';
import PropTypes from 'prop-types';

import NotAvailable from './NotAvailable.component';

export default (ComposedComponent) => class extends Component {
  static propTypes = {
    isPremium: PropTypes.bool
  };

  render() {
    const {isPremium} = this.props;

    return isPremium
      ?
      <ComposedComponent {...this.props}/>
      :
      <NotAvailable/>;
  }
};
