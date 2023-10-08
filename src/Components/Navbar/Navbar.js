import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '../Reveal/Reveal.css';
import '../Reveal/Reveal.js';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container reveal'>
                    <a href="/" className='navbar-logo reveal-1'>
                        <div>
                            <h4>Christine Preljocaj</h4>
                            <p className='home'>
                                PSYCHOLOGUE CLINICIENNE
                            </p>
                        </div>

                    </a>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a href='/' className='nav-links reveal-2' onClick={closeMobileMenu}>
                                <p className="hover-underline-animation"><span className="home-color">Accueil</span></p>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='/therapies' className='nav-links reveal-2' onClick={closeMobileMenu}>
                                <p className="hover-underline-animation">Thérapies</p>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='/qui-suis-je' className='nav-links reveal-2' onClick={closeMobileMenu}>
                                <p className="hover-underline-animation">Qui suis-je ?</p>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links reveal-2' onClick={closeMobileMenu}>
                                <p className="hover-underline-animation">Tarifs</p>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links reveal-2' onClick={closeMobileMenu}>
                                <p className="hover-underline-animation">Contact</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;