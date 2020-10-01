import React from 'react';
import './GuestField.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'setTextValue':
      return { ...state, textValue: action.payload };

    case 'addGuest':
      return {
        textValue: '',
        guests: [...state.guests, state.textValue]
      };

    default:
      return state;
  }
};

const initialState = {
  guests: [],
  textValue: '',
};

const GuestField = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'addGuest' });
  };

  const handleChange = (event) => {
    dispatch({ type: 'setTextValue', payload: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="guest-field">
      <input
        type="text"
        onChange={handleChange}
        value={state.textValue}
        placeholder="Enter guest name"
        className="guest-field__text"
      />

      {
        state.guests.map(guest => <div key={guest} className="guest-field__badge">{ guest }</div> )
      }
    </form>
  );
};

export default GuestField;
