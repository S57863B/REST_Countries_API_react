import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="search-bar-container">
      <input 
        type="text" 
        className="control-input search-input"
        placeholder="Search for a country..." 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search for a country by name"
      />
    </div>
  );
};

export default SearchBar;