import React from 'react';
import { Card, CardBody, Input, Button, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Post(params) {

  let post = params.post;
  return <Card>
    <CardBody>
      <div>
        <p>Hi <b>{ post.user.name }</b>! Here is your work:</p>
        <p><b>{ post.title }</b></p>
        <p>{ post.description }</p>
        <p>If you finished the work, go to fill in the time and submit.</p>
        <Link to={"/tasks/"+post.id}>Finish!</Link>
      </div>
    </CardBody>
  </Card>;
}
