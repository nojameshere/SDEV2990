import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import '../CSS/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
    onSearch(value);
  };

  const handleClearSearch = () => {
    setSearchText('');
    onSearch('');
  };

  return (
    <div className="searchBar">
      <div className="searchInputContainer">
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Search"
        />
        {searchText && (
          <button className="clearButton" onClick={handleClearSearch}>
            <FaTimes />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
