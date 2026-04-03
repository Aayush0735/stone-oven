import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Bot, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Chatbot.css';

const Chatbot = () => {
  const [active, setActive] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! Welcome to Stone Oven 😊 How can I help you today?", isBot: true }
  ]);
  const chatBodyRef = useRef(null);

  const botReplies = {
    'menu': 'You can view our full menu featuring Italian, Mexican, Chinese & Sizzlers on our Menu page.',
    'book': 'To book a table, please visit our Contact page or use the WhatsApp link below!',
    'hours': 'We are open every day from 6:00 PM to 11:00 PM.',
    'location': 'We are located at Shop 03, Ground Floor, Nidhi Palace, Palghar, Mumbai (Besides Raunak Dhaba).'
  };

  const handleOption = (action, text) => {
    // Add User Message
    const userMsg = { id: Date.now(), text, isBot: false };
    setMessages(prev => [...prev, userMsg]);

    // Simulate thinking delay
    setTimeout(() => {
      const reply = botReplies[action] || 'Please contact us on WhatsApp for more complex queries!';
      const botMsg = { id: Date.now() + 1, text: reply, isBot: true, action };
      setMessages(prev => [...prev, botMsg]);
    }, 600);
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, active]);

  // Listen for the radial menu toggle dispatch
  useEffect(() => {
    const toggle = () => setActive(prev => !prev);
    window.addEventListener('toggle-chatbot', toggle);
    return () => window.removeEventListener('toggle-chatbot', toggle);
  }, []);

  return (
    <>
      {/* Widget */}
      <div className={`chat-widget ${active ? 'active' : ''}`}>
        <div className="chat-header">
          <div className="chat-title">
            <Bot size={20} color="var(--color-secondary)" /> Stone Oven Bot
          </div>
          <button className="chat-close" onClick={() => setActive(false)}>
            <X size={20} />
          </button>
        </div>
        
        <div className="chat-body" ref={chatBodyRef}>
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-msg ${msg.isBot ? 'msg-bot' : 'msg-user'}`}>
              {msg.text}
              {msg.action === 'menu' && (
                <div style={{ marginTop: '10px' }}>
                  <Link to="/menu" style={{ color: 'var(--color-secondary)', fontWeight: 'bold' }}>
                    Click here to view Menu
                  </Link>
                </div>
              )}
              {msg.action === 'book' && (
                <div style={{ marginTop: '10px' }}>
                  <Link to="/contact" style={{ color: 'var(--color-secondary)', fontWeight: 'bold' }}>
                    Go to Booking
                  </Link>
                </div>
              )}
            </div>
          ))}

          {/* Static Options */}
          <div className="chat-options">
            <button className="chat-opt-btn" onClick={() => handleOption('menu', '🍽️ View Menu')}>
              🍽️ View Menu <ChevronRight size={14} />
            </button>
            <button className="chat-opt-btn" onClick={() => handleOption('book', '📅 Book a Table')}>
              📅 Book a Table <ChevronRight size={14} />
            </button>
            <button className="chat-opt-btn" onClick={() => handleOption('hours', '⏰ Opening Hours')}>
              ⏰ Opening Hours <ChevronRight size={14} />
            </button>
            <button className="chat-opt-btn" onClick={() => handleOption('location', '📍 Location')}>
              📍 Location <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
