import { useState, useEffect } from 'react';
import type { Country } from '../types';

// Module-level cache to store data globally outside the React lifecycle
let cachedCountries: Country[] | null = null;

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>(cachedCountries || []);
  const [loading, setLoading] = useState<boolean>(!cachedCountries);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cachedCountries) {
      setCountries(cachedCountries);
      setLoading(false);
      return;
    }

    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.BASE_URL}data.json`);
        if (!response.ok) throw new Error('Failed to fetch country data');
        
        const data: Country[] = await response.json();
        cachedCountries = data;
        setCountries(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error };
};