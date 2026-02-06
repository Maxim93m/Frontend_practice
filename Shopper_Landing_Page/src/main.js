import './scss/style.scss';
import { createmobileMenu } from './js/mobile-menu.js';
import MobileDisplay from './js/section/mobile-menu-section.js';
import { productsInfoListPick, productsInfoListWatches } from './js/data/data-tabs.js';
import createWelcomePopup from './js/welcome-popup.js'
import Header from './js/section/header.js';
import tabs from './js/tabs.js';
import LatestProducts from './js/section/main-tag/latest-products.js';
import FeaturedProducts from './js/section/main-tag/featured-products.js'
import TopSellers from './js/section/main-tag/top-sellers.js'
import TrendingEarphones from './js/section/main-tag/trending-earphones.js'
import NewLaunches from './js/section/main-tag/new-launches.js'
import Footer from './js/section/footer.js';




const header = new Header();
const footer = new Footer();
const mobileMenu = new MobileDisplay();

new Promise((res) => {
    header.setTemplate();
    header.createHeader();
    res()
}).then(() => {
    const latestProducts = new LatestProducts();
    latestProducts.setTemplate();
    latestProducts.createLatestProducts();
}).then(() => {
    const featuredProducts = new FeaturedProducts();
    featuredProducts.setTemplate();
    featuredProducts.createFeaturedProducts();
}).then(async () => {
    const topSellers = new TopSellers();
    topSellers.setTemplate();
    await topSellers.createTopSellers();
    const tabNamesS = ['Top Picks', 'Watches'];
    tabs(tabNamesS, [productsInfoListPick, productsInfoListWatches], '.section-top-sellers');
}).then(async () => {
    const trendingEarphones = new TrendingEarphones();
    trendingEarphones.setTemplate();
    await trendingEarphones.createTrendingEarphones();
    const tabNamesT = ['Earbuds', 'Wireless', 'Wired'];
    tabs(tabNamesT, [productsInfoListPick, productsInfoListWatches, productsInfoListPick], '.section-trending-earphones');
}).then(() => {
    const newLaunches = new NewLaunches();
    newLaunches.setTemplate();
    newLaunches.createNewLaunches();
}).then(() => {
    footer.setTemplate();
    footer.createFooter();
}).then(() => {
    mobileMenu.setTemplate();
    mobileMenu.createMobileMenu();
    createmobileMenu();
}).then(() => {
    createWelcomePopup();
})