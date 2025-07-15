import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Lottie from "lottie-react";
import animationData from "../../assets/animation/fire.json";
import './intro.css';

export const IntroSection = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
        if (window.innerWidth >= 768) setIsMenuOpen(false);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
        } else {
        document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const scrollAndClose = (sectionId) => {
        scrollToSection(sectionId);
        setIsMenuOpen(false);
    };

    const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='intro-section'>
            <nav className='intro-section-nav'>
                <h4 className='intro-logo'>Palu Kebab</h4>
                
                {isMobile && (
                    <button className="burger-btn" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                )}
                {!isMobile && (
                    <div className='intro-section-nav-container'>
                        <ul className='intro-section__nav-links'>
                            <li className='nav-links'><button onClick={() => scrollToSection('Menu')}>Menu</button></li>
                            <li className='nav-links'><button onClick={() => scrollToSection('Contacts')}>Kontakte</button></li>
                            <li className='nav-links'><button onClick={() => scrollToSection('AboutUs')}>Über uns</button></li>
                        </ul>
                        <button className='nav-btn'><a href="https://www.just-eat.ch/speisekarte/palu-steak-kebab">link to somwhere</a></button>
                    </div>
                )}
                <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <div className='mobile-menu-content'>
                    <ul className='mobile-nav-links'>
                        <li><button onClick={() => scrollAndClose('Menu')}>Menu</button></li>
                        <li><button onClick={() => scrollAndClose('Contacts')}>Kontakte</button></li>
                        <li><button onClick={() => scrollAndClose('AboutUs')}>Über uns</button></li>
                    </ul>
                    <button className='mobile-nav-btn'>
                        <a href="https://www.just-eat.ch/speisekarte/palu-steak-kebab">link to somwhere</a>
                    </button>
                    </div>
                </div>
            </nav>
            <div className='intro-section__container'>
                
                <h1 className='intro-section__text'>Feuer<br /> Fleisch <br /> Genuss!</h1>
                <div className='intro__animated-icon'>
                    <Lottie animationData={animationData} loop />
                </div>
            </div>
        </div>
    );
};