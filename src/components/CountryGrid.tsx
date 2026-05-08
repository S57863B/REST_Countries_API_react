import React from 'react';
import type { Country } from '../types';
import CountryCard from './CountryCard';

interface CountryGridProps {
  countries: Country[];
}

const CountryGrid: React.FC<CountryGridProps> = ({ countries }) => {
  if (countries.length === 0) {
    return (
      <div className="no-results">
        <h3>No countries found</h3>
        <p>Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="country-grid">
      {countries.map((country) => (
        <CountryCard key={country.alpha3Code} country={country} />
      ))}
    </div>
  );
};

export default CountryGrid;