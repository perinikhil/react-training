const data = require('../../data');

module.exports = (req, res) => {
  const { query, hotelsOnly } = req.query;

  const result = Object.keys(data.accommodationList).map(id => {
    return data.accommodationList[id];
  }).filter(item => {
    const formattedTitle = item.title.toLowerCase();
    const formattedQuery = query && query.toLowerCase();

    if (formattedQuery && !formattedTitle.includes(formattedQuery)) return false;
    if (hotelsOnly && item.accommodationType !== 'hotel') return false;
    return true;
  });

  res.send(result);
}
