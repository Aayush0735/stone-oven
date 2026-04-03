import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import FloatingActions from './components/FloatingActions';

import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

const LoadingScreen = () => (
  <motion.div 
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(253, 251, 247, 0.98)', /* Frosty cream background */
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      flexDirection: 'column'
    }}
  >
    <motion.img 
      src="/logo.png"
      alt="Stone Oven Loading..."
      initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
      animate={{ scale: [0.8, 1.08, 1], opacity: 1, filter: 'blur(0px)' }}
      transition={{ 
        duration: 1.5, 
        ease: "easeInOut",
        times: [0, 0.5, 1]
      }}
      style={{ height: '280px', objectFit: 'contain', zIndex: 10 }}
    />
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      style={{ display: 'flex', gap: '8px', marginTop: '-30px', zIndex: 11 }}
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -12, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
          style={{ width: '12px', height: '12px', backgroundColor: 'var(--color-secondary)', borderRadius: '50%', boxShadow: '0 4px 10px rgba(245, 130, 32, 0.4)' }}
        />
      ))}
    </motion.div>
  </motion.div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5s premium loading delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      
      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Navbar />
          <main style={{ minHeight: '80vh' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <FloatingActions />
          <Chatbot />
        </motion.div>
      )}
    </Router>
  );
}

export default App;
