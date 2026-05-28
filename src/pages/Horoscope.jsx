import React, { useState } from 'react';
import { Moon, Sparkles, Calculator, Star, Gem, HelpCircle } from 'lucide-react';

export default function Horoscope() {
  const [activeElement, setActiveElement] = useState('fire');
  const [birthDate, setBirthDate] = useState('');
  const [lifePathResult, setLifePathResult] = useState(null);

  const transits = [
    { planet: 'Sun', sign: 'Gemini', degree: '07° 24\'', status: 'Direct', desc: 'Shedding light on dual options, multiple paths, and local communication networks.' },
    { planet: 'Mercury', sign: 'Taurus', degree: '24° 12\'', status: 'Direct', desc: 'Steadfast, practical thinking. Excellent for financial planning and grounding grand ideas.' },
    { planet: 'Venus', sign: 'Gemini', degree: '04° 18\'', status: 'Direct', desc: 'Social, witty, and curious in romance. Favors flirtatious dialogues and mental compatibility.' },
    { planet: 'Mars', sign: 'Aries', degree: '19° 50\'', status: 'Ruler', desc: 'Highly charged, pioneering courage. Excellent for launching new competitive endeavors.' },
    { planet: 'Jupiter', sign: 'Gemini', degree: '01° 02\'', status: 'Exalted', desc: 'A massive 12-month transit expanding communications, publication, writing, and intellectual sharing.' },
    { planet: 'Saturn', sign: 'Pisces', degree: '18° 35\'', status: 'Retrograde', desc: 'Structural introspection. Time to build emotional discipline, face illusions, and define boundaries.' }
  ];

  const elementGuidance = {
    fire: {
      title: 'Fire Elements',
      signs: 'Aries, Leo, Sagittarius',
      color: '#f59e0b',
      shadow: 'rgba(245, 158, 11, 0.25)',
      advice: 'Mars residing in his home sign of Aries infuses you with incredible physical vigor. This is the optimal window to initiate bold projects, commit to a fitness regime, or stand up for a professional cause. Guard against impatience and verbal spikes—use the golden glow of your solar plexus to lead, not burn.',
      mantra: 'I channel my passion into focused courage.'
    },
    earth: {
      title: 'Earth Elements',
      signs: 'Taurus, Virgo, Capricorn',
      color: '#10b981',
      shadow: 'rgba(16, 185, 129, 0.25)',
      advice: 'Mercury in Taurus grounds your intellect, assisting you in sorting complex logistics with absolute ease. Use this stabilizing current to audit finances, plant garden beds, or finalize legal drafts. Saturn in Pisces reminds you that true structure must allow for emotional flow. Be patient with your material climb.',
      mantra: 'I construct solid foundations upon grounding truth.'
    },
    air: {
      title: 'Air Elements',
      signs: 'Gemini, Libra, Aquarius',
      color: '#06b6d4',
      shadow: 'rgba(6, 182, 212, 0.25)',
      advice: 'A glorious storm of Air energy is surrounding you as Jupiter, Venus, and the Sun occupy Gemini. Your mental space is extremely fertile. Write, podcast, brainstorm, or host communal gatherings. Opportunities will double under this transit. Choose your priorities wisely so your energy doesn\'t scatter.',
      mantra: 'I communicate light and inspire conscious connections.'
    },
    water: {
      title: 'Water Elements',
      signs: 'Cancer, Scorpio, Pisces',
      color: '#3b82f6',
      shadow: 'rgba(59, 130, 246, 0.25)',
      advice: 'Saturn\'s retrograde in your bounds requests deep emotional purging. Cleanse your energetic workspace and release relationships that drain your psychic field. Seek home sanctuaries, warm baths, and artistic dream journals. Your intuitive receptors are operating at full capacity; trust your quietest whispers.',
      mantra: 'I flow with the universal current, trusting my inner sight.'
    }
  };

  // Life Path Number Calculation Logic
  const calculateLifePath = (e) => {
    e.preventDefault();
    if (!birthDate) return;

    // Clean date string e.g. "1994-12-18" -> array of single digits
    const digits = birthDate.replace(/[^0-9]/g, '').split('').map(Number);
    
    // Sum digits helper
    const sumDigits = (numArray) => numArray.reduce((a, b) => a + b, 0);

    let sum = sumDigits(digits);
    
    // Sum down to a single digit, except for Master Numbers 11, 22, 33
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      sum = sumDigits(String(sum).split('').map(Number));
    }

    let numberName = '';
    let rulingPlanet = '';
    let traits = '';
    let crystalRemedy = '';

    const numerologyData = {
      1: {
        name: 'The Leader (Life Path 1)',
        planet: 'Sun',
        traits: 'Independent, pioneering, original, ambitious, and strong-willed. A natural-born manager who thrives on taking center stage and building custom paths.',
        crystal: 'Citrine & Tiger\'s Eye (Amplifies solar confidence, attracts business abundance, and builds leadership resilience).'
      },
      2: {
        name: 'The Peacemaker (Life Path 2)',
        planet: 'Moon',
        traits: 'Diplomatic, intuitive, sensitive, cooperative, and supportive. The ultimate harmonizer who thrives in composite relationships and counseling roles.',
        crystal: 'Rainbow Moonstone & Pearl (Quiets mental static, balances nervous tides, and nurtures relational boundaries).'
      },
      3: {
        name: 'The Creative (Life Path 3)',
        planet: 'Jupiter',
        traits: 'Expressive, highly communicative, artistic, optimistic, and social. Excellent at media, writing, podcasting, and creating joy in others.',
        crystal: 'Lapis Lazuli & Amazonite (Clears voice chakra blockages, stimulates visual creativity, and anchors dual ideas).'
      },
      4: {
        name: 'The Builder (Life Path 4)',
        planet: 'Rahu (North Node)',
        traits: 'Discipline, patient, detail-oriented, highly organized, and steady. Thrives in technical structures, engineering, and logistics planning.',
        crystal: 'Black Tourmaline & Green Jade (Provides grounding protection, locks in professional focus, and stabilizes abundance).'
      },
      5: {
        name: 'The Visionary (Life Path 5)',
        planet: 'Mercury',
        traits: 'Freedom-loving, adaptable, adventurous, curious, and quick-thinking. Excellent salesperson, traveler, writer, and champion of transformation.',
        crystal: 'Turquoise & Aquamarine (Protects aura fields during voyager transits, helps swift changes, and aligns throat communication).'
      },
      6: {
        name: 'The Nurturer (Life Path 6)',
        planet: 'Venus',
        traits: 'Compassionate, responsible, caring, family-oriented, and healing. A natural guardian who creates sanctuary and beauty in physical environments.',
        crystal: 'Rose Quartz & Kunzite (Invokes Venusian self-worth, heals old childhood emotional trauma, and encourages deep love).'
      },
      7: {
        name: 'The Mystic (Life Path 7)',
        planet: 'Ketu (South Node)',
        traits: 'Philosophical, analytical, quiet, highly intuitive, and spiritual. Strives for deep wisdom, academic secrets, and mystical initiations.',
        crystal: 'Amethyst & Labradorite (Triggers psychic dream downloads, clears aura debris, and balances absolute wisdom).'
      },
      8: {
        name: 'The Powerhouse (Life Path 8)',
        planet: 'Saturn',
        traits: 'Authoritative, ambitious, financially astute, focused, and strong. The ultimate material builder who conquers karma to acquire security.',
        crystal: 'Garnet & Hematite (Structures patient vocational climbing, shields against physical exhaustion, and activates wealth).'
      },
      9: {
        name: 'The Humanitarian (Life Path 9)',
        planet: 'Mars',
        traits: 'Generous, idealistic, compassionate, creative, and selfless. The universal healer dedicated to global progress, art, and purging outdated currents.',
        crystal: 'Red Jasper & Amethyst (Balances passionate fire, clears internal anger spikes, and stimulates creative devotion).'
      },
      11: {
        name: 'The Intuitive Guide (Master Number 11)',
        planet: 'Neptune & Moon',
        traits: 'An extremely highly vibrating master channel. Possesses intense psychic receptors, visionary downloads, and high emotional sensitivity.',
        crystal: 'Lepidolite & Pearl (Grounds chaotic spiritual energies, calms high anxiety spikes, and guards relational empathy).'
      },
      22: {
        name: 'The Master Architect (Master Number 22)',
        planet: 'Uranus & Rahu',
        traits: 'Capable of manifesting grand spiritual concepts into solid physical structures. Combines 11\'s intuition with 4\'s extreme discipline.',
        crystal: 'Green Aventurine & Obsidian (Provides infinite material fortune while shielding your auric channels from psychic static).'
      },
      33: {
        name: 'The Spiritual Teacher (Master Number 33)',
        planet: 'Jupiter & Venus',
        traits: 'The master of loving devotion and cosmic counseling. Completely dedicated to elevating global consciousness and spiritual healing.',
        crystal: 'Kunzite & Amethyst (Anchors high-vibrational crown chakra energies to deliver selfless, compassionate teaching).'
      }
    };

    const numProfile = numerologyData[sum] || numerologyData[7];
    setLifePathResult({
      number: sum,
      name: numProfile.name,
      planet: numProfile.planet,
      traits: numProfile.traits,
      crystal: numProfile.crystal
    });
  };

  return (
    <div style={{ animation: 'fadeIn 1s ease-in-out' }}>
      {/* Page Title */}
      <section className="container" style={{ padding: '5rem 1.5rem 2rem', textAlign: 'center' }}>
        <span style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>Mystical Calculations</span>
        <h1 className="section-title gold-gradient-text" style={{ fontSize: '2.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>Dr. Sasmita Dash Numerology Calculator & planetary transits</h1>
        <p className="section-subtitle">Real-time geocentric planetary positions alongside our interactive Life Path number calculator.</p>
      </section>

      {/* Numerology Calculator Section */}
      <section className="container" style={{ paddingTop: '0' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1.8fr',
          gap: '3rem',
          alignItems: 'start'
        }} className="form-row">
          
          {/* Calculator Input */}
          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
              <Calculator size={20} />
              <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)' }}>Life Path Calculator</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', textAlign: 'left' }}>
              Your Life Path Number represents the core journey, challenges, and planetary elements programmed into your birth date.
            </p>

            <form onSubmit={calculateLifePath}>
              <div className="form-group">
                <label htmlFor="numerology-dob">Date of Birth</label>
                <input 
                  type="date" 
                  id="numerology-dob" 
                  required 
                  className="form-control" 
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-gold" style={{ width: '100%', marginTop: '0.5rem' }}>
                Calculate Life Path Frequencies
              </button>
            </form>
          </div>

          {/* Calculator Output */}
          <div className="glass-card" style={{ minHeight: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {lifePathResult ? (
              <div style={{ textAlign: 'left', animation: 'float 6s ease-in-out infinite' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>Your Numerology Profile</span>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-gold)', margin: '0.25rem 0 0.5rem' }}>{lifePathResult.name}</h3>
                <p style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1.25rem', fontFamily: 'var(--font-serif)' }}>
                  Ruling Planet Frequency: {lifePathResult.planet}
                </p>
                
                <p style={{ fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {lifePathResult.traits}
                </p>

                <div style={{
                  background: 'rgba(var(--accent-gold-rgb), 0.05)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '4px',
                  padding: '1.25rem',
                  borderLeft: '3px solid var(--accent-gold)',
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'center'
                }}>
                  <div style={{ fontSize: '1.75rem' }}>💎</div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block' }}>Recommended Healing Crystal</span>
                    <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 600 }}>
                      {lifePathResult.crystal}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🔮</span>
                <p style={{ fontSize: '1.05rem', fontFamily: 'var(--font-serif)' }}>Input your birth date parameters to reveal your spiritual composite numbers.</p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Ephemeris Section */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }} className="form-row">
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-gold)' }}>Live Geocentric Positions</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Astronomical Degrees for Puja Alignment</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(var(--accent-gold-rgb), 0.08)', padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid rgba(var(--accent-gold-rgb),0.2)' }}>
              <Moon size={16} className="pulsating-element" style={{ color: 'var(--accent-gold)' }} />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600, letterSpacing: '1px' }}>Frequencies Cleansed</span>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem'
          }} className="form-row">
            {transits.map((tr, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'rgba(0,0,0,0.15)',
                  border: '1px solid rgba(255,255,255,0.03)',
                  borderRadius: '6px',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', fontWeight: 600, fontSize: '1.1rem' }}>{tr.planet}</span>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    padding: '0.15rem 0.5rem', 
                    borderRadius: '20px', 
                    background: tr.status === 'Retrograde' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(var(--accent-gold-rgb), 0.08)',
                    color: tr.status === 'Retrograde' ? '#f87171' : 'var(--accent-gold)',
                    border: tr.status === 'Retrograde' ? '1px solid rgba(239, 68, 68, 0.2)' : '1px solid rgba(var(--accent-gold-rgb), 0.2)'
                  }}>{tr.status}</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                  <span>In {tr.sign}</span>
                  <span style={{ color: 'var(--text-muted)' }}>•</span>
                  <span style={{ fontFamily: 'monospace' }}>{tr.degree}</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginTop: '0.5rem', textAlign: 'left', borderTop: '1px dashed rgba(255,255,255,0.05)', paddingTop: '0.5rem' }}>
                  {tr.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Element Guidance Section */}
      <section className="container">
        <h2 className="section-title">Zodiac Element Transits</h2>
        <p className="section-subtitle">Align your daily actions with the planetary grid based on your zodiac element group.</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '3rem',
          alignItems: 'start'
        }} className="form-row">
          
          {/* Toggle buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {Object.keys(elementGuidance).map((elKey) => {
              const isActive = activeElement === elKey;
              const el = elementGuidance[elKey];
              return (
                <button
                  key={elKey}
                  onClick={() => setActiveElement(elKey)}
                  style={{
                    background: isActive ? 'var(--glass-bg)' : 'rgba(255,255,255,0.01)',
                    border: isActive ? `1px solid ${el.color}` : '1px solid var(--glass-border)',
                    color: isActive ? el.color : 'var(--text-secondary)',
                    padding: '1.25rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.1rem',
                    letterSpacing: '1px',
                    boxShadow: isActive ? `0 0 15px ${el.shadow}` : 'none',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{el.title}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{el.signs.split(',')[0]}...</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Advice details */}
          <div className="glass-card" style={{
            borderLeft: `4px solid ${elementGuidance[activeElement].color}`,
            padding: '3rem',
            boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.4), 0 0 20px ${elementGuidance[activeElement].shadow}`,
            animation: 'fadeIn 0.5s ease-in-out',
            textAlign: 'left'
          }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>Celestial Reminement</span>
            <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', margin: '0.25rem 0 0.5rem' }}>{elementGuidance[activeElement].title}</h3>
            <p style={{ color: elementGuidance[activeElement].color, fontWeight: 600, fontSize: '0.95rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>
              Zodiac Elements: {elementGuidance[activeElement].signs}
            </p>
            
            <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: '2rem' }}>
              {elementGuidance[activeElement].advice}
            </p>

            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '4px',
              padding: '1.25rem',
              borderLeft: `3px solid ${elementGuidance[activeElement].color}`
            }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.25rem' }}>Current Element Mantra</span>
              <p style={{ fontStyle: 'italic', color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500 }}>
                "{elementGuidance[activeElement].mantra}"
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
