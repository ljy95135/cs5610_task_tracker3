import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './nav';
import Register from './register';
import PostForm from './post_form';
import Feed from './feed';
import FinishWork from './finish_work';
import api from '../api';

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
  // console.log("posts", props.state.posts);

  return (
    <Router>
      <div>
        <Nav />
        <Route path="/" exact={true} render={() => {
            if (props.state.token){
              return (
                <div>
                  <PostForm />
                  <h2>Here are your tasks.</h2>
                  <Feed posts={_.filter(props.state.posts, (pp) => {
                    return props.state.token.user_id == pp.user.id &&
                    (!pp.finished)
                  })} />

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
        <Route path="/tasks/:task_id" render={({match}) => {
            return <FinishWork />;
          }
        } />
      </div>
    </Router>
  );
});
