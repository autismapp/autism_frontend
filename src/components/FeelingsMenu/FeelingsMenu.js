import React from 'react';
import angry from '../FeelingsMenu/images/angry.svg';
import sad from '../FeelingsMenu/images/sad.svg';
import worried from '../FeelingsMenu/images/worried.svg';
import { NavLink } from 'react-router-dom';

function FeelingsMenu() {
    return (
        <div className="menutitle">
            <h1 className="feelingsh1">We're here to help</h1>
            <h2 className="feelingsh2">Click on any of the images below to tell us how you are feeling</h2>
        
            <div className="angry">
                <NavLink to="/AngryFeeling">
                <a href = ""><img src={angry} alt="angry" /></a>
                </NavLink> 
            </div>

            <div className="sad">
                <NavLink to="/AngryFeeling">
                <a href = ""><img src={sad} alt="sad" /></a>
                </NavLink> 
            </div>

            <div className="worried">
                <NavLink to="/AngryFeeling">
                <a href = ""><img src={worried} alt="worried" /></a>
                </NavLink> 
            </div>

        </div>

        
    ) 
}

export default FeelingsMenu;