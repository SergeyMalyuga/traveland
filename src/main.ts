import './style.scss';
import {Main} from "./pages/main/Main.ts";
import {Header} from "./components/header/Header.ts";

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app') as HTMLElement;
    const header = new Header();
    const mainPage = new Main(app, {header});
    mainPage.render();
})