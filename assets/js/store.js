import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';

/*
 *  state layout:
 *  {
 *   finish_work: {post_id:-1, used_time:0}
 *   posts: [... Posts ...],
 *   users: [... Users ...],
 *   register_form: {
 *     user_name: "",
 *     password: "",
 *   }
 *   form: {
 *     user_name: "",
 *     title: "",
 *     description: "",
 *     finished: false, // default
 *     used_time: 0, // default
 *     token: "", // BTW no use.
 *   }
 *   token: token/null
 * }
 *
 * */

function posts(state = [], action) {
  switch (action.type) {
  case 'POSTS_LIST':
    return [...action.posts];
  case 'ADD_POST':
    return [action.post, ...state];
  default:
    return state;
  }
}

function users(state = [], action) {
  switch (action.type) {
  case 'USERS_LIST':
    return [...action.users];
  default:
    return state;
  }
}

let empty_form = {
  user_id: "",
  finished: false, // default
  used_time: 0, // default
  description: "",
  title: "",
};

function form(state = empty_form, action) {
  switch (action.type) {
    case 'UPDATE_FORM':
      return Object.assign({}, state, action.data);
    case 'CLEAR_FORM':
      return empty_form;
    case 'SET_TOKEN':
      return Object.assign({}, state, action.token);
    case 'CLEAR_TOKEN':
      return empty_form;
    default:
      return state;
  }
}

// {token, user_id}
function token(state = null, action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return action.token;
    case 'CLEAR_TOKEN':
      return null;
    default:
      return state;
  }
}

let empty_login = {
  name: "",
  pass: "",
};

function login(state = empty_login, action) {
  switch (action.type) {
    case 'UPDATE_LOGIN_FORM':
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}

let empty_register_form = {
  name: "",
  password: "",
};

function register_form(state = empty_register_form, action) {
  switch (action.type) {
    case 'UPDATE_REGISTER_FORM':
      return Object.assign({}, state, action.data);
    case 'CLEAR_REGISTER_FORM':
      return empty_register_form;
    default:
      return state;
  }
}

let finish_work_form ={
  post_id:-1,
  used_time:0,
}

function finish_work(state = finish_work_form, action) {
  switch (action.type) {
    case 'UPDATE_POST_ID':
      return Object.assign({}, state, action.data);
    case 'FINISH_WORK':
      return Object.assign({}, state, action.data);
    case 'INIT_FINISH_WORK':
      return finish_work;
    default:
      return state;
  }
}

function root_reducer(state0, action) {
  console.log("reducer", action);
  // {posts, users, form} is ES6 shorthand for
  // {posts: posts, users: users, form: form}
  let reducer = combineReducers({posts, users, form, token, login, register_form, finish_work});
  let state1 = reducer(state0, action);
  console.log("state1", state1);
  return deepFreeze(state1);
};

let store = createStore(root_reducer);
export default store;
