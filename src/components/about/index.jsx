import './about.css';

export const About = () => {
    return (
      <div className='about-cntainer'>
        <div className='about-box'>
          <div className="about_card-pic"></div>
          <div className="about_card-text">
            <h2 className='about_card-title'>Mit Liebe und Sorgfalt zubereitet</h2>

            <p className='about_card-p'>In unserer Küche steckt mehr als nur gutes Essen – <br /> hier fließt Leidenschaft in jedes Gericht. 
              Wir wählen unsere Zutaten mit größter Sorgfalt aus und achten darauf, dass sie immer frisch und hochwertig sind. <br />
              Jeder Kebab, jede Sauce und jedes Gericht wird mit Liebe zubereitet, genau so, wie wir es für unsere eigene Familie tun würden.

              Unser Ziel ist es, nicht nur den Hunger zu stillen, sondern euch ein echtes Geschmackserlebnis zu bieten – saftig, 
              aromatisch und einfach köstlich. Denn gutes Essen entsteht nicht nur aus den besten Zutaten, sondern auch aus der 
              Liebe und Hingabe, mit der es gemacht wird.
            </p>
            <p className='about_card-p'>Komm vorbei und erlebe es selbst!</p>
            
          </div>
        </div>
      </div>
    );
};