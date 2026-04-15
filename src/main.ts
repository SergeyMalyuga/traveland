import './style.scss';
import {Main} from "./pages/main/Main.ts";
import {Header} from "./components/header/Header.ts";
import {Hero} from "./components/hero/Hero.ts";
import {ToggleNavMenu} from "./modules/ToggleNavMenu.ts";
import headerStyles from './components/header/Header.module.scss'
import {Popular} from "./components/popular/Popular.ts";
import {BodyService} from "./services/BodyService.ts";
import {ScreenService} from "./services/ScreenService.ts";

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app') as HTMLElement;
    const bodyService = new BodyService();
    const header = new Header();
    const hero = new Hero();
    const popular = new Popular();
    const mainPage = new Main(app, {header, hero, popular});
    mainPage.render();

    const burger = document.querySelector(`.${headerStyles.burger}`) as HTMLElement;
    const headerNavMenu = document.querySelector(`.${headerStyles.wrapperHeader}`) as HTMLElement;
    const toggleNavMenu = new ToggleNavMenu(headerNavMenu, {
        toggleBtn: burger,
        openClass: headerStyles.navOpen,
        btnCloseClass: headerStyles.burgerOpen,
        bodyService
    });

    const screenService = new ScreenService(bodyService, toggleNavMenu);


    window.addEventListener('beforeunload', () => {
        toggleNavMenu.destroy();
        screenService.destroy();
    });
})