import './brend-list.css'
import React from 'react';
import data from './data-brends'

function BrendList() {

    let brends = data.map((elem, index) => {
        return <img key = {index} src={elem.img} alt={elem.descr}></img>
    });

    return (
        <>
            <div className='brends'>{brends}</div>
        </>
    );
}

export default BrendList;