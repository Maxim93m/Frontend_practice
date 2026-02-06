import elemHTML from "../../elemHTML.js";
import face_1 from "../../../img/face_1.svg";
import face_2 from "../../../img/face_2.svg";
import face_3 from "../../../img/face_3.svg";
import face_4 from "../../../img/face_4.svg";
import star from "../../../img/star.svg";
import earphone_main from "../../../img/earphone_main.svg";


class latestProducts extends elemHTML {

    //  mainT = document.querySelector('main');
     
    elem = document.createElement('main');
     //elem = document.querySelector('main').createElement('section');
    constructor() {
        super();
    }
    setTemplate() {

        this.elem.insertAdjacentHTML("afterbegin", `<!-- -------- section-latest-products --------- -->
       <section>
        <div class="container section-latest-products">
                <!-- section-latest-products-left -->
                <div class="section-latest-products-left">
                    <h1 class="title_primary__h1">Discover Our Latest Products</h1>
                    <p class="discription_primary__p discription__p_attr">Lorem ipsum is a placeholder text commonly
                        used to demonstrate the visual form
                        of a product
                    </p>
                    <button class="btns_rect btn_buy_indent">Buy Now</button>
                    <div class="products-rewiev">
                        <div class="products-rewiev__img">
                            <img src="${face_1}" class="user_1" alt="Пользователь 1">
                            <img src="${face_2}" class="user_2" alt="Пользователь 2">
                            <img src="${face_3}" class="user_3" alt="Пользователь 3">
                            <img src="${face_4}" class="user_4" alt="Пользователь 4">
                        </div>
                        <p class="products-rewiev__p products-rewiev__p_attr">15k Well Reviews</p>
                    </div>
                </div>
                <!-- section-latest-products-right -->
                <div class="section-latest-products-right">
                    <div class="playVideo">
                        <div class="playVideo__svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="81" height="79" viewBox="0 0 81 79"
                                fill="none">
                                <mask id="path-1-inside-1_16_430" fill="white">
                                    <path
                                        d="M59.611 78.7192C65.2658 75.4195 70.0709 70.8434 73.6427 65.3564C77.2145 59.8694 79.4541 53.6233 80.1826 47.1168C80.9111 40.6103 80.1084 34.0235 77.8386 27.8824C75.5687 21.7413 71.8946 16.2159 67.1096 11.7473C62.3245 7.27868 56.561 3.99061 50.2792 2.14558C43.9974 0.300556 37.3712 -0.0503284 30.9297 1.12094C24.4882 2.29221 18.4097 4.95319 13.1794 8.89146C7.94918 12.8297 3.71209 17.9362 0.806371 23.8032L1.79119 24.291C4.62088 18.5775 8.74711 13.6046 13.8405 9.76939C18.9339 5.93417 24.8533 3.34282 31.1263 2.2022C37.3993 1.06158 43.8521 1.40328 49.9695 3.20003C56.087 4.99678 61.6996 8.19881 66.3595 12.5505C71.0193 16.9022 74.5973 22.283 76.8077 28.2634C79.0182 34.2439 79.7999 40.6582 79.0904 46.9945C78.381 53.3307 76.2 59.4134 72.7217 64.7568C69.2434 70.1003 64.564 74.5566 59.0571 77.77L59.611 78.7192Z" />
                                </mask>
                                <path
                                    d="M59.611 78.7192C65.2658 75.4195 70.0709 70.8434 73.6427 65.3564C77.2145 59.8694 79.4541 53.6233 80.1826 47.1168C80.9111 40.6103 80.1084 34.0235 77.8386 27.8824C75.5687 21.7413 71.8946 16.2159 67.1096 11.7473C62.3245 7.27868 56.561 3.99061 50.2792 2.14558C43.9974 0.300556 37.3712 -0.0503284 30.9297 1.12094C24.4882 2.29221 18.4097 4.95319 13.1794 8.89146C7.94918 12.8297 3.71209 17.9362 0.806371 23.8032L1.79119 24.291C4.62088 18.5775 8.74711 13.6046 13.8405 9.76939C18.9339 5.93417 24.8533 3.34282 31.1263 2.2022C37.3993 1.06158 43.8521 1.40328 49.9695 3.20003C56.087 4.99678 61.6996 8.19881 66.3595 12.5505C71.0193 16.9022 74.5973 22.283 76.8077 28.2634C79.0182 34.2439 79.7999 40.6582 79.0904 46.9945C78.381 53.3307 76.2 59.4134 72.7217 64.7568C69.2434 70.1003 64.564 74.5566 59.0571 77.77L59.611 78.7192Z"
                                    stroke="url(#paint0_linear_16_430)" stroke-width="4"
                                    mask="url(#path-1-inside-1_16_430)" />
                                <defs>
                                    <linearGradient id="paint0_linear_16_430" x1="20.9434" y1="-1.55664" x2="28.4434"
                                        y2="89.4434" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#10B981" />
                                        <stop offset="1" stop-color="#10B981" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <p class="discription_primary__p discription_primary__p_color">Play Video</p>
                    </div>
                    <div class="main-beats">
                        <div class="star_up">
                            <img src="${star}" alt="Логотип звезды"></img>
                        </div>
                        <div class="read-beats">
                            <img src="${earphone_main}" alt="Логотип наушников">
                        </div>
                        <div class="star_down">
                            <img src="${star}" alt="Логотип звезды"></img>
                        </div>
                    </div>
                </div>
            </div>
            </section>`);
    }
//    async createHeader() {
        createLatestProducts() {
        //  const res = await getHeadPhones();
        //  console.log(res);
        this.render();
     }
     
}


export default latestProducts;