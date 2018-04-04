// <p><b>Used time:</b> {Math.floor(post.used_time/60)} hours, {post.used_time%60} minutes</p>

import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';

function FinishWork(props) {
  function update(ev) {
    let tgt = $(ev.target);

    let data = {};
    data[tgt.attr('name')] = tgt.val();
    let action = {
      type: 'FINISH_WORK',
      data: data,
    };
    // console.log(action);
    props.dispatch(action);
  }

  function submit(ev) {
    let post_id = parseInt(window.location.href.split("/")[4]);
    let post = _.find(props.posts, (pp) => pp.id == post_id && (!pp.finished));

    if (props.finish.used_time % 15 == 0){
      let data = {
        title: post.title,
        description: post.description,
        finished: true,
        user_id: post.user_id,
        used_time: props.finish.used_time,
      }
      api.update_post(post_id, data);
    }
    else{
      alert("Please input a multiple of 15.")
      return;
    }
  }

  let post_id = parseInt(window.location.href.split("/")[4])
  let post = _.find(props.posts, (pp) => pp.id == post_id && (!pp.finished));

  return <div style={{padding: "4ex"}}>
  <FormGroup>
    <Label for="used_time">Used Time in minutes</Label>
    <Input type="number" step="15" name="used_time" value={props.finish.used_time} onChange={update} />
  </FormGroup>
  <Button onClick={submit} color="primary">Finish!</Button>
  </div>;
}

function state2props(state) {
  return {
    finish: state.finish_work,
    posts: state.posts,
  };
}

export default connect(state2props)(FinishWork);
