import elemHTML from "../elemHTML.js";

class MobileDisplay extends elemHTML {

    elem = document.createElement('div');

    constructor() {
        super();
    }
    setTemplate() {

        this.elem.insertAdjacentHTML("afterbegin", `<section class="mobile-menu">
        <button class="mobile-menu__close">
            x
        </button>
        <div class="mobile-menu__form-search">
            <input type="text" placeholder="Search Items" class="form-search__input"></input>
            <button class="form-search__btn"></button>
        </div>
        <!-- mobile-menu__navigation -->
        <nav class="mobile-menu__navigation">
            <a class="link_primary link1" href="#featured">Features</a>
            <a class="link_primary link2" href="#products">Products</a>
            <a class="link_primary link3" href="#blog">Blog</a>
            <a class="link_primary link4" href="#about">About</a>
        </nav>
        </section>`);
    }
    createMobileMenu() {
        this.render();
    }
}


export default MobileDisplay;