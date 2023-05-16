import React from 'react';
import { FaUser } from 'react-icons/fa';
import './Navbar.css';
var wineLogo = '/img/logo.png';
const Navbar = ({onToggle, activeButton}) => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/">
                    <img src={wineLogo} alt='Home' className="navbar-icon" />
                </a>

            </div>
            <div className='toggleButtons'>
                <button onClick={() => onToggle(1)} className={`toggleButton ${activeButton === 1 ? 'active' : ''}`}>Wine List</button>
                <button onClick={onToggle} className={`toggleButton ${activeButton === 2 ? 'active' : ''}`}>My Cellar</button>
            </div>
            <div className="navbar-right">
                <FaUser className="navbar-icon" />
            </div>
        </nav>
    );
};

export default Navbar;