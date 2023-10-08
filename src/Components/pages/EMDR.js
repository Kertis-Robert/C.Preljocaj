import React from 'react';
import Emdr from '../Cards/Emdr';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import ContactBande from '../Contact/ContactBande';

const EMDR = () => {
    return (
        <>
            <Emdr />
            <ContactBande />
            <Cards />
            <Footer />
        </>
    );
};

export default EMDR;