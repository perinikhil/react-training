import React from 'react';
import PropTypes from 'prop-types';
import './SearchBox.css';

function SearchBox(props, ref) {
  const { value, onChange } = props;
  const inputRef = React.useRef(null);

  React.useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus()
  }));

  return (
    <div className="search-box">
      <input
        type="text"
        className="search-box__field"
        onChange={onChange}
        value={value}
        ref={inputRef}
        placeholder="Search"
      />
    </div>
  );
}

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default React.forwardRef(SearchBox);
