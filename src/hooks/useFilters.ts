import { useState, useMemo } from 'react';
import type { Country } from '../types';

export const useFilters = (countries: Country[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('');
  const [subregion, setSubregion] = useState('');
  const [letter, setLetter] = useState('');

  // Reset subregion automatically if the parent region changes
  const handleRegionChange = (newRegion: string) => {
    setRegion(newRegion);
    setSubregion('');
  };

  const filteredCountries = useMemo(() => {
    return countries.filter(country => {
      const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = region ? country.region === region : true;
      const matchesSubregion = subregion ? country.subregion === subregion : true;
      const matchesLetter = letter ? country.name.charAt(0).toUpperCase() === letter.toUpperCase() : true;

      return matchesSearch && matchesRegion && matchesSubregion && matchesLetter;
    });
  }, [countries, searchTerm, region, subregion, letter]);

  // Dynamically extract unique regions from the dataset
  const availableRegions = useMemo(() => {
    const regions = countries.map(c => c.region).filter(Boolean);
    return Array.from(new Set(regions)).sort();
  }, [countries]);

  // Dynamically extract unique subregions based ONLY on the currently selected region
  const availableSubregions = useMemo(() => {
    if (!region) return [];
    const subregions = countries
      .filter(c => c.region === region)
      .map(c => c.subregion)
      .filter(Boolean);
    return Array.from(new Set(subregions)).sort();
  }, [countries, region]);

  return {
    searchTerm, setSearchTerm,
    region, setRegion: handleRegionChange,
    subregion, setSubregion,
    letter, setLetter,
    filteredCountries,
    availableRegions,
    availableSubregions
  };
};