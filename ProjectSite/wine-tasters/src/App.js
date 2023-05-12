import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import CellarCard from './CellarCard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
        <div className='pageContent'>
          <div className='leftContent'>

          </div>
          <div className='rightContent'>
            <div className='cellarGrid'>
              <CellarCard />
              <CellarCard />
              <CellarCard />
              <CellarCard />
              <CellarCard />
              <CellarCard />
              <CellarCard />
              <CellarCard />
              <CellarCard />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}


export default App;
