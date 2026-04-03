import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import Reveal from '../components/Reveal';
import MenuCard from '../components/MenuCard';
import './Home.css';

// SVG Icons
const Instagram = ({ size = 32 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;

const Home = () => {
  const carouselRef = useRef(null);
  const [maximizedReel, setMaximizedReel] = useState(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 360; // Card width + gap roughly
      carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  // Instagram iframes block auto-play control across domains without reloading.
  // We keep track of active index if needed but rely on native click-to-play to avoid jarring iframe reloads.

  const highlights = [
    {
      id: 1,
      title: "Margherita Classica",
      price: "299",
      desc: "Authentic wood-fired crust, San Marzano tomato sauce, fresh buffalo mozzarella, and basil.",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
      badge: "Best Seller"
    },
    {
      id: 2,
      title: "Spicy Veggie Tacos",
      price: "249",
      desc: "Hard shell tacos loaded with spiced beans, corn salsa, fresh guacamole and sour cream.",
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&q=80"
    },
    {
      id: 3,
      title: "Malaysian Pot Rice",
      price: "349",
      desc: "Aromatic rice layered with exotic vegetables and coated in our secret Malaysian spiced sauce.",
      image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=600&q=80",
      badge: "Chef's Special"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-bg parallax-bg"></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <Reveal delay={0.2}>
            <h1 className="hero-title">Authentic Flavors,<br />Wood-Fired Perfection.</h1>
            <p className="hero-subtitle">Palghar's premier destination for Italian, Mexican, Chinese & Sizzlers. Experience a warm, rustic ambiance with high-quality dining.</p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="hero-btns">
              <Link to="/menu" className="btn btn-primary">View Menu</Link>
              <Link to="/contact" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>Reserve a Table</Link>
            </div>
          </Reveal>
        </div>
      </header>

      {/* New Philosophy / Chef Section */}
      <section className="section-padding texture-bg" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container about-grid texture-content">
          <Reveal direction="right">
            <div className="about-img" style={{ borderRadius: '2px' }}>
              <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80" alt="Our Chef Preparing Food" style={{ filter: 'contrast(1.1) brightness(0.9)' }} />
              <div className="about-badge" style={{ backgroundColor: 'var(--color-primary)' }}>
                <span style={{ fontSize: '1.8rem', color: 'var(--color-secondary)' }}>10+</span>
                <span style={{ color: 'white', fontSize: '0.8rem', marginTop: '5px' }}>Years Expertise</span>
              </div>
            </div>
          </Reveal>

          <div className="about-content">
            <Reveal direction="left" delay={0.2}>
              <h4 className="section-subtitle">Our Philosophy</h4>
              <h2 className="section-title mb-3">Crafted with Absolute Passion</h2>
              <p className="mb-2" style={{ fontSize: '1.1rem', color: '#555' }}>
                At Stone Oven, we believe that exceptional food requires zero compromises. Located centrally at Nidhi Palace in Palghar, we source our ingredients fresh daily to ensure every slice of pizza, every taco shell, and every sizzler plate tells a story of authentic culinary passion.
              </p>
              <p className="mb-4" style={{ fontSize: '1.1rem', color: '#555' }}>
                Our signature stone-oven baking process locks in the rustic, smoky flavors that perfectly compliment our wide array of Mexican and Chinese fusion dishes.
              </p>
              <div style={{ borderLeft: '4px solid var(--color-secondary)', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                <p style={{ fontStyle: 'italic', fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--color-primary)' }}>
                  "Great food is simple food made perfectly."
                </p>
              </div>
              <Link to="/about" className="btn btn-secondary">Discover Our Story</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Instagram Reels Section */}
      <section className="section-padding texture-bg" style={{ backgroundColor: 'var(--color-bg-alt)', position: 'relative' }}>
        <div className="texture-content"> {/* Removed 'container' to allow edge-to-edge scrolling */}
          <Reveal>
            <div className="text-center" style={{ padding: '0 2rem' }}>
              <h4 className="section-subtitle">@stoneovenpalghar Highlights</h4>
              <h2 className="section-title mb-4">Watch Us In Action</h2>
              <p className="mb-4" style={{ color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto 3rem' }}>
                Experience the sizzle! Hit play on our latest Instagram reels directly from the Stone Oven kitchen.
              </p>
            </div>
          </Reveal>

          {/* Nav Arrows */}
          <button
            onClick={() => scrollCarousel('left')}
            aria-label="Scroll left"
            style={{ position: 'absolute', left: '2%', top: '60%', transform: 'translateY(-50%)', zIndex: 10, background: 'white', border: 'none', borderRadius: '50%', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.15)', cursor: 'pointer', transition: 'transform 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1)'}
          >
            <ChevronLeft size={32} color="var(--color-primary)" />
          </button>

          <button
            onClick={() => scrollCarousel('right')}
            aria-label="Scroll right"
            style={{ position: 'absolute', right: '2%', top: '60%', transform: 'translateY(-50%)', zIndex: 10, background: 'var(--color-secondary)', border: 'none', borderRadius: '50%', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(245, 130, 32, 0.4)', cursor: 'pointer', transition: 'transform 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1)'}
          >
            <ChevronRight size={32} color="white" />
          </button>

          <Reveal>
            <div className="reels-carousel" ref={carouselRef} style={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: '2.5rem',
              overflowX: 'auto',
              padding: '1.5rem 5vw', /* 5vw padding gives it a nice bleed on the edges */
              paddingBottom: '3rem',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth' /* Ensure CSS smooth scrolling works with manual swipe too */
            }}>
              {/* Automatically convert copied share links to valid iframe embed links */}
              {[
                "https://www.instagram.com/p/DWbATwBCKS-/?igsh=MTQ3eDV3czNlMG9lMw",
                "https://www.instagram.com/reel/DUQhsANiQUY/?igsh=MzRlODBiNWFlZA",
                "https://www.instagram.com/p/DUVYCJPCHEf/?igsh=MzRlODBiNWFlZA",
                "https://www.instagram.com/reel/DWYvBP2Cbov/?igsh=MWF1aHI0bXp1cmtn",
                "https://www.instagram.com/reel/DVduQVGiYjM/?igsh=NXpuaXZqdXc2NzFz",
                "https://www.instagram.com/reel/DUs1UIyiQhU/?igsh=MzRlODBiNWFlZA",
                "https://www.instagram.com/p/DVs5oXViCgs/?igsh=Y2ZnNG1ybThuZnE3",
                // "https://www.instagram.com/p/CwY5uEaIg9r/embed/captioned" /* Added a fifth for extra scrolling space */
              ].map((url, idx) => {
                const embedUrl = url.split('?')[0].replace(/\/$/, '') + '/embed';

                return (
                  <div key={idx} style={{
                    flexShrink: 0,
                    scrollSnapAlign: 'center',
                    width: '328px',
                    height: '620px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.12)',
                    backgroundColor: '#fafafa',
                    position: 'relative'
                  }}>
                    <iframe
                      src={embedUrl}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      allowtransparency="true"
                      allow="encrypted-media"
                      style={{ border: 'none', overflow: 'hidden' }}
                    ></iframe>

                    {/* Expand overlay button */}
                    <button
                      onClick={() => setMaximizedReel(embedUrl)}
                      style={{
                        position: 'absolute',
                        bottom: '80px', right: '15px', /* Exactly parallel to "View more on Instagram" */
                        zIndex: 20,
                        backgroundColor: 'var(--color-secondary)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '45px', height: '45px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                        transition: 'transform 0.2s, filter 0.2s'
                      }}
                      onMouseOver={(e) => { e.currentTarget.style.filter = 'brightness(1.1)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.filter = 'brightness(1)'; e.currentTarget.style.transform = 'scale(1)'; }}
                      aria-label="Maximize video"
                    >
                      <Maximize2 size={20} color="white" />
                    </button>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>


      {/* Highlights */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container text-center">
          <Reveal>
            <h4 className="section-subtitle">Favorites</h4>
            <h2 className="section-title mb-4">Signature Dishes</h2>
          </Reveal>
          <div className="menu-grid" style={{ gap: '3rem' }}>
            {highlights.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.15} direction="up">
                <MenuCard item={item} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <div style={{ marginTop: '4rem' }}>
              <Link to="/menu" className="btn btn-primary">View Full Menu</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Premium CTA Divider */}
      <section style={{
        position: 'relative',
        padding: '8rem 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: `url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.4)',
          zIndex: -1
        }}></div>
        <Reveal>
          <div style={{ textAlign: 'center', color: 'white', padding: '0 2rem' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#ccc' }}>Taste The Difference</h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2.5rem', color: '#ccc' }}>Join us for an unforgettable culinary experience.</p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Book Your Table</Link>
          </div>
        </Reveal>
      </section>

      {/* Instagram Gallery */}
      <section className="section-padding">
        <div className="container text-center">
          <Reveal>
            <h4 className="section-subtitle">@stoneovenpalghar</h4>
            <h2 className="section-title mb-4">Follow Our Updates</h2>
          </Reveal>
          <div className="gallery-grid">
            {[
              "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=80",
              "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
              "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80",
              "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&q=80"
            ].map((src, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <a href="https://www.instagram.com/stoneovenpalghar/" target="_blank" rel="noreferrer" className="gallery-item" style={{ borderRadius: '0' }}>
                  <img src={src} alt={`Insta ${idx + 1}`} />
                  <div className="gallery-overlay"><Instagram /></div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Banner */}
      <section className="reviews-section" style={{ backgroundColor: 'var(--color-primary)' }}>
        <Reveal>
          <h2 className="text-center mb-4" style={{ color: 'white' }}>What Our Customers Say</h2>
        </Reveal>
        <div className="review-carousel">
          {[
            { author: "Rahul M.", text: "\"Excellent ambiance, great service, and the food is lip-smacking! The Margherita pizza was authentic.\"", stars: "★★★★★" },
            { author: "Sneha P.", text: "\"The Malaysian Pot Rice is a must-try. Hidden gem in Palghar!\"", stars: "★★★★★" },
            { author: "Amit K.", text: "\"Cozy interior, perfect for family dinners. Their sizzlers are huge and very flavorful.\"", stars: "★★★★☆" },
            { author: "Pooja D.", text: "\"Best tacos I've had in a long time. Will definitely visit again when in Palghar.\"", stars: "★★★★★" },
            { author: "Rahul M.", text: "\"Excellent ambiance, great service, and the food is lip-smacking! The Margherita pizza was authentic.\"", stars: "★★★★★" },
            { author: "Sneha P.", text: "\"The Malaysian Pot Rice is a must-try. Hidden gem in Palghar!\"", stars: "★★★★★" }
          ].map((review, idx) => (
            <div key={idx} className="review-card" style={{ backgroundColor: 'var(--color-primary-light)', padding: '2.5rem', borderRadius: '4px', borderTop: '4px solid var(--color-secondary)' }}>
              <div className="stars" style={{ color: 'var(--color-secondary)' }}>{review.stars}</div>
              <p className="review-text" style={{ fontStyle: 'normal', fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: '#eee' }}>{review.text}</p>
              <span className="review-author" style={{ color: '#aaa', fontFamily: 'var(--font-body)', fontWeight: 300, letterSpacing: '1px' }}>— {review.author}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Maximize Modal */}
      {maximizedReel && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.85)',
          zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }} onClick={() => setMaximizedReel(null)}>
          <button
            style={{ position: 'absolute', top: '2rem', right: '3rem', background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', zIndex: 10000 }}
            onClick={() => setMaximizedReel(null)}
          >
            <X size={55} />
          </button>

          <div onClick={e => e.stopPropagation()} style={{
            width: '95%', maxWidth: '420px', height: '85vh', /* Force smartphone aspect ratio layout so IG doesn't zoom */
            backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
            display: 'flex', justifyContent: 'center'
          }}>
            <iframe
              src={maximizedReel + '/captioned'}
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no" /* IG's internal JavaScript will handle scrollbars for the caption perfectly now */
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
