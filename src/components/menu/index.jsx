import './menu.css';

import PropTypes from 'prop-types';

export const Menu = ({ menuData }) => {
  return (
    <section>
      <div className='menu-sec-tbox'>
        <h3 className='menu-title'>Menu</h3>
        <div className="menu-divider"></div>
      </div>
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
    </section>
  );
};

Menu.propTypes = {
  menuData: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
          description: PropTypes.string
        })
      ).isRequired
    })
  ).isRequired
};