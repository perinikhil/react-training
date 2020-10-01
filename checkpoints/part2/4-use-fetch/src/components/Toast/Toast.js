import React from 'react';
import PropTypes from 'prop-types';
import './Toast.css';

function Toast(props) {
  return (
    <div className="toast">
      { props.text }
    </div>
  );
}

Toast.propTypes = {
  text: PropTypes.string,
};

export default Toast;
