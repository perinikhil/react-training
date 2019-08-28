import React from 'react';
import ReactDOM from 'react-dom';
import HotelCard from './components/HotelCard';
import './index.css';

function App() {
  return (
    <div className="container">
      <HotelCard />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
