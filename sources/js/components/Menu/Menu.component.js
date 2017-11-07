import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TetherComponent from 'react-tether'

export default class Menu extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    onSelect: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    value: PropTypes.any
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    window.addEventListener('click', this.closeMenu);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.closeMenu);
  }

  closeMenu = () => this.setState({isOpen: false});

  openMenu = (event) => {
    event.stopPropagation();
    event.preventDefault();
    this.setState({isOpen: true});
  };

  select = (option) => this.props.onSelect(option);

  render() {
    const {isOpen} = this.state;
    const {children, options, value} = this.props;

    const horizontalOffset = this.trigger ? this.trigger.clientWidth : 0;

    return (
      <TetherComponent
        attachment="top right"
        constraints={[{
          to: 'scrollParent',
          attachment: 'together'
        }]}
        offset={`-10 -${horizontalOffset}`}
      >
        <div className="menu__trigger"
             onClick={this.openMenu}
             ref={(elem) => this.trigger = elem}
        >
          {children}
        </div>
        {
          isOpen &&
          <div className="menu__content">
            {
              options.map((option, index) => (
                <div className={`menu__option${value === option.key ? ' menu__option--active' : ''}`}
                     key={index}
                     onClick={this.select.bind(this, option)}

                >
                  {option.label}
                </div>
              ))
            }
          </div>
        }
      </TetherComponent>
    )
  }
}