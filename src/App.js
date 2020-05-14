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


