import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi'
import './Dropdown.css';

const Dropdown = ({ items, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onClick={toggleDropdown}>
      <button className="dropdown-toggle" >
        {selectedItem ? selectedItem : placeholder}
      </button>
      <FiChevronDown className={`dropdown-icon ${isOpen ? 'rotate' : ''}`} />
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
