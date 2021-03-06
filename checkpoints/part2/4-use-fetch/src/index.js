import React from 'react';
import ReactDOM from 'react-dom';

import ToastProvider from './components/Toast/ToastProvider';
import HotelCard from './components/HotelCard/HotelCard';
import PersuasionAlert from './components/PersuasionAlert/PersuasionAlert';
import SearchBox from "./components/SearchBox/SearchBox";
import TypeFilter from './components/TypeFilter/TypeFilter';
import GuestField from './components/GuestField/GuestField';
import useFetch from './hooks/useFetch';
import './index.css';

const INITIAL_STATE = { query: '', hotelsOnly: false };

function reducer(state, action) {
  switch (action.type) {
    case 'setQuery':
      return { ...state, query: action.payload };
    case 'setHotelsOnly':
      return { ...state, hotelsOnly: action.payload };
    case 'reset':
      return INITIAL_STATE;
    default:
      break;
  }
}

function App() {
  const searchBoxRef = React.useRef(null);
  const [{ query, hotelsOnly }, dispatch] = React.useReducer(reducer, INITIAL_STATE);
  const baseUrl = 'http://localhost:3001/api/accommodations/';
  const params = [];

  if (query) params.push(`query=${query}`);
  if (hotelsOnly) params.push('hotelsOnly=1');

  const data = useFetch(`${baseUrl}?${params.join('&')}`);

  const handleFilterChange = (checked) => {
    dispatch({ type: 'setHotelsOnly', payload: checked });
  };

  const handleSearchChange = (e) => {
    dispatch({ type: 'setQuery', payload: e.target.value });
  };

  const handleClear = () => {
    dispatch({ type: 'reset' });
    searchBoxRef.current.focus();
  };

  return (
    <ToastProvider>
      <div className="container">
        <SearchBox value={query} onChange={handleSearchChange} ref={searchBoxRef} />

        <div className="container__form-row">
          <TypeFilter onChange={handleFilterChange} value={hotelsOnly} />
          { (query || hotelsOnly) && <button onClick={handleClear}>Clear</button> }
        </div>

        <GuestField />

        {
          data && data.map(item => {
            return (
              <div className="listing-item" key={item.id}>
                <HotelCard
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  locations={item.locations}
                >
                  { Boolean(item.promoted) && <PersuasionAlert name={item.title} /> }
                </HotelCard>
              </div>
            );
          })
        }
      </div>
    </ToastProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
