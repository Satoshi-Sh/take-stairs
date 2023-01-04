import './homepage.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Homepage (){
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(()=>{
    // if not login 
    if (!token){
    navigate('/login')
    }
    },[])
    
    

    return (
        <div className='homepage'>
            Homepage. Hello Goodbye
        </div>
    )
}

export default Homepage