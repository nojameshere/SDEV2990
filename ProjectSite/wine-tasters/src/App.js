import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Cellar from './pages/Cellar.js';
import WineList from './pages/WineList.js'
import CellarCard from './components/CellarCard.js';
import CellarCardAdd from './components/CellarCardAdd.js';
import SearchBar from './components/SearchBar';
import Dropdown from './components/Dropdown';
import Rating from './components/Rating';

function App() {
  var handleSearch = () => {
    //do things for narrowing down the cellard cards.
  }
  var dropdownItems1 = ['Thing1', 'Thing2', 'Thing3'];

  const [isToggleOn, setIsToggleOn] = useState(false);

  const togglePage = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div className="App">
      <header className="App-header">
      <Navbar onToggle={togglePage} activeButton={isToggleOn ? 1 : 2}/>

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
          {isToggleOn ? <Cellar /> : <WineList />}
          </div>
        </div>
      </header>
    </div>
  );
}


export default App;
