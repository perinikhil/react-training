import React from 'react';

export default (url) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setData(json));
  }, [url]);

  return data;
};
