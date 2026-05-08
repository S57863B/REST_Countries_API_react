import React from 'react';

interface FilterControlsProps {
  region: string;
  setRegion: (r: string) => void;
  subregion: string;
  setSubregion: (s: string) => void;
  letter: string;
  setLetter: (l: string) => void;
  availableRegions: string[];
  availableSubregions: string[];
}

const FilterControls: React.FC<FilterControlsProps> = ({
  region, setRegion, subregion, setSubregion, letter, setLetter, availableRegions, availableSubregions
}) => {
  // Generate A-Z for the letter filter
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  return (
    <div className="filter-controls">
      <select 
        className="control-input custom-select" 
        value={region} 
        onChange={(e) => setRegion(e.target.value)}
        aria-label="Filter by Region"
      >
        <option value="">Filter by Region</option>
        {availableRegions.map(r => <option key={r} value={r}>{r}</option>)}
      </select>

      <select 
        className="control-input custom-select" 
        value={subregion} 
        onChange={(e) => setSubregion(e.target.value)}
        disabled={!region}
        aria-label="Filter by Subregion"
        title={!region ? "Select a region first" : "Filter by Subregion"}
      >
        <option value="">Filter by Subregion</option>
        {availableSubregions.map(s => <option key={s} value={s}>{s}</option>)}
      </select>

      <select 
        className="control-input custom-select" 
        value={letter} 
        onChange={(e) => setLetter(e.target.value)}
        aria-label="Filter by First Letter"
      >
        <option value="">Filter by Letter</option>
        {alphabet.map(l => <option key={l} value={l}>{l}</option>)}
      </select>
    </div>
  );
};

export default FilterControls;