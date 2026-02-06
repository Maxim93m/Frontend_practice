import './services-section.css'
import React from 'react';
import ServicesList from './services-list/services-list';
import BrendList from './brends-list/brend-list';

function ServicesSection() {

    return (
        <>
            <section className='services'>
                <div className='services-descr'>
                    <img src='/img/icons/quote_icon.svg' alt="quote_icon" />
                    <div className='descr'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque accumsan risus ac ipsum ut. Sit elit, facilisi proin non malesuada sociis tristique. Viverra augue lorem ut quisque quam tortor, malesuada iaculis.</p>
                        <p>Et elementum at nulla venenatis, faucibus integer. Auctor neque eros, viverra rutrum. Fames ultrices condimentum tortor nec penatibus. Velit imperdiet sapien fringilla vestibulum sit fames.</p>
                    </div>
                </div>
                <ServicesList />
                <BrendList />
            </section>
        </>
    );
}

export default ServicesSection;