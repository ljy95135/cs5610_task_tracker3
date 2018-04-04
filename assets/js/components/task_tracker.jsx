import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './nav';
import Register from './register';
import PostForm from './post_form';

export default function task_tracker_init(store) {
  ReactDOM.render(
    <Provider store={store}>
      <TaskTracker state={store.getState()} />
    </Provider>,
    document.getElementById('root'),
  );
}

function state2props(state) {
  return {
    state: state,
  };
}

let TaskTracker = connect(state2props)((props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/" exact={true} render={() => {
            if (props.state.token){
              return (
                <div>
                  <PostForm />
                </div>
              );
            }
            else{
              return <h2>Sorry, please Login first.</h2>;
            }
          }
        } />
        <Route path="/register" exact={true} render={() =>
          <Register />
        } />
      </div>
    </Router>
  );
});
