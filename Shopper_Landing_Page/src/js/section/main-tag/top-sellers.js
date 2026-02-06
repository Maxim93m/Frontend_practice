import elemHTML from "../../elemHTML.js";
import earphone_4 from "../../../img/earphone_4.svg";
import earphone_5 from "../../../img/earphone_5.svg";
import earphone_6 from "../../../img/earphone_6.svg";
import raiting from "../../../img/raiting.svg";
import arrow_right from "../../../img/Arrows_right.svg"
import getHeadPhones from "../../service/get-phones.js";



class topSellers extends elemHTML {
    elem = document.querySelector('main');
    constructor() {
        super();
    }
    setTemplate() {
        this.elem.insertAdjacentHTML("beforeend", `        <!-- Top Sellers -->
        <section>
            <div class="container section-top-sellers" id="products">
                <h3 class="title_primary__h3  section-top-sellers__h3">Top Sellers</h3>
                <div class="section-top-sellers__btns">
                    <button class="circ_btn active">Top Picks</button>
                    <button class="circ_btn">Watches</button>
                </div>

                <div class="products">
                    <div class="products-container">
                        <div class="products-main">
                            <div class="products-main-block">
                                <div class="products-main-block-foto">
                                    <div class="products-main-block-foto-discount">Save 60 %</div>
                                    <img src="${earphone_4}" alt="Логотип наушников">
                                </div>
                                <div class="products-main-block__descr">
                                    <p class="discription_primary__p products-main-block__descr__p_color">Boat Rockerz
                                        333
                                    </p>
                                    <div class="products-main-block__descr__raiting">
                                        <div class="products-main-block__descr__raiting_star">
                                            <img src="${raiting}" alt="Рейтинг">
                                            <img src="${raiting}" alt="Рейтинг">
                                            <img src="${raiting}" alt="Рейтинг">
                                            <img src="${raiting}" alt="Рейтинг">
                                            <img src="${raiting}" alt="Рейтинг">
                                        </div>
                                        <p class="raiting-descr">75 Reviews</p>
                                    </div>
                                    <p class="price-product-descr">$20</p>
                                </div>
                            </div>
                            <button class="btns_rect products-main__btn">Add to cart</button>
                        </div>
                        <div class="products-main">
                            <div class="products-main-block section-top-sellers_product-2__color">
                                <div class="products-main-block-foto">
                                    <img src="${earphone_5}" alt="Логотип наушников">
                                </div>
                                <div class="products-main-block__descr">
                                    <p class="discription_primary__p products-main-block__descr__p_color">Boat kerz 234
                                    </p>
                                    <div class="products-main-block__descr__raiting">
                                        <div class="products-main-block__descr__raiting_star">
                                            <img src="${raiting}" alt="Рейтинг">
                                            <img src="${raiting}" alt="Рейтинг">
                                            <img src="${raiting}" alt="Рейтинг">
                                            <img src="${raiting}" alt="Рейтинг">
                                            <img src="${raiting}" alt="Рейтинг">
                                        </div>
                                        <p class="raiting-descr">75 Reviews</p>
                                    </div>
                                    <p class="price-product-descr">$40</p>
                                </div>
                            </div>
                            <button class="btns_rect products-main__btn">Add to cart</button>
                        </div>
                        <div class="products-main">
                            <div class="products-main-block section-top-sellers_product-3__color">
                                <div class="products-main-block-foto">
                                    <div
                                        class="products-main-block-foto-discount section-top-sellers_product-3__discount_color">
                                        Save 40
                                        %</div>
                                    <img src="${earphone_6}" alt="Логотип наушников">
                                </div>
                                <div class="products-main-block__descr">
                                    <p class="discription_primary__p products-main-block__descr__p_color">Boat Rockerz
                                        323
                                    </p>
                                    <div class="products-main-block__descr__raiting">
                                        <div class="products-main-block__descr__raiting_star">
                                            <img src="${raiting}" alt="Рейтинг">
                                            <img src="${raiting}" alt="Рейтинг">
                                            <img src="${raiting}" alt="Рейтинг">
                                            <img src="${raiting}" alt="Рейтинг">
                                            <img src="${raiting}" alt="Рейтинг">
                                        </div>
                                        <p class="raiting-descr">75 Reviews</p>
                                    </div>
                                    <p class="price-product-descr">$30</p>
                                </div>
                            </div>
                            <button class="btns_rect products-main__btn">Add to cart</button>
                        </div>
                    </div>
                    <button class="arrow_btn"><img src="${arrow_right}"
                            alt="Кнопка стрелки вправо"></button>
                </div>
            </div>
        </section>`);
    }
   // async createTopSellers() {
    createTopSellers() {
       // const res = await getHeadPhones();
       const res = getHeadPhones();
        console.log(res);
        this.render();
    }
}

export default topSellers;