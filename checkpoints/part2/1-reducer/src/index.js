import React from 'react';
import ReactDOM from 'react-dom';

import HotelCard from './components/HotelCard/HotelCard';
import PersuasionAlert from './components/PersuasionAlert/PersuasionAlert';
import TypeFilter from './components/TypeFilter/TypeFilter';
import GuestField from './components/GuestField/GuestField';
import { accommodationList } from './data';
import './index.css';

function App() {
  const [filterHotels, setFilterHotels] = React.useState(false);

  const handleFilterChange = (checked) => {
    setFilterHotels(checked);
  };

  return (
    <div className="container">
      <TypeFilter onChange={handleFilterChange} />
      <GuestField />

      {
        accommodationList.map(item => {
          if (item.accommodationType !== 'hotel' && filterHotels) return null;

          return (
            <div className="listing-item">
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
