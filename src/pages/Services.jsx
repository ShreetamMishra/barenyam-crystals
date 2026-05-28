import React, { useState } from 'react';
import { Gem, Heart, ShieldAlert, Briefcase, Star, Clock, CheckCircle } from 'lucide-react';

export default function Services({ setPage, setSelectedBracelet }) {
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
        <h2 className="section-title">Healing Crystal Bracelets</h2>
        <p className="section-subtitle">Natural energized gemstones assembled under geocentric transit Muhurtas.</p>
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
                      setSelectedBracelet(item.id);
                      setPage('contact');
                    }}
                  >
                    Order via Form
                  </button>
                  <a 
                    href={`https://wa.me/919575153312?text=Hello%20Dr.%20Sasmitaa,%20I%20want%20to%20order%20the%20energized%20${encodeURIComponent(item.title)}%20(Price:%20${encodeURIComponent(item.price)})%20from%20Barenyam.%20Please%20guide%20me%20on%20the%20shipping!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ width: '100%', padding: '0.5rem 0', fontSize: '0.8rem', height: '36px', display: 'inline-flex', gap: '0.25rem', justifyContent: 'center', alignItems: 'center', borderColor: '#22c55e', color: '#22c55e', background: 'rgba(34, 197, 94, 0.04)', textDecoration: 'none' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.005 5.291 5.3 0 11.799 0c3.148.001 6.11 1.23 8.339 3.462 2.228 2.232 3.454 5.2 3.453 8.351-.004 6.507-5.3 11.798-11.799 11.798-2.002-.001-3.973-.51-5.713-1.48L0 24zm6.59-4.846c1.62.962 3.238 1.48 4.966 1.482 5.31 0 9.638-4.307 9.641-9.618.002-2.573-1-4.996-2.822-6.817C16.55 2.378 14.135 1.38 11.799 1.38c-5.314 0-9.643 4.307-9.646 9.619-.001 1.848.497 3.593 1.439 5.234l-.946 3.456 3.523-.935zm11.777-6.311c-.328-.164-1.942-.958-2.242-1.069-.301-.11-.52-.164-.738.164-.219.328-.848 1.069-1.039 1.288-.19.219-.382.246-.71.082-.328-.164-1.385-.511-2.637-1.63-1.025-.918-1.714-2.05-1.916-2.395-.2-.344-.022-.53.142-.693.148-.147.328-.382.492-.574.164-.19.219-.328.328-.547.11-.219.055-.411-.027-.574-.082-.164-.738-1.78-1.011-2.436-.266-.641-.531-.555-.738-.566-.19-.01-.41-.01-.629-.01s-.574.082-.875.411c-.301.328-1.148 1.123-1.148 2.739 0 1.616 1.176 3.178 1.341 3.397.164.219 2.312 3.53 5.598 4.95 2.736 1.183 3.308.948 3.91.89.602-.058 1.941-.795 2.215-1.56.274-.767.274-1.425.192-1.56-.083-.137-.302-.219-.629-.383z"/></svg> WhatsApp Order
                  </a>
                  <button 
                    className="btn btn-outline"
                    style={{ width: '100%', padding: '0.4rem 0', fontSize: '0.75rem', height: '32px' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(selectedProduct === item.id ? null : item.id);
                    }}
                  >
                    {selectedProduct === item.id ? 'Hide Stone Breakdown' : 'Show Stone Breakdown'}
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
