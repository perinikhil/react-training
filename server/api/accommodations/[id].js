const data = require('../../data');


module.exports = (req, res) => {
  const { id } = req.query;
  const hotelData = data.accommodationList[id];

  if (!hotelData) res.status(404).send({ error: 'Not found' });
  res.send(hotelData);
};
