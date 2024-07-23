import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by title"
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
