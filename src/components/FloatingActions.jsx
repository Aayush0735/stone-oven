import { useState } from 'react';
import { MessageCircle, X, Bot, Phone } from 'lucide-react';
import './FloatingActions.css';

const Instagram = ({ size=24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;

const FloatingActions = () => {
  const [open, setOpen] = useState(false);

  const triggerChatbot = () => {
    window.dispatchEvent(new CustomEvent('toggle-chatbot'));
    setOpen(false); // Close radial menu after clicking
  };

  return (
    <div className="fab-wrapper">
      
      {/* 1. WhatsApp - Pops Top */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noreferrer" 
        className={`fab-item wa-btn ${open ? 'open-1' : ''}`}
        aria-label="WhatsApp"
      >
        <Phone size={24} fill="white" />
      </a>

      {/* 2. Chatbot - Pops Diagonal */}
      <button 
        className={`fab-item chat-btn ${open ? 'open-2' : ''}`}
        onClick={triggerChatbot}
        aria-label="Open Chat"
      >
        <Bot size={24} />
      </button>

      {/* 3. Instagram - Pops Left */}
      <a 
        href="https://www.instagram.com/stoneovenpalghar/" 
        target="_blank" 
        rel="noreferrer" 
        className={`fab-item ig-btn ${open ? 'open-3' : ''}`}
        aria-label="Instagram"
      >
        <Instagram size={24} />
      </a>

      {/* Main Toggle Button */}
      <button 
        className={`fab-main ${open ? 'active' : ''}`} 
        onClick={() => setOpen(!open)}
        aria-label="Toggle Quick Actions"
      >
        {open ? <X size={32} /> : <MessageCircle size={32} />}
      </button>
      
    </div>
  );
};

export default FloatingActions;
