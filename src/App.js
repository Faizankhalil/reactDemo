import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,} from "react-router-dom";
import Routes from './routes'
import Navigation from "./navigation/nav";


function App() {
  return (
    <div className="container-fluid App">
    <Router>
      <div className="row">
          <div className="col-md-12">
             <img alt="" src={require('./assets/burger_menu.svg')} width={40} className="menuStyle"/>
          </div>
      </div>
      <div className="row">
        <Routes/>
      </div>
      <div>
        <Navigation/>
      </div>
    </Router>
    </div>
  );
}

export default App;
