
import React, { useState, useEffect } from 'react';
import './Reset.css';
import './App.css';
import Navbar from './components/Navbar.js';
import Cellar from './pages/Cellar.js';
import WineList from './pages/WineList.js';
import SearchBar from './components/SearchBar';
import Dropdown from './components/Dropdown';
import { FaWineBottle } from 'react-icons/fa';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import Login from './pages/Login';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  databaseURL: `${process.env.REACT_APP_DB_URL}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESS_SEND_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  var handleSearch = () => {
    // do things for narrowing down the cellar cards
  };

var isAuthenticated = () => {
  //see if local storage has an item called 'authenticationToken'
  //see if not null and > 0 just to be safe

  //if exists, return true
  if(localStorage.getItem('accessToken') !== null){
    return true;
  }
  //if not exist, return false
  return false;
}

  var wineType = ['Red', 'White', 'Rosé', 'Sparkling', 'Dessert', 'Fortified', 'Other'];
  var century = ['1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000'];
  var decade = ['00', '10', '20', '30', '40', '50', '60', '70', '80', '90'];
  var ratings = [<FaWineBottle />,<div><FaWineBottle /><FaWineBottle /></div>, <div><FaWineBottle /><FaWineBottle /><FaWineBottle /></div>, <div><FaWineBottle /><FaWineBottle /><FaWineBottle /><FaWineBottle /></div>, <div><FaWineBottle /><FaWineBottle /><FaWineBottle /><FaWineBottle /><FaWineBottle /></div>]

  const [isToggleOn, setIsToggleOn] = useState(false);
  const [wineArray, setWineArray] = useState([]);
  const db = getFirestore(app);
  const wineDB = collection(db, 'wine');
  
  const fetchWines = async () => {
    const q = query(wineDB);
    const querySnapshot = await getDocs(q);
    const retrievedWines = querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
    setWineArray(retrievedWines);
  };

  useEffect(() => {
    fetchWines();
  }, []);

  const togglePage = () => {
    setIsToggleOn(!isToggleOn);
  };

  if (isAuthenticated()) {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar onToggle={togglePage} activeButton={isToggleOn ? 1 : 2} />
  
          <div className='pageContent'>
            <div className='leftContent'>
              <SearchBar onSearch={handleSearch} />
              <h2>Filter results</h2>
              <div className='filterGrid'>
                <Dropdown items={wineType} placeholder={'Wine Type'} />
                <Dropdown items={century} placeholder={'Century'} />
                <Dropdown items={decade} placeholder={'Decade'} />
                <Dropdown items={ratings} placeholder={'Rating'} />
              </div>
            </div>
            <div className='rightContent'>
              {isToggleOn ? <Cellar wineData={wineArray} db={db} /> : <WineList data={wineArray} db={db} onDataUpdate={fetchWines} />}
            </div>
          </div>
        </header>
      </div>
    );
  }
  else {
    return(
      <Login />
    )
  }
  
}

export default App;
