import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Instagram = ({ size=20 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const Facebook = ({ size=20 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>STONE<span style={{ color: 'var(--color-secondary)' }}>OVEN</span></h3>
            <p>Authentic Wood-Fired Perfection.<br />Italian, Mexican, Chinese & Sizzlers.</p>
            <div className="social-links">
              <a href="https://www.instagram.com/stoneovenpalghar/" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">View Menu</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact & Reserve</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Contact Us</h3>
            <div className="contact-details">
              <span><MapPin size={18} /> Shop 03, Ground Floor, Nidhi Palace, Palghar</span>
              <span><Phone size={18} /> +91 98765 43210</span>
              <span><Mail size={18} /> hello@stoneoven.com</span>
              <span><Clock size={18} /> Open Daily: 6 PM - 11 PM</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Stone Oven Restaurant. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
