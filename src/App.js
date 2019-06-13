import React, {useState} from 'react';
import './App.css';
import Home from '../src/Pages/Home'
import Search from '../src/Pages/Search'
import Profile from '../src/Pages/Profile'
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom'

function App() {

  
  return (
    <div className="App">
    <Router>
      <header className="App-header" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <h1>US Politicians</h1>
        <nav>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li><Link to="/" style={{color: 'white', textDecoration: 'none'}}>Home</Link></li>
                <li><Link to="/search" style={{color: 'white', textDecoration: 'none'}}>Search</Link></li>
              </ul>
        </nav>
      </header>
      <body>
        <div>
            <Route path="/" exact component={Home}/> 
            <Route path="/search" exact component={Search}/>
            <Route path="/senator-profile/:id" exact component={Profile}  />
            
        </div>
      </body>
      </Router>
    </div>
  );
}

export default App;


