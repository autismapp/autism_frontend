import React from 'react';


import mood from '../Home/images/mood.svg';
import wait from '../Home/images/wait.svg';
import { NavLink } from 'react-router-dom';

function Home(){
    return (
        <div className="main">
            <h1>Hey! Welcome to the Autism Scheduler App</h1>
            <h2>Click on the images below to tell us how you're feeling today.</h2> 
            <h3>Or how about updating your schedule.</h3>
            <NavLink to="/FeelingsMenu">
            <a href = ""><img src={mood} alt="mood" /></a>
            </NavLink> 
            <NavLink to="/schedule">
            <a href = ""><img src={wait} alt="wait" /></a>
            </NavLink> 
            

            
        </div>
    )  
}


export default Home


