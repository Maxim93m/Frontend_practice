import elemHTML from "../elemHTML.js";
import facebook from "../../img/facebook_icon.svg"
import twitter from "../../img/twitter_icon.svg"
import instagram from "../../img/instagram_icon.svg"

class Footer extends elemHTML {

    elem = document.createElement('footer');

    constructor() {
        super();
    }
    setTemplate() {

        this.elem.insertAdjacentHTML("afterbegin", `<div class="container footer-block" id="about">
            <section class="start">
                <p class="start_p">Ready to get started?</p>
                <button class="btns_rect_other">Get started</button>
            </section>
            <section class="center">
                <div class="center-left">
                    <p class="center-left__email-descr">Subscribe to our Website</p>
                    <div class="center-left__email-form">
                        <input type="text" placeholder="Email address" class="center-left__email-form__input"></input>
                        <button class="center-left__email-form__button"></button>
                    </div>
                </div>
                <div class="center-right">
                    <ul class="center-right_ul">
                        <li class="center-right_ul-title">Services</li>
                        <li><a href="#" class="center-right_ul_a">Email Marketing</a></li>
                        <li><a href="#" class="center-right_ul_a">Campaigns</a></li>
                        <li><a href="#" class="center-right_ul_a">Branding</a></li>
                        <li><a href="#" class="center-right_ul_a">Offline</a></li>
                    </ul>
                    <ul class="center-right_ul">
                        <li class="center-right_ul-title">About</li>
                        <li><a href="#" class="center-right_ul_a">Our Story</a></li>
                        <li><a href="#" class="center-right_ul_a">Benefits</a></li>
                        <li><a href="#" class="center-right_ul_a">Team</a></li>
                        <li><a href="#" class="center-right_ul_a">Careers</a></li>
                    </ul>
                    <ul class="center-right_ul">
                        <li class="center-right_ul-title">Help</li>
                        <li><a href="#" class="center-right_ul_a">FAQs</a></li>
                        <li><a href="#" class="center-right_ul_a">Contact Us</a></li>
                    </ul>
                </div>
            </section>
            <section class="end">
                <div class="end-left">
                    <ul class="end-left_ul">
                        <li><a href="#" class="end-left_ul_a">Terms & Conditions</a></li>
                        <li><a href="#" class="end-left_ul_a">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="end-right">
                    <ul class="end-right_ul">
                        <li><a href="#"><img src="${facebook}" alt="Иконка facebook"></a></li>
                        <li><a href="#"><img src="${twitter}" alt="Иконка twitter"></a></li>
                        <li><a href="#"><img src="${instagram}" alt="Иконка instagram"></a></li>
                    </ul>
                </div>
            </section>
        </div>`);
    }
    createFooter() {
        this.render();
    }
}


export default Footer;