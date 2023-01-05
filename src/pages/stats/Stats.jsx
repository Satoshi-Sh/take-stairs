import './stats.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {baseURL} from '../../variables'
import Barplot from '../../components/barplot/Barplot'
import { Bar } from 'recharts';


const Stats = ()=>{
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const [calories,setCalories] = useState('')
    const [height, setHeight] = useState(0)
    const [steps,setSteps] = useState(0)
    const [floors,setFloors] = useState(0)
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
    fetch(`${baseURL}`,{
        method:'GET',
        headers: myHeaders
        }).then(res=>res.json())
        .then(data=>{
            const dict= data.at(0)
            setCalories(dict.calories)
            setHeight(dict.height)
            setSteps(dict.steps)
            setFloors(dict.total_floors)
            
        }).catch(err=>{
            throw err
        
        })
},[])

    return (
    <>
    <h1>Total</h1>
    <div className="stats">
        
        <ul className='info'>
            <li>Calories: {calories} cal</li>
            <li>Height: {height} m</li>
            <li>Steps: {steps} steps</li>
            <li>Floors: {floors}</li>
        </ul>
        <div className='plot'>
        <Barplot  me={{calories,height}}/>
        </div>

    </div>
    </>)
}

export default Stats