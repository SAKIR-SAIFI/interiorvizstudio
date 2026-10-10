import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          <a className="logo" href="#home" aria-label="InteriorViz Studio home">
            <span className="logo-mark" aria-hidden="true">i.</span>
            <span className="logo-copy"><strong>INTERIORVIZ</strong><small>STUDIO</small></span>
          </a>
          <button
            type="button"
            className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
          <ul id="primary-navigation" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>Approach</a></li>
            <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)} className="nav-contact">Let’s talk <span aria-hidden="true">↗</span></a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
