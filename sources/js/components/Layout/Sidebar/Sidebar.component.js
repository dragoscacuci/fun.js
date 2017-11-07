import React, {Component} from 'react';
import PropTypes from 'prop-types';

const routes = [
  {
    label: 'Currying',
    path: '/currying'
  },
  {
    label: 'Feature flagging',
    path: '/feature-flagging'
  },
  {
    label: 'Width provider',
    path: '/width-provider'
  },
  {
    label: 'Sorting with impure functions',
    path: '/impure-sorting'
  },
  {
    label: 'Sorting with pure functions',
    path: '/pure-sorting'
  },
  {
    label: 'Functional state',
    path: '/functional-state'
  },
  {
    label: 'Redux',
    path: '/redux'
  },
  {
    label: 'Factorial',
    path: '/factorial'
  }
];

export default class  extends Component {
  render() {
    const pathName = window.location.pathname;

    return (
      <aside className="sidebar">
        <ul>
          {
            routes.map(({label, path}, index) => (
              <li className={`sidebar__link${pathName === path ? ' sidebar__link--active' : ''}`} key={index}>
                <a href={path}>{label}</a>
              </li>
            ))
          }
        </ul>
      </aside>
    );
  }
}
