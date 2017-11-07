import {combineReducers} from 'redux';

import {libraryReducer} from '../examples/ReduxExample/ReduxExample.reducer';

export default combineReducers({
  library: libraryReducer
});
