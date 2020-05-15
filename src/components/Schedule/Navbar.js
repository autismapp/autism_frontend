import React from 'react';
import {NavLink} from 'react-router-dom';






function Navbar() {
    return (
      <div class="Navbar">
  
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
              <a className="navbar-brand" href="#"></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">My Schedule</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">MyFeelings</a>
                  </li>
                  
                </ul>
              </div>
            </nav>
        
      </div>
    );
  }
  
  export default Navbar;

  