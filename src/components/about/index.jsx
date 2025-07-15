import './about.css';

import { FaAward, FaSeedling } from 'react-icons/fa';

export const AboutSection = () => {
  return (
    <div className="about-container">
      <div className="glass-card about-card">
        <div className="about-grid">
          <div className="about-image">
            <div className="about_card-pic chef-photo"></div>
          </div>
          
          <div className="about-content">
            <h2>Über uns</h2>
            <div className="about-divider"></div>
            
            <p>
              Willkommen bei <span className="highlight">Palu Kebab</span>, 
              wo die Traditionen der türkischen Küche auf Schweizer Qualität treffen.
            </p>
            
            <p>
              Wir haben 2024 mit dem Ziel eröffnet, der Schweiz den echten Geschmack 
              des Orients näherzubringen. Jedes Gericht wird mit viel Liebe zubereitet, 
              wobei wir ausschließlich frische Zutaten aus der Region und originale Gewürze verwenden, 
              die direkt aus der Türkei importiert werden.
            </p>
            <div className="features">
              <div className="feature">
                <FaAward className="feature-icon" />
                <h4>Qualität</h4>
                <p>Beste Zutaten, ausgewähltes Fleisch</p>
              </div>
              
              <div className="feature">
                <FaSeedling className="feature-icon" />
                <h4>Frische</h4>
                <p>Wir verwenden ausschließlich frisches Gemüse</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
