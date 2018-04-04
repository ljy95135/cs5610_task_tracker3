import store from './store';

class TheServer {
  request_posts() {
    $.ajax("/api/v1/posts", {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      success: (resp) => {
        store.dispatch({
          type: 'POSTS_LIST',
          posts: resp.data,
        });
      },
    });
  }

  request_users() {
    $.ajax("/api/v1/users", {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      success: (resp) => {
        store.dispatch({
          type: 'USERS_LIST',
          users: resp.data,
        });
      },
    });
  }

  update_post(post_id, data){
    $.ajax("/api/v1/posts/" + post_id, {
      method: "patch",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({ post: data }),
      success: (resp) => {
        // update the list
        this.request_posts();
        // store.dispatch({
        //   type: 'POSTS_LIST',
        //   posts: resp.data,
        // });
        alert("This work is done! Go to index to see it!")
        console.log(resp)
      },
      error: (resp) => {
        console.log("Wrong!", resp)
      },
    });
  }

  submit_post(data) {
    data = {
      title: data.title,
      description: data.description,
      finished: data.finished,
      user_id: data.user_id,
      used_time: data.used_time,
    }
    $.ajax("/api/v1/posts", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({ post: data }),
      success: (resp) => {
        store.dispatch({
          type: 'CLEAR_FORM',
        });
        store.dispatch({
          type: 'ADD_POST',
          post: resp.data,
        });
      },
    });
  }

  update_finishing_work(post_id){
    // console.log("ok 1");
    store.dispatch({
      type: 'UPDATE_POST_ID',
      data: {post_id: post_id},
    });
    // console.log("ok 2");
  }

  submit_register(data) {
    $.ajax("/api/v1/users", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({ user: data }),
      success: (resp) => {
        alert("Success! Please login now.")
        store.dispatch({
          type: 'CLEAR_REGISTER_FORM',
        });
      },
    });
  }

  submit_login(data) {
    $.ajax("/api/v1/token", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify(data),
      success: (resp) => {
        store.dispatch({
          type: 'SET_TOKEN',
          token: resp,
        });
      },
    });
  }
}

export default new TheServer();
