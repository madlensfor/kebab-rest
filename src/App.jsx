import './App.css';
import { kebabik } from './mokData';
import { IntroSection, Carousel, Menu, 
         Contacts, About, Footer, 
         BackgroundPattern } from './components';

function App() {
  return (
    <main className='main'>
      <BackgroundPattern/>
      <IntroSection/>
      
      <div className='section-container'>
        <Carousel items={kebabik}/>
      </div>

      <div className='section-container' id='Menu'>
        <Menu/>
      </div>

      <div className='section-container' id='Contacts'>
        <Contacts/>
      </div>
      
      <div className='section-container' id='AboutUs'>
        <About/>
      </div>
      
      <Footer/>
    </main>
  );
};

export default App;