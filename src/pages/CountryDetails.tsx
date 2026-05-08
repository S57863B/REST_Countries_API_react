import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryDetails: React.FC = () => {
  const { code } = useParams<{ code: string }>();

  return (
    <div>
      <Link to="/">
        <button style={{ marginBottom: '40px' }}>← Back</button>
      </Link>
      <h2>Details for {code}</h2>
      {/*country information will render here*/}
    </div>
  );
};

export default CountryDetails;