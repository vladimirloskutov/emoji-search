import React from 'react';
import PropTypes from 'prop-types';
import './SearchInput.css';

const SearchInput = (props) => {
  const { textChange } = props;

  const handleChange = (e) => {
    textChange(e);
  };

  return (
    <div className="component-search-input">
      <div>
        <input
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

SearchInput.propTypes = {
  textChange: PropTypes.func,
};

SearchInput.defaultProps = {
  textChange: null,
};

export default SearchInput;
