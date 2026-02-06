import React from 'react';
import './main-page.css'
import Header from '../../components/header/header'
import ServicesSection from './services-section/services-section';
import WorksSection from './works-section/works-section';
import Footer from '../../components/footer/footer'


function MainPage() {


  return (
    <>
      <div className='header-img'>
        <Header />
        <h1 className='header-title'>Салон красоты «Delote-Beauty» на Крестовском</h1>
        <a href='#' className='scroll-down-group'>
          <img src="/img/icons/mouse_icon.svg" alt="mouse_icon" />
          <p className='scroll-down-group__img-descr'>Прокрутите вниз</p>
        </a>
      </div>
      <main className='main'>
        <ServicesSection />
        <WorksSection />
      </main>
      <Footer />
    </>
  );
}

export default MainPage;