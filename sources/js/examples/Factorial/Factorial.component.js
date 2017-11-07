'use strict';

import React, {Component} from 'react';

import FactorialService from './Factorial.service';

export default class Factorial extends Component {
  factorial = () => {
    console.log(FactorialService.factorial(10000));
  };

  factorialRecursive = () => {
    console.log(FactorialService.factorialRecursive(100000, false));
  };

  tailFactorialRecursive = () => {
    console.log(FactorialService.tailFactorialRecursive(100000, false));
  };

  render() {
    return (
      <div className="basic-container">
        <button className="button"
                onClick={this.factorial}
        >
          Factorial
        </button>
        <button className="button"
                onClick={this.factorialRecursive}
        >
          Recursive Factorial
        </button>
        <button className="button"
                onClick={this.tailFactorialRecursive}
        >
          Tail Recursive Factorial
        </button>
      </div>
    );
  }
};
