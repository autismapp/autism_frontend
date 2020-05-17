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
                    <img src={angry} alt="angry" />
                </NavLink> 
            </div>

            <div className="sad">
                <NavLink to="/AngryFeeling">
                    <img src={sad} alt="sad" />
                </NavLink> 
            </div>

            <div className="worried">
                <NavLink to="/AngryFeeling">
                    <img src={worried} alt="worried" />
                </NavLink> 
            </div>

        </div>

        
    ) 
}

export default FeelingsMenu;