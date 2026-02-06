function createmobileMenu() {
    const mobile_menu = document.querySelector('.mobile-menu');
    const mobile_links_nav = document.querySelector('.mobile-menu__navigation');

    document.querySelector('.header-logo-form__menu_button')
        .addEventListener('click', (event) => {
            mobile_menu.classList.remove('hidden');
            mobile_menu.classList.add('visible');
        });


    mobile_menu.querySelector('.mobile-menu__close')
        .addEventListener('click', (event) => {
            mobile_menu.classList.add('hidden');
            mobile_menu.classList.remove('visible');
        });

    mobile_links_nav.querySelector('.link1')
        .addEventListener('click', (event) => {
            mobile_menu.classList.add('hidden');
            mobile_menu.classList.remove('visible');
        });

    mobile_links_nav.querySelector('.link2')
        .addEventListener('click', (event) => {
            mobile_menu.classList.add('hidden');
            mobile_menu.classList.remove('visible');
        });

    mobile_links_nav.querySelector('.link3')
        .addEventListener('click', (event) => {
            mobile_menu.classList.add('hidden');
            mobile_menu.classList.remove('visible');
        });

    mobile_links_nav.querySelector('.link4')
        .addEventListener('click', (event) => {
            mobile_menu.classList.add('hidden');
            mobile_menu.classList.remove('visible');
        });
    }

    export{
        createmobileMenu,
    }