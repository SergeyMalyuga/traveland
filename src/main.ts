import './style.scss';
import {Main} from "./pages/main/Main.ts";
import {Header} from "./components/header/Header.ts";
import {Hero} from "./components/hero/Hero.ts";

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app') as HTMLElement;
    const header = new Header();
    const hero = new Hero();
    const mainPage = new Main(app, {header, hero});
    mainPage.render();
})