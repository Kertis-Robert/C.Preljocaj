import React from 'react';
import '../../App.css';
import './HeroSection.css';





const HeroSection = () => {
    return (


        <>
            <img src='/images/cabinet.jpg' />

            <div className='hero-container reveal'>

                <h1 className='reveal-1'>
                    CHRISTINE PRELJOCAJ
                </h1>
                <p className='reveal-Y-6'>
                    Psychologue clinicienne – Psychothérapeute EMDR
                </p>
                <h2 className='reveal-Y-5'>
                    DANSEPSYTHÉRAPIE
                </h2>
            </div>
        </>
    );
};

export default HeroSection;