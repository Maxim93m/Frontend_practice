import './works-section.css'
import React from 'react';
import data from './data-works';


function WorksSection() {
    let cardWorks = data.map((elem, index) => {
        return <img key={index} src={elem.img} alt={elem.descr} />
    });

    return (
        <>
            <section className='works'>
                <h2 className='works-title'>Наши работы</h2>
                <ul className='works-nav'>
                    <li><a href='#' className='works-nav-links'>Показать все</a></li>
                    <li><a href="#" className='works-nav-links'>Парикмахерские услуги</a></li>
                    <li><a href="#" className='works-nav-links'>Маникюр</a></li>
                    <li><a href="#" className='works-nav-links'>Педикюр</a></li>
                </ul>
                <div className='cardsFoto'>{cardWorks}</div>
            </section>
        </>
    );
}

export default WorksSection;