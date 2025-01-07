'use client';
import React, { use, useState } from 'react';
import SearchManufacturer from './SearchManufacturer';
const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');

  const handleSearch = () => {
    console.log('searching...');
  };
  return (
    <div>
      <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar_item">
          <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
