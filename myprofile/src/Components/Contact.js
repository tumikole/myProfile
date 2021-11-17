import React, { Component } from 'react'
import {
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';

export default class Contact extends Component {
    render() {
        return (
            <div class="ContactContainer">
              <h1 style={{color: 'white', padding:'3rem'}}>Contact Me</h1> 
    <Form className="form">
          <FormGroup>
            <Label style={{color: 'white'}} for="exampleEmail">Email Address</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="example@example.com"
            />
          </FormGroup>
          <FormGroup>
            <Label style={{color: 'white'}} for="examplePassword">Message</Label>
            <Input
              type="textarea"
              name="password"
              id="examplePassword"
              placeholder="********"
            />
          </FormGroup>
          <button class="pushable">
  <span class="shadow"></span>
  <span class="edge"></span>
  <span class="front">
    Push me
  </span>
</button>
      </Form>
          </div> 
        )
    }
}
