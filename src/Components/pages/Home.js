import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection/HeroSection';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import Cards2 from '../Cards/Cards2';
import ContactBande from '../Contact/ContactBande';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Cards2 />
            <ContactBande />
            <Footer />
        </>
    )
};


export default Home;