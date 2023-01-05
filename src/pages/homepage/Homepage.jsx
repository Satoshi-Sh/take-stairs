import './homepage.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button';
import {baseURL} from '../../variables'


function Homepage (){
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(()=>{
    // if not login, navigate to login page 
    if (!token){
    navigate('/login')
    } 
    // put today as defalut input 
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;       
    document.getElementById("formBasicDate").value = today;


    },[])

    function handleSubmit(e) {
        e.preventDefault()
        const date = document.querySelector('#formBasicDate').value
        const floor = parseInt(document.querySelector('#formBasicFloors').value)
        fetch(`${baseURL}/record`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                date,
                floor,
                token
            })
            }).then(res =>
            res.json())
            .then(data=>{
            console.log(data)
            navigate('/stats')
            }).catch(err=>{
                throw err
            
            })
    }
    
    

    return (
        <div className='homepage'>
            <Form className='board'>
        <h2 className='mb-5'>Floors you clibmed up and down.</h2>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicFloors">
        <Form.Label>Floors</Form.Label>
        <Form.Control type="number"  />
      </Form.Group>
      <Button className='mt-3' variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </div>
    )
}

export default Homepage