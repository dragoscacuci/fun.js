import React from 'react';

export default () => {
  const initialState = {
    count: 0
  };

  const doAction = (state) => (action) => action(state);

  const increment = (state) => ({...state, count: state.count + 1});

  const decrement = (state) => ({...state, count: state.count - 1});

  const state1 = doAction(initialState)(increment);

  const state2 = doAction(state1)(increment);

  const state3 = doAction(state2)(increment);

  const state4 = doAction(state3)(decrement);

  const states = [initialState, state1, state2, state3, state4];

  return (
    <div className="basic-container">
      {
        states.map(({count}, index) => (
          <div key={index}>State {index}: {count}</div>
        ))
      }
    </div>
  );
};