import React from 'react';
import './PersuasionAlert.css';

function PersuasionAlert(props) {
  return (
    <div className="persuasion-alert">
      Still interested in <b>{ props.name }</b>? Book it now!
    </div>
  );
}

export default PersuasionAlert;
