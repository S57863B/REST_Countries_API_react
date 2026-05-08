import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

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
      <button onClick={toggleTheme}>
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;