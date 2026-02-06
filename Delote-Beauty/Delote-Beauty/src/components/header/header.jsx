import './header.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Header() {



  return (
    <>
      <header className='header'>
        <nav className='navigation'>
          <Link to="/not-found">
            <img src='/img/icons/instagram-icon.svg' alt="instagram_icon" />
          </Link>
          <Link to="/" className='link'>Главная</Link>
          <Link to="/team" className='link'>Мастера</Link>
          <Link to='/not-found' className='link'>Косметика</Link>
          <Link to="/">
            <img src='/img/icons/omega-icon.svg' alt="omega_icon" />
          </Link>
          <Link to="/price" className='link'>Акции</Link>
          <Link to="/not-found" className='link'>Отзывы</Link>
          <Link to="/contacts" className='link'>Контакты</Link>
          <Link to="/not-found">
            <img src='/img/icons/burger-icon.svg' alt="burger_icon" />
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
