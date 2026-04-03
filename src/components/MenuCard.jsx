import './MenuCard.css';

const MenuCard = ({ item }) => {
  return (
    <div className="menu-item">
      <div className="menu-img">
        {item.badge && <span className="menu-badge">{item.badge}</span>}
        <img 
          src={item.image} 
          alt={item.title} 
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1544025162-83676839e1a6?w=600&q=80'; }} 
        />
      </div>
      <div className="menu-content">
        <div className="menu-header">
          <h3 className="menu-title">{item.title}</h3>
          <span className="menu-price">₹{item.price}</span>
        </div>
        <p className="menu-desc">{item.desc}</p>
      </div>
    </div>
  );
};

export default MenuCard;
