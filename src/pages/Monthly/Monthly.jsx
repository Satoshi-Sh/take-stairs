import './monthly.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {baseURL} from '../../variables'
import Lineplot from '../../components/lineplot/Lineplot'



const Monthly = ()=>{
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const [data,setData] = useState([])

    useEffect(()=>{
    // if not login, navigate to login page 
    if (!token){
    navigate('/login')
    } 
    //get data 
    const myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Authorization': token 
    })
    fetch(`${baseURL}/monthly`,{
        method:'GET',
        headers: myHeaders
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            // last six month
            setData(data.slice(-6))
        }).catch(err=>{
            throw err
        
        })
},[])

    return (
    <div className='Monthly'>
    <div className='header'>
    <h1>Monthly</h1>
    </div>
    {data.map(d=>{
        return (
        <>
        <div className='month'><h2>{d._id}</h2></div>
        <ul className='info'>
        <li>Steps: {d.steps} steps</li>
        <li>Floors: {d.total_floors}</li>
        </ul>
        </>)

    })}    
        <div className='plot'>
            <Lineplot data={data}/>
        </div>
    </div>)
}

export default Monthly