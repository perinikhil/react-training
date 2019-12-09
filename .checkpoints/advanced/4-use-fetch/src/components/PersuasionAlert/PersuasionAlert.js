import React from 'react';
import PropTypes from 'prop-types';

import './PersuasionAlert.css';

function PersuasionAlert(props) {
  return (
    <div className="persuasion-alert">
      Still interested in <b>{ props.name }</b>? Book it now!
    </div>
  );
}

PersuasionAlert.propTypes = {
  name: PropTypes.string.isRequired
};

export default PersuasionAlert;
