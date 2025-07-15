import { FaCarOn } from 'react-icons/fa6';
import './contacts.css';
import { FaMapMarkerAlt, FaPhone, FaClock, FaInstagram } from 'react-icons/fa';

                {/* FaCarSide FaCarAlt */}
                {/* <FaCarOn className="footer-icon" /> */}
export const Contacts = () => {
  return (
    <section className="contacts-section" id="contacts">
      <div className="contacts-container">
        <h2 className="contacts-section__title">So finden Sie uns</h2>
      
        <div className="contacts-section__wrapper">
          <div className="contacts-section__info">
            <div className="contacts-section__info-block">
              <FaMapMarkerAlt className="contacts-section__icon" />
              <div>
                <h3>Adresse</h3>
                <p>Rheinstrasse 12, 8500 Frauenfeld</p>
                <p>Bushaltestelle «Frauenfeld, Bahnhof» - 2 Minuten zu Fuß vom Restaurant</p>
              </div>
            </div>

            <div className="contacts-section__info-block">
              <FaPhone className="contacts-section__icon" />
              <div>
                <h3>Telefon</h3>
                <p><a href="tel:+41788082323">+41 (178) 808-23-23</a></p>
                {/* <p>Besuchen Sie uns und probieren Sie den leckersten Kebab Zürichs</p> */}
              </div>
            </div>

            <div className="contacts-section__info-block">
              <FaClock className="contacts-section__icon" />
              <div>
                <h3>Öffnungszeiten</h3>
                <p>Mo-Do: 11:00 - 22:00 Uhr</p>
                <p>Fr-Sa: 11:00 - 23:00 Uhr</p>
                <p>So: 12:00 - 22:00 Uhr</p>
              </div>
            </div>

            <div className="contacts-section__info-block">
              <FaCarOn className="contacts-section__icon" />
              <div>
                <h3>Lieferung</h3>
                <p>Wir bieten auch einen Lieferservice nach Hause an, damit du es bequem hast</p>
              </div>
            </div>

            <div className="contacts-section__info-block">
              <a href="https://www.instagram.com/palu_steakkebab?igsh=MWlvMGNkeDVhOXhiMw==" target="_blank" rel="noreferrer">
                <FaInstagram className="contacts-section__icon" />
              </a>
              <div>
                <h3>Follow us via Instagram</h3>
                <p>Verfolgen Sie unsere Updates</p>
              </div>
            </div>

          </div>

          <div className="contacts-section__map">
            <iframe 
              title="restaurant-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1545.9711146717063!2d8.894244225815923!3d47.55591840057039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a93046bb0e825%3A0x6ac6aaf5d9baa124!2sPalu%20Steak%20Kebab!5e0!3m2!1sru!2snl!4v1742550562929!5m2!1sru!2snl"
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};