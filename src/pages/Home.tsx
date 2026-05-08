import React from 'react';
import { useCountries } from '../hooks/useCountries';
import { useFilters } from '../hooks/useFilters';
import SearchBar from '../components/SearchBar';
import FilterControls from '../components/FilterControls';
import CountryGrid from '../components/CountryGrid';
import '../styles/filters.css';
import '../styles/grid.css';

const Home: React.FC = () => {
  const { countries, loading, error } = useCountries();
  const {
    searchTerm, setSearchTerm,
    region, setRegion,
    subregion, setSubregion,
    letter, setLetter,
    filteredCountries,
    availableRegions,
    availableSubregions
  } = useFilters(countries);

  if (loading) return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading countries...</div>;
  if (error) return <div style={{ textAlign: 'center', marginTop: '50px', color: 'red' }}>Error: {error}</div>;

  return (
    <div>
      <div className="dashboard-controls">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <FilterControls 
          region={region} 
          setRegion={setRegion}
          subregion={subregion}
          setSubregion={setSubregion}
          letter={letter}
          setLetter={setLetter}
          availableRegions={availableRegions}
          availableSubregions={availableSubregions}
        />
      </div>
      <CountryGrid countries={filteredCountries} />
    </div>
  );
};

export default Home;