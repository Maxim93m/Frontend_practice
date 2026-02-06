import elemHTML from "../../elemHTML.js";
import earphone_1 from "../../../img/earphone_1.svg";
import earphone_2 from "../../../img/earphone_2.svg";
import earphone_3 from "../../../img/earphone_3.svg";



class featuredProducts extends elemHTML {
    elem = document.querySelector('main');
    constructor() {
        super();
    }
    setTemplate() {
        this.elem.insertAdjacentHTML("beforeend", `<!-- -------- section-featured-products --------- -->
        <section>
            <div class="container section-featured-products" id="featured">
                <!-- -------- section-featured-products-left --------- -->
                <div class="section-featured-products-left">
                    <h2 class="title_primary__h2">Apple wireless Airpod</h2>
                    <div class="section-featured-products__img">
                        <img src="${earphone_1}" alt="Наушники 1">
                        <img src="${earphone_2}" class="featured-products__img_center" alt="Наушники 2">
                        <img src="${earphone_3}" alt="Наушники 3">
                    </div>
                    <p class="price__p price__p_indent">Price:<span class="price__span">&nbsp $45.99</span></p>
                </div>

                <!-- section-featured-products-right -->
                <div class="section-featured-products-right">
                    <h3 class="title_primary__h3 title_primary__h3_indent">Our Featured Products</h3>
                    <p class="discription_primary__p discription__p_indent">Lorem ipsum is a placeholder text commonly
                        used to demonstrate the visual form of a product</p>
                    <div class="section-featured-products__control">
                        <button class="btns_rect">Add to cart</button>
                        <a href="#" class="link_primary">View more</a>
                    </div>
                </div>

            </div>
        </section>
`);
    }
    //    async createHeader() {
    createFeaturedProducts() {
        //  const res = await getHeadPhones();
        //  console.log(res);
        this.render();
    }

}


export default featuredProducts;