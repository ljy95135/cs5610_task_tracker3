import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './nav';
import Register from './register';

export default function task_tracker_init(store) {
  ReactDOM.render(
    <Provider store={store}>
      <TaskTracker state={store.getState()} />
    </Provider>,
    document.getElementById('root'),
  );
}

let TaskTracker = connect((state) => state)((props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/" exact={true} render={() =>
          <div></div>
        } />
        <Route path="/register" exact={true} render={() =>
          <Register />
        } />
      </div>
    </Router>
  );
});
