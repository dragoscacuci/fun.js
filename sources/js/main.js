import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {render} from 'react-dom';

import '../sass/style.sass';
import reducers from './config/main.reducers';

import PremiumFeature from './components/FeatureSecurity/PremiumFeature.component';
import ResponsiveLibrary from './examples/ResponsiveContent/Responsive.component';
import Header from './components/Layout/Header/Header.component';
import Sidebar from './components/Layout/Sidebar/Sidebar.component';
import Currying from './examples/Currying/Currying.component';
import ImpureSorting from './examples/ImpureSorting/BookLibrary.component';
import PureSorting from './examples/PureSorting/BookLibrary.component';
import FunctionalState from './examples/FunctionalState/FunctionalState.component';
import ReduxExample from './examples/ReduxExample/ReduxExample.container';
import Factorial from './examples/Factorial/Factorial.component';

const store = createStore(reducers);

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="page-components">
            <Header/>
            <Sidebar/>
            <div className="page-content">
              <Switch>
                <Route path='/currying' component={Currying}/>
                <Route path='/width-provider' component={ResponsiveLibrary}/>
                <Route path='/feature-flagging' component={PremiumFeature(ResponsiveLibrary)}/>
                <Route path='/impure-sorting' component={ImpureSorting}/>
                <Route path='/pure-sorting' component={PureSorting}/>
                <Route path='/functional-state' component={FunctionalState}/>
                <Route path='/redux' component={ReduxExample}/>
                <Route path='/factorial' component={Factorial}/>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

render((
  <Main/>
), document.getElementById('main'));
