import getProduct from './get-cards.js';

// const products_containerS = document.querySelector('.section-top-sellers').querySelector('.products-container');
// const products_containerT = document.querySelector('.section-trending-earphones').querySelector('.products-container');

// const top_sellers_btn = document.querySelector('.section-top-sellers').querySelector('.section-top-sellers__btns');
// const trending_earphones_btn = document.querySelector('.section-trending-earphones').querySelector('.section-top-sellers__btns');








export default function tabs(tabNames, dataCards, tabContainerElement){
    if(!tabContainerElement){
        return;
    }
    
    const products_containerS = document.querySelector(`${tabContainerElement}`).querySelector('.products-container');
    const _btn = document.querySelector(`${tabContainerElement}`).querySelector('.section-top-sellers__btns');
    
    _btn.addEventListener('click', (event) => {
         const circBtns = _btn.querySelectorAll('button');
         console.log(circBtns);
        const target = event.target;
        circBtns.forEach(btn => {
            btn.classList.remove('active');
    
        });
        target.classList.add('active');
        tabNames.forEach((tab, index) =>{
            if(tab==target.innerText){
               getProduct(dataCards[index], products_containerS); 
            }
            
        })
    });
    
    // trending_earphones_btn.addEventListener('click', (event) => {
    //     const circBtns = trending_earphones_btn.querySelectorAll('button');
    //     const target = event.target;
    
    //     circBtns.forEach(btn => {
    //         btn.classList.remove('active');
    //     });
    //     target.classList.add('active');
    //     getProduct(productsInfoListWatches, products_containerT);
    // });
    

}