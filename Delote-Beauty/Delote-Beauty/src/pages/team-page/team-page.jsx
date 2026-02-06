import React from 'react';
import './team-page.css'
import dataTeam from './data-team';

function TeamPage() {
  let team = dataTeam.map((elem, index) => {
    return <div key={index} className='card-masters'>
      <div className='card-border-masters'></div>
      <ul className='masters-item'>
        <li className='fotoMaster'><img src={elem.img} alt={`${elem.name} фото`} /></li>
        <li className='nameMaster'>{elem.name}</li>
        <li className='specilizationMaster'>{elem.specialization}</li>
      </ul>
    </div>
  });

  return (
    <>
      <main>
        <h1 className='title'>Наши мастера</h1>
        <div className='mastersCards'>{team}</div>
      </main>
    </>
  );
}

export default TeamPage;