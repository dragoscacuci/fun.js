import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component{
  static propTypes = {

  };

  render(){
    return(
      <div className="header">
        <div className="application-logo">
          <span className="title">Fun</span>
          <img className="logo" src={require("../../../../resources/js.png")}/>
        </div>
      </div>
    );
  }
}
