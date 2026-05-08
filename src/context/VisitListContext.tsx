import React, { createContext, useState, useEffect, type ReactNode, useContext } from 'react';
import type { Country } from '../types';

interface VisitListContextType {
  visitList: Country[];
  addCountry: (country: Country) => void;
  removeCountry: (countryCode: string) => void;
  isInList: (countryCode: string) => boolean;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const VisitListContext = createContext<VisitListContextType | undefined>(undefined);

export const VisitListProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [visitList, setVisitList] = useState<Country[]>(() => {
    const saved = localStorage.getItem('visitList');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('visitList', JSON.stringify(visitList));
  }, [visitList]);

  const addCountry = (country: Country) => {
    setVisitList((prev) => {
      if (prev.find((c) => c.alpha3Code === country.alpha3Code)) return prev;
      return [...prev, country];
    });
  };

  const removeCountry = (countryCode: string) => {
    setVisitList((prev) => prev.filter((c) => c.alpha3Code !== countryCode));
  };

  const isInList = (countryCode: string) => {
    return visitList.some((c) => c.alpha3Code === countryCode);
  };

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <VisitListContext.Provider value={{ 
      visitList, 
      addCountry, 
      removeCountry, 
      isInList, 
      isSidebarOpen, 
      toggleSidebar 
    }}>
      {children}
    </VisitListContext.Provider>
  );
};

// Companion Hook for modular consumption
export const useVisitList = () => {
  const context = useContext(VisitListContext);
  if (context === undefined) {
    throw new Error('useVisitList must be used within a VisitListProvider');
  }
  return context;
};