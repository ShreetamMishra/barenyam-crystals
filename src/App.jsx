import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Moon, Sun } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Horoscope from './pages/Horoscope';
import Contact from './pages/Contact';

export default function App() {
  const [page, setPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [selectedBracelet, setSelectedBracelet] = useState('addiction');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [page]);

  // Handle Theme Toggle
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home setPage={setPage} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services setPage={setPage} setSelectedBracelet={setSelectedBracelet} />;
      case 'horoscope':
        return <Horoscope />;
      case 'contact':
        return <Contact selectedBracelet={selectedBracelet} setSelectedBracelet={setSelectedBracelet} />;
      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <div className="cosmic-container">
      {/* Header / Navigation */}
      <header className="navbar">
        <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); setPage('home'); }}>
          <Sparkles className="nav-logo-icon" size={24} />
          <span className="gold-gradient-text">BARENYAM</span>
        </a>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <a 
            className={`nav-link ${page === 'home' ? 'active' : ''}`} 
            onClick={() => setPage('home')}
          >
            Home
          </a>
          <a 
            className={`nav-link ${page === 'about' ? 'active' : ''}`} 
            onClick={() => setPage('about')}
          >
            About
          </a>
          <a 
            className={`nav-link ${page === 'services' ? 'active' : ''}`} 
            onClick={() => setPage('services')}
          >
            Bracelets Store
          </a>
          <a 
            className={`nav-link ${page === 'horoscope' ? 'active' : ''}`} 
            onClick={() => setPage('horoscope')}
          >
            Numerology & Transits
          </a>
          <a 
            className={`nav-link ${page === 'contact' ? 'active' : ''}`} 
            onClick={() => setPage('contact')}
          >
            Order Consultation
          </a>

          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn" 
            aria-label="Toggle celestial theme"
            style={{ marginLeft: '1rem' }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Action icons on mobile bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn mobile-theme-btn" 
            aria-label="Toggle theme"
            style={{ display: 'none' }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button 
            className="mobile-nav-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Inject styling to make mobile buttons work nicely */}
      <style>{`
        @media (max-width: 768px) {
          .mobile-theme-btn {
            display: flex !important;
          }
          .navbar .nav-menu .theme-toggle-btn {
            display: none !important;
          }
        }
      `}</style>

      {/* Main Content Area */}
      <main style={{ flexGrow: 1, zIndex: 1 }}>
        {renderPage()}
      </main>

      {/* Footer Component */}
      <footer className="footer">
        <div className="footer-content">
          {/* Brand Info */}
          <div className="footer-brand" style={{ textAlign: 'left' }}>
            <h3 className="gold-gradient-text" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-serif)', fontSize: '1.35rem' }}>
              <Sparkles size={20} style={{ color: 'var(--accent-gold)' }} /> Barenyam Crystals
            </h3>
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#94a3b8' }}>
              Healing crystal bracelets and numerological charts by Dr. Sasmitaa Dash. Bridging Vedic astrology, numerology, and crystal sciences to align your life purpose with cosmic energy.
            </p>
            <div className="footer-socials">
              <a 
                href="https://youtube.com/@oriyanumerology?si=xulgyNTxXscATuh8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn" 
                title="YouTube - Oriya Numerology"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><polygon points="10 15 15 12 10 9" /></svg>
              </a>
              <a 
                href="https://www.instagram.com/oriya_numerology?fbclid=IwY2xjawSEnHpleHRuA2FlbQIxMABicmlkETF4dURoQU55V09kaklia3Q1c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvB9kN8xzbDjsO5KYREfAyVZpvnRTEYrrXYXdRzPou1rEKOfI4rEnshwY3bR_aem_4ptDg_fTRSBcU-dWlVjSPg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn" 
                title="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a 
                href="https://www.facebook.com/drsasmita.dash" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn" 
                title="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="footer-links" style={{ textAlign: 'left' }}>
            <h4>Explore Store</h4>
            <ul>
              <li><a onClick={() => setPage('home')}>Home Map</a></li>
              <li><a onClick={() => setPage('about')}>Dr. Sasmitaa's Bio</a></li>
              <li><a onClick={() => setPage('services')}>Bracelets & Crystals</a></li>
              <li><a onClick={() => setPage('horoscope')}>Numerology Calculator</a></li>
            </ul>
          </div>

          {/* Column 3: Crystals Shop */}
          <div className="footer-links" style={{ textAlign: 'left' }}>
            <h4>Crystals Shop</h4>
            <ul>
              <li><a onClick={() => setPage('services')}>Addiction Bracelet</a></li>
              <li><a onClick={() => setPage('services')}>Desired Love Bracelet</a></li>
              <li><a onClick={() => setPage('services')}>Job Bracelet</a></li>
              <li><a onClick={() => setPage('services')}>Crystal Consultation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Citation */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Barenyam. Designed for Dr. Sasmitaa Dash. All spiritual rights reserved.</p>
          <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem' }}>
            Vedic calculations and Crystal Science properties verified. Mobile Helpline: +91 9575153312
          </p>
        </div>
      </footer>
    </div>
  );
}
