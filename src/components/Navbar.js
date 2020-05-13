import React from 'react';
//import logo from './images/Frame1.png'

import { NavLink } from 'react-router-dom';

/*
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
       </div>
    );
}
 
export default Navigation;
*/


function Navbar() {
    return (
      <div class="App">
  
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              
              <a className="navbar-brand" href="#">Autism</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <NavLink to="/">
                    <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/schedule">
                    <a className="nav-link" href="">Schedule</a>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/FeelingsMenu">
                    <a className="nav-link" href="">Mood</a>
                    </NavLink>
                   
                  </li>
                  
                </ul>
              </div>
            </nav>
        
      </div>
    );
  }
  

  export default Navbar;