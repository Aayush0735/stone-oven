import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Small optimization
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          {/* Text-based Logo (Commented out for later use) */}
          {/* <span>STONE<span className="highlight">OVEN</span></span> */}
          
          {/* Image-based Logo is scaled up via transform to fix huge whitespace padding inside the original file */}
          <img src="/logo.png" alt="Stone Oven Logo" style={{ height: '70px', width: 'auto', objectFit: 'contain', transform: 'scale(2.5)', transformOrigin: 'left center' }} />
        </Link>
        
        <div className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
        
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''}>Menu</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>Our Story</Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          </li>
          <li>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', color: 'white', border: 'none' }}>
              Reserve Table
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
