// codes from 
// https://react-bootstrap.github.io/forms/overview/

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css'

import {baseURL} from '../../variables'

import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const Login = ()=>{
    const navigate = useNavigate()
  const token = window.localStorage.getItem('token')
  useEffect(()=>{
    if (token){
        navigate('/')
    }
  })
  function handleSubmit(e) {
    e.preventDefault()
    const username = document.querySelector('#formBasicUsername')
    const password = document.querySelector('#formBasicPassword')
    fetch(`${baseURL}/users/login`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            username:username.value,
            password:password.value
        })
        }).then(res =>res.json())
        .then(data=>{
            if(data.hasOwnProperty('token')){
            window.localStorage.setItem("token",data['token'])
            window.localStorage.setItem('username',data['user']['username'])
            window.localStorage.setItem('image',data['user']['image'])
    
            navigate('/')
            }
            else {
            let message = document.querySelector('.message')
            console.log(message)
            message.style.display='block'
            username.value=''
            password.value=''
            }
        }).catch(err=>{
            throw err
        
        })
    }
    
    
    
    return (
     <div className='login'>
     <Form className='board'>
        <h2 className='mb-5'>Login</h2>
        <p className='message' style={{display: "none"}}>Failed to login.</p>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <p>* Please login with test and 123456</p>
      <Button className='mt-3' variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Login;