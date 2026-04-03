import { MapPin, Clock, Phone } from 'lucide-react';
import Reveal from '../components/Reveal';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <header className="page-header" style={{
        background: `linear-gradient(rgba(253, 251, 247, 0.5), rgba(253, 251, 247, 0.95)), url('https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1600&q=80') center/cover`,
        padding: '12rem 0 6rem',
        textAlign: 'center',
        color: 'var(--color-primary)'
      }}>
        <div className="container">
          <Reveal>
            <h1 className="hero-title" style={{ fontSize: '4rem', margin: 0, textShadow: 'none', color: 'var(--color-primary)' }}>Get in Touch</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto 0', color: '#444' }}>We'd love to host you. Drop by or reserve a table.</p>
          </Reveal>
        </div>
      </header>

      <section className="section-padding texture-bg">
        <div className="container contact-grid texture-content">
          
          {/* Info & Ordering */}
          <div>
            <Reveal direction="right">
              <h2 className="section-title mb-4">Visit Us</h2>
              
              <div className="contact-info-card">
                <div className="info-row">
                  <MapPin className="info-icon" size={24} />
                  <div>
                    <h4>Location</h4>
                    <p style={{ color: 'var(--color-text-light)', marginTop: '0.5rem' }}>
                      Shop 03, Survey 827/4, Plot 05, Ground Floor,<br />
                      Nidhi Palace, Palghar, Mumbai.<br />
                      <em>(Landmark: Besides Raunak Dhaba)</em>
                    </p>
                  </div>
                </div>
                <div className="info-row">
                  <Clock className="info-icon" size={24} />
                  <div>
                    <h4>Opening Hours</h4>
                    <p style={{ color: 'var(--color-text-light)', marginTop: '0.5rem' }}>Monday - Sunday: 6:00 PM - 11:00 PM</p>
                  </div>
                </div>
                <div className="info-row">
                  <Phone className="info-icon" size={24} />
                  <div>
                    <h4>Phone</h4>
                    <p style={{ color: 'var(--color-text-light)', marginTop: '0.5rem' }}>+91 98765 43210</p>
                  </div>
                </div>
              </div>

              <h3 style={{ fontFamily: 'var(--font-heading)', marginTop: '3rem', fontSize: '1.8rem', color: 'var(--color-primary)' }}>Reserve Your Spot</h3>
              <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>Want to secure a table for a special occasion? Fill out the reservation form, and we will confirm your booking via email or phone shortly.</p>
            </Reveal>
          </div>

          {/* Contact Form */}
          <div>
            <Reveal direction="left" delay={0.2}>
              <div className="contact-form">
                <h2 className="section-title mb-4" style={{ fontSize: '2.5rem' }}>Book a Table</h2>
                {/* Replace YOUR_FORM_ID with the actual ID from formspree.io */}
                <form action="https://formspree.io/f/xykbngjb" method="POST">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" id="name" className="form-control" required placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name="phone" id="phone" className="form-control" required placeholder="+91 " />
                  </div>
                  <div className="form-group" style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="date">Date</label>
                      <input type="date" name="date" id="date" className="form-control" required />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="time">Time</label>
                      <input type="time" name="time" id="time" className="form-control" required />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="guests">Guests</label>
                      <input type="number" name="guests" id="guests" className="form-control" min="1" required placeholder="2" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Special Requests</label>
                    <textarea name="message" id="message" className="form-control" rows="4" placeholder="Any dietary preferences, birthday setup, etc."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Confirm Booking</button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
        
        {/* Map Placeholder */}
        <Reveal delay={0.4}>
          <div className="container map-container" style={{ marginTop: '5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <iframe 
              src="https://maps.google.com/maps?q=Stone+Oven,+Nidhi+Palace,+Palghar&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Stone Oven Location"
            ></iframe>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default Contact;
