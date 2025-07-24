import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Me from './pages/Me';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <BrowserRouter>
      <div className={`App${darkMode ? ' dark' : ''}`}>
        <header className="glass-header">
          <div className="logo">MI <strong>PORTAFOLIO</strong></div>
          <nav>
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>
            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>
            <NavLink to="/me" className="nav-link">
              Me
            </NavLink>
          </nav>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
          </button>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/me" element={<Me />} />
          </Routes>
        </main>

        <footer className="glass-footer">
          &copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
