import React, { useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCountries } from '../hooks/useCountries';
import '../styles/details.css';

const CountryDetails: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const { countries, loading, error } = useCountries();

  // Find the selected country based on the URL parameter
  const country = useMemo(() => {
    return countries.find((c) => c.alpha3Code === code);
  }, [countries, code]);

  if (loading) return <div className="status-message">Loading details...</div>;
  if (error) return <div className="status-message error">Error: {error}</div>;
  if (!country) return <div className="status-message">Country not found.</div>;

  // Format data for display
  const nativeName = country.nativeName;
  const currencies = country.currencies?.map(c => c.name).join(', ') || 'N/A';
  const languages = country.languages?.map(l => l.name).join(', ') || 'N/A';
  const tld = country.topLevelDomain?.join(', ') || 'N/A';

  // Map border alpha3Codes to full country names
  const borders = country.borders?.map(borderCode => {
    const borderCountry = countries.find(c => c.alpha3Code === borderCode);
    return {
      code: borderCode,
      name: borderCountry ? borderCountry.name : borderCode
    };
  }) || [];

  return (
    <div className="country-details-page">
      <button className="back-btn" onClick={() => navigate(-1)} aria-label="Go back">
        <span aria-hidden="true">←</span> Back
      </button>

      <div className="details-container">
        <div className="flag-container">
          <img src={country.flags.svg || country.flags.png} alt={`Flag of ${country.name}`} />
        </div>

        <div className="info-container">
          <h2>{country.name}</h2>
          
          <div className="info-grid">
            <div className="info-column">
              <p><strong>Native Name:</strong> {nativeName}</p>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Sub Region:</strong> {country.subregion}</p>
              <p><strong>Capital:</strong> {country.capital || 'N/A'}</p>
            </div>
            <div className="info-column">
              <p><strong>Top Level Domain:</strong> {tld}</p>
              <p><strong>Currencies:</strong> {currencies}</p>
              <p><strong>Languages:</strong> {languages}</p>
            </div>
          </div>

          <div className="border-countries">
            <strong>Border Countries:</strong>
            <div className="border-tags">
              {borders.length > 0 ? (
                borders.map(border => (
                  <Link key={border.code} to={`/country/${border.code}`} className="border-btn">
                    {border.name}
                  </Link>
                ))
              ) : (
                <span>None</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;