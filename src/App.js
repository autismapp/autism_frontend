import React from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import FeelingsMenu from './components/FeelingsMenu/FeelingsMenu'
import Schedule from './components/Schedule/Schedule'
import Home from './components/Home/Home'
import mood from './images/mood.svg'
import wait from './images/wait.svg'
import logo from './images/Frame1.png'
import Navbar from './components/Navbar';
import {Route, Link, Switch} from 'react-router-dom';

/*

function App() {
  return (
    <div className="App">
      
      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Schedule" component={Schedule}/>
        <Route path="/FeelingsMenu" component={FeelingsMenu} />
      </Switch>

      
     
      <div className="main">
        <h1>Hey! Welcome to the Autism Scheduler App</h1>
        <h2>Click on the images below to tell us how you're feeling today. Or how about updating your schedule.</h2>

        <a href = {<FeelingsMenu />}><img src={mood} alt="mood" /></a> 
        <a href = { <Schedule />}><img src={wait} alt="wait" /></a> 
        
      </div>
    </div>
  );
}

export default App;

*/

function App(){
  return (
    <div className="App">
      
      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Schedule" component={Schedule}/>
        <Route path="/FeelingsMenu" component={FeelingsMenu} />
      </Switch>
      
    
    </div>
  );
}

export default App;


