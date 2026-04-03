import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../components/Reveal';
import MenuCard from '../components/MenuCard';

const Menu = () => {
  const [filter, setFilter] = useState('all');

  const menuItems = [
    { id: 1, category: 'italian', title: 'Margherita Classica', price: '299', desc: 'Authentic wood-fired crust, San Marzano tomato sauce, fresh buffalo mozzarella, and basil.', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80', badge: 'Best Seller' },
    { id: 2, category: 'italian', title: 'Penne Arrabbiata', price: '279', desc: 'Penne pasta tossed in a spicy, fiery tomato and garlic sauce with parmesan shavings.', image: 'https://images.unsplash.com/photo-1621996316526-ce9463b38466?w=600&q=80' },
    { id: 3, category: 'mexican', title: 'Spicy Veggie Tacos', price: '249', desc: 'Hard shell tacos loaded with spiced beans, corn salsa, fresh guacamole and sour cream.', image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&q=80' },
    { id: 4, category: 'mexican', title: 'Loaded Cheese Nachos', price: '289', desc: 'Crispy tortilla chips baked with cheddar cheese, jalapeños, olives, and pico de gallo.', image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=600&q=80', badge: 'Popular' },
    { id: 5, category: 'chinese', title: 'Malaysian Pot Rice', price: '349', desc: 'Aromatic rice layered with exotic vegetables and coated in our secret Malaysian spiced sauce.', image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=600&q=80', badge: "Chef's Special" },
    { id: 6, category: 'chinese', title: 'Hakka Noodles', price: '229', desc: 'Wok-tossed noodles with shredded cabbage, carrots, bell peppers and soy sauce.', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80' },
    { id: 7, category: 'sizzlers', title: 'Exotic Veg Sizzler', price: '499', desc: 'A smoking hot platter of grilled vegetables, paneer steak, fries, and herbed rice in pepper sauce.', image: 'https://images.unsplash.com/photo-1605333333333-333333333333?w=600&q=80', badge: 'Must Try' },
    { id: 8, category: 'beverages', title: 'Virgin Mojito', price: '149', desc: 'Refreshing mocktail with fresh mint, lime juice, and sparkling water.', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80' },
    { id: 9, category: 'beverages', title: 'Peach Iced Tea', price: '129', desc: 'Chilled brewed tea infused with sweet peach flavor and served over ice.', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80' },
  ];

  const filteredItems = filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter);

  return (
    <>
      <header className="page-header" style={{
        background: `linear-gradient(rgba(253, 251, 247, 0.5), rgba(253, 251, 247, 0.95)), url('https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=1600&q=80') center/cover`,
        padding: '12rem 0 6rem',
        textAlign: 'center',
        color: 'var(--color-primary)'
      }}>
        <div className="container">
          <Reveal>
            <h1 className="hero-title" style={{ fontSize: '4rem', margin: 0, textShadow: 'none', color: 'var(--color-primary)' }}>Our Menu</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto 0', color: '#444' }}>Discover our wide variety of multi-cuisine delicacies crafted with passion.</p>
          </Reveal>
        </div>
      </header>

      <section className="section-padding texture-bg">
        <div className="container texture-content">
          {/* Filters */}
          <Reveal delay={0.2}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
              {[ 
                { key: 'all', label: 'All Items' },
                { key: 'italian', label: 'Italian (Pizza/Pasta)' },
                { key: 'mexican', label: 'Mexican' },
                { key: 'chinese', label: 'Chinese' },
                { key: 'sizzlers', label: 'Sizzlers' },
                { key: 'beverages', label: 'Beverages' }
              ].map(f => (
                <button 
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  style={{
                    background: filter === f.key ? 'var(--color-primary)' : 'transparent',
                    color: filter === f.key ? 'white' : 'var(--color-primary)',
                    border: '1px solid var(--color-primary)',
                    padding: '0.6rem 2rem',
                    borderRadius: '50px',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </Reveal>

          <motion.div 
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '3rem' }}
            layout
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div 
                  key={item.id} 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <MenuCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Menu;
