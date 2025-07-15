
import './menu.css';

export const Menu = ({ menuData }) => {
  return (
    <div className="menu-cards">
      {menuData.map((section, index) => (
        <div key={index} className="menu-glass-card">
        <div className="card-header">
          {section.icon}
          <h3 className="section-title">{section.title}</h3>
        </div>
        
        <ul className="menu-items">
          {section.items.map((item, index) => (
            <li key={index} className="menu-item">
              <div className="item-info">
                <span className="item-name">{item.name}</span>
                <span className="item-dots"></span>
                <span className="item-price">{item.price} CHF</span>
              </div>
              {item.description && <p className="item-description">{item.description}</p>}
            </li>
          ))}
        </ul>
      </div>
      ))}

    </div>
  );
};