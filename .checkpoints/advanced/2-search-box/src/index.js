import React from 'react';
import ReactDOM from 'react-dom';

import HotelCard from './components/HotelCard/HotelCard';
import PersuasionAlert from './components/PersuasionAlert/PersuasionAlert';
import SearchBox from "./components/SearchBox/SearchBox";
import TypeFilter from './components/TypeFilter/TypeFilter';
import GuestField from './components/GuestField/GuestField';
import { accommodationList } from './data';
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
    <div className="container">
      <SearchBox value={query} onChange={handleSearchChange} ref={searchBoxRef} />

      <div className="container__form-row">
        <TypeFilter onChange={handleFilterChange} value={hotelsOnly} />
        { (query || hotelsOnly) && <a onClick={handleClear} text="Clear" /> }
      </div>

      <GuestField />

      {
        accommodationList.map(item => {
          const formattedTitle = item.title.toLowerCase();
          const formattedSearchValue = query.toLowerCase();

          if (!formattedTitle.includes(formattedSearchValue)) return null;
          if (item.accommodationType !== 'hotel' && hotelsOnly) return null;

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
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
