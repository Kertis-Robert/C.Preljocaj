import React from 'react';
import './Bande.css';
import '../Button/Button.css';

const ContactBande = () => {
    return (
        <>
            <div className="bande">
                <h1>Débutez votre accompagnement dès maintenant
                    <form action="/contact">
                        <button className='btn' type="submit">me contacter</button>
                    </form></h1>
            </div>

        </>
    );
};

export default ContactBande;