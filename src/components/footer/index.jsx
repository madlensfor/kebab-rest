import Lottie from "lottie-react";
import animationData from "../../assets/animation/fire.json";
import { FaPhone, FaInstagram, FaFacebook } from 'react-icons/fa';
import Palu from '../../assets/paluLogo.png';
import './footer.css';

export const Footer = () => {
  return (
    <footer className='footer-section'> 
      <div className="footer-container">
        <div className='flexeble-box'>
          <div className='box-logo'>
            <Lottie animationData={animationData} loop className="footer__logo-animation" />
            <img className='logo' src={Palu} alt="" />
          </div>
        </div>
        <div>
          <p className="footer_quote">
            „Ihre Bestellung ist unsere Leidenschaft,<br/> Ihr Geschmack unsere Inspiration!“
          </p>
        </div>
        <div className="footer_linked-list">
          <ul>
            <h5>Telefon</h5>
            <li><a href="#"><FaPhone className="icon-footer" /> +41 (178) 808-23-23</a></li>
          </ul>
          <ul>
            <h5>Adresse</h5>
            <li>Rheinstrasse 12</li>
            <li>Frauenfeld</li>
          </ul>
          <ul>
            <h5>Follow Us via</h5>
            <li><a href="#" className="footer-social"><FaInstagram className="footer-socialIcon" /> instagram</a></li>
            <li><a href="#" className="footer-social"><FaFacebook className="footer-socialIcon" /> facebook</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};