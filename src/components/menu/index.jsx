import { ConfigProvider, Tabs } from 'antd';
import "./menu.css";
import { menuData } from '../../mokData';


const MenuCategory = ({ items }) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index} className="menu-item">
            <div className="item-header">
              <span className="item-name">{item.name}</span>
              <span className="item-price">{item.price}</span>
            </div>
            {item.descr && <div className="item-description">{item.descr}</div>}
          </li>
        ))}
      </ul>
    );
};

export const Menu = () => {
  const items = menuData.map((section, index) => ({
    key: String(index + 1),
    label: section.category,
    children: <MenuCategory {...section} />,
  }));

  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemSelectedColor: "#df7e3d",
            itemHoverColor: '#df7e3d',
            inkBarColor: "#df7e3d",
            itemActiveColor: '#df7e3d', 
          }
        },
      }}
  >
    <div className="menu-container">
      <h2 className='menu-title'>Menu</h2>
      <Tabs
        defaultActiveKey="1"
        items={items}
        tabPosition="top"
        centered
        className="menu-tabs"
        destroyInactiveTabPane={false}
      />
    </div>
  </ConfigProvider>
  );
};