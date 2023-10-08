import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/pages/Home.js';
import Therapies from './Components/pages/Therapies.js';
import AccompagnementPsychologique from './Components/pages/Accompagnement-psychologique';
import AccompagnementPerPro from './Components/pages/Accompagnement-per-pro';
import EMDR from './Components/pages/EMDR';
import QuiSuisJe from './Components/pages/QuiSuisJe.js';
import AccompagnementEnergetique from './Components/pages/AccompagnementEnergetique';
import Danse from './Components/pages/Danse';
import Contact from './Components/pages/Contact';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/*           <Route path='*' element={<PageErreur />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/therapies' element={<Therapies />} />
          <Route path='/therapie/accompagnement-psychologique' element={<AccompagnementPsychologique />} />
          <Route path='/therapie/accompagnement-personnel-professionnel' element={<AccompagnementPerPro />} />
          <Route path='/therapie/emdr' element={<EMDR />} />
          <Route path='/therapie/accompagnement-energetique' element={<AccompagnementEnergetique />} />
          <Route path='/therapie/danse-therapie' element={<Danse />} />
          <Route path='/qui-suis-je' element={<QuiSuisJe />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
