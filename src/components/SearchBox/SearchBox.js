import React from 'react';
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

export default React.forwardRef(SearchBox);
