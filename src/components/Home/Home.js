import React from 'react';
import logo from './images/Frame 1.png';
import mood from '../Home/images/mood.svg';
import wait from '../Home/images/wait.svg';
import { NavLink } from 'react-router-dom';

function Home(){
    return (
        <div className="main">
            <img src={logo} alt="Frame 1" />
            
            <h2 className="title">Click on the left image below to tell us how you're feeling today. 
                <br></br>Or hit the image on the right to update your very own schedule.</h2> 

            <div style={{margin: "auto"}}>
                <div className="image1">
                    <NavLink to="/FeelingsMenu">
                        <img src={mood} alt="mood" />
                    </NavLink> 
                </div>    
            
                <div className="image2">
                    <NavLink to="/schedule">
                        <img src={wait} alt="wait" />
                    </NavLink> 
                </div>
            </div>
            
        </div>
    )  
}


export default Home


