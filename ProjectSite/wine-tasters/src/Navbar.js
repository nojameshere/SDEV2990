import { FaUser } from 'react-icons/fa';
import './Navbar.css';
var wineLogo = '/img/logoWhite.png';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/">
                    <img src={wineLogo} alt='Home' className="navbar-icon" />
                </a>

            </div>
            <div className="navbar-right">
                <FaUser className="navbar-icon" />
            </div>
        </nav>
    );
};

export default Navbar;