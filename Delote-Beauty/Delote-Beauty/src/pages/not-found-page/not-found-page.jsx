import React from 'react';
import './not-found-page.css'
import { Link } from 'react-router-dom';


function NotFoundPage() {


  return (
    <>
      <main className='main'>
        <section className='not-found'>
          <div className='title-block'>
            <h1 className='not-title'>404</h1>
            <p className='not-title-descr'>cтраница не найдена</p>
          </div>
          <div className='descr-block'>
            <p className='not-descr'>страница, на которую вы пытаетесь попасть, не существует или была удалена</p>
            <p className='not-descr'>Перейдите на <Link to="/" className='link'>Главную страницу</Link></p>
          </div>
        </section>
      </main>
    </>
  );
}

export default NotFoundPage;