import React, { useState, useEffect, useRef } from 'react';
import { FaUser } from 'react-icons/fa';
import '../CSS/Navbar.css';
import UserMenu from './UserMenu.js';
var wineLogo = '/img/logo.png';

const Navbar = ({ onToggle, activeButton }) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  const handleUserMenuClick = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target) &&
        event.target.className !== 'navbar-icon'
      ) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/">
          <img src={wineLogo} alt="Home" className="navbar-icon" />
        </a>
      </div>
      <div className="toggleButtons">
        <button
          onClick={() => onToggle(1)}
          className={`toggleButton ${activeButton === 1 ? 'active' : ''}`}
        >
          Wine List
        </button>
        <button
          onClick={onToggle}
          className={`toggleButton ${activeButton === 2 ? 'active' : ''}`}
        >
          My Cellar
        </button>
      </div>
      <div className="navbar-right">
        <FaUser className="navbar-icon-user" onClick={handleUserMenuClick} />
      </div>
      {userMenuOpen && (
        <div ref={userMenuRef} className='userOptions'>
          <UserMenu />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
