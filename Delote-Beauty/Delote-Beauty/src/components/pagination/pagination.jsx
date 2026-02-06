import React from 'react';
import './pagination.css';

function Pagination({ pricePage, total, paginate }) {
    
    const pageNumber = [];
    const all = Math.ceil(total / pricePage);

    for (let i = 1; i <= all; i++) {
        pageNumber.push(i);
    }
    return (
        <>
        <div>
            <ul className='page-pagination'>
                {
                    pageNumber.map(elem =>{
                     return   <li className='page-item' key={elem}>
                            <button className='page-btn' onClick={()=>paginate(elem)}>{elem}</button>
                        </li>
                    })
                }
            </ul>
        </div>
        </>
    )
}

export default Pagination;