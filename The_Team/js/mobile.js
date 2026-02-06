const mobile_menu = document.querySelector(".mobile-menu");
const close_btn = mobile_menu.querySelector(".mobile-menu__logo_close");
const nav_btn = document.querySelector(".header-navigation__button");
const the_problem = document.querySelector(".the-problem");
const pied_piper_coin = document.querySelector(".pied-piper-coin");
const the_team = document.querySelector(".the-team");



// Кнопка закрыть Х
close_btn.addEventListener('click', (event)=>{
    mobile_menu.classList.add("hidden");
    mobile_menu.classList.remove("visible");
});

// Кнопка навигации
nav_btn.addEventListener('click', (event)=>{
    mobile_menu.classList.remove("hidden");
    mobile_menu.classList.add("visible");
});

// The problem
the_problem.addEventListener('click', (event)=>{
    mobile_menu.classList.add("hidden");
    mobile_menu.classList.remove("visible");
});

// PiedPiperCoin
pied_piper_coin.addEventListener('click', (event)=>{
    mobile_menu.classList.add("hidden");
    mobile_menu.classList.remove("visible");
});

// The team
the_team.addEventListener('click', (event)=>{
    mobile_menu.classList.add("hidden");
    mobile_menu.classList.remove("visible");
});

