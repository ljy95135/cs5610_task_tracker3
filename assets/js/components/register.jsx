import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';

function RegisterForm(props) {
  // console.log("props@RegisterForm", props);

  function update(ev) {
    let tgt = $(ev.target);

    let data = {};
    data[tgt.attr('name')] = tgt.val();
    let action = {
      type: 'UPDATE_REGISTER_FORM',
      data: data,
    };
    // console.log(action);
    props.dispatch(action);
  }

  function submit(ev) {
    api.submit_register(props.register_form);
    console.log(props.register_form);
  }

  function clear(ev) {
    props.dispatch({
      type: 'CLEAR_REGISTER_FORM',
    });
  }

  return <div style={{padding: "4ex"}}>
    <h2>New Post</h2>
    <FormGroup>
      <Label for="name">User Name</Label>
      <Input type="text" name="name" value={props.register_form.name} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="password">Password</Label>
      <Input type="password" name="password" value={props.register_form.password} onChange={update} />
    </FormGroup>
    <Button onClick={submit} color="primary">Post</Button> &nbsp;
    <Button onClick={clear}>Clear</Button>
  </div>;
}

function state2props(state) {
  // console.log("rerender@RegisterForm", state);
  return {
    register_form: state.register_form,
  };
}

export default connect(state2props)(RegisterForm);
