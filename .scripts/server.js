const express = require('express');
const cors = require('cors');
const data = require('./data');

const app = express();
const port = 3001;

app.use(cors())

app.get('/api/accommodations/', (req, res) => {
  const { query, hotelsOnly } = req.query;

  const result = Object.keys(data.accommodationList).map(id => {
    return data.accommodationList[id];
  }).filter(item => {
    const formattedTitle = item.title.toLowerCase();
    const formattedQuery = query && query.toLowerCase();

    if (formattedQuery && !formattedTitle.startsWith(formattedQuery)) return false;
    if (hotelsOnly && item.accommodationType !== 'hotel') return false;
    return true;
  });

  res.send(result);
});

app.get('/api/accommodations/:id/', (req, res) => {
  const { id } = req.params;

  res.send(data.accommodationList[id]);
});

app.listen(port, () => console.log('API is available at localhost:3001/api/accommodations/ and localhost:3001/api/accommodations/:id'));


