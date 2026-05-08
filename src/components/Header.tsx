import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { useVisitList } from '../context/VisitListContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { toggleSidebar, visitList } = useVisitList(); 

  return (
    <header style={{ 
      padding: '24px 5%', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      boxShadow: 'var(--shadow)',
      borderRadius: '0 0 var(--border-radius-heavy) var(--border-radius-heavy)',
      marginBottom: '40px'
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Where in the world?</h1>
      </Link>
      
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>

        <button onClick={toggleSidebar} aria-label="Toggle Visit List">
           Visit List ({visitList.length})
        </button>
        
        <button onClick={toggleTheme}>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
};

export default Header;