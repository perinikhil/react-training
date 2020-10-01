import React from 'react';
import ReactDOM from 'react-dom';
import HotelCard from './components/HotelCard/HotelCard';
import './index.css';

function App() {
  return (
    <div className="container">
      <HotelCard
        title="Hotel Ubud"
        description="Hotel Ubud offers a peaceful retreat amidst lush tropical gardens, a 3-minute walk from Ubud Palace."
        imageUrl="https://picsum.photos/id/653/300/300"
        locations={['Bali', 'Sayan', 'Ubud']}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
