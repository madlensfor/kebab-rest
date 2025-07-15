import './App.css';

import { menuDataa } from './mokData';
import { IntroSection, Menu, 
         Contacts, AboutSection, Footer, 
         BackgroundPattern } from './components';
         
import { FaFire, FaLeaf, FaGlassCheers } from 'react-icons/fa';

         const menuData = [
          {
            title: "Главные блюда",
            icon: <FaFire className="icon" />,
            items: [
              { name: "Poulet Kebab", descr: "mit Salat und Sauce", price: "13.00" },
              { name: "Poulet Dürüm", descr: "mit Salat und Sauce", price: "14.00" },
              { name: "Poulet Box", descr: "mit Pommes oder Salat", price: "13.00" },
              { name: "Poulet Kebab Teller", descr: "mit Pommes und Salat", price: "19.00" },
            ]
          },
          {
            title: "Вегетарианские",
            icon: <FaLeaf className="icon" />,
            items:[
              { name: "Vegetarische", descr: "Halloumi Sandwich", price: "13.00" },
              { name: "Halloumi Sandwich", price: "13.00" },
              { name: "Falafel Sandwich", price: "13.00" },
              { name: "Falafel Dürüm", price: "14.00" },
              { name: "Falafel Teller", price: "17.00" },
              { name: "Falafel Box", price: "13.00" }
            ]
          },
          {
            title: "Напитки",
            icon: <FaGlassCheers className="icon" />,
            items: [
              { name: "Айран", price: 6 },
              { name: "Турецкий кофе", price: 5 },
              { name: "Чай с мятой", price: 4 }
            ]
          }
        ];

function App() {
  return (
    <main className='main'>
      <BackgroundPattern/>
      <IntroSection/>
      
      {/* <div className='section-container'>
        <Carousel items={kebabik}/>
      </div> */}

      <div className='section-container' id='Menu'>
          <Menu menuData={menuDataa} />
      </div>

      <div className='section-container' id='Contacts'>
        <Contacts/>
      </div>
      
      <div className='section-container' id='AboutUs'>
        <AboutSection/>
      </div>
      
      <Footer/>
    </main>
  );
};

export default App;