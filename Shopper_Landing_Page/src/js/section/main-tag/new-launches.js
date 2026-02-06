import elemHTML from "../../elemHTML.js";
import btn_left_arrow from "../../../img/btn_ left_arrow.svg"
import btn_right_arrow from "../../../img/btn_ right_arrow.svg"
import earphone_11 from "../../../img/earphone_11.svg";
import earphone_10 from "../../../img/earphone_10.svg";
import AddToCart from "../../service/add-to-cart.js";
import getCart from "../../service/get-cart.js";

class newLaunches extends elemHTML {
    elem = document.querySelector('main');
    constructor() {
        super();
    }
    setTemplate() {
        this.elem.insertAdjacentHTML("beforeend", `<!-- New Launches -->
        <section>
            <div class="container" id="blog">
                <h3 class="title_primary__h3 title-new-launches__attr_h3">New Launches</h3>
                <div class="section-new-launches">
                    <!-- -------- section-new-launches-left --------- -->
                    <div class="section-new-launches-left">
                        <button class="arrow_btn_circ"><img src="${btn_left_arrow}" alt="Стрелка"></button>
                        <div class="section-new-launches-left__earhpones">
                            <img class="section-new-launches-left__earhpones_img" src="${earphone_10}"
                                alt="Наушники">
                            <img class="section-new-launches-left__earhpones_img section-new-launches-left__earhpones_img_top"
                                src="${earphone_11}" alt="Наушники">
                        </div>
                    </div>
                    <!-- -------- section-new-launches-right --------- -->
                    <div class="section-new-launches-right">
                        <div class="section-new-launches-right-list">
                            <h3 class="title_primary__h3 section-new-launches-right-list__attr_h3">Airdrop 500 Anc</h3>
                            <p class="discription_primary__p section-new-launches-right-list-descr__attr_p">Lorem ipsum
                                is a
                                placeholder text
                                commonly
                                used to demonstrate the visual form of a product ... Read More</p>
                            <p class="price__p  section-new-launches-right-list-price__attr_p">Price:<span
                                    class="price__span">&nbsp $45.99</span></p>
                            <div class="section-new-launches-right-list__circ">
                                <button class="circ_btn_switch_color circ_btn_switch_color_1"></button>
                                <button class="circ_btn_switch_color circ_btn_switch_color_2"></button>
                                <button class="circ_btn_switch_color circ_btn_switch_color_3"></button>
                            </div>
                            <div class="section-new-launches-right-list__control">
                                <button class="btns_rect section-new-launches-right-list__control_attr">Add to
                                    cart</button>
                                <a href="#" class="link_primary">Explore More</a>
                            </div>
                        </div>
                        <button class="arrow_btn_circ"><img src="${btn_right_arrow}"
                                alt="Стрелка"></button>
                    </div>
                </div>
            </div>
        </section>
`);
    }
    createNewLaunches() {
        this.render();
        const buyBtn = document.querySelector(".section-new-launches").querySelector(".btns_rect");
        buyBtn.addEventListener('click', () => {
            console.log("add to cart");
            AddToCart();
           // getCart();
        });
    }

}


export default newLaunches;