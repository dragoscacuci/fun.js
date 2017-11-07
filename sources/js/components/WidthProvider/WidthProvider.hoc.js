import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default (ComposedComponent) => class extends Component {
  static propTypes = {
    measureBeforeMount: PropTypes.bool
  };

  static defaultProps = {
    measureBeforeMount: true
  };

  state = {
    mounted: false,
    width: 1280
  };

  mounted: false;

  get nodeWidth () {
    return ReactDOM.findDOMNode(this).parentNode.offsetWidth;
  }

  onWindowResize = (event, cb) => {
    if (!this.mounted) return;

    this.setState({
      width: this.nodeWidth
    }, cb);
  };

  componentDidMount () {
    this.mounted = true;

    window.addEventListener('resize', this.onWindowResize);
    this.onWindowResize();
  }

  componentWillUnmount () {
    this.mounted = false;

    window.removeEventListener('resize', this.onWindowResize);
  }

  render () {
    if (!this.mounted) {
      return <div className={this.props.className} style={this.props.style} />;
    }

    return <ComposedComponent {...this.props} {...this.state} />;
  }
};