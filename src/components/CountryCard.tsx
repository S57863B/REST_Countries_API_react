import React from 'react';
import { Link } from 'react-router-dom';
import type { Country } from '../types';
import { useVisitList } from '../context/VisitListContext';

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const { addCountry, removeCountry, isInList } = useVisitList();
  const inList = isInList(country.alpha3Code);

  const handleListToggle = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevents the card's Link from navigating when the button is clicked
    if (inList) {
      removeCountry(country.alpha3Code);
    } else {
      addCountry(country);
    }
  };

  return (
    <div className="country-card">
      <Link to={`/country/${country.alpha3Code}`} className="card-link" aria-label={`View details for ${country.name}`}>
        <img src={country.flags.png} alt={`Flag of ${country.name}`} loading="lazy" />
        <div className="card-content">
          <h3>{country.name}</h3>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Capital:</strong> {country.capital || 'N/A'}</p>
        </div>
      </Link>
      <div className="card-actions">
        <button 
          onClick={handleListToggle} 
          className={`visit-btn ${inList ? 'remove' : 'add'}`}
          aria-label={inList ? `Remove ${country.name} from visit list` : `Add ${country.name} to visit list`}
        >
          {inList ? '− Remove from Visit List' : '+ Add to Visit List'}
        </button>
      </div>
    </div>
  );
};

export default CountryCard;