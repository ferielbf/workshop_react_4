import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import CustomCard from './CustomCard';

function CustomForm() {
const [email, setEmail]= useState ('');
const [firstname, setFirstName]= useState ('');
const [lastname, setLastName]= useState ('');
const [password, setPassword]= useState ('');
const [show, setShow]= useState (false);
const greeting = () => setShow(!show)


  return (
    <div className='container mt-3'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(event)=> setEmail(event.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Fisrt Name" onChange={(event)=> setFirstName(event.target.value)} />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" onChange={(event)=> setLastName(event.target.value)} />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(event)=> setPassword(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary"  onClick={greeting}>
          Submit
        </Button>
      </Form>
      {show && 
      <CustomCard greeting={greeting} user={{email, firstname, lastname, password}}/>
    }
    </div>
  )
}

export default CustomForm