import React, { useState, useEffect } from 'react';
import { Sparkles, Moon, Gem, Star, ArrowRight, Phone } from 'lucide-react';

export default function Home({ setPage, addToCart }) {
  const [birthMonth, setBirthMonth] = useState('1');
  const [birthDay, setBirthDay] = useState(1);
  const [calcResult, setCalcResult] = useState(null);
  const [lunarPhase, setLunarPhase] = useState({ name: 'Waxing Gibbous', illumination: 82, icon: '🌔' });

  // Live Lunar Phase Cycle Estimation
  useEffect(() => {
    const refNewMoon = new Date('2024-01-11T16:57:00Z');
    const now = new Date();
    const diffTime = Math.abs(now - refNewMoon);
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    const cycle = 29.53059;
    const lunarAge = diffDays % cycle;

    let phaseName = '';
    let illumination = 0;
    let icon = '';

    if (lunarAge < 1.845) {
      phaseName = 'New Moon'; illumination = 0; icon = '🌑';
    } else if (lunarAge < 5.5369) {
      phaseName = 'Waxing Crescent'; illumination = 25; icon = '🌒';
    } else if (lunarAge < 9.2288) {
      phaseName = 'First Quarter'; illumination = 50; icon = '🌓';
    } else if (lunarAge < 12.9206) {
      phaseName = 'Waxing Gibbous'; illumination = 75; icon = '🌔';
    } else if (lunarAge < 16.6125) {
      phaseName = 'Full Moon'; illumination = 100; icon = '🌕';
    } else if (lunarAge < 20.3044) {
      phaseName = 'Waning Gibbous'; illumination = 75; icon = '🌖';
    } else if (lunarAge < 23.9962) {
      phaseName = 'Third Quarter'; illumination = 50; icon = '🌗';
    } else if (lunarAge < 27.6881) {
      phaseName = 'Waning Crescent'; illumination = 25; icon = '🌘';
    } else {
      phaseName = 'New Moon'; illumination = 0; icon = '🌑';
    }

    setLunarPhase({ name: phaseName, illumination: Math.round(illumination), icon });
  }, []);

  const calculateZodiacCrystal = (e) => {
    e.preventDefault();
    const month = parseInt(birthMonth);
    const day = parseInt(birthDay);
    
    let sign = '';
    let element = '';
    let crystal = '';
    let benefits = '';

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      sign = 'Aries'; element = 'Fire'; crystal = 'Carnelian & Red Jasper';
      benefits = 'Fires up courage, boosts vitality, and aligns your natural pioneering passion with active leadership energy.';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      sign = 'Taurus'; element = 'Earth'; crystal = 'Green Emerald & Rose Quartz';
      benefits = 'Stabilizes abundance networks, invokes venous harmony, and grounds emotional self-worth.';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      sign = 'Gemini'; element = 'Air'; crystal = 'Citrine & Tiger\'s Eye';
      benefits = 'Activates solar plexus intellect, clears communicative hesitation, and doubles creative wealth opportunities.';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      sign = 'Cancer'; element = 'Water'; crystal = 'Rainbow Moonstone & Pearl';
      benefits = 'Nurtures psychic emotional sanctuaries, calms the mind, and synchronizes your biological lunar tides.';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      sign = 'Leo'; element = 'Fire'; crystal = 'Sunstone & Amber';
      benefits = 'Magnifies solar charisma, unlocks creative self-expression, and brings protective radiant luck.';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      sign = 'Virgo'; element = 'Earth'; crystal = 'Amazonite & Green Jade';
      benefits = 'Invokes calm logic, structures healthy daily routines, and harmonizes detailed communication.';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      sign = 'Libra'; element = 'Air'; crystal = 'Lapis Lazuli & Opal';
      benefits = 'Invites relationship diplomacy, anchors composite balance, and channels loving Venusian arts.';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      sign = 'Scorpio'; element = 'Water'; crystal = 'Black Obsidian & Labradorite';
      benefits = 'Deflects psychic static, assists deep spiritual rebirth, and grounds raw intuitive power.';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      sign = 'Sagittarius'; element = 'Fire'; crystal = 'Turquoise & Sodalite';
      benefits = 'Expands philosophical vision, triggers travel luck, and guards your field during adventurous quests.';
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      sign = 'Capricorn'; element = 'Earth'; crystal = 'Garnet & Black Tourmaline';
      benefits = 'Structures patient career growth, establishes highly secure boundaries, and channels professional focus.';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      sign = 'Aquarius'; element = 'Air'; crystal = 'Amethyst & Fluorite';
      benefits = 'Unlocks futuristic vision, clears mental fog, and protects community networking channels.';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      sign = 'Pisces'; element = 'Water'; crystal = 'Aquamarine & Fluorite';
      benefits = 'Quiets emotional static, anchors high-fidelity spiritual transits, and amplifies dreams.';
    }

    setCalcResult({ sign, element, crystal, benefits });
  };

  return (
    <div style={{ animation: 'fadeIn 1s ease-in-out' }}>
      {/* Hero Section */}
      <section className="hero-section" style={{
        padding: '4.5rem 1.5rem 2.5rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="pulsating-element" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(var(--accent-gold-rgb), 0.08)',
            border: '1px solid rgba(var(--accent-gold-rgb), 0.25)',
            borderRadius: '50px',
            padding: '0.35rem 1rem',
            fontSize: '0.8rem',
            color: 'var(--accent-gold)',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            marginBottom: '1.25rem'
          }}>
            <Gem size={12} /> Clarity • Balance • Transformation
          </div>
          
          <h1 className="hero-title gold-gradient-text" style={{
            lineHeight: 1.1,
            fontWeight: 800,
            marginBottom: '1.25rem',
            fontFamily: 'var(--font-serif)'
          }}>
            Dr. Sasmita Dash Astrologer
            <span style={{ display: 'block', fontSize: '0.5em', marginTop: '0.5rem', fontWeight: 600, fontFamily: 'var(--font-sans)', letterSpacing: '2px', textTransform: 'uppercase' }} className="purple-gradient-text">
              Barenyam Crystals & Oriya Numerology
            </span>
          </h1>
          
          <p className="floating-element hero-subtitle" style={{
            fontFamily: 'var(--font-serif)',
            color: 'var(--text-primary)',
            marginBottom: '1.5rem',
            letterSpacing: '0.5px',
            fontSize: '1.2rem'
          }}>
            Vedic Remedies & Healing Crystal Bracelets by Dr. Sasmitaa Dash (Dr. Sasmita Dash)
          </p>
          
          <p style={{
            color: 'var(--text-secondary)',
            maxWidth: '650px',
            margin: '0 auto 2rem',
            lineHeight: 1.6
          }}>
            Align your personal energy with the universe. We handpick and energize healing crystal bracelets custom-tailored to your Vedic birth chart, astrology, and numerology lines.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-gold" onClick={() => setPage('services')}>
              Shop Healing Bracelets <ArrowRight size={14} />
            </button>
            <button className="btn btn-outline" onClick={() => setPage('contact')}>
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Quick Bio Section with Dr. Sasmitaa Dash Portrait */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', padding: '3rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1.5fr',
            gap: '3rem',
            alignItems: 'center'
          }} className="form-row">
            
            {/* Image Column */}
            <div style={{ position: 'relative', maxWidth: '380px', justifySelf: 'center' }}>
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '-10px',
                right: '10px',
                bottom: '10px',
                border: '1.5px solid var(--accent-gold)',
                borderRadius: '8px',
                zIndex: 0,
                pointerEvents: 'none'
              }}></div>
              <img 
                src="/sasmitaa_dash.png" 
                alt="Dr. Sasmitaa Dash Portrait" 
                style={{
                  width: '100%',
                  borderRadius: '6px',
                  display: 'block',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: 'var(--glass-shadow)',
                  border: '1px solid var(--glass-border)'
                }}
              />
            </div>

            {/* Text Column */}
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 600 }}>Astrologer & Crystal Expert</span>
              <h2 className="bio-title" style={{ margin: '0.35rem 0 1rem', lineHeight: 1.2 }}>Dr. Sasmitaa Dash</h2>
              
              <p style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.6 }}>
                Guided by astrology and aligned with crystals, Dr. Sasmitaa Dash blends Vedic astrology, numerology, and crystal science to give you highly accurate, customized guidance.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }} className="form-row">
                <div className="glass-card" style={{ padding: '0.75rem 1rem' }}>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', marginBottom: '0.2rem' }}>Astrology + Crystal</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.4 }}>Handpicked crystals chosen to balance your birth planets.</p>
                </div>
                <div className="glass-card" style={{ padding: '0.75rem 1rem' }}>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', marginBottom: '0.2rem' }}>Holistic Guidance</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.4 }}>Career alignment, romantic synastry, and transits.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button className="btn btn-gold" onClick={() => setPage('about')}>
                  Read Full Bio
                </button>
                <a href="tel:9575153312" className="btn btn-outline" style={{ display: 'inline-flex', gap: '0.4rem', height: '38px', padding: '0 1rem', alignItems: 'center' }}>
                  <Phone size={14} /> +91 9575153312
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lunar Phase & Zodiac Crystal Calculator */}
      <section className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '2rem',
        }} className="form-row">
          
          {/* Lunar Phase Widget */}
          <div className="glass-card lunar-widget" style={{ padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-gold)', marginBottom: '0.25rem' }}>Moon Tracker</h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Live Lunar Alignment</p>
            <div className="lunar-phase-visual pulsating-element" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '3rem' }}>{lunarPhase.icon}</span>
            </div>
            <div style={{ marginTop: '0.75rem' }}>
              <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{lunarPhase.name}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Illumination: {lunarPhase.illumination}%</p>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.75rem', lineHeight: 1.4 }}>
              "Crystals like Moonstone absorb the Moon's silver rays, cleansing negative debris from your aura."
            </p>
          </div>

          {/* Zodiac Crystal Calculator */}
          <div className="glass-card" style={{ padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--accent-gold)', marginBottom: '0.25rem', fontFamily: 'var(--font-serif)' }}>Zodiac Crystal Navigator</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Discover which specialized healing gemstone is vibrating in alignment with your birth coordinates right now.
            </p>

            <form onSubmit={calculateZodiacCrystal}>
              <div className="form-row" style={{ gap: '0.75rem' }}>
                <div className="form-group" style={{ marginBottom: '0.75rem' }}>
                  <label htmlFor="month-select">Birth Month</label>
                  <select 
                    id="month-select" 
                    className="form-control" 
                    value={birthMonth} 
                    onChange={(e) => setBirthMonth(e.target.value)}
                    style={{ padding: '0.65rem' }}
                  >
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '0.75rem' }}>
                  <label htmlFor="day-select">Birth Day</label>
                  <select 
                    id="day-select" 
                    className="form-control" 
                    value={birthDay} 
                    onChange={(e) => setBirthDay(parseInt(e.target.value))}
                    style={{ padding: '0.65rem' }}
                  >
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-gold" style={{ width: '100%', marginTop: '0.25rem', height: '38px', padding: '0' }}>
                Find My Aligned Gemstone
              </button>
            </form>

            {calcResult && (
              <div className="zodiac-result-card text-left" style={{ animation: 'float 6s ease-in-out infinite', textAlign: 'left', marginTop: '1rem', paddingTop: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>{calcResult.sign} • {calcResult.element}</p>
                    <h4 style={{ fontSize: '1.35rem', color: 'var(--accent-gold)' }}>{calcResult.crystal}</h4>
                  </div>
                  <div style={{ fontSize: '2rem', color: 'var(--accent-gold)' }}>💎</div>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, background: 'rgba(var(--accent-gold-rgb), 0.04)', padding: '0.75rem', borderRadius: '4px', borderLeft: '2px solid var(--accent-gold)' }}>
                  {calcResult.benefits}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Products Showcase (Compact Grid) */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', padding: '3.5rem 0' }}>
        <div className="container">
          <h2 className="section-title">Energized Healing Bracelets</h2>
          <p className="section-subtitle">Handpicked natural crystals, custom assembled under precise transit alignments by Dr. Sasmitaa Dash.</p>

          <div className="bracelet-grid">
            {/* Product 1: Addiction Bracelet */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', padding: '1.25rem' }}>
              <div style={{ overflow: 'hidden', borderRadius: '4px', marginBottom: '0.75rem', height: '170px' }}>
                <img 
                  src="/bracelet_addiction.png" 
                  alt="Addiction Bracelet"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>Addiction Bracelet</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0.1rem 0 0.5rem' }}>Heal • Balance • Freedom</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4, marginBottom: '1rem', textAlign: 'left' }}>
                Formulated with Kunzite, Amethyst, Lepidolite, and Iolite to help calm the nervous system and alleviate addictive cravings.
              </p>
              <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem', flexDirection: 'column', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--accent-gold)' }}>₹2,100</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Lab Certified</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.4rem', width: '100%' }}>
                  <button 
                    className="btn btn-gold" 
                    style={{ padding: '0', fontSize: '0.75rem', height: '34px' }} 
                    onClick={() => {
                      addToCart({
                        id: 'addiction',
                        title: 'Addiction Bracelet',
                        price: '₹2,100',
                        img: '/bracelet_addiction.png'
                      });
                    }}
                  >
                    Add to Cart
                  </button>
                  <button className="btn btn-outline" style={{ padding: '0', fontSize: '0.75rem', height: '34px' }} onClick={() => setPage('services')}>
                    Details
                  </button>
                </div>
              </div>
            </div>

            {/* Product 2: Desired Love Bracelet */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', padding: '1.25rem' }}>
              <div style={{ overflow: 'hidden', borderRadius: '4px', marginBottom: '0.75rem', height: '170px' }}>
                <img 
                  src="/bracelet_love.png" 
                  alt="Desired Love Bracelet"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>Desired Love Bracelet</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0.1rem 0 0.5rem' }}>Romance • Harmony</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4, marginBottom: '1rem', textAlign: 'left' }}>
                Infused with Rhodochrosite, Moon Stone, Pink Tourmaline, and Rhodonite to remove blockages and attract romance.
              </p>
              <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem', flexDirection: 'column', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--accent-gold)' }}>₹2,400</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Lab Certified</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.4rem', width: '100%' }}>
                  <button 
                    className="btn btn-gold" 
                    style={{ padding: '0', fontSize: '0.75rem', height: '34px' }} 
                    onClick={() => {
                      addToCart({
                        id: 'love',
                        title: 'Desired Love Bracelet',
                        price: '₹2,400',
                        img: '/bracelet_love.png'
                      });
                    }}
                  >
                    Add to Cart
                  </button>
                  <button className="btn btn-outline" style={{ padding: '0', fontSize: '0.75rem', height: '34px' }} onClick={() => setPage('services')}>
                    Details
                  </button>
                </div>
              </div>
            </div>

            {/* Product 3: Job Bracelet */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', padding: '1.25rem' }}>
              <div style={{ overflow: 'hidden', borderRadius: '4px', marginBottom: '0.75rem', height: '170px' }}>
                <img 
                  src="/bracelet_job.png" 
                  alt="Job Bracelet"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>Job Bracelet</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0.1rem 0 0.5rem' }}>Luck • Abundance • Success</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4, marginBottom: '1rem', textAlign: 'left' }}>
                A combination of Turquoise, Garnet, Amethyst, Citrine, and Green Aventurine to attract career growth.
              </p>
              <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem', flexDirection: 'column', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--accent-gold)' }}>₹2,200</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Lab Certified</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.4rem', width: '100%' }}>
                  <button 
                    className="btn btn-gold" 
                    style={{ padding: '0', fontSize: '0.75rem', height: '34px' }} 
                    onClick={() => {
                      addToCart({
                        id: 'job',
                        title: 'Job Bracelet',
                        price: '₹2,200',
                        img: '/bracelet_job.png'
                      });
                    }}
                  >
                    Add to Cart
                  </button>
                  <button className="btn btn-outline" style={{ padding: '0', fontSize: '0.75rem', height: '34px' }} onClick={() => setPage('services')}>
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="container">
        <h2 className="section-title">Vedic Specialties</h2>
        <p className="section-subtitle">Our three integrated pillars of cosmic balancing and custom aura alignment.</p>
        
        <div className="responsive-grid">
          <div className="glass-card" style={{ textAlign: 'center', padding: '1.75rem 1.25rem' }}>
            <span style={{ fontSize: '1.5rem' }}>✴</span>
            <h3 style={{ fontSize: '1.2rem', margin: '0.75rem 0' }}>Vedic Astrology</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              Mapping planetary coordinates, planetary periods (Dasha), and houses to find which elements require balancing in your aura.
            </p>
          </div>

          <div className="glass-card" style={{ textAlign: 'center', padding: '1.75rem 1.25rem' }}>
            <span style={{ fontSize: '1.5rem' }}>☯</span>
            <h3 style={{ fontSize: '1.2rem', margin: '0.75rem 0' }}>Numerology</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              Calculating your core life path number, destiny, and personal year transits to choose the perfect energetic stone combinations.
            </p>
          </div>

          <div className="glass-card" style={{ textAlign: 'center', padding: '1.75rem 1.25rem' }}>
            <span style={{ fontSize: '1.5rem' }}>💎</span>
            <h3 style={{ fontSize: '1.2rem', margin: '0.75rem 0' }}>Crystal Science</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              Using high-vibrational, handpicked natural crystals to cleanse chakras, repel negative static, and ground planetary currents.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
