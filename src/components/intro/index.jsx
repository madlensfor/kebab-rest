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
                <ul className='intro-section__nav-links'>
                    <li className='nav-links'><a href=""></a></li>
                    <li className='nav-links'><button onClick={() => scrollToSection('Menu')}>Menu</button></li>
                    <li className='nav-links'><button onClick={() => scrollToSection('Contacts')}>Contacts</button></li>
                    <li className='nav-links'><button onClick={() => scrollToSection('AboutUs')}>About Us</button></li>
                </ul>
            </nav>
            <div className='intro-section__container'>
                
                <h1 className='intro-section__rest-name gradient-text'>PALU</h1>
                {/* <p className='intro-section__rest-descr'>Staek Kebab</p> */}
                <p className='intro-subtext'>"Feuer,<br /> Fleisch, <br /> Genuss!"</p>
            </div>
        </div>
    );
};