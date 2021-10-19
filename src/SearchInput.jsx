import React from 'react';

const SearchInput = () => {
  const handleChange = () => {
    console.log('You changed the search input.');
  };

  return (
    <input
      onChange={handleChange}
    />
  );
};

export default SearchInput;
