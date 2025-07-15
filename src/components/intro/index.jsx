import { FaBeerMugEmpty } from 'react-icons/fa6';
import Lottie from "lottie-react";
import animationData from "../../assets/animation/fire.json";
import './intro.css';

export const IntroSection = () => {
    const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return (
        <div className='intro-section'>
            <nav className='intro-section-nav'>
                <h4>paky</h4>
                <div className='intro-section-nav-container'>
                    <ul className='intro-section__nav-links'>
                        <li className='nav-links'><button onClick={() => scrollToSection('Menu')}>Menu</button></li>
                        <li className='nav-links'><button onClick={() => scrollToSection('Contacts')}>Contacts</button></li>
                        <li className='nav-links'><button onClick={() => scrollToSection('AboutUs')}>About Us</button></li>
                    </ul>
                    <button className='nav-btn'>link to somwhere</button>
                </div>
            </nav>
            <div className='intro-section__container'>
                
                <h1 className='intro-section__rest-name gradient-text'>Feuer<br /> Fleisch <br /> Genuss!</h1>
                {/* <p className='intro-section__rest-descr'>Staek Kebab</p> */}
                <p className='intro-subtext'>
                <Lottie animationData={animationData} loop className="footer__logo-animation" /></p>
            </div>
        </div>
    );
};