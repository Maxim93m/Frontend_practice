import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage, TeamPage, PricePage, Contacts, NotFoundPage } from '../../pages';
import { Layout } from '../layout/layout';
import WelcomePopup from '../../components/welcome-popup/welcome-popup';

function App() {

  return (
    <>
      <div className='container'>
      
        <Router>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path='/' element={<Layout />} >
              <Route path='team' element={<TeamPage />} />
              <Route path='price' element={<PricePage />} />
              <Route path='contacts' element={<Contacts />} />
              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Router>
      </div>
      <WelcomePopup />

    </>
  );
}

export default App;
