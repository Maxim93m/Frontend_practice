import elemHTML from "../elemHTML.js";

class Header extends elemHTML {

    elem = document.createElement('header');
    
    constructor() {
        super();
    }
    setTemplate() {

        this.elem.insertAdjacentHTML("afterbegin", `<!-- header-logo  -->
<div class="container">
    <div class="header-logo">
        <div class="header-logo-form">
            <a href="#" class="header-logo__link_green">Shop<span class="header-logo__link_black">per</span></a>
            <button class="header-logo-form__menu_button">
                <hr class="black">
            </button>
            <div class="form-search">
                <input type="text" placeholder="Search Items" class="form-search__input"></input>
                <button class="form-search__btn"></button>
            </div>
        </div>

        <div class="header__btns">
            <button class="btns_rounded btns_rounded_cart">0 Items Added</button>
            <button class="btns_rounded btns_rounded_login">Login or Sign Up</button>
        </div>
    </div>
    <!-- header-navigation -->
    <nav class="header-navigation">
        <a class="link_primary" href="#featured">Features</a>
        <a class="link_primary" href="#products">Products</a>
        <a class="link_primary" href="#blog">Blog</a>
        <a class="link_primary" href="#about">About</a>
    </nav>
</div>`);
    }
    createHeader() {
        this.render();
    }
}


export default Header;