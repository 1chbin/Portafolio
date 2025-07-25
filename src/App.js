import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Me from './pages/Me';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <BrowserRouter>
      <div className={`App${darkMode ? ' dark' : ''}`}>
        <header className={`glass-header${darkMode ? ' dark' : ''}`}>
          <div className="logo"><strong>MI PORTAFOLIO</strong></div>

          <div className={`hamburger${menuOpen ? ' open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

{/* Boton de modo oscuro */}
          <button
            className={`nav-button${darkMode ? ' dark' : ''}`}
            onClick={toggleDarkMode}
          >
            {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
          </button>
        </header>

{/* Overlay */}
        {menuOpen && ( <div className="menu-overlay" onClick={toggleMenu} />) }

        <nav className={menuOpen ? 'open' : ''}>
          <button className={`nav-button${darkMode ? ' dark' : ''}`}>  
            <NavLink to="/home" end className="nav-links" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </button>
          <button className={`nav-button${darkMode ? ' dark' : ''}`}>  
            <NavLink to="/projects" className="nav-links" onClick={() => setMenuOpen(false)}>
              Projects
            </NavLink>
          </button>
          <button className={`nav-button${darkMode ? ' dark' : ''}`}>  
            <NavLink to="/me" className="nav-links" onClick={() => setMenuOpen(false)}>
              Me
            </NavLink>
          </button>
        </nav>

        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/me" element={<Me />} />
          </Routes>
        </main>

        <footer className="glass-footer">
          &copy; {new Date().getFullYear()} Portafolio de JoacoDev
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
