import {Main} from "./pages/main/Main.ts";

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app') as HTMLElement;
    const mainPage = new Main(app);
    mainPage.render();
})