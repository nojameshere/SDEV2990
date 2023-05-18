import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Cellar from './pages/Cellar.js';
import WineList from './pages/WineList.js'
import SearchBar from './components/SearchBar';
import Dropdown from './components/Dropdown';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://winetastersanon-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

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
