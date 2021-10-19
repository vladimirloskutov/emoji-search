import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = (props) => {
  const { textChange } = props;

  const handleChange = (e) => {
    textChange(e);
  };

  return (
    <input
      onChange={handleChange}
    />
  );
};

SearchInput.propTypes = {
  textChange: PropTypes.func,
};

SearchInput.defaultProps = {
  textChange: null,
};

export default SearchInput;
