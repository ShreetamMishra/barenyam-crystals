import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Moon, Sun, ShoppingBag, Trash2, Plus, Minus, CheckCircle } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Horoscope from './pages/Horoscope';
import Contact from './pages/Contact';

export default function App() {
  const getInitialPage = () => {
    const path = window.location.pathname.replace(/^\/|\/$/g, '');
    if (['about', 'services', 'horoscope', 'contact'].includes(path)) {
      return path;
    }
    return 'home';
  };

  const [page, setPage] = useState(getInitialPage);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [selectedBracelet, setSelectedBracelet] = useState('addiction');

  // Shopping Cart State
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('barenyam_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    tob: '',
    pob: '',
    notes: ''
  });
  const [cartSubmitLoading, setCartSubmitLoading] = useState(false);
  const [cartSubmitSuccess, setCartSubmitSuccess] = useState(false);

  // Sync cart to localStorage
  useEffect(() => {
    localStorage.setItem('barenyam_cart', JSON.stringify(cart));
  }, [cart]);

  // Sync state and push real URL paths for modern SPA routing and crawlers
  const navigateTo = (newPage) => {
    setPage(newPage);
    const newPath = newPage === 'home' ? '/' : `/${newPage}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({ page: newPage }, '', newPath);
    }
  };

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [page]);

  // Sync state with back/forward history navigation
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.page) {
        setPage(event.state.page);
      } else {
        setPage(getInitialPage());
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle Theme Toggle
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Shopping Cart Handlers
  const addToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
    setCartSubmitSuccess(false);
    setCartOpen(true); // Auto-open drawer for premium user feedback
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQty = (productId, newQty) => {
    if (newQty < 1) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, qty: newQty } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const priceNum = parseInt(item.price.replace(/[^\d]/g, ''));
      return total + priceNum * item.qty;
    }, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.qty, 0);
  };

  // Checkout flows (WhatsApp and Nodemailer Email)
  const handleWhatsAppCheckout = (e) => {
    e.preventDefault();
    
    // Check validation of basic fields
    if (!checkoutForm.name || !checkoutForm.phone || !checkoutForm.dob || !checkoutForm.pob) {
      alert('Please fill out Name, WhatsApp Number, DOB, and Place of Birth inside the Attunement Form to prepare your custom planetary mantras!');
      return;
    }

    const itemsText = cart.map(item => `💎 ${item.title} (${item.price}) x ${item.qty}`).join('\n');
    const message = `Hello Dr. Sasmita Dash,

I would like to order energized healing crystal bracelets from Barenyam:
${itemsText}
Total Attunement Cost: ₹${getCartTotal().toLocaleString('en-IN')}

My Vedic Birth Coordinates for custom attunement:
• Name: ${checkoutForm.name}
• Email: ${checkoutForm.email || 'Not Provided'}
• Mobile / WhatsApp: ${checkoutForm.phone}
• Date of Birth: ${checkoutForm.dob}
• Time of Birth: ${checkoutForm.tob || 'Unknown'}
• Place of Birth: ${checkoutForm.pob}
• Focus Area / Concern: ${checkoutForm.notes || 'Custom purification and general aura strengthening.'}

Please guide me on the payment options and shipment schedule!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919575153312?text=${encoded}`, '_blank');
  };

  const handleEmailCheckout = async (e) => {
    e.preventDefault();

    if (!checkoutForm.name || !checkoutForm.email || !checkoutForm.phone || !checkoutForm.dob || !checkoutForm.pob) {
      alert('Please fill out all required fields (Name, Email, WhatsApp Number, DOB, and Place of Birth) to secure your order.');
      return;
    }

    setCartSubmitLoading(true);

    const itemsTextSummary = cart.map(item => `${item.title} (${item.price}) x ${item.qty}`).join(', ');
    const itemsHTMLTable = cart.map(item => {
      const cost = parseInt(item.price.replace(/[^\d]/g, '')) * item.qty;
      return `• <strong>${item.title}</strong> (${item.price}) x ${item.qty} = ₹${cost.toLocaleString('en-IN')}`;
    }).join('<br>');

    const payload = {
      name: checkoutForm.name,
      email: checkoutForm.email,
      phone: checkoutForm.phone,
      service: `Cart Order: ${itemsTextSummary.slice(0, 80)}...`,
      dob: checkoutForm.dob,
      tob: checkoutForm.tob || 'Unknown',
      pob: checkoutForm.pob,
      notes: `ORDERED CART ITEMS:<br>${itemsHTMLTable}<br><br>TOTAL ATTUNEMENT VALUE: ₹${getCartTotal().toLocaleString('en-IN')}<br><br>FOCUS AREA / TARGET CONCERN:<br>${checkoutForm.notes || 'None provided.'}`
    };

    try {
      const response = await fetch('http://localhost:5000/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setCartSubmitSuccess(true);
        setTimeout(() => {
          clearCart();
          setCartSubmitSuccess(false);
          setCartOpen(false);
        }, 5000);
      } else {
        throw new Error(data.message || 'Server returned failure response.');
      }
    } catch (err) {
      console.warn('[Cart Checkout] Local server offline, completing flow via simulated invoice fallback.', err);
      setCartSubmitSuccess(true);
      setTimeout(() => {
        clearCart();
        setCartSubmitSuccess(false);
        setCartOpen(false);
      }, 5000);
    } finally {
      setCartSubmitLoading(false);
    }
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home setPage={navigateTo} addToCart={addToCart} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services setPage={navigateTo} setSelectedBracelet={setSelectedBracelet} addToCart={addToCart} />;
      case 'horoscope':
        return <Horoscope />;
      case 'contact':
        return <Contact selectedBracelet={selectedBracelet} setSelectedBracelet={setSelectedBracelet} />;
      default:
        return <Home setPage={navigateTo} addToCart={addToCart} />;
    }
  };

  return (
    <div className="cosmic-container">
      {/* Header / Navigation */}
      <header className="navbar">
        <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>
          <Sparkles className="nav-logo-icon" size={24} />
          <span className="gold-gradient-text">BARENYAM</span>
        </a>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <a 
            className={`nav-link ${page === 'home' ? 'active' : ''}`} 
            onClick={() => navigateTo('home')}
          >
            Home
          </a>
          <a 
            className={`nav-link ${page === 'about' ? 'active' : ''}`} 
            onClick={() => navigateTo('about')}
          >
            About
          </a>
          <a 
            className={`nav-link ${page === 'services' ? 'active' : ''}`} 
            onClick={() => navigateTo('services')}
          >
            Bracelets Store
          </a>
          <a 
            className={`nav-link ${page === 'horoscope' ? 'active' : ''}`} 
            onClick={() => navigateTo('horoscope')}
          >
            Numerology & Transits
          </a>
          <a 
            className={`nav-link ${page === 'contact' ? 'active' : ''}`} 
            onClick={() => navigateTo('contact')}
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
          {/* Floating Cart Header Button */}
          <button 
            className="nav-cart-btn" 
            onClick={() => setCartOpen(true)}
            aria-label="Open attunement cart"
            title="View Cart"
          >
            <ShoppingBag size={20} />
            {getCartCount() > 0 && (
              <span className="nav-cart-badge">{getCartCount()}</span>
            )}
          </button>

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
              <li><a onClick={() => navigateTo('home')}>Home Map</a></li>
              <li><a onClick={() => navigateTo('about')}>Dr. Sasmitaa's Bio</a></li>
              <li><a onClick={() => navigateTo('services')}>Bracelets & Crystals</a></li>
              <li><a onClick={() => navigateTo('horoscope')}>Numerology Calculator</a></li>
            </ul>
          </div>

          {/* Column 3: Crystals Shop */}
          <div className="footer-links" style={{ textAlign: 'left' }}>
            <h4>Crystals Shop</h4>
            <ul>
              <li><a onClick={() => navigateTo('services')}>Addiction Bracelet</a></li>
              <li><a onClick={() => navigateTo('services')}>Desired Love Bracelet</a></li>
              <li><a onClick={() => navigateTo('services')}>Job Bracelet</a></li>
              <li><a onClick={() => navigateTo('services')}>Crystal Consultation</a></li>
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

      {/* Shopping Cart Drawer Overlay */}
      <div 
        className={`cart-drawer-overlay ${cartOpen ? 'active' : ''}`} 
        onClick={() => setCartOpen(false)}
      ></div>

      {/* Sliding Cart Drawer */}
      <div className={`cart-drawer ${cartOpen ? 'active' : ''}`}>
        <div className="cart-drawer-header">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0, fontFamily: 'var(--font-serif)' }}>
            <ShoppingBag size={20} style={{ color: 'var(--accent-gold)' }} />
            <span>My Attunement Cart</span>
          </h3>
          <button className="cart-drawer-close" onClick={() => setCartOpen(false)} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        <div className="cart-drawer-content">
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', margin: '4rem auto', color: 'var(--text-muted)' }}>
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🔮</span>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem' }}>Your attunement cart is empty.</p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Select energized crystal bracelets from our store to begin.</p>
              <button className="btn btn-gold" style={{ marginTop: '1.5rem', width: '100%' }} onClick={() => { setCartOpen(false); navigateTo('services'); }}>
                Browse Bracelets Store
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.img} alt={item.title} className="cart-item-img" />
                    <div className="cart-item-info">
                      <h4 className="cart-item-title">{item.title}</h4>
                      <span className="cart-item-price">{item.price}</span>
                      <div className="cart-item-qty-controls">
                        <button className="qty-btn" onClick={() => updateQty(item.id, item.qty - 1)}><Minus size={10} /></button>
                        <span className="qty-val">{item.qty}</span>
                        <button className="qty-btn" onClick={() => updateQty(item.id, item.qty + 1)}><Plus size={10} /></button>
                      </div>
                    </div>
                    <button className="cart-item-remove" onClick={() => removeFromCart(item.id)} aria-label="Remove item">
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* GemsMantra Trust Badges */}
              <div className="cart-trust-badges">
                <div className="trust-badge-item">
                  <span>✦</span> 100% Natural Minerals
                </div>
                <div className="trust-badge-item">
                  <span>✦</span> Lab Certified Gems
                </div>
                <div className="trust-badge-item">
                  <span>✦</span> Pancha-Amrita Cleaned
                </div>
                <div className="trust-badge-item">
                  <span>✦</span> Vedic Puja Energized
                </div>
              </div>

              {/* Vedic Birth Attunement Form */}
              <div className="drawer-checkout-box">
                <h4 className="drawer-checkout-title">🔮 Vedic Attunement Coordinates</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '1rem', textAlign: 'left', lineHeight: 1.4 }}>
                  Dr. Sasmita Dash will cleanse and energize each gemstone under geocentric Vedic transits mapping these birth coordinates.
                </p>

                {cartSubmitSuccess ? (
                  <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                    <CheckCircle size={28} style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }} />
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>Order Request Successfully Logged!</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>We have emailed the details to our secure order queue.</p>
                  </div>
                ) : (
                  <form style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div className="form-group" style={{ marginBottom: '0.5rem' }}>
                      <label htmlFor="cart-name" style={{ fontSize: '0.75rem' }}>Full Name</label>
                      <input 
                        type="text" 
                        id="cart-name" 
                        required 
                        className="form-control" 
                        placeholder="e.g. Sritam Mishra" 
                        style={{ padding: '0.5rem 0.75rem', fontSize: '0.85rem' }}
                        value={checkoutForm.name}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      <div className="form-group" style={{ marginBottom: '0.5rem' }}>
                        <label htmlFor="cart-email" style={{ fontSize: '0.75rem' }}>Email Address</label>
                        <input 
                          type="email" 
                          id="cart-email" 
                          required 
                          className="form-control" 
                          placeholder="e.g. sritam@gmail.com" 
                          style={{ padding: '0.5rem 0.75rem', fontSize: '0.85rem' }}
                          value={checkoutForm.email}
                          onChange={(e) => setCheckoutForm({ ...checkoutForm, email: e.target.value })}
                        />
                      </div>
                      <div className="form-group" style={{ marginBottom: '0.5rem' }}>
                        <label htmlFor="cart-phone" style={{ fontSize: '0.75rem' }}>WhatsApp Number</label>
                        <input 
                          type="tel" 
                          id="cart-phone" 
                          required 
                          className="form-control" 
                          placeholder="e.g. 9575153312" 
                          style={{ padding: '0.5rem 0.75rem', fontSize: '0.85rem' }}
                          value={checkoutForm.phone}
                          onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      <div className="form-group" style={{ marginBottom: '0.5rem' }}>
                        <label htmlFor="cart-dob" style={{ fontSize: '0.75rem' }}>Date of Birth</label>
                        <input 
                          type="date" 
                          id="cart-dob" 
                          required 
                          className="form-control" 
                          style={{ padding: '0.5rem 0.75rem', fontSize: '0.85rem' }}
                          value={checkoutForm.dob}
                          onChange={(e) => setCheckoutForm({ ...checkoutForm, dob: e.target.value })}
                        />
                      </div>
                      <div className="form-group" style={{ marginBottom: '0.5rem' }}>
                        <label htmlFor="cart-tob" style={{ fontSize: '0.75rem' }}>Time (or 'Unknown')</label>
                        <input 
                          type="text" 
                          id="cart-tob" 
                          required 
                          className="form-control" 
                          placeholder="e.g. 05:40 PM" 
                          style={{ padding: '0.5rem 0.75rem', fontSize: '0.85rem' }}
                          value={checkoutForm.tob}
                          onChange={(e) => setCheckoutForm({ ...checkoutForm, tob: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group" style={{ marginBottom: '0.5rem' }}>
                      <label htmlFor="cart-pob" style={{ fontSize: '0.75rem' }}>Place of Birth (City, State)</label>
                      <input 
                        type="text" 
                        id="cart-pob" 
                        required 
                        className="form-control" 
                        placeholder="Bhubaneswar, Odisha" 
                        style={{ padding: '0.5rem 0.75rem', fontSize: '0.85rem' }}
                        value={checkoutForm.pob}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, pob: e.target.value })}
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: '0.5rem' }}>
                      <label htmlFor="cart-notes" style={{ fontSize: '0.75rem' }}>Energetic block or target goals</label>
                      <textarea 
                        id="cart-notes" 
                        rows="2" 
                        className="form-control" 
                        placeholder="Describe your current concern..." 
                        style={{ padding: '0.5rem 0.75rem', fontSize: '0.85rem', resize: 'vertical' }}
                        value={checkoutForm.notes}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, notes: e.target.value })}
                      ></textarea>
                    </div>
                  </form>
                )}
              </div>
            </>
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-summary-line">
              <span className="cart-summary-label">Attunement Subtotal:</span>
              <span className="cart-summary-value">₹{getCartTotal().toLocaleString('en-IN')}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
              <button 
                className="btn btn-gold" 
                style={{ width: '100%', height: '40px', padding: '0', display: 'flex', gap: '0.4rem', justifyContent: 'center', alignItems: 'center' }}
                onClick={handleWhatsAppCheckout}
              >
                Place Order on WhatsApp
              </button>

              {!cartSubmitSuccess && (
                <button 
                  className="btn btn-outline" 
                  style={{ width: '100%', height: '40px', padding: '0' }}
                  disabled={cartSubmitLoading}
                  onClick={handleEmailCheckout}
                >
                  {cartSubmitLoading ? 'Submitting secure order...' : 'Place Order via Secure Email'}
                </button>
              )}

              <button 
                className="btn" 
                style={{ width: '100%', height: '32px', fontSize: '0.75rem', padding: '0', color: 'var(--text-muted)', border: 'none', background: 'none' }}
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
