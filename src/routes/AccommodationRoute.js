import React from 'react';
import { withRouter } from 'react-router-dom';
import Link from '@bookingcom/bui-react/components/Link';
import useFetch from '../hooks/useFetch';

function AccommodationRoute(props) {
  const { match, history } = props;
  const { id } = match.params;
  const data = useFetch(`http://localhost:3001/api/accommodations/${id}/`);

  if (!data) return null;

  const handleClick = () => history.goBack();

  return (
    <div>
      <h1>{ data.title }</h1>
      <Link text="Go back" onClick={handleClick} />
    </div>
  );
}

export default withRouter(AccommodationRoute);
