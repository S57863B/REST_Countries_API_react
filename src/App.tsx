import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { VisitListProvider, useVisitList } from './context/VisitListContext';
import Header from './components/Header';
import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';
import './App.css';
import './styles/visit-list.css'; 

const VisitListSidebar: React.FC = () => {
  const { isSidebarOpen, toggleSidebar, visitList } = useVisitList();

  return (
    <>
      <div className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>
      <aside className={`visit-list-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>My Visit List</h2>
          <button className="close-btn" onClick={toggleSidebar}>×</button>
        </div>
        <div className="visit-list-content">
          {visitList.length === 0 ? (
            <p>Your list is empty. Add some countries!</p>
          ) : (
            <ul>
              {visitList.map(country => (
                <li key={country.alpha3Code} style={{ marginBottom: '16px' }}>
                  {country.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </>
  );
};

const App: React.FC = () => {
  return (
<ThemeProvider>
      <VisitListProvider>
        <Router> 
          <Header />
          <VisitListSidebar />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/country/:code" element={<CountryDetails />} />
            </Routes>
          </main>
        </Router>
      </VisitListProvider>
    </ThemeProvider>
  );
};

export default App;