import React from 'react';
import PropTypes from 'prop-types';

import './TypeFilter.css';

function TypeFilter(props) {
  const { onChange, value } = props;

  const handleChange = (event) => {
    onChange(event.currentTarget.checked);
  };

  return (
    <label className="type-filter">
      <input type="checkbox" name="hotelType" checked={value} onChange={handleChange}  />
      <span className="type-filter__label">Show hotels only</span>
    </label>
  );
}

TypeFilter.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default TypeFilter;
