import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const [showScrollTop, setShowScrollTop] = useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      const meSection = document.getElementById('me');
      const homeSection = document.getElementById('home');
      if (!meSection || !homeSection) return;

      const scrollY = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const centerY = scrollY + viewportHeight / 2;

      const meTop = meSection.offsetTop;
      const meBottom = meTop + meSection.offsetHeight;
      const homeTop = homeSection.offsetTop;
      const homeBottom = homeTop + homeSection.offsetHeight;

      // Si el centro de la pantalla está dentro de la sección 'me'
      if (centerY >= meTop && centerY < meBottom) {
        setActiveSection('me');
      } else if (centerY >= homeTop && centerY < homeBottom) {
        setActiveSection('home');
      } else {
        setActiveSection('');
      }

      setShowScrollTop(scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <div className={`App${darkMode ? ' dark' : ''}`}>
        <header className={`glass-header${darkMode ? ' dark' : ''}`}>

          <div className="logo"><strong>MI PORTAFOLIO</strong></div>

          <div className="nav-links-container">

            <NavLink
              to="/" end className={({ isActive }) => `nav-links desktop${activeSection === 'home' ? ' active' : ''}`}
              onClick={e => {
                setMenuOpen(false);
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
              }}>

              <button className={`nav-button${darkMode ? ' dark' : ''}`}>  
                <p className="nav-text">Home</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-navbar">
                  <path strokeLinecap="round" strokeLinejoin="round" 
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </button>

            </NavLink>


            <a href="#me" className={`nav-links desktop${activeSection === 'me' ? ' active' : ''}`} onClick={e => { e.preventDefault(); setMenuOpen(false); document.getElementById('me')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <button className={`nav-button${darkMode ? ' dark' : ''}`}>  

                <p className="nav-text">Me</p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-navbar">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                </svg>

              </button>
            </a>


            <NavLink to="/projects" end className={`nav-links desktop${activeSection === '' ? '' : ''}`} onClick={() => setMenuOpen(false)}>
              <button className={`nav-button${darkMode ? ' dark' : ''}`}>  
                <p className="nav-text">Projects</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-navbar">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
              </button>
            </NavLink>

              <button className={`nav-button${darkMode ? ' dark' : ''}` + ' desktop'}>  
                  <p className="nav-text">
                    <a href="https://www.linkedin.com/in/joaquin-allue-b3a60a272/" target="_blank" rel="noopener noreferrer" className="linkedin">Linkedin</a>
                  </p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="icon-navbar">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                  </svg>
                </button>
              </div>

{/* Boton de modo oscuro */}
          <button
            className={`nav-button${darkMode ? ' dark' : ''} mode-toggle-button`} onClick={toggleDarkMode}>

            <span className="icon-only">
              {darkMode ? (
                // SOL
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" 
                  stroke-width="1" stroke="currentColor" className="icon-svg">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>

              ) : (
                // LUNA
                <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24"
                  strokeWidth="1" stroke="currentColor" className="icon-svg">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </span>
            <span className="text-only">
              {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
            </span>
          </button>

{/* Boton de menu */}
          <div className={`hamburger${menuOpen ? ' open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </header>

{/* Overlay */}
        {menuOpen && ( <div className="menu-overlay" onClick={toggleMenu} />) }

        <nav className={menuOpen ? 'open' : ''}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-links celular${activeSection === 'home' ? ' active' : ''}`}
            onClick={e => {
              setMenuOpen(false);
              setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
            }}
          >
            <button className={`nav-button${darkMode ? ' dark' : ''}`}>  
              <p className="nav-text">Home</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-navbar">
                <path strokeLinecap="round" strokeLinejoin="round" 
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </button>
          </NavLink>

          <a
            href="#me"
            className={`nav-links celular${activeSection === 'me' ? ' active' : ''}`}
            onClick={e => {
              e.preventDefault();
              setMenuOpen(false);
              document.getElementById('me')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <button className={`nav-button${darkMode ? ' dark' : ''}`}>  
              <p className="nav-text">Me</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-navbar">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
              </svg>
            </button>
          </a>

          <NavLink to="/projects" end className="nav-links celular" onClick={() => setMenuOpen(false)}>
            <button className={`nav-button${darkMode ? ' dark' : ''}`}>  
              <p className="nav-text">Projects</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-navbar">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
              </svg>
            </button>
          </NavLink>

{/* Botón flotante para volver arriba */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`scroll-top-button${darkMode ? ' dark' : ''}`}
          aria-label="Volver arriba"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>
        </button>
      )}

          <button className={`nav-button${darkMode ? ' dark' : ''} celular`}>
            <p className="nav-text celular">
              <a href="https://www.linkedin.com/in/joaquin-allue-b3a60a272/" target="_blank" rel="noopener noreferrer" className="linkedin">Linkedin</a>
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-navbar">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
          </button>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
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
