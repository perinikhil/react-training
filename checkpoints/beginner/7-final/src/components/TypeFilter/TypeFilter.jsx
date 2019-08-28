import React from 'react';
import './TypeFilter.css';

function TypeFilter(props) {
  const { onChange } = props;

  const handleChange = (event) => {
    onChange(event.currentTarget.checked);
  };

  return (
    <label className="type-filter">
      <input type="checkbox" name="hotelType" onChange={handleChange}  />
      <span className="type-filter__label">Show hotels only</span>
    </label>
  );
}

export default TypeFilter;
