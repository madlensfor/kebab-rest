import './App.css';

import { menuDataa } from './mokData';
import { IntroSection, Menu, 
         Contacts, AboutSection, Footer, 
         BackgroundPattern } from './components';

function App() {
  return (
    <main className='main'>
      <BackgroundPattern/>
      <IntroSection/>

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