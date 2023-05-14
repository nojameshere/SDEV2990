import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import CellarCard from './CellarCard.js';
import CellarCardAdd from './CellarCardAdd.js';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';

function App() {
  var handleSearch = () => {
    //do things for narrowing down the cellard cards.
  }
  const [view, setView] = useState('reviews');

  const handleToggle = () => {
    setView(view === 'reviews' ? 'myCellar' : 'reviews');
  };
  var dropdownItems1 = ['Thing1', 'Thing2', 'Thing3'];

  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
        <div className='pageContent'>
          <div className='leftContent'>
            <SearchBar onSearch={handleSearch} />
            <h2>Filter results</h2>
            <div className='filterGrid'>
              <Dropdown items={dropdownItems1} placeholder={'Things'} />
              <Dropdown items={dropdownItems1} placeholder={'Things'} />
              <Dropdown items={dropdownItems1} placeholder={'Things'} />
              <Dropdown items={dropdownItems1} placeholder={'Things'} />
            </div>
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
              <CellarCardAdd />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}


export default App;
