import './about.css';

// export const About = () => {
//     return (
//       <div className='about-cntainer'>
//         <div className='about-box'>
//           <div className="about_card-pic"></div>
//           <div className="about_card-text">
//             <h2 className='about_card-title'>Mit Liebe und Sorgfalt zubereitet</h2>

//             <p className='about_card-p'>In unserer Küche steckt mehr als nur gutes Essen – <br /> hier fließt Leidenschaft in jedes Gericht. 
//               Wir wählen unsere Zutaten mit größter Sorgfalt aus und achten darauf, dass sie immer frisch und hochwertig sind. <br />
//               Jeder Kebab, jede Sauce und jedes Gericht wird mit Liebe zubereitet, genau so, wie wir es für unsere eigene Familie tun würden.
//             </p>
//             <p className='about_card-p'>
//               Unser Ziel ist es, nicht nur den Hunger zu stillen, sondern euch ein echtes Geschmackserlebnis zu bieten – saftig, 
//               aromatisch und einfach köstlich. Denn gutes Essen entsteht nicht nur aus den besten Zutaten, sondern auch aus der 
//               Liebe und Hingabe, mit der es gemacht wird.
//             </p>
//             <p className='about_card-p'>Komm vorbei und erlebe es selbst!</p>
            
//           </div>
//         </div>
//       </div>
//     );
// };


import { FaAward, FaUtensils, FaSeedling } from 'react-icons/fa';

export const AboutSection = () => {
  return (
    <div className="about-container">
      <div className="glass-card about-card">
        <div className="about-grid">
          <div className="about-image">
            <div className="about_card-pic chef-photo"></div>
            {/* <img src="/chef.jpg" alt="Шеф-повар кебабной" className="chef-photo" /> */}
            {/* <div className="decoration-circle"></div> */}
          </div>
          
          <div className="about-content">
            <h2>Über uns</h2>
            <div className="divider"></div>
            
            <p>
              Willkommen bei <span className="highlight">Palu Kebab</span>, 
              wo die Traditionen der türkischen Küche auf Schweizer Qualität treffen.
            </p>
            
            <p>
              Мы открылись в 2010 году с миссией познакомить Женеву с настоящим вкусом Востока. Каждое блюдо мы 
              готовим с любовью, используя только свежие местные ингредиенты и оригинальные специи, привезенные 
              прямо из Турции.
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
