import React from 'react';
import './contacts-page.css'

function Contacts() {

  return (
    <>
      <main>
        <h1 className='contacts-header'>Контакты</h1>
        <div className='contacts-map'>
          <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238529.19827432986!2d30.178584725645553!3d59.9346638385721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LM!5e1!3m2!1sru!2sru!4v1714740811928!5m2!1sru!2sru" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          {/* <img src={'/img/map.png'} alt='Расположение'></img> */}
        </div>
      </main>
    </>
  );
}

export default Contacts;