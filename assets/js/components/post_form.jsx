import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';

function PostForm(props) {
  // console.log("props@PostForm", props);

  function update(ev) {
    let tgt = $(ev.target);

    let data = {};
    data[tgt.attr('name')] = tgt.val();
    let action = {
      type: 'UPDATE_FORM',
      data: data,
    };
    console.log(action);
    props.dispatch(action);
  }

  function submit(ev) {
    api.submit_post(props.form);
    console.log(props.form);
  }

  function clear(ev) {
    props.dispatch({
      type: 'CLEAR_FORM',
    });
  }

  let users = _.map(props.users, (uu) => <option key={uu.id} value={uu.id}>{uu.name}</option>);
  users.unshift(<option key={-1} value={-1}></option>)
  // console.log(users);
  return <div style={{padding: "4ex"}}>
    <h2>New Task</h2>
    <FormGroup>
      <Label for="user_id">Give to</Label>
      <Input type="select" name="user_id" value={props.form.user_id} onChange={update}>
        { users }
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for="title">Title</Label>
      <Input type="text" name="title" value={props.form.title} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="description">Description</Label>
      <Input type="textarea" name="description" value={props.form.description} onChange={update} />
    </FormGroup>
    <Button onClick={submit} color="primary">Post</Button> &nbsp;
    <Button onClick={clear}>Clear</Button>
  </div>;
}

function state2props(state) {
  return {
    form: state.form,
    users: state.users,
  };
}

export default connect(state2props)(PostForm);
