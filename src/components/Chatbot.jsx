import { useState, useRef, useEffect } from 'react';
import { Bot, X, ChevronRight, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Chatbot.css';

const fullMenu = [
  { category: "Soup", name: "Rustic Fresh Tomato", price: "₹149.00", desc: "An aromatic fresh tomato soup in italian style with flavor of fresh herbs" },
  { category: "Soup", name: "Cream Of Soup", price: "₹159.00", desc: "Choose your ingredient: mushroom/corn/chicken/broccoli" },
  { category: "Soup", name: "Minestrone Soup", price: "₹159.00", desc: "Tomato or Pesto based soup blended with cream, mix veggies, chopped pasta" },
  { category: "Soup", name: "Manchow Soup", price: "₹149.00", desc: "Thick soup served with vegetable garnish with deep fried noodles" },
  { category: "Soup", name: "Sweet Corn Soup", price: "₹139.00", desc: "Thick sweet soup made of corn and vegetables" },
  { category: "Soup", name: "Tom Yum / Tom Kha", price: "₹149-159", desc: "Distinct hot and sour thai soup, with fragrant spices" },
  
  { category: "Drinks", name: "Flavored Ice Tea", price: "₹129.00", desc: "Lemon, Peach, or Strawberry" },
  { category: "Drinks", name: "Shakes", price: "₹149-159", desc: "Chocolate, Kit-Kat, or Brownie Shake" },
  { category: "Drinks", name: "Mojitos", price: "₹149.00", desc: "Virgin, Green Apple, Cranberry, Mango, Watermelon, Orange" },
  
  { category: "Baos", name: "Bbq Bao", price: "₹239.00", desc: "Chopped paneer/chicken stir fried in bbq sauce filled in chinese buns" },
  { category: "Baos", name: "Thai Basil Bao", price: "₹249.00", desc: "Crispy veggies / chicken tossed in thai spices, served in soft & fluffy bao" },
  { category: "Baos", name: "Korean Fried Bao", price: "₹249.00", desc: "Korean fried cottage cheese / chicken tossed with goch chang spices" },
  
  { category: "Appetizers", name: "Garlic Bread", price: "₹149-219", desc: "Plain, Cheese, Chilli, Delight, or Supreme Platters" },
  { category: "Appetizers", name: "Bruschetta", price: "₹199-249", desc: "Mix Veg, Mushroom, Mexican, or Spicy Chicken varieties" },
  { category: "Appetizers", name: "Loaded Fries", price: "₹149-249", desc: "Classic, Cheesy, Peri Peri, or Nyk Style" },
  
  { category: "Non-Veg Starters", name: "Chicken Pop-Corn", price: "₹249.00", desc: "Crumb fried chicken cubes served with spicy mayonnaise" },
  { category: "Non-Veg Starters", name: "Chicken Dynamite", price: "₹329.00", desc: "Chicken tossed in choice of sauce" },
  { category: "Non-Veg Starters", name: "Chicken Lollypop", price: "₹249.00", desc: "All-time favorite wings" },
  
  { category: "Pizza", name: "Margherita Fresh Basil", price: "₹168.00", desc: "Cheese & basil" },
  { category: "Pizza", name: "Spicy Italiana", price: "₹219.00", desc: "Tomato, capsicum, onion, jalapeno, bell peppers, chilly, corn" },
  { category: "Pizza", name: "Tandoori Paneer Pizza", price: "Varies", desc: "Paneer with tandoori sauce green capsicum & bellpepper" },
  { category: "Pizza", name: "Mexican Pizza Non Veg", price: "₹249.00", desc: "Capsicum, onion, chicken, jalapenos, tomato, red yellow bell pepper" },
  { category: "Pizza", name: "Butter Chicken Pizza", price: "₹249.00", desc: "Classic pizza top with butter chicken sauce & chicken" },
  { category: "Pizza", name: "B.B.Q Chicken", price: "₹249.00", desc: "Chicken marinated bbq sauce, onion, capsicum, bell pepper" },
  
  { category: "Mains", name: "Fried Rice & Noodles", price: "₹239-289", desc: "Sichuan, Burnt Garlic, Hakka, Singapore, or Hong Kong style" },
  { category: "Mains", name: "Pot Rice", price: "Varies", desc: "Thai Pot Rice or Malaysian Pot Rice" },
  { category: "Mains", name: "Thai Curry Red & Green", price: "₹259.00", desc: "Vegetable, chicken & prawns" },
  { category: "Mains", name: "Butter Garlic Prawns", price: "₹289.00", desc: "King prawns tossed in chilli and garlic" }
];

const Chatbot = () => {
  const [active, setActive] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! Welcome to Stone Oven 😊 You can ask me anything about our menu!", isBot: true }
  ]);
  const chatBodyRef = useRef(null);

  const botReplies = {
    'menu': 'You can view our full menu featuring Italian, Mexican, Chinese & Sizzlers on our Menu page.',
    'book': 'To book a table, please visit our Contact page or use the WhatsApp link below!',
    'hours': 'We are open every day from 6:00 PM to 11:00 PM.',
    'location': 'We are located at Shop 03, Ground Floor, Nidhi Palace, Palghar, Mumbai (Besides Raunak Dhaba).'
  };

  const handleCustomQuery = (query) => {
    if (!query.trim()) return;
    
    const userMsg = { id: Date.now(), text: query, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setInputText("");

    setTimeout(() => {
        let reply = "";
        const lowerQ = query.toLowerCase();
        
        if (lowerQ.includes('hi') || lowerQ.includes('hello')) {
            reply = "Hello! How can I help you today? Ask me about our pizzas, soups, starters, or more!";
        } else if (lowerQ.includes('time') || lowerQ.includes('open')) {
            reply = botReplies['hours'];
            setMessages(prev => [...prev, { id: Date.now() + 1, text: reply, isBot: true }]);
            return;
        } else if (lowerQ.includes('book') || lowerQ.includes('reserve')) {
            setMessages(prev => [...prev, { id: Date.now() + 1, text: botReplies['book'], isBot: true, action: 'book' }]);
            return;
        } else if (lowerQ.includes('menu')) {
            setMessages(prev => [...prev, { id: Date.now() + 1, text: botReplies['menu'], isBot: true, action: 'menu' }]);
            return;
        } else {
            // Tokenize query to search by meaningful keywords
            const stopWords = ['what', 'whats', 'is', 'in', 'the', 'of', 'for', 'are', 'do', 'you', 'have', 'any', 'good', 'some', 'can', 'i', 'get', 'a'];
            const tokens = lowerQ.split(/[\s?.,!'"]+/).filter(w => w.length > 2 && !stopWords.includes(w));

            if (tokens.length === 0) {
                setMessages(prev => [...prev, { id: Date.now() + 1, text: "I'm not exactly sure what you're asking, but " + botReplies['menu'], isBot: true, action: 'menu' }]);
                return;
            }

            // Fuzzy search our knowledge base using the extracted tokens
            const matches = fullMenu.filter(item => {
                const searchableText = `${item.name.toLowerCase()} ${item.category.toLowerCase()} ${item.desc ? item.desc.toLowerCase() : ''}`;
                return tokens.some(token => {
                    const singular = token.endsWith('s') ? token.slice(0, -1) : token;
                    return searchableText.includes(token) || searchableText.includes(singular);
                });
            });

            if (matches.length > 0) {
                const topMatches = matches.slice(0, 3);
                const resultsText = topMatches.map(m => `• ${m.name} (${m.price})\n  ${m.desc}`).join("\n\n");
                reply = `Here is what I found for "${query}":\n\n${resultsText}`;
                if (matches.length > 3) reply += `\n\n...and ${matches.length - 3} more items! Check our full Menu page.`;
            } else {
                reply = `I couldn't find exactly "${query}" on our menu, but we have an incredible selection of Pizzas, Sizzlers, Baos, and Soups!`;
            }
        }
        
        setMessages(prev => [...prev, { id: Date.now() + 1, text: reply, isBot: true }]);
    }, 600);
  };

  const handleOption = (action, text) => {
    handleCustomQuery(text);
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, active]);

  useEffect(() => {
    const toggle = () => setActive(prev => !prev);
    window.addEventListener('toggle-chatbot', toggle);
    return () => window.removeEventListener('toggle-chatbot', toggle);
  }, []);

  return (
    <>
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
                  <Link to="/menu" onClick={() => setActive(false)} style={{ color: 'var(--color-secondary)', fontWeight: 'bold' }}>
                    Click here to view Menu
                  </Link>
                </div>
              )}
              {msg.action === 'book' && (
                <div style={{ marginTop: '10px' }}>
                  <Link to="/contact" onClick={() => setActive(false)} style={{ color: 'var(--color-secondary)', fontWeight: 'bold' }}>
                    Go to Booking
                  </Link>
                </div>
              )}
            </div>
          ))}

          {messages.length === 1 && (
            <div className="chat-options">
              <button className="chat-opt-btn" onClick={() => handleOption('menu', 'View Menu')}>
                🍽️ View Menu <ChevronRight size={14} />
              </button>
              <button className="chat-opt-btn" onClick={() => handleOption('book', 'Book a Table')}>
                📅 Book a Table <ChevronRight size={14} />
              </button>
              <button className="chat-opt-btn" onClick={() => handleOption('soup', 'Any good Soups?')}>
                🥣 Any good Soups? <ChevronRight size={14} />
              </button>
              <button className="chat-opt-btn" onClick={() => handleOption('pizza', 'What Pizzas do you have?')}>
                🍕 What Pizzas do you have? <ChevronRight size={14} />
              </button>
            </div>
          )}
        </div>
        
        <div style={{ display: 'flex', padding: '10px', borderTop: '1px solid #eee', backgroundColor: '#fafafa' }}>
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleCustomQuery(inputText)}
            placeholder="Ask about a dish..."
            style={{ flex: 1, padding: '10px', border: '1px solid #ddd', borderRadius: '20px', outline: 'none', fontFamily: 'var(--font-body)' }}
          />
          <button 
            onClick={() => handleCustomQuery(inputText)} 
            style={{ background: 'var(--color-secondary)', color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', marginLeft: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
