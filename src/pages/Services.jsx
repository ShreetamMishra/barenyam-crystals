import React, { useState } from 'react';
import { Gem, Heart, ShieldAlert, Briefcase, Star, Clock, CheckCircle } from 'lucide-react';

export default function Services({ setPage, setSelectedBracelet, addToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const bracelets = [
    {
      id: 'addiction',
      img: '/bracelet_addiction.png',
      icon: <ShieldAlert size={20} />,
      title: 'Addiction Bracelet',
      subtitle: 'Break Free.',
      price: '₹2,100',
      tagline: 'Heal • Balance • Freedom',
      desc: 'Formulated to help break free from Cigarette, Alcohol, and Tobacco addictions. Alleviates intense cravings and restores peace of mind.',
      stones: [
        { name: 'Kunzite', desc: 'Encourages inner strength and a sense of peace.' },
        { name: 'Amethyst', desc: 'Calms mind and helps overcoming addiction.' },
        { name: 'Lepidolite', desc: 'Alleviates cravings and reduces anxiety.' },
        { name: 'Iolite', desc: 'Enhances self-awareness and self-mastery.' }
      ],
      bullets: [
        'Break free from addictive habits',
        'Let positivity replace cravings',
        'Helps reduce anxiety and stress',
        'Supports complete aura recovery'
      ]
    },
    {
      id: 'love',
      img: '/bracelet_love.png',
      icon: <Heart size={20} />,
      title: 'Desired Love Bracelet',
      subtitle: 'Attract Romance',
      price: '₹2,400',
      tagline: 'Attraction • Healing • Devotion',
      desc: 'Crafted with powerful love energy stones designed to heal emotional wounds, remove blocks, and attract your true soulmate.',
      stones: [
        { name: 'Rhodochrosite', desc: 'The stone of compassion and soulmate attraction.' },
        { name: 'Moon Stone', desc: 'Enhances intuition, inner harmony, and new beginnings.' },
        { name: 'Pink Tourmaline', desc: 'Attracts romance, trust, and loving devotion.' },
        { name: 'Rhodonite', desc: 'Heals emotional scars and balances relationship heart cords.' }
      ],
      bullets: [
        'Attract true love & romance',
        'Heal old emotional wounds',
        'Strengthen trust & devotion',
        'Nurture relational compassion'
      ]
    },
    {
      id: 'job',
      img: '/bracelet_job.png',
      icon: <Briefcase size={20} />,
      title: 'Job Bracelet',
      subtitle: 'Career Success',
      price: '₹2,200',
      tagline: 'Luck • Wealth • Progress',
      desc: 'Five specialized abundance crystals. Highly favored for securing government employment, promotions, and business wealth.',
      stones: [
        { name: 'Turquoise', desc: 'Unlocks career growth and creative networks.' },
        { name: 'Garnet', desc: 'Boosts determination and professional success.' },
        { name: 'Amethyst', desc: 'Sharpens focus and decision-making clarity.' },
        { name: 'Citrine', desc: 'The merchant\'s stone of wealth and solar abundance.' },
        { name: 'Green Aventurine', desc: 'Attracts luck, material prosperity, and progress.' }
      ],
      bullets: [
        'Activates career luck and success',
        'Favors securing Government Jobs',
        'Attracts promotion and wealth',
        'Brings rapid business opportunities'
      ]
    },
    {
      id: 'consultation',
      img: '/natal_chart.png',
      icon: <Gem size={20} />,
      title: 'Personalized Consultation',
      subtitle: 'Vedic Chart Map',
      price: '₹1,500',
      tagline: 'Customized Aura Alignment',
      desc: 'Dr. Sasmitaa Dash will map your exact geocentric planetary coordinates and Life Path Numerology numbers to compile a custom remedy.',
      stones: [
        { name: 'Personalized Charting', desc: 'Vedic chart analysis to identify weak planets.' },
        { name: 'Numerology Life Path', desc: 'Review of birth integers to select crystals.' },
        { name: 'Custom energizing', desc: 'Puja alignment with your name and Nakshatra.' }
      ],
      bullets: [
        '100% custom crystal remedy design',
        '60-minute live Zoom session',
        'Personalized stone PDF report',
        'Authentic Prana-Pratishtha energizing'
      ]
    }
  ];

  return (
    <div style={{ animation: 'fadeIn 1s ease-in-out' }}>
      {/* Page Header */}
      <section className="container" style={{ padding: '3rem 1.5rem 1.5rem', textAlign: 'center' }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>Barenyam Store</span>
        <h1 className="section-title gold-gradient-text" style={{ fontSize: '2.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>Dr. Sasmita Dash Energized Healing Crystal Bracelets</h1>
        <p className="section-subtitle">Natural energized gemstones assembled under geocentric transit Muhurtas.</p>
      </section>

      {/* GemsMantra-Inspired Premium Trust Bar */}
      <section className="container" style={{ paddingTop: '0', paddingBottom: '2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          padding: '1.25rem',
          textAlign: 'center',
          borderColor: 'rgba(var(--accent-gold-rgb), 0.2)',
          background: 'rgba(var(--accent-gold-rgb), 0.02)'
        }} className="form-row">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
            <span style={{ fontSize: '1.5rem' }}>🛡️</span>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', margin: 0, fontWeight: 600 }}>100% Natural Minerals</h4>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Certified Untreated Gems</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
            <span style={{ fontSize: '1.5rem' }}>🔬</span>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', margin: 0, fontWeight: 600 }}>Govt. Lab Certified</h4>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Verifiable Authenticity Cards</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
            <span style={{ fontSize: '1.5rem' }}>🌊</span>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', margin: 0, fontWeight: 600 }}>Pancha-Amrita Purified</h4>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Ganga Water & Ghee Cleansed</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
            <span style={{ fontSize: '1.5rem' }}>🕉️</span>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', margin: 0, fontWeight: 600 }}>Prana-Pratishtha Puja</h4>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Attuned to Your Nakshatra</p>
          </div>
        </div>
      </section>

      {/* Bracelets Products Grid (3-column compact layout) */}
      <section className="container" style={{ paddingTop: '0' }}>
        <div className="bracelet-grid">
          {bracelets.map((item) => (
            <div 
              key={item.id} 
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.25rem',
                borderLeft: selectedProduct === item.id ? '3px solid var(--accent-gold)' : '1px solid var(--glass-border)',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedProduct(selectedProduct === item.id ? null : item.id)}
            >
              <div>
                {/* Compact Product Image */}
                <div style={{ overflow: 'hidden', borderRadius: '4px', marginBottom: '1rem', height: '170px' }}>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectPosition: 'center', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.subtitle}</span>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: '0' }}>{item.title}</h3>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--accent-gold)', display: 'block' }}>{item.price}</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>
                  {item.tagline}
                </p>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem', textAlign: 'left' }}>
                  {item.desc}
                </p>
              </div>

              <div>
                {/* Detailed Expanded Section */}
                {selectedProduct === item.id && (
                  <div style={{
                    background: 'rgba(0,0,0,0.2)',
                    borderRadius: '4px',
                    padding: '1rem',
                    marginBottom: '1rem',
                    border: '1px solid rgba(255,255,255,0.05)',
                    animation: 'fadeIn 0.4s ease-in-out',
                    textAlign: 'left'
                  }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.5rem' }}>Gemstone Mix:</p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                      {item.stones.map((st, i) => (
                        <li key={i} style={{ fontSize: '0.8rem', lineHeight: 1.4 }}>
                          <strong style={{ color: 'var(--text-primary)' }}>✦ {st.name}:</strong> <span style={{ color: 'var(--text-secondary)' }}>{st.desc}</span>
                        </li>
                      ))}
                    </ul>

                    <p style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.5rem' }}>Benefits:</p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {item.bullets.map((b, i) => (
                        <li key={i} style={{ display: 'flex', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-primary)' }}>
                          <span style={{ color: 'var(--accent-gold)' }}>✔</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Stacking compact CTAs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
                  <button 
                    className="btn btn-gold"
                    style={{ width: '100%', padding: '0.5rem', fontSize: '0.8rem', height: '36px' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart({
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        img: item.img
                      });
                    }}
                  >
                    Add to Attunement Cart 💎
                  </button>
                  <a 
                    href={`https://wa.me/919575153312?text=Hello%20Dr.%20Sasmitaa,%20I%20want%20to%20order%20the%20energized%20${encodeURIComponent(item.title)}%20(Price:%20${encodeURIComponent(item.price)})%20from%20Barenyam.%20Please%20guide%20me%20on%20the%20shipping!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ width: '100%', padding: '0.5rem 0', fontSize: '0.8rem', height: '36px', display: 'inline-flex', gap: '0.25rem', justifyContent: 'center', alignItems: 'center', borderColor: '#22c55e', color: '#22c55e', background: 'rgba(34, 197, 94, 0.04)', textDecoration: 'none' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Order via WhatsApp 💬
                  </a>
                  <button 
                    className="btn btn-outline"
                    style={{ width: '100%', padding: '0.4rem 0', fontSize: '0.75rem', height: '32px' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(selectedProduct === item.id ? null : item.id);
                    }}
                  >
                    {selectedProduct === item.id ? 'Hide Details Accordion' : 'Show Details Accordion'}
                  </button>
                </div>
            </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guidelines Section */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)', padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '3rem',
            alignItems: 'center'
          }} className="form-row">
            
            {/* Visual Column */}
            <div>
              <img 
                src="/natal_chart.png" 
                alt="Vedic Horoscope Chart"
                className="rotating-element"
                style={{
                  width: '70%',
                  display: 'block',
                  margin: '0 auto',
                  opacity: 0.85,
                  filter: 'drop-shadow(0 0 15px rgba(var(--accent-gold-rgb), 0.15))'
                }}
              />
            </div>

            {/* Description Column */}
            <div style={{ textAlign: 'left' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--accent-gold)',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '0.75rem'
              }}>
                <CheckCircle size={14} /> Verified Cleansing Rituals
              </div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Ordering & Custom Attunement</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                Every single order placed at Barenyam is processed individually. Dr. Sasmitaa Dash prepares your selected healing crystals using your personal geocentric birth parameters.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold', fontSize: '0.9rem' }}>01.</span>
                  <div>
                    <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>Supply Birth Coordinates</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Provide your exact date, location, and hour of birth to determine planetary nodes.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold', fontSize: '0.9rem' }}>02.</span>
                  <div>
                    <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>Authentic Mantras Puja</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Bracelets undergo auspicious Muhurta puja reciting Nakshatra Gayatri beeja-mantras.</p>
                  </div>
                </div>
              </div>

              <button className="btn btn-gold" style={{ marginTop: '1.5rem' }} onClick={() => setPage('contact')}>
                Begin Order Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
