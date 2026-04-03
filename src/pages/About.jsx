import { Pizza, Flame, Utensils } from 'lucide-react';
import Reveal from '../components/Reveal';
import './About.css';

const About = () => {
  return (
    <>
      <header className="page-header" style={{
        background: `linear-gradient(rgba(253, 251, 247, 0.5), rgba(253, 251, 247, 0.95)), url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80') center/cover`,
        padding: '12rem 0 6rem',
        textAlign: 'center',
        color: 'var(--color-primary)'
      }}>
        <div className="container">
          <Reveal>
            <h1 className="hero-title" style={{ fontSize: '4rem', margin: 0, textShadow: 'none', color: 'var(--color-primary)' }}>Our Story</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto 0', color: '#444' }}>Bringing world-class flavors to the heart of Palghar.</p>
          </Reveal>
        </div>
      </header>

      <section className="section-padding texture-bg">
        <div className="container about-grid texture-content">
          <div className="about-content">
            <Reveal direction="right">
              <h4 className="section-subtitle">Since Day One</h4>
              <h2 className="section-title mb-3">Authenticity Meets Local Vibe</h2>
              <p className="story-text">Stone Oven was born out of a simple idea: to bring authentic, high-quality international cuisine to Palghar without compromising on taste, ambiance, or hospitality.</p>
              <p className="story-text">Nestled in the bustling Nidhi Palace, besides Raunak Dhaba, our restaurant is designed to be a haven for food lovers. The name <strong style={{ color: 'var(--color-primary)' }}>Stone Oven</strong> reflects our dedication to traditional cooking methods—specifically our signature wood-fired pizzas that boast a perfectly charred crust and smoky flavor you won't find anywhere else.</p>
              <p className="story-text">But we didn't stop at Italian. Our expert chefs have curated a massive multi-cuisine menu featuring zesty Mexican tacos, wok-tossed Chinese delicacies, and our famously large, sizzling platters.</p>
            </Reveal>
          </div>
          <div className="about-img">
            <Reveal direction="left" delay={0.2}>
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" alt="Stone Oven Storefront at Nidhi Palace" style={{ filter: 'contrast(1.1) brightness(0.95)' }} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <Reveal>
            <h2 className="section-title text-center mb-4" style={{ display: 'block' }}>Our Multi-Cuisine Experience</h2>
            <p className="text-center mb-4" style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-text-light)' }}>
              We use only the freshest ingredients to craft dishes that look as good as they taste.
            </p>
          </Reveal>
          
          <div className="cuisine-grid">
            <Reveal delay={0.1}>
              <div className="cuisine-card">
                <Pizza className="cuisine-icon" size={48} color="var(--color-secondary)" />
                <h3>Italian</h3>
                <p>Authentic wood-fired pizzas and rich, creamy pastas.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="cuisine-card">
                <Flame className="cuisine-icon" size={48} color="var(--color-accent-red)" />
                <h3>Mexican</h3>
                <p>Spicy tacos, loaded nachos, and fresh guacamole.</p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="cuisine-card">
                <Utensils className="cuisine-icon" size={48} color="var(--color-accent-green)" />
                <h3>Chinese</h3>
                <p>Wok-tossed noodles, fried rice, and our signature bowls.</p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="cuisine-card">
                <Flame className="cuisine-icon" size={48} color="#FF6F00" />
                <h3>Sizzlers</h3>
                <p>Smoking hot platters packed with flavor and hearty portions.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
