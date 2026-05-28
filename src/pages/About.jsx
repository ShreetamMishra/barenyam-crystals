import React from 'react';
import { Award, BookOpen, ShieldAlert, GraduationCap, Video, Check } from 'lucide-react';

export default function About() {
  const milestones = [
    {
      year: '2008',
      title: 'Jyotish Acharya (Vedic Astrology)',
      org: 'Traditional Vedic Gurukul',
      desc: 'Completed extensive classical training in geocentric planetary coordinate mechanics, birth chart analysis, and karmic timing systems.'
    },
    {
      year: '2012',
      title: 'Master Numerologist',
      org: 'Chaldean & Pythagorean Study Center',
      desc: 'Deepened research into the energetic vibrations of numbers, mapping birth date integers to vocational paths and planetary elements.'
    },
    {
      year: '2016',
      title: 'Founded "Barenyam"',
      org: 'Healing Crystals & Vedic Remedies',
      desc: 'Pioneered custom crystal bracelet therapy, assembling and energizing natural gemstones to balance planetary frequencies.'
    },
    {
      year: '2020',
      title: 'Launched Oriya Numerology',
      org: 'YouTube Channel & Global Consults',
      desc: 'Created the premier channel sharing crystal science, Vastu remedies, and daily numerological advice, guiding seekers worldwide.'
    }
  ];

  return (
    <div style={{ animation: 'fadeIn 1s ease-in-out' }}>
      {/* Biography Header */}
      <section className="container" style={{ padding: '3rem 1.5rem 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '3.5rem',
          alignItems: 'center'
        }} className="form-row">
          
          {/* Portrait Container */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '-15px',
              right: '15px',
              bottom: '15px',
              border: '1.5px solid var(--accent-gold)',
              borderRadius: '8px',
              zIndex: 0,
              pointerEvents: 'none'
            }}></div>
            <img 
              src="/sasmitaa_dash.png" 
              alt="Dr. Sasmitaa Dash" 
              style={{
                width: '100%',
                borderRadius: '8px',
                display: 'block',
                position: 'relative',
                zIndex: 1,
                boxShadow: 'var(--glass-shadow)',
                border: '1px solid var(--glass-border)'
              }}
            />
            <div className="glass-card pulsating-element" style={{
              position: 'absolute',
              bottom: '20px',
              right: '-10px',
              padding: '0.75rem 1.5rem',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--bg-secondary)',
              borderColor: 'var(--accent-gold)',
              borderRadius: '4px'
            }}>
              <span style={{ fontSize: '1.25rem' }}>🔮</span>
              <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', letterSpacing: '1px' }}>Vedic Crystal Guide</span>
            </div>
          </div>

          {/* Bio Text */}
          <div style={{ textAlign: 'left' }}>
            <span style={{
              fontSize: '0.9rem',
              color: 'var(--accent-gold)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontWeight: 600,
              display: 'inline-block',
              marginBottom: '0.5rem'
            }}>Meet the Expert</span>
            <h2 className="about-title" style={{ marginBottom: '1.5rem', lineHeight: 1.2 }}>Dr. Sasmitaa Dash</h2>
            
            <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: 1.7 }}>
              My journey began in the timeless traditions of classical Vedic Jyotish and Numerology. I observed that while planetary coordinate transits reveal the karmic waves of our destiny, we require high-vibrational energetic anchors to sail these currents successfully. This led me to merge Vedic astrology with the subtle vibrational science of natural crystals.
            </p>
            
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.7 }}>
              Under our sacred brand <strong>"Barenyam"</strong>, we craft custom, activated crystal remedies. Each crystal bead undergoes an authentic, detailed cleansing (Pancha-Amrita bath) and is energized through specialized planetary mantras under auspicious Muhurtas (celestial timings).
            </p>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7 }}>
              Through my YouTube channel, <strong>Oriya Numerology</strong>, and global consulting practice, I help individuals balance their energetic auric fields, find career success, heal addictions, and attract stable, loving relationships.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div style={{ background: 'rgba(var(--accent-gold-rgb), 0.1)', color: 'var(--accent-gold)', padding: '0.5rem', borderRadius: '50%' }}>
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Vedic Scholar</p>
                  <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>Jyotish Acharya</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div style={{ background: 'rgba(var(--accent-purple-rgb), 0.1)', color: 'var(--accent-purple)', padding: '0.5rem', borderRadius: '50%' }}>
                  <Video size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Digital Leader</p>
                  <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>Oriya Numerology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', padding: '3rem 0' }}>
        <div className="container">
          <h2 className="section-title">The Path of Initiation</h2>
          <p className="section-subtitle">Bridging classical Vedic wisdom, modern numerology systems, and high-vibrational crystal science.</p>

          <div style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
            padding: '2rem 0'
          }}>
            {/* Center Line for desktop */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '1px',
              background: 'linear-gradient(to bottom, transparent, rgba(var(--accent-gold-rgb), 0.3) 10%, rgba(var(--accent-gold-rgb), 0.3) 90%, transparent)',
              transform: 'translateX(-50%)',
            }} className="timeline-line-desktop"></div>

            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} style={{
                  display: 'flex',
                  justifyContent: isEven ? 'flex-start' : 'flex-end',
                  marginBottom: '3rem',
                  position: 'relative',
                  width: '100%',
                }} className="timeline-item">
                  
                  {/* Timeline point */}
                  <div className="pulsating-element" style={{
                    position: 'absolute',
                    left: '50%',
                    top: '20px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-gold)',
                    border: '3px solid var(--bg-primary)',
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                    boxShadow: '0 0 10px var(--accent-gold)'
                  }} className="timeline-dot-desktop"></div>

                  {/* Card Container */}
                  <div className="glass-card" style={{
                    width: '45%',
                    padding: '1.75rem',
                    position: 'relative',
                    textAlign: 'left'
                  }} className="timeline-card">
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      marginBottom: '0.75rem',
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--accent-gold)'
                      }}>{milestone.year}</span>
                      <span style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                        fontWeight: 600,
                        textTransform: 'uppercase'
                      }}>{milestone.org}</span>
                    </div>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{milestone.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{milestone.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="container">
        <h2 className="section-title">The Barenyam Philosophy</h2>
        <p className="section-subtitle">How we energize and configure our healing crystal bracelets for authentic results.</p>

        <div className="responsive-grid" style={{ marginTop: '1rem' }}>
          
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '4px solid var(--accent-gold)', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-gold)' }}>1. Natural Sourcing & Selection</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              We believe synthetic or heat-treated stones carry zero energetic frequencies. Every bead used in our Addiction, Desired Love, and Job bracelets is 100% natural, handpicked from ethical mines, and selected for its mineral purity.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                <Check size={14} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} /> Zero heat-treated or colored glasses
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                <Check size={14} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} /> Real, untreated mineral structures
              </li>
            </ul>
          </div>

          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '4px solid var(--accent-purple)', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-purple)' }}>2. Pancha-Amrita Purification</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Stones absorb external static. Before assembly, all crystals undergo an authentic Vedic Pancha-Amrita bath (milk, curd, honey, ghee, and Ganga water) to completely wipe clean any previous environmental imprints.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                <Check size={14} style={{ color: 'var(--accent-purple)', flexShrink: 0 }} /> Authentic five-fold cleansing bath
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                <Check size={14} style={{ color: 'var(--accent-purple)', flexShrink: 0 }} /> Aura static completely reset
              </li>
            </ul>
          </div>

          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '4px solid var(--accent-gold)', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-gold)' }}>3. Prana-Pratishtha Activation</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              An un-energized crystal is just ornament. Under auspicial planetary Muhurtas, Dr. Sasmitaa Dash chants Vedic planetary and Gayatri mantras over your bracelet, locking in vibrational coding to align with your personal energy.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                <Check size={14} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} /> Auspicious celestial timings used
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                <Check size={14} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} /> Authentic mantra frequencies locked
              </li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
