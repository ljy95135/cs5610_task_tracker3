import React from 'react';
import { Card, CardBody, Input, Button, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default function DonePost(params) {
  let post = params.post;
  return <Card>
    <CardBody>
      <div>
        <p>Hi <b>{ post.user.name }</b>! Good Job.</p>
        <p><b>{ post.title }</b></p>
        <p>{ post.description }</p>
        <p>Used time:</p>
        <p><b>hour:</b> {Math.floor(post.used_time/60)} <b>minute:</b> {post.used_time%60}</p>
      </div>
    </CardBody>
  </Card>;
}
