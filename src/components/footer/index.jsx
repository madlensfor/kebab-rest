import './footer.css';

import { FaPhone, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className="footer-container">
      
      <div className="footer-content">
        <div className="footer-grid"> 

          <div className="footer-brand">
            <h2 className="footer-logo">Palu Kebab</h2>
            <p className="footer-description">
              Ihre Bestellung ist unsere Leidenschaft,<br/> 
              Ihr Geschmack unsere Inspiration!
            </p>
            <div className="social-icons">
              <a href="tel:+41788082323" target="_blank" rel="noreferrer" aria-label="Phone"><FaPhone /></a>
              <a href="https://www.instagram.com/palu_steakkebab?igsh=MWlvMGNkeDVhOXhiMw==" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
              {/* <a href="tel:+41788082323" target="_blank" rel="noreferrer" aria-label="Phone"><FaPhone /></a> */}
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Kontaktdaten</h3>
            <ul className="footer-links">
              <li>
                <a href='https://www.google.com/maps/place/Palu+Steak+Kebab/@47.5563686,8.8932985,17z/data=!4m15!1m8!3m7!1s0x479a9221d25d4161:0x51c703c8343d3ea7!2zUmhlaW5zdHJhc3NlIDEyLCA4NTAwIEZyYXVlbmZlbGQsINCo0LLQtdC50YbQsNGA0LjRjw!3b1!8m2!3d47.5563686!4d8.8958734!16s%2Fg%2F11c1wlzk0p!3m5!1s0x479a93046bb0e825:0x6ac6aaf5d9baa124!8m2!3d47.5563686!4d8.8958734!16s%2Fg%2F11w2jp28z2?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D'>
                  Rheinstrasse 12, Frauenfeld
                </a>
              </li>
              <li>
                <a href="tel:+41788082323">+41 78 808 23 23</a>
              </li>
              <li>
                <span>Wir bieten einen Lieferservice an</span>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Öffnungszeiten</h3>
            <ul className="footer-links-wh">
              <li><span> Montag - Donnerstag:</span> 11:00 - 22:00</li>
              <li><span>Freitag - Samstag:</span> 11:00 - 23:00</li>
              <li><span>Sonntag:</span> 12:00 - 20:00</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Navigation</h3>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('AboutUs')}><a href="#about">Über uns</a></button></li>
              <li><button onClick={() => scrollToSection('Menu')}><a href="#menu">Menu</a></button></li>
              <li><button onClick={() => scrollToSection('Contacts')}><a href="#contact">Kontakte</a></button></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Paalu Kebab. All rights reserved.
          </div>
          <div className="footer-extra">
            <a href="#privacy">made by</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
