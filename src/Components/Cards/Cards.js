import React from 'react';
import './Cards.css';

function Cards() {
    return (
        <div className='cards reveal'>
            <div className='cards__container reveal-2'>
                <div className='cards__wrapper'>
                    <h1>LES THERAPIES QUE JE VOUS PROPOSE</h1>
                    <ul className='cards__items reveal-3'>
                        <li className='cards__item cards__item__img2 cards__item__img2--hover reveal-4'>
                            <a className="cards__item__link " href='/therapie/accompagnement-psychologique'>
                                <figure className="cards__item__pic-wrap" data-category='Accompagnement psychologique'>
                                    <img src='/images/preljocaj-(4).jpeg' alt="Travel image" className="cards__item__img" />
                                </figure>
                                <div className="cards__item__info">
                                    <h5 className="cards__item__text">Accompagnement psychologique</h5>
                                </div>
                            </a>
                        </li>
                        <li className='cards__item cards__item__img2 cards__item__img2--hover reveal-5'>
                            <a className="cards__item__link" href='/therapie/emdr'>
                                <figure className="cards__item__pic-wrap" data-category='EMDR'>
                                    <img src='/images/preljocaj-(1).jpeg' alt="Travel image" className="cards__item__img" />
                                </figure>
                                <div className="cards__item__info">
                                    <h5 className="cards__item__text">EMDR</h5>
                                </div>
                            </a>
                        </li>
                        <li className='cards__item cards__item__img2 cards__item__img2--hover reveal-6'>
                            <a className="cards__item__link" href='/therapie/accompagnement-personnel-professionnel'>
                                <figure className="cards__item__pic-wrap" data-category='Accompagnement personnel et professionnel'>
                                    <img src='/images/preljocaj-(2).jpeg' alt="Travel image" className="cards__item__img" />
                                </figure>
                                <div className="cards__item__info">
                                    <h5 className="cards__item__text">Accompagnement personnel et professionnel</h5>
                                </div>
                            </a>
                        </li>
                        <li className='cards__item cards__item__img2 cards__item__img2--hover reveal-7'>
                            <a className="cards__item__link" href='/therapie/accompagnement-energetique'>
                                <figure className="cards__item__pic-wrap" data-category='Accompagnement énergétique'>
                                    <img src='/images/preljocaj-(3).jpeg' alt="Travel image" className="cards__item__img" />
                                </figure>
                                <div className="cards__item__info">
                                    <h5 className="cards__item__text">Accompagnement énergétique</h5>
                                </div>
                            </a>
                        </li>
                        <li className='cards__item cards__item__img2 cards__item__img2--hover reveal-4'>
                            <a className="cards__item__link" href='/therapie/danse-therapie'>
                                <figure className="cards__item__pic-wrap" data-category='Danse thérapie'>
                                    <img src='/images/preljocaj-(4).jpeg' alt="Travel image" className="cards__item__img" />
                                </figure>
                                <div className="cards__item__info">
                                    <h5 className="cards__item__text">Danse thérapie</h5>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
