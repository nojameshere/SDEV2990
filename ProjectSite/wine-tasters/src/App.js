import React, { useState } from 'react';
import './Reset.css';
import './App.css';
import Navbar from './components/Navbar.js';
import Cellar from './pages/Cellar.js';
import WineList from './pages/WineList.js'
import SearchBar from './components/SearchBar';
import Dropdown from './components/Dropdown';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDoc, query, where, getDocs, connectFirestoreEmulator } from "firebase/firestore";

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


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const wineDB = collection(db, "wine");

// console.log(wineDB);s
const q = query(wineDB, where('wineID', '==', 1));
// console.log(q);
const doShit = async () => {
  const queryTry = await getDocs(q);
  queryTry.forEach((doc) => {
    console.log(doc.id, ' =>', doc.data());
  });
}
doShit();

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
